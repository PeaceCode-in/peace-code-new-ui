/**
 * Input Sanitization Utilities
 *
 * Use these helpers to sanitize any user-provided data before rendering
 * it in the DOM or sending it to backend services.
 *
 * In React, JSX expressions like {userInput} are auto-escaped by default.
 * These utilities provide ADDITIONAL protection for edge cases:
 * - When you must use dangerouslySetInnerHTML
 * - When rendering user input in HTML attributes (href, src, etc.)
 * - When building strings that will be injected into the DOM
 * - When handling URL parameters or query strings
 */

/**
 * Escapes HTML special characters to prevent XSS injection.
 * Use this when you MUST insert user content as raw HTML.
 *
 * @example
 * // Instead of: dangerouslySetInnerHTML={{ __html: userInput }}
 * // Use:        dangerouslySetInnerHTML={{ __html: escapeHtml(userInput) }}
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strips all HTML tags from a string, leaving only text content.
 * Use this when you want to extract plain text from potentially
 * HTML-contaminated input.
 *
 * @example
 * stripHtml('<script>alert("xss")</script>Hello') // Returns: 'Hello'
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Validates and sanitizes a URL to prevent javascript: protocol attacks.
 * Returns the URL if it uses a safe protocol, or "#" if it's unsafe.
 *
 * Safe protocols: http:, https:, mailto:, tel:
 *
 * @example
 * // In JSX:
 * <a href={sanitizeUrl(userProvidedUrl)}>Link</a>
 */
export function sanitizeUrl(url: string): string {
  if (!url) return "#";

  const trimmed = url.trim();

  // Block javascript:, vbscript:, data: protocols
  const dangerousProtocols = /^(javascript|vbscript|data):/i;
  if (dangerousProtocols.test(trimmed)) {
    return "#";
  }

  // Allow safe protocols and relative URLs
  const safeProtocols = /^(https?:|mailto:|tel:|\/|#)/i;
  if (safeProtocols.test(trimmed) || !trimmed.includes(":")) {
    return trimmed;
  }

  return "#";
}

/**
 * Sanitizes user input for safe use in HTML attributes.
 * Escapes characters that could break out of attribute context.
 *
 * @example
 * <div title={sanitizeAttribute(userInput)} />
 */
export function sanitizeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`/g, "&#96;");
}

/**
 * Creates a safe text node value by trimming and limiting length.
 * Prevents excessively long input that could cause DoS.
 *
 * @param input - Raw user input
 * @param maxLength - Maximum allowed characters (default: 10000)
 */
export function sanitizeTextInput(input: string, maxLength = 10000): string {
  if (!input) return "";
  return input.trim().slice(0, maxLength);
}
