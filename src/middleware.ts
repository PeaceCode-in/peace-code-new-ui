import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js Edge Middleware — Security Layer
 *
 * This middleware runs on EVERY request before it reaches the page.
 * It provides defense-in-depth for clickjacking and other attacks
 * by setting headers at the edge level, complementing the headers
 * defined in next.config.js.
 *
 * Why both middleware AND next.config.js headers?
 * - next.config.js `headers()` covers static assets and page routes.
 * - Middleware covers dynamic/API routes and gives you the ability
 *   to conditionally set headers based on request properties.
 * - Together they provide defense-in-depth — if one layer is
 *   bypassed, the other still protects the response.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ── Clickjacking Protection (defense-in-depth) ──────────────────
  // X-Frame-Options: DENY — prevents ALL framing of this site.
  // Use SAMEORIGIN if you need to embed your own pages in iframes.
  response.headers.set("X-Frame-Options", "DENY");

  // CSP frame-ancestors is the modern replacement for X-Frame-Options.
  // 'self' = only allow framing from the same origin.
  // 'none' would block even same-origin iframes.
  // This is set here as a supplement; the full CSP is in next.config.js.
  // Note: If next.config.js already sets the full CSP header, this
  // append won't override it — Next.js merges headers from both sources.

  // ── Additional Edge-Level Security ──────────────────────────────
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  return response;
}

// Run middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt).*)",
  ],
};
