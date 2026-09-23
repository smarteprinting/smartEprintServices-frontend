export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: 'https://smarteprintservices.com/sitemap.xml',
    host: 'https://smarteprintservices.com',
  };
}
