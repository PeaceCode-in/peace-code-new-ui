import { NextRequest, NextResponse } from "next/server";

/**
 * CSP Violation Report Endpoint
 *
 * Receives Content Security Policy violation reports from browsers.
 * When a CSP rule is violated (e.g., an unauthorized script tries to
 * load), the browser sends a POST request to this endpoint with a JSON
 * body describing the violation.
 *
 * This endpoint:
 * 1. Parses the violation report
 * 2. Logs it server-side for monitoring
 * 3. Returns 204 No Content (the browser expects no response body)
 *
 * The report NEVER breaks the UI — browsers send reports in the
 * background after rendering the page.
 *
 * FUTURE: Forward reports to an external monitoring service
 * (e.g., Sentry, report-uri.com, or your own analytics).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // The browser sends either:
    // - { "csp-report": { ... } }  (legacy report-uri format)
    // - [{ "type": "csp-violation", "body": { ... } }]  (Reporting API)
    const report = body["csp-report"] || body;

    // Log the violation server-side.
    // In production, console.* is stripped from CLIENT bundles by SWC,
    // but this is a SERVER route — logs go to your server console / log service.
    console.warn("[CSP Violation]", JSON.stringify(report, null, 2));

    // ── Future integration point ──────────────────────────────────
    // Forward to an external monitoring service:
    //
    // await fetch("https://your-monitoring-service.com/csp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(report),
    // });

    // 204 No Content — the browser expects no response body
    return new NextResponse(null, { status: 204 });
  } catch {
    // If parsing fails, still return 204 to avoid noisy browser errors
    return new NextResponse(null, { status: 204 });
  }
}

// Only allow POST method
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
