"use client";

/**
 * Global Error Boundary — Route-Level
 *
 * Catches any unhandled error thrown by a page component and displays
 * a friendly fallback screen.
 *
 * FEATURES:
 * - Infinite rerender loop detection: If the user clicks "Try again"
 *   3 times within 10 seconds and the error persists, the component
 *   stops retrying and either forces a hard page refresh or shows
 *   a permanent system failure message.
 * - No raw error messages, file names, or stack traces are ever shown.
 */

import { useEffect, useRef, useState, useCallback } from "react";

/** Maximum retry attempts before giving up */
const MAX_RETRIES = 3;
/** Time window (ms) within which retries are counted */
const RETRY_WINDOW_MS = 10_000;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // ── Retry loop detection ──────────────────────────────────────
  const retryTimestamps = useRef<number[]>([]);
  const [exhausted, setExhausted] = useState(false);

  useEffect(() => {
    console.error("[PeaceCode Error Boundary]", error);
  }, [error]);

  const handleRetry = useCallback(() => {
    const now = Date.now();
    // Keep only timestamps within the rolling window
    retryTimestamps.current = retryTimestamps.current.filter(
      (t) => now - t < RETRY_WINDOW_MS
    );
    retryTimestamps.current.push(now);

    if (retryTimestamps.current.length >= MAX_RETRIES) {
      // User has hit "Try again" 3 times in 10 seconds — stop the loop.
      setExhausted(true);
      return;
    }

    reset();
  }, [reset]);

  const handleHardRefresh = useCallback(() => {
    // Force a full page reload, bypassing the client-side cache.
    window.location.reload();
  }, []);

  // ── Shared styles ─────────────────────────────────────────────
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom, #f7f3ea, #faf9f1)",
    fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
    padding: "1.5rem",
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: "28rem",
    width: "100%",
    textAlign: "center",
    padding: "3rem 2rem",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "2rem",
    border: "1px solid rgba(255,255,255,0.7)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: '"DM Serif Display", "Fraunces", Georgia, serif',
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "#1C1917",
    marginBottom: "0.75rem",
    lineHeight: 1.2,
  };

  const bodyStyle: React.CSSProperties = {
    color: "#78716C",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    marginBottom: "2rem",
    fontWeight: 300,
  };

  const primaryBtnStyle: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",
    border: "none",
    background: "#1C1917",
    color: "#fff",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    letterSpacing: "0.02em",
    transition: "background 0.3s",
  };

  const secondaryBtnStyle: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
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
    transition: "border-color 0.3s",
  };

  // ── Exhausted state: permanent failure screen ─────────────────
  if (exhausted) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          {/* Warning icon */}
          <div
            style={{
              width: "4rem",
              height: "4rem",
              margin: "0 auto 1.5rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#DC2626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h1 style={headingStyle}>This page needs a fresh start</h1>

          <p style={bodyStyle}>
            We tried a few times, but this page is having persistent trouble.
            A full page refresh should fix things.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleHardRefresh}
              style={primaryBtnStyle}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.background = "#333")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.background = "#1C1917")
              }
            >
              Refresh the page
            </button>
            <a href="/" style={secondaryBtnStyle}>
              Go home
            </a>
          </div>

          <p
            style={{
              color: "#A8A29E",
              fontSize: "0.75rem",
              marginTop: "1.5rem",
              fontWeight: 300,
            }}
          >
            If this keeps happening, please contact us at{" "}
            <a
              href="mailto:hello@peacecode.in"
              style={{ color: "#8B6DB0", textDecoration: "none" }}
            >
              hello@peacecode.in
            </a>
          </p>
        </div>
      </div>
    );
  }

  // ── Normal state: first error with retry available ────────────
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Calm icon */}
        <div
          style={{
            width: "4rem",
            height: "4rem",
            margin: "0 auto 1.5rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #E8E0F0 0%, #F2E8EA 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8B6DB0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>

        <h1 style={headingStyle}>Something went wrong</h1>

        <p style={bodyStyle}>
          We hit a small bump. This page didn&apos;t load as expected, but
          everything else is fine. You can try again or head back to the home
          page.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleRetry}
            style={primaryBtnStyle}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.background = "#333")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.background = "#1C1917")
            }
          >
            Try again
          </button>
          <a href="/" style={secondaryBtnStyle}>
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
