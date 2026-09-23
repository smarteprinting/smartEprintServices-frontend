export default function sitemap() {
  const baseUrl = 'https://smarteprintservices.com';
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about-us-testhatanahoga', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/shop', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/shops', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/book-an-appointment', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact-us', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/faqs', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/login', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/signup', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/refund-cancellation-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
