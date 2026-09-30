export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      // ── Standard crawlers: allow all public pages ──────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/', '/login/', '/signup/', '/profile/'],
      },
      // ── Google AdsBot: must access ad landing pages & policy pages ─────────
      // AdsBot-Google ignores wildcard (*) rules unless explicitly addressed.
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/', '/profile/'],
      },
      // ── Google AdsBot Mobile ───────────────────────────────────────────────
      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/', '/profile/'],
      },
      // ── Googlebot ─────────────────────────────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/', '/profile/'],
      },
      // ── Bingbot / Microsoft Advertising bots ──────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/', '/profile/'],
      },
      {
        userAgent: 'adidxbot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/', '/profile/'],
      },
    ],
    sitemap: 'https://smarteprintservices.com/sitemap.xml',
    host: 'https://smarteprintservices.com',
  };
}
