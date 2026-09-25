"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "cloudflare-smarteprintservices-ok-turnstile-script";

/**
 * Turnstile security widget shared by the public forms.
 * Calls onToken(token) when verification succeeds.
 * Calls onToken("") when expired or errored.
 */
export default function Turnstile({ onToken }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);

  onTokenRef.current = onToken;

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
        appearance: "always",
        execution: "render",

        callback: (token) => {
          onTokenRef.current(token);
        },

        "expired-callback": () => {
          onTokenRef.current("");
          // Auto-reset so a fresh token can be obtained on next submit attempt
          if (widgetIdRef.current !== null && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
          }
        },

        "error-callback": () => {
          onTokenRef.current("");
        },
      });
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
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "8px 0",
      }}
    />
  );
}