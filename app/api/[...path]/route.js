import { NextResponse } from "next/server";

const BACKEND = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001").replace(/\/$/, "");

// Hop-by-hop headers that must not be forwarded
const HOP_BY_HOP = new Set([
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailers",
  "transfer-encoding",
  "upgrade",
  "content-length"
]);

// Headers to strip from backend response before sending to browser
const STRIP_RES_HEADERS = new Set([
  "content-encoding",
  "content-length",
  "transfer-encoding",
  "connection",
  "keep-alive",
  "set-cookie", // Handled separately to preserve multiple cookies
]);

async function proxy(request, { params }) {
  try {
    const segments = (await params).path;
    const url = new URL(request.url);

    // Build the real backend URL
    const targetUrl = BACKEND + "/api/" + segments.join("/") + "/" + url.search;

    // Forward request headers (skip hop-by-hop)
    const forwardHeaders = new Headers();
    for (const [k, v] of request.headers.entries()) {
      if (!HOP_BY_HOP.has(k.toLowerCase())) {
        forwardHeaders.set(k, v);
      }
    }

    // Ask backend for plain, uncompressed data since Node fetch will decode
    // and passing content-encoding: gzip/br to the client causes ERR_CONTENT_DECODING_FAILED
    forwardHeaders.set("accept-encoding", "identity");

    const hasBody = !["GET", "HEAD"].includes(request.method.toUpperCase());
    const body = hasBody ? await request.arrayBuffer() : undefined;

    const backendRes = await fetch(targetUrl, {
      method: request.method,
      headers: forwardHeaders,
      body: hasBody ? body : undefined,
      redirect: "follow",
    });

    // Build response headers
    const resHeaders = new Headers();
    for (const [k, v] of backendRes.headers.entries()) {
      if (!HOP_BY_HOP.has(k.toLowerCase()) && !STRIP_RES_HEADERS.has(k.toLowerCase())) {
        resHeaders.set(k, v);
      }
    }

    // Preserve multiple Set-Cookie headers properly
    if (typeof backendRes.headers.getSetCookie === "function") {
      const cookies = backendRes.headers.getSetCookie();
      for (const cookie of cookies) {
        resHeaders.append("set-cookie", cookie);
      }
    } else {
      const rawCookie = backendRes.headers.get("set-cookie");
      if (rawCookie) {
        resHeaders.set("set-cookie", rawCookie);
      }
    }

    const data = await backendRes.arrayBuffer();

    return new NextResponse(data, {
      status: backendRes.status,
      headers: resHeaders,
    });
  } catch (err) {
    console.error("[API Proxy] Error:", err.message);
    return NextResponse.json(
      { success: false, message: "Backend unreachable: " + err.message },
      { status: 502 }
    );
  }
}

export const GET     = (req, ctx) => proxy(req, ctx);
export const POST    = (req, ctx) => proxy(req, ctx);
export const PUT     = (req, ctx) => proxy(req, ctx);
export const PATCH   = (req, ctx) => proxy(req, ctx);
export const DELETE  = (req, ctx) => proxy(req, ctx);
export const OPTIONS = (req, ctx) => proxy(req, ctx);