import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  // Enable React Strict Mode for better error detection during development.
  reactStrictMode: true,

  // ── Production Console Stripping ────────────────────────────────
  // The SWC compiler automatically removes all console.log, console.warn,
  // and console.error statements from PRODUCTION builds. This ensures
  // visitors never see internal debug messages in the browser console.
  // In development, all console statements work normally.
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? true             // Remove ALL console methods in production
        : false,           // Keep all console methods in development
  },

  // ── Security Headers ──────────────────────────────────────────────
  async headers() {
    // CSP report endpoint — violations are POSTed here as JSON.
    // Create /api/csp-report route handler to process them.
    const CSP_REPORT_URI = "/api/csp-report";

    return [
      {
        // Apply security headers to ALL routes
        source: "/(.*)",
        headers: [
          // ── Content Security Policy (strict + reporting) ──────────
          //
          // DIRECTIVE SUMMARY:
          // • default-src 'self'     → baseline: only same-origin
          // • script-src 'self'      → scripts: same-origin only, NO eval
          // • style-src              → styles: same-origin + inline + Fonts
          // • img-src                → images: same-origin + data/blob URIs
          // • font-src               → fonts: same-origin + Google Fonts
          // • connect-src 'self'     → fetch/XHR: same-origin only
          // • worker-src 'self'      → web workers: same-origin
          // • manifest-src 'self'    → web app manifest: same-origin
          // • object-src 'none'      → block <object>, <embed>, <applet>
          // • frame-ancestors 'self' → clickjacking protection
          // • form-action 'self'     → prevent form redirect attacks
          // • base-uri 'self'        → prevent <base> tag hijacking
          // • report-uri             → legacy violation reporting endpoint
          // • report-to              → modern Reporting API group name
          //
          // IMPORTANT: report-uri and report-to only LOG violations —
          // they never block content or break the UI.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://images.unsplash.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' ws: wss:",
              "media-src 'self'",
              "worker-src 'self'",
              "manifest-src 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              "form-action 'self'",
              "base-uri 'self'",
              "upgrade-insecure-requests",
              `report-uri ${CSP_REPORT_URI}`,
              `report-to csp-endpoint`,
            ].join("; "),
          },

          // ── Reporting API Endpoint Configuration ──────────────────
          // Modern browsers use the Reporting-Endpoints header to know
          // WHERE to send CSP violation reports. The group name
          // "csp-endpoint" must match the report-to directive above.
          //
          // The browser sends a POST request with JSON body containing:
          //   - document-uri: the page where the violation occurred
          //   - violated-directive: which CSP rule was broken
          //   - blocked-uri: what resource was blocked
          //   - source-file: the script that caused it (if available)
          //
          // This NEVER breaks the UI — reports are sent in background.
          {
            key: "Reporting-Endpoints",
            value: `csp-endpoint="${CSP_REPORT_URI}"`,
          },

          // ── Clickjacking Protection ───────────────────────────────
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          // ── MIME Sniffing Protection ───────────────────────────────
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // ── Referrer Policy ───────────────────────────────────────
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // ── Permissions Policy ────────────────────────────────────
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },

          // ── HTTP Strict Transport Security ────────────────────────
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },

          // ── XSS Protection (legacy) ───────────────────────────────
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        // Cache static assets like images and fonts
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      }
    ];
  },
};

export default nextConfig;
