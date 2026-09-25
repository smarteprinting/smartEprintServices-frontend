
/**
 * API utility for SmartEprint Services frontend.
 *
 * Browser requests go directly to the separately hosted backend. Static
 * Cloudflare Pages deployments do not have a Next.js server to proxy /api/*.
 */

/**
 * Get the configured backend API base URL.
 */
export function getApiBase() {
  const base = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!base) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }
  return base.replace(/\/$/, "");
}

/**
 * Wrapper around fetch that prepends the correct API base URL.
 * Use this for server components or anywhere you need explicit control.
 * Client components can continue using fetch("/api/...") directly.
 *
 * @param {string} path - API path, e.g. "/api/products"
 * @param {RequestInit} options - fetch options
 */
export async function apiFetch(path, options = {}) {
  const endpoint = path.startsWith("/") ? path : `/${path}`;
  const headers = new Headers(options.headers || {});
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const base = getApiBase();
  const normalizedEndpoint = base.endsWith("/api") && endpoint.startsWith("/api/")
    ? endpoint.slice(4)
    : endpoint;
  const requestPath = `${normalizedEndpoint.replace(/\/+$/, "")}/`;

  return fetch(`${base}${requestPath}`, {
    ...options,
    headers,
    credentials: options.credentials || "include",
  });
}
