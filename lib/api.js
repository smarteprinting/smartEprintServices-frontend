
/**
 * API utility for SmartEprint Services frontend.
 *
 * All API calls from the frontend go to /api/* which Next.js
 * rewrites (proxies) to the backend server defined in NEXT_PUBLIC_BACKEND_URL.
 *
 * This means all fetch("/api/...") calls in components work without change.
 * Only this file and next.config.js need to know about the backend URL.
 */

/**
 * Get the base URL for API calls.
 * - Client-side: uses relative /api/* (proxied by Next.js rewrites)
 * - Server-side: uses the full backend URL directly
 */
export function getApiBase() {
  if (typeof window !== "undefined") {
    // Client: always use relative path so Next.js rewrite proxy handles it
    return "";
  }
  // Server-side rendering: call backend directly
  return process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
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
  const base = getApiBase();
  const url = `${base}${path}`;
  return fetch(url, options);
}
