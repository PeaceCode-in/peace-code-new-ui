/**
 * Environment Variable Validation — Build-Time Safety Gate
 *
 * This script uses Zod to validate all environment variables at BUILD
 * TIME. It runs before the Next.js build proceeds and will REJECT the
 * build if:
 *
 * 1. Required environment variables are missing.
 * 2. Private backend keys are accidentally prefixed with NEXT_PUBLIC_
 *    (which would expose them to the browser bundle).
 * 3. Values don't match their expected format (URLs, tokens, etc.).
 *
 * USAGE:
 *   - Import and call validateEnv() in next.config.js
 *   - Or run standalone: npx tsx scripts/validate-env.ts
 *
 * HOW TO ADD NEW VARIABLES:
 *   1. Add the variable to the appropriate schema (serverSchema or
 *      publicSchema) below.
 *   2. Add it to PRIVATE_KEY_PATTERNS if it's a secret that must
 *      never be public.
 */

import { z } from "zod";

// ── 1. PRIVATE KEY PATTERNS ─────────────────────────────────────
// These patterns identify secrets that must NEVER be prefixed with
// NEXT_PUBLIC_. If any key matching these patterns starts with
// NEXT_PUBLIC_, the build is rejected immediately.
const PRIVATE_KEY_PATTERNS = [
  /secret/i,
  /password/i,
  /private/i,
  /token/i,
  /api_key/i,
  /apikey/i,
  /auth/i,
  /credential/i,
  /database_url/i,
  /db_url/i,
  /connection_string/i,
  /stripe_secret/i,
  /webhook_secret/i,
  /encryption/i,
  /signing/i,
  /jwt/i,
];

// ── 2. SERVER-SIDE ENVIRONMENT SCHEMA ───────────────────────────
// Variables that must ONLY exist on the server (never in the browser).
// Add your backend secrets here as the project grows.
const serverSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // ── Database ──────────────────────────────────────────────────
  // DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),

  // ── Authentication ────────────────────────────────────────────
  // AUTH_SECRET: z.string().min(32, "AUTH_SECRET must be at least 32 characters"),

  // ── External APIs ─────────────────────────────────────────────
  // STRIPE_SECRET_KEY: z.string().startsWith("sk_", "STRIPE_SECRET_KEY must start with sk_"),
  // OPENAI_API_KEY: z.string().startsWith("sk-", "OPENAI_API_KEY must start with sk-"),
});

// ── 3. PUBLIC ENVIRONMENT SCHEMA ────────────────────────────────
// Variables prefixed with NEXT_PUBLIC_ that ARE safe to expose to
// the browser. Only non-sensitive identifiers belong here.
const publicSchema = z.object({
  // NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  // NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().startsWith("G-").optional(),
  // NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
});

// ── 4. DANGEROUS LEAK DETECTION ─────────────────────────────────
/**
 * Scans all NEXT_PUBLIC_ prefixed variables and rejects any whose
 * name matches a known private key pattern.
 */
function detectLeakedSecrets(env: Record<string, string | undefined>): string[] {
  const violations: string[] = [];

  for (const key of Object.keys(env)) {
    if (!key.startsWith("NEXT_PUBLIC_")) continue;

    const nameWithoutPrefix = key.replace("NEXT_PUBLIC_", "");

    for (const pattern of PRIVATE_KEY_PATTERNS) {
      if (pattern.test(nameWithoutPrefix)) {
        violations.push(
          `🚨 SECURITY VIOLATION: "${key}" matches private key pattern /${pattern.source}/i. ` +
            `Remove the NEXT_PUBLIC_ prefix — this value would be exposed to the browser!`
        );
        break;
      }
    }
  }

  return violations;
}

// ── 5. MAIN VALIDATION FUNCTION ─────────────────────────────────
export function validateEnv(): void {
  const env = process.env as Record<string, string | undefined>;
  const errors: string[] = [];

  // Step 1: Check for leaked secrets in NEXT_PUBLIC_ variables
  const leaks = detectLeakedSecrets(env);
  if (leaks.length > 0) {
    errors.push(...leaks);
  }

  // Step 2: Validate server-side schema
  const serverResult = serverSchema.safeParse(env);
  if (!serverResult.success) {
    for (const issue of serverResult.error.issues) {
      const path = issue.path.join(".");
      errors.push(`❌ Server env "${path}": ${issue.message}`);
    }
  }

  // Step 3: Validate public schema
  const publicResult = publicSchema.safeParse(env);
  if (!publicResult.success) {
    for (const issue of publicResult.error.issues) {
      const path = issue.path.join(".");
      errors.push(`❌ Public env "${path}": ${issue.message}`);
    }
  }

  // Step 4: Report results
  if (errors.length > 0) {
    console.error("\n╔══════════════════════════════════════════════════╗");
    console.error("║     ENVIRONMENT VALIDATION FAILED                ║");
    console.error("╚══════════════════════════════════════════════════╝\n");

    for (const error of errors) {
      console.error(`  ${error}`);
    }

    console.error(
      "\n  Fix the above issues in your .env file and try again.\n"
    );

    // Exit with non-zero code to REJECT the build
    process.exit(1);
  }

  console.log("✅ Environment variables validated successfully.\n");
}

// ── 6. STANDALONE EXECUTION ─────────────────────────────────────
// Allow running directly: npx tsx scripts/validate-env.ts
const isDirectExecution =
  typeof process !== "undefined" &&
  process.argv[1] &&
  (process.argv[1].endsWith("validate-env.ts") ||
    process.argv[1].endsWith("validate-env.js"));

if (isDirectExecution) {
  // Load .env files if running standalone (Next.js loads them automatically)
  import("dotenv")
    .then((dotenv) => {
      dotenv.config();
      validateEnv();
    })
    .catch(() => {
      // dotenv not installed — validate with whatever process.env has
      validateEnv();
    });
}
