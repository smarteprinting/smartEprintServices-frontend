import Link from "next/link";
import {
  Cookie,
  ShieldCheck,
  ShieldAlert,
  BarChart3,
  Megaphone,
  Settings2,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Info,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Cookie Policy | Smart ePrint Services",
  description:
    "Cookie Policy for Smart ePrint Services, owned and operated by Innovation Dynamics Group LLC. Learn exactly which cookies and tracking technologies we use, including CookieYes, JivoChat, Google Analytics, Google Ads, and how to manage your preferences.",
};

const cookieCategories = [
  {
    id: "essential",
    icon: ShieldCheck,
    color: "blue",
    label: "Essential / Strictly Necessary",
    canDisable: false,
    description:
      "These cookies are strictly required for our website to function. Without them, core services such as shopping cart, secure checkout, login session management, and fraud prevention cannot operate. They do not collect personal data for advertising purposes.",
    cookies: [
      {
        name: "Session / Auth Token",
        provider: "Smart ePrint Services (1st party)",
        purpose: "Maintains your login session so you remain signed in during your visit.",
        duration: "Session / 7 days (Remember Me)",
        type: "HTTP Cookie",
      },
      {
        name: "Cart State",
        provider: "Smart ePrint Services (1st party)",
        purpose: "Preserves items in your shopping cart across page navigations.",
        duration: "Session",
        type: "LocalStorage / Cookie",
      },
      {
        name: "CSRF Token",
        provider: "Smart ePrint Services (1st party)",
        purpose: "Prevents cross-site request forgery attacks during form submissions and checkout.",
        duration: "Session",
        type: "HTTP Cookie",
      },
      {
        name: "cky-consent",
        provider: "CookieYes (cdn-cookieyes.com)",
        purpose: "Stores your cookie consent preferences so the banner does not re-appear on every visit.",
        duration: "1 year",
        type: "HTTP Cookie",
      },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "indigo",
    label: "Performance & Analytics",
    canDisable: true,
    description:
      "These cookies help us understand how visitors interact with our website — which pages are most visited, how long people spend on the site, and how they arrived. This data is used in aggregate form to improve site performance and user experience.",
    cookies: [
      {
        name: "_ga, _gid, _gat",
        provider: "Google Analytics (Google LLC)",
        purpose: "Tracks page views, session duration, traffic sources, and user flows across the website. Data is aggregated and anonymized. Google may process data in accordance with its own Privacy Policy.",
        duration: "_ga: 2 years / _gid: 24 hours / _gat: 1 minute",
        type: "HTTP Cookie",
        link: "https://policies.google.com/privacy",
        optOut: "https://tools.google.com/dlpage/gaoptout",
      },
      {
        name: "_gcl_au",
        provider: "Google Ads / Google Tag Manager (Google LLC)",
        purpose: "Stores and tracks conversion data from Google Ads campaigns. Used by Google Tag Manager to fire analytics tags.",
        duration: "90 days",
        type: "HTTP Cookie",
        link: "https://policies.google.com/privacy",
      },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    color: "orange",
    label: "Marketing & Advertising",
    canDisable: true,
    description:
      "These cookies are used by Smart ePrint Services and our advertising partners to show you relevant advertisements based on your interests, measure the effectiveness of ad campaigns, and track conversions. They may collect data across multiple websites and build interest profiles.",
    cookies: [
      {
        name: "IDE, DSID, __Secure-3PAPISID",
        provider: "Google Ads (Google LLC)",
        purpose: "Used by Google to measure ad performance, limit ad frequency, show personalized ads, and track conversions on smarteprintservices.com back to Google Ads campaigns.",
        duration: "Up to 2 years",
        type: "HTTP Cookie",
        link: "https://policies.google.com/privacy",
        optOut: "https://adssettings.google.com/authenticated",
      },
      {
        name: "_fbp, _fbc",
        provider: "Meta Pixel (Meta Platforms Inc.)",
        purpose: "Tracks visitor actions (page views, add-to-cart, purchases) for conversion reporting and to show relevant ads on Facebook and Instagram properties.",
        duration: "_fbp: 90 days / _fbc: Session",
        type: "HTTP Cookie",
        link: "https://www.facebook.com/privacy/explanation",
        optOut: "https://www.facebook.com/help/568137493302217",
      },
    ],
  },
  {
    id: "functional",
    icon: Settings2,
    color: "teal",
    label: "Functional & Preference",
    canDisable: true,
    description:
      "These cookies enable enhanced features and personalization. They remember your preferences and settings, making your experience faster and more convenient. Disabling them may result in reduced website functionality.",
    cookies: [
      {
        name: "jivochat_*",
        provider: "JivoChat (Jivosite Inc.)",
        purpose: "Powers the live chat widget on the website, preserving chat session state and user identity between pages. JivoChat may process chat content in accordance with its own Privacy Policy.",
        duration: "Session / 1 year",
        type: "HTTP Cookie + LocalStorage",
        link: "https://www.jivosite.com/privacy/",
      },
      {
        name: "Preference cookies",
        provider: "Smart ePrint Services (1st party)",
        purpose: "Stores user preferences such as display settings, previously viewed products, and saved form data for faster checkout.",
        duration: "30 days",
        type: "LocalStorage / Cookie",
      },
    ],
  },
];

function colorClasses(color) {
  const map = {
    blue: {
      bg: "bg-blue-50",
      text: "text-[#0758cf]",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-800",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      badge: "bg-indigo-100 text-indigo-800",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-800",
    },
    teal: {
      bg: "bg-teal-50",
      text: "text-teal-700",
      border: "border-teal-200",
      badge: "bg-teal-100 text-teal-800",
    },
  };
  return map[color] || map.blue;
}

export default function CookiePolicy() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      {/* Hero */}
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-100 backdrop-blur-sm">
              <Cookie className="h-3.5 w-3.5 text-blue-200" />
              <span>COOKIES &amp; TRACKING DISCLOSURE</span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Cookie <span className="text-[#65adff]">Policy</span>
            </h1>
            <p className="mt-3 text-sm font-medium text-blue-50/90 sm:text-base">
              Smart ePrint Services &bull; Owned &amp; Operated by Innovation Dynamics Group LLC
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-blue-200/80">
              Last updated: October 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-14">

          {/* Sidebar */}
          <aside className="top-24 space-y-6 lg:sticky">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">On This Page</p>
              <nav className="mt-4">
                <ol className="list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-500">
                  {[
                    ["what-are-cookies", "What Are Cookies?"],
                    ["consent-management", "Consent Management (CookieYes)"],
                    ["essential", "Essential Cookies"],
                    ["analytics", "Analytics Cookies"],
                    ["marketing", "Marketing & Advertising Cookies"],
                    ["functional", "Functional Cookies"],
                    ["your-choices", "Your Cookie Choices & Opt-Outs"],
                    ["third-party", "Third-Party Privacy Policies"],
                    ["changes", "Policy Changes"],
                    ["contact", "Contact Us"],
                  ].map(([id, label]) => (
                    <li key={id}>
                      <a href={`#${id}`} className="transition-colors hover:text-[#0758cf]">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Manage Preferences CTA */}
            <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-5 text-xs text-slate-600">
              <p className="font-black text-slate-900">Manage Your Cookie Preferences</p>
              <p className="mt-1 text-slate-500">
                Use our on-site consent banner to accept, reject, or customize non-essential cookies at any time.
              </p>
              <button
                id="cookie-preferences-btn"
                className="cky-banner-element mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#0758cf] px-3 py-2 text-xs font-bold text-white hover:bg-blue-800 transition-colors"
                type="button"
              >
                <Cookie className="h-3.5 w-3.5" />
                Cookie Settings
              </button>
            </div>
          </aside>

          {/* Main Article */}
          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:px-10 lg:px-14 lg:py-12">

            {/* Header */}
            <div className="border-b border-slate-200 pb-8">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0758cf]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Transparent Cookie Disclosure</span>
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Cookie Policy</h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">Effective &amp; Last updated: October 2026</p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 p-5 text-sm leading-relaxed text-slate-700">
                <p className="font-bold text-slate-900">Store Identification Notice:</p>
                <p className="mt-1">
                  <strong>Smart ePrint Services</strong> (<a href="https://smarteprintservices.com" className="text-[#0758cf] underline">smarteprintservices.com</a>), owned and operated by <strong>Innovation Dynamics Group LLC</strong>, uses cookies and similar tracking technologies on its website. This policy explains <em>exactly</em> which cookies and third-party tools are in use, why we use them, and how you can control or opt out of non-essential tracking.
                </p>
              </div>
            </div>

            {/* Section 1 — What Are Cookies */}
            <section id="what-are-cookies" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">1.</span>What Are Cookies?
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They allow the website to recognize your device on return visits, remember your preferences, and enable various features.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <p className="font-bold text-slate-900">Session Cookies</p>
                    <p className="mt-1 text-slate-600">Temporary cookies that expire when you close your browser. Used for things like your shopping cart and login status.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <p className="font-bold text-slate-900">Persistent Cookies</p>
                    <p className="mt-1 text-slate-600">Remain on your device for a set duration even after you close the browser. Used for preferences and analytics.</p>
                  </div>
                </div>
                <p>
                  In addition to cookies, we and our partners may also use web beacons, tracking pixels, and local storage technologies. This policy covers all such technologies collectively.
                </p>
              </div>
            </section>

            {/* Section 2 — Consent Management */}
            <section id="consent-management" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">2.</span>Consent Management (CookieYes)
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  Smart ePrint Services uses <strong>CookieYes</strong> (cdn-cookieyes.com) as its consent management platform. CookieYes displays the cookie consent banner when you first visit the site and records your consent choices.
                </p>
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-sm text-blue-950">
                  <div className="flex items-start gap-2.5">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                    <div>
                      <p className="font-bold">How Consent Works:</p>
                      <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-blue-800">
                        <li><strong>Essential cookies</strong> are always active and cannot be disabled — they are required for the website to function.</li>
                        <li><strong>Analytics, Marketing, and Functional cookies</strong> are only loaded if you click &ldquo;Accept&rdquo; or selectively enable those categories in the cookie settings panel.</li>
                        <li>If you click <strong>&ldquo;Reject All&rdquo;</strong>, only essential cookies are placed on your device. No analytics or marketing tracking will occur.</li>
                        <li>You can <strong>change your preferences at any time</strong> by clicking the &ldquo;Cookie Settings&rdquo; button in the sidebar or footer.</li>
                        <li>Your consent choice is stored in the <code className="rounded bg-blue-100 px-1 text-[11px]">cky-consent</code> cookie for 1 year.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-sm">
                  <strong>California Residents (CCPA):</strong> If you are a California resident, you can opt out of the sale or sharing of personal information for cross-context behavioral advertising by using the &ldquo;Reject All&rdquo; or custom cookie preferences option, or by visiting our <Link href="/privacy-policy" className="font-bold text-[#0758cf] hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </section>

            {/* Cookie Categories */}
            {cookieCategories.map((cat, catIdx) => {
              const Icon = cat.icon;
              const c = colorClasses(cat.color);
              return (
                <section key={cat.id} id={cat.id} className="scroll-mt-24 border-t border-slate-200 py-10">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                          <span className="mr-3 text-[#0758cf]">{catIdx + 3}.</span>{cat.label}
                        </h2>
                        {cat.canDisable ? (
                          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${c.badge}`}>
                            Optional — Can be Disabled
                          </span>
                        ) : (
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                            Always Active — Cannot be Disabled
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-[15px] leading-7 text-slate-600">{cat.description}</p>
                    </div>
                  </div>

                  {/* Cookie table */}
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full min-w-[600px] text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-500">
                          <th className="px-4 py-3 text-left">Cookie / Technology</th>
                          <th className="px-4 py-3 text-left">Provider</th>
                          <th className="px-4 py-3 text-left">Purpose</th>
                          <th className="px-4 py-3 text-left">Duration</th>
                          <th className="px-4 py-3 text-left">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {cat.cookies.map((cookie, i) => (
                          <tr key={i} className="bg-white align-top">
                            <td className="px-4 py-3 font-bold text-slate-800">
                              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-mono">{cookie.name}</code>
                              {cookie.link && (
                                <a
                                  href={cookie.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-1 inline-flex items-center gap-0.5 text-[#0758cf] hover:underline"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}
                            </td>
                            <td className="px-4 py-3 text-slate-600">{cookie.provider}</td>
                            <td className="px-4 py-3 leading-5 text-slate-600">
                              {cookie.purpose}
                              {cookie.optOut && (
                                <a
                                  href={cookie.optOut}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-1 flex items-center gap-1 font-bold text-[#0758cf] hover:underline"
                                >
                                  <ExternalLink className="h-3 w-3 shrink-0" />
                                  Opt-Out Tool
                                </a>
                              )}
                            </td>
                            <td className="px-4 py-3 text-slate-500">{cookie.duration}</td>
                            <td className="px-4 py-3 text-slate-500">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              );
            })}

            {/* Section — Your Choices */}
            <section id="your-choices" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">7.</span>Your Cookie Choices &amp; Opt-Outs
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>You have several ways to control how cookies and tracking technologies are used on your device:</p>

                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <p className="font-bold text-slate-900">1. Cookie Consent Banner (Recommended)</p>
                    <p className="mt-1 text-slate-600">Use our on-site consent panel, powered by CookieYes, to accept all, reject all, or customize cookie categories individually. You can reopen this panel at any time using the Cookie Settings button.</p>
                    <button
                      className="cky-banner-element mt-2 inline-flex items-center gap-1.5 rounded-lg bg-[#0758cf] px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-800 transition-colors cursor-pointer"
                      type="button"
                    >
                      <Cookie className="h-3.5 w-3.5" />
                      Open Cookie Settings
                    </button>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <p className="font-bold text-slate-900">2. Browser Settings</p>
                    <p className="mt-1 text-slate-600">Most browsers allow you to block, delete, or receive notifications when cookies are set. Instructions for major browsers:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        ["Google Chrome", "https://support.google.com/chrome/answer/95647"],
                        ["Mozilla Firefox", "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"],
                        ["Apple Safari", "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"],
                        ["Microsoft Edge", "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"],
                      ].map(([browser, url]) => (
                        <a
                          key={browser}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-[#0758cf] hover:bg-slate-50 hover:underline"
                        >
                          {browser}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                    <p className="mt-2 text-slate-500 text-xs">⚠️ Blocking essential cookies will affect website functionality including your ability to log in, add items to cart, and complete checkout.</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <p className="font-bold text-slate-900">3. Third-Party Opt-Out Tools</p>
                    <div className="mt-2 space-y-2">
                      {[
                        ["Google Analytics Opt-Out", "https://tools.google.com/dlpage/gaoptout", "Prevents Google Analytics from collecting your site usage data across all websites."],
                        ["Google Ads Settings", "https://adssettings.google.com/authenticated", "Control personalized advertising from Google Ads."],
                        ["Meta Ad Preferences", "https://www.facebook.com/help/568137493302217", "Manage Facebook and Instagram ad targeting preferences."],
                        ["Network Advertising Initiative (NAI)", "https://optout.networkadvertising.org/", "Opt out of interest-based advertising from NAI member companies."],
                        ["Digital Advertising Alliance (DAA)", "https://optout.aboutads.info/", "US opt-out tool for interest-based advertising."],
                      ].map(([label, url, desc]) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 text-xs hover:bg-slate-50"
                        >
                          <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="font-bold text-[#0758cf]">{label}</p>
                            <p className="text-slate-500">{desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section — Third-Party Policies */}
            <section id="third-party" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">8.</span>Third-Party Privacy Policies
              </h2>
              <div className="mt-5 space-y-3 text-[15px] leading-7 text-slate-600">
                <p>
                  We do not control cookies set by third-party services. Their data collection and use are governed by their own privacy policies. Links to relevant policies are provided in the cookie tables above. Key third parties used on this website:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Google LLC", "Analytics, Ads, Tag Manager", "https://policies.google.com/privacy"],
                    ["Meta Platforms Inc.", "Facebook Pixel / Meta Ads", "https://www.facebook.com/privacy/explanation"],
                    ["Jivosite Inc.", "JivoChat Live Support Widget", "https://www.jivosite.com/privacy/"],
                    ["CookieYes Ltd.", "Cookie Consent Management", "https://www.cookieyes.com/privacy-policy/"],
                    ["Clover Network LLC", "Secure Payment Processing", "https://www.clover.com/legal"],
                  ].map(([name, role, url]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm hover:bg-white hover:border-[#0758cf] transition-colors"
                    >
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="font-bold text-slate-900">{name}</p>
                        <p className="text-xs text-slate-500">{role}</p>
                        <p className="mt-0.5 text-xs font-semibold text-[#0758cf]">View Privacy Policy →</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Section — Changes */}
            <section id="changes" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">9.</span>Changes to This Cookie Policy
              </h2>
              <div className="mt-5 text-[15px] leading-7 text-slate-600">
                <p>
                  We may update this Cookie Policy periodically to reflect changes in the cookies we use, the third-party services integrated into the site, or applicable legal and regulatory requirements. Any updates will be reflected on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of our website after updates constitutes acceptance of the revised policy. We encourage you to review this page regularly.
                </p>
              </div>
            </section>

            {/* Section — Contact */}
            <section id="contact" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">10.</span>Contact Us
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>For questions about this Cookie Policy or how we handle your data, please contact:</p>

                <div className="overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-[#f4f8ff] p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0758cf]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900">Smart ePrint Services</p>
                      <p className="text-xs font-semibold text-slate-500">
                        Owned &amp; Operated by <span className="font-bold text-slate-700">Innovation Dynamics Group LLC</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 border-t border-blue-100 pt-5 text-sm sm:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Toll-Free</p>
                        <a href="tel:+18777652289" className="mt-0.5 block font-bold text-[#0758cf] hover:underline">+1 (877) 765-2289</a>
                        <p className="text-xs text-slate-500">Mon–Fri: 9 AM–6 PM EST<br />Sat: 10 AM–4 PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                        <a href="mailto:support@smarteprintservices.com" className="mt-0.5 block font-bold text-[#0758cf] hover:underline break-all">support@smarteprintservices.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Address</p>
                        <p className="mt-0.5 font-semibold text-slate-700 leading-relaxed">
                          11397 Quincy St NE<br />Blaine, Minnesota 55434<br />United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cross-Policy Footer */}
            <div className="mt-8 border-t border-slate-200 pt-8 text-xs font-semibold text-slate-500">
              <p className="text-slate-700">Related Store Policies:</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link href="/privacy-policy" className="text-[#0758cf] hover:underline">Privacy Policy</Link>
                <span>&bull;</span>
                <Link href="/terms-and-conditions" className="text-[#0758cf] hover:underline">Terms &amp; Conditions</Link>
                <span>&bull;</span>
                <Link href="/shipping-policy" className="text-[#0758cf] hover:underline">Shipping Policy</Link>
                <span>&bull;</span>
                <Link href="/refund-cancellation-policy" className="text-[#0758cf] hover:underline">Returns &amp; Refunds</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
