"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "cloudflare-smarteprintservices-ok-turnstile-script";

/**
 * Turnstile security widget shared by the public forms.
 * Calls onToken(token) when verification succeeds.
 * Calls onToken("") when expired or errored.
 */
export default function Turnstile({ onToken, onReady }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  const onReadyRef = useRef(onReady);
  const pendingResolveRef = useRef(null);

  onTokenRef.current = onToken;
  onReadyRef.current = onReady;

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (!siteKey || !containerRef.current) {
      return;
    }

    const render = () => {
      if (
        !window.turnstile ||
        !containerRef.current ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        size: "invisible",
        execution: "execute",

        callback: (token) => {
          onTokenRef.current(token);
          pendingResolveRef.current?.(token);
          pendingResolveRef.current = null;
        },

        "expired-callback": () => {
          onTokenRef.current("");
          // Auto-reset so a fresh token can be obtained on next submit attempt
          if (widgetIdRef.current !== null && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
          }
          pendingResolveRef.current?.("");
          pendingResolveRef.current = null;
        },

        "error-callback": () => {
          onTokenRef.current("");
          pendingResolveRef.current?.("");
          pendingResolveRef.current = null;
        },
      });

      onReadyRef.current?.(() => new Promise((resolve) => {
        pendingResolveRef.current = resolve;
        window.turnstile.execute(widgetIdRef.current);
      }));
    };

    const existingScript = document.getElementById(SCRIPT_ID);

    if (existingScript) {
      if (window.turnstile) {
        render();
      } else {
        existingScript.addEventListener("load", render);
      }
    } else {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = render;
      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      pendingResolveRef.current?.("");
      pendingResolveRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    />
  );
}