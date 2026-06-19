"use client";

/**
 * GlobalErrorListener — Client Component
 *
 * Mounted once in the root layout to catch:
 * 1. Unhandled promise rejections (async failures that aren't caught)
 * 2. Uncaught runtime errors (window.onerror)
 *
 * These listeners prevent silent failures from causing memory leaks,
 * zombie event listeners, or weird UI state. They log errors in
 * development and fail gracefully in production.
 *
 * SECURITY: No technical details are ever shown to the user.
 * In production, console.* calls are stripped by the SWC compiler.
 */

import { useEffect } from "react";

export default function GlobalErrorListener() {
  useEffect(() => {
    /**
     * Catch unhandled promise rejections.
     * Common causes:
     * - fetch() calls without .catch()
     * - async/await without try/catch
     * - Third-party SDK initialization failures
     */
    function handleUnhandledRejection(event: PromiseRejectionEvent) {
      // Prevent the default browser error logging (noisy in production)
      event.preventDefault();

      // In development, log the full error for debugging.
      // In production, these console.* calls are stripped by SWC.
      console.error(
        "[PeaceCode] Unhandled promise rejection caught:",
        event.reason
      );

      // ── Future integration point ──
      // Send to your error monitoring service (Sentry, LogRocket, etc.):
      // reportError({ type: 'unhandledrejection', error: event.reason });
    }

    /**
     * Catch uncaught runtime errors at the window level.
     * This is a safety net — React error boundaries handle most
     * component errors, but this catches anything that escapes.
     */
    function handleError(event: ErrorEvent) {
      console.error(
        "[PeaceCode] Uncaught runtime error:",
        event.error || event.message
      );

      // ── Future integration point ──
      // reportError({ type: 'uncaughtError', error: event.error });
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
      window.removeEventListener("error", handleError);
    };
  }, []);

  // This component renders nothing — it only sets up listeners.
  return null;
}
