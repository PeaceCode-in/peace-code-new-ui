"use client";

/**
 * Global Error Boundary — Root Layout Level (with Deep Reset / Panic Switch)
 *
 * LAST line of defense. Catches errors in layout.tsx itself.
 * Must provide its own <html>/<body> since the layout may have failed.
 *
 * FEATURES:
 * - "Try again" button for soft recovery
 * - "Clear Site Data and Reload" panic button that wipes localStorage,
 *   sessionStorage, and non-essential cookies to fix persistent state
 *   corruption bugs, then forces a full page reload.
 * - No raw error messages ever shown to users.
 */

import { useEffect, useCallback, useState } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    console.error("[PeaceCode Global Error Boundary]", error);
  }, [error]);

  /**
   * Deep Reset / Panic Switch
   *
   * Wipes all client-side persistent storage to fix state corruption:
   * 1. localStorage — all keys
   * 2. sessionStorage — all keys
   * 3. Non-essential cookies — everything except cookies with the
   *    HttpOnly flag (which JS can't access anyway) and cookies
   *    that are essential for authentication (configurable below).
   * 4. Forces a hard page reload.
   */
  const handleDeepReset = useCallback(() => {
    setClearing(true);

    try {
      // 1. Clear localStorage
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.clear();
      }

      // 2. Clear sessionStorage
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.clear();
      }

      // 3. Clear non-essential cookies
      // List cookies to PRESERVE (e.g., auth tokens managed by your backend).
      // HttpOnly cookies are invisible to JS and are unaffected.
      const PRESERVED_COOKIES: string[] = [
        // Add cookie names to keep here, e.g.:
        // "__session",
        // "__Host-next-auth.csrf-token",
      ];

      if (typeof document !== "undefined") {
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
          const name = cookie.split("=")[0].trim();
          if (name && !PRESERVED_COOKIES.includes(name)) {
            // Delete by setting expiry to the past, for all common paths
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
          }
        }
      }

      // 4. Clear Cache API storage (service worker caches)
      if (typeof caches !== "undefined") {
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }
    } catch (e) {
      // If clearing itself fails, just proceed with the reload anyway.
      console.error("[PeaceCode] Deep reset encountered an error:", e);
    }

    // 5. Hard reload after a brief visual delay
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  }, []);

  // ── Shared styles ─────────────────────────────────────────────
  const btnPrimary: React.CSSProperties = {
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    border: "none",
    background: "#1C1917",
    color: "#fff",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    letterSpacing: "0.02em",
  };

  const btnSecondary: React.CSSProperties = {
    padding: "0.75rem 1.75rem",
    borderRadius: "9999px",
    border: "1px solid rgba(28,25,23,0.15)",
    background: "rgba(255,255,255,0.5)",
    color: "#1C1917",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    textDecoration: "none",
    letterSpacing: "0.02em",
  };

  const btnDanger: React.CSSProperties = {
    padding: "0.65rem 1.5rem",
    borderRadius: "9999px",
    border: "1px solid rgba(220,38,38,0.2)",
    background: "rgba(254,226,226,0.5)",
    color: "#991B1B",
    fontSize: "0.8rem",
    fontWeight: 500,
    cursor: clearing ? "wait" : "pointer",
    fontFamily: "inherit",
    letterSpacing: "0.02em",
    opacity: clearing ? 0.6 : 1,
    transition: "all 0.3s",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PeaceCode — Something went wrong</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=DM+Serif+Display&display=swap');
              *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
            `,
          }}
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #f7f3ea, #faf9f1)",
          fontFamily:
            '"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
          padding: "1.5rem",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div
          style={{
            maxWidth: "30rem",
            width: "100%",
            textAlign: "center",
            padding: "3rem 2rem",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "2rem",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Cloud icon */}
          <div
            style={{
              width: "5rem",
              height: "5rem",
              margin: "0 auto 1.5rem",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #D9E4EF 0%, #F2E4EA 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#57534E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
          </div>

          <h1
            style={{
              fontFamily:
                '"DM Serif Display", "Fraunces", Georgia, serif',
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#1C1917",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            We need a moment
          </h1>

          <p
            style={{
              color: "#78716C",
              fontSize: "1rem",
              lineHeight: 1.65,
              marginBottom: "0.5rem",
              fontWeight: 300,
            }}
          >
            Something unexpected happened and this page couldn&apos;t
            load. Don&apos;t worry — your data is safe.
          </p>

          <p
            style={{
              color: "#A8A29E",
              fontSize: "0.85rem",
              lineHeight: 1.5,
              marginBottom: "2rem",
              fontWeight: 300,
            }}
          >
            You can try refreshing, or come back in a minute.
          </p>

          {/* Primary actions */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <button onClick={reset} style={btnPrimary}>
              Try again
            </button>
            <a href="/" style={btnSecondary}>
              Go home
            </a>
          </div>

          {/* Separator */}
          <div
            style={{
              width: "80%",
              height: "1px",
              background: "rgba(0,0,0,0.06)",
              margin: "0 auto 1.25rem",
            }}
          />

          {/* Deep Reset / Panic Switch */}
          <p
            style={{
              color: "#A8A29E",
              fontSize: "0.75rem",
              lineHeight: 1.5,
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            Still not working? This clears saved preferences and cached
            data to fix persistent issues.
          </p>

          <button
            onClick={handleDeepReset}
            disabled={clearing}
            style={btnDanger}
          >
            {clearing ? "Clearing data…" : "Clear site data and reload"}
          </button>
        </div>
      </body>
    </html>
  );
}
