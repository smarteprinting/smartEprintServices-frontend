import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Cookies Policy | Smart ePrint Services",
  description: "Cookies policy for Smart ePrint Services.",
};

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files stored on your browser or device when you visit a website. Cookies help the site recognize your device and remember your preferences, improve performance, and support advertising and analytics.",
      "Cookies may be: Session cookies - expire when you close your browser. Persistent cookies - stay on your device for a set period or until deleted."
    ]
  },
  {
    id: "types-of-cookies",
    title: "2. Types of Cookies We Use",
    content: [
      "A. Essential Cookies: These cookies are necessary for the Website to operate correctly. They enable basic functions such as page navigation and access to secure areas, shopping cart functionality, remembering your login session, and preventing fraud. Essential cookies cannot be disabled through our Website as they are required for core functionality.",
      "B. Performance & Analytics Cookies: These cookies help us understand how visitors use our Website. We may use Google Analytics to analyze traffic and behavior, first-party analytics to collect data about site usage, and Google Tag Manager to manage tags and tracking scripts. Analytics cookies collect information such as pages visited, time spent on site, and how you arrived at our Website. This data is aggregated and anonymous.",
      "C. Marketing & Advertising Cookies: These cookies are used to track visitors across websites and display relevant advertisements. Marketing cookies we may use include Google Ads cookies to measure ad performance and show personalized ads, and Meta Pixel to track conversions and show relevant ads on Meta properties. These cookies may track your activity across different websites to build a profile of your interests.",
      "D. Functional Cookies: These cookies remember your preferences and choices to provide enhanced functionality, including language and region preferences, display settings and customizations, previously viewed products, and form information for faster checkout. Disabling functional cookies may result in reduced functionality and a less personalized experience."
    ]
  },
  {
    id: "how-we-use-cookies",
    title: "3. How We Use Cookies",
    content: [
      "We use cookies for purposes including enabling essential site functionality, analyzing and improving website performance, personalizing your shopping experience, and delivering targeted advertising based on your interests.",
      "We do not use cookies to collect information that directly identifies you without your consent."
    ]
  },
  {
    id: "third-party-cookies",
    title: "4. Third-Party Cookies",
    content: [
      "Third parties may also set cookies when you visit our Website, including Google (Analytics, Ads, Tag Manager), Meta (Facebook Pixel), and payment processors for secure transactions.",
      "We do not control these cookies. Their use is subject to the privacy policies of the respective third parties."
    ]
  },
  {
    id: "your-cookie-choices",
    title: "5. Your Cookie Choices",
    content: [
      "You can control cookies in the following ways:",
      "Browser Settings: Most browsers allow you to block cookies, delete cookies, or notify you when cookies are set. Disabling cookies may affect Website functionality, including your ability to make purchases or access certain features.",
      "Opt-Out Options: You can also opt out of certain third-party cookies through Google Ads settings, Meta ad preferences, or the Network Advertising Initiative."
    ]
  },
  {
    id: "changes",
    title: "6. Changes to This Policy",
    content: [
      "We may update this Cookies Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The \"Last updated\" date at the top of this page indicates when this policy was last revised. We encourage you to review this policy periodically."
    ]
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: [
      "For questions about this Cookies Policy or how we use cookies, please contact us:"
    ]
  }
];

export default function CookiePolicy() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-100">Smart ePrint Services</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Cookies <span className="text-blue-100">Policy</span></h1>
            <p className="mt-4 text-sm font-medium text-blue-50/80">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <aside className="top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">On this page</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-500">
              {sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`} className="hover:text-[#0758cf]">{section.title.replace(/^\d+\.\s*/, "")}</a></li>
              ))}
            </ol>
          </aside>

          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:px-10 lg:px-14 lg:py-12">
            <div className="border-b border-slate-200 pb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Legal Information</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Cookies Policy</h2>
              <p className="mt-3 text-sm font-semibold text-slate-500">Last updated: January 2026</p>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                This Cookies Policy explains how Smart ePrint Services ("we," "us," or "our") uses cookies and similar technologies when you visit our website at smarteprintservices.com (the "Website"). By using this Website, you agree that we can store and access cookies on your device in accordance with this policy.
              </p>
            </div>

            {sections.map((section) => (
              <section id={section.id} key={section.id} className="border-t border-slate-200 py-10">
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl"><span className="mr-3 text-[#0758cf]">{section.title.split(".")[0]}.</span>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}
                  {section.id === "types-of-cookies" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Essential Cookies cannot be disabled as they are required for core functionality.</li>
                      <li>Performance & Analytics Cookies help us understand how visitors use the Website.</li>
                      <li>Marketing & Advertising Cookies track activity across websites and help tailor ads.</li>
                      <li>Functional Cookies remember preferences such as language, display settings, and saved checkout info.</li>
                    </ul>
                  )}
                  {section.id === "your-cookie-choices" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Google Chrome</li>
                      <li>Mozilla Firefox</li>
                      <li>Apple Safari</li>
                      <li>Microsoft Edge</li>
                    </ul>
                  )}
                  {section.id === "contact" && (
                    <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-6">
                      <p className="text-lg font-black">Smart ePrint Services</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">11397 Quincy St NE<br />Blaine, Minnesota, 55434<br />United States</p>
                      <a href="mailto:support@smarteprintservices.com" className="mt-3 block font-bold text-[#0758cf] hover:underline">support@smarteprintservices.com</a>
                    </div>
                  )}
                </div>
              </section>
            ))}

            <div className="border-t border-slate-200 pt-8 text-sm font-semibold text-slate-500">
              For more information about how we handle your personal data, please see our Privacy Policy.
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
