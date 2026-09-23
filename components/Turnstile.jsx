"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "cloudflare-smarteprintservices-ok-turnstile-script";

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

      widgetIdRef.current = window.turnstile.render(
        containerRef.current,
        {
          sitekey: siteKey,
          size: "normal",
          appearance: "execute",
          execution: "execute",

          callback: (token) => {
            onTokenRef.current(token);
          },

          "expired-callback": () => {
            onTokenRef.current("");
          },

          "error-callback": () => {
            onTokenRef.current("");
          },
        }
      );
      window.turnstile.execute(widgetIdRef.current);
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
      if (
        widgetIdRef.current !== null &&
        window.turnstile
      ) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}