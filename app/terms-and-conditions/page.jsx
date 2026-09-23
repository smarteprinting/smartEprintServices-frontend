import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Terms & Conditions | SmartEprint Services",
  description: "Terms and conditions for using SmartEprint Services.",
};

export default function TermsAndConditions() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms", content: ["By accessing or using our website, submitting an inquiry, placing an order, or purchasing any product or service from Smart ePrint Services, you acknowledge that you have read, understood, and agree to these Terms & Conditions and our Privacy Policy.", "These Terms apply to all visitors, customers, and users of our website."] },
    { id: "products-services", title: "2. Products & Services", content: ["Smart ePrint Services offers products and services related to home, office, and business printing, which may include:", "Printers; Ink cartridges; Toner cartridges; Printer accessories; Printer setup assistance; Wireless printer setup; Driver installation guidance; Printer troubleshooting assistance; General product information.", "Product availability may change without prior notice. We reserve the right to modify, discontinue, or update any product or service at any time."] },
    { id: "eligibility", title: "3. Eligibility", content: ["To purchase products or use our services, you must be at least 18 years of age or have the legal authority to enter into a binding agreement.", "By placing an order or requesting assistance, you confirm that the information you provide is accurate and complete, you are authorized to make purchases using the selected payment method, you will provide accurate shipping and contact information, and you will cooperate with any reasonable information requests necessary to process your order or service request."] },
    { id: "pricing-payments", title: "4. Pricing, Payments & Billing", content: ["All prices displayed on our website are listed in U.S. Dollars (USD) unless otherwise stated.", "We reserve the right to update pricing without prior notice. The price displayed at the time your order is placed will generally be the price charged.", "Payments are processed securely through trusted third-party payment providers.", "We reserve the right to refuse or cancel any order if payment cannot be verified, fraudulent activity is suspected, pricing or product information contains an error, or products become unavailable.", "If payment has already been received for a cancelled order, an appropriate refund will be issued."] },
    { id: "orders-requests", title: "5. Orders & Service Requests", content: ["When placing an order or requesting support, you agree to provide complete and accurate information.", "After an order is placed, you may receive email confirmations, shipping updates, or customer service communications regarding your purchase.", "While we make every effort to fulfill orders promptly, shipping times, inventory availability, and delivery schedules may vary.", "For service-related requests, response times may vary depending on request volume and availability."] },
    { id: "cancellation", title: "6. Cancellation", content: ["Orders may be cancelled before shipment whenever possible.", "Once an order has been shipped, cancellation may no longer be available and any return will be subject to our Refund & Return Policy.", "If you need to modify or cancel an order, please contact us as soon as possible."] },
    { id: "warranty-liability", title: "7. Warranty & Limitation of Liability", content: ["Where applicable, products may include a manufacturer's warranty. Any warranty coverage is subject to the terms provided by the manufacturer.", "To the fullest extent permitted by law, Smart ePrint Services makes no guarantee that our website will always be uninterrupted or error-free. We are not responsible for delays caused by shipping carriers, manufacturers, weather conditions, or circumstances beyond our reasonable control. We are not liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our website, products, or services. Our total liability for any claim shall not exceed the amount paid by you for the applicable product or service.", "Nothing in these Terms limits any rights that cannot legally be excluded under applicable law."] },
    { id: "intellectual-property", title: "8. Intellectual Property", content: ["All content available on smarteprintservices.com, including text, graphics, logos, images, icons, website design, and other materials, is owned by or licensed to Smart ePrint Services and Innovation Dynamics Group LLC and is protected by applicable intellectual property laws.", "You may not copy, reproduce, distribute, modify, publish, or use any content without prior written permission."] },
    { id: "acceptable-use", title: "9. Acceptable Use", content: ["When using our website, you agree not to violate any applicable laws or regulations, attempt unauthorized access to our website or systems, introduce viruses, malware, or harmful code, interfere with the operation or security of the website, use automated tools to scrape or extract website content without permission, or misrepresent your identity or affiliation.", "We reserve the right to suspend or restrict access if these Terms are violated."] },
    { id: "indemnification", title: "10. Indemnification", content: ["You agree to indemnify and hold harmless Smart ePrint Services, Innovation Dynamics Group LLC, its officers, employees, affiliates, and service providers from any claims, damages, liabilities, costs, or expenses arising from your use of our website or services, your violation of these Terms, or your violation of any applicable law or the rights of another party."] },
    { id: "governing-law", title: "11. Governing Law", content: ["These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the State of Minnesota, without regard to its conflict of law principles.", "Any dispute arising from these Terms or your use of our website shall be subject to the jurisdiction of the appropriate state or federal courts located in Minnesota.", "We encourage customers to contact us first so we can attempt to resolve any concerns before formal legal action is pursued."] },
    { id: "changes", title: "12. Changes to These Terms", content: ["We may update these Terms & Conditions from time to time to reflect changes in our business, legal requirements, or website operations.", "Any updates will be posted on this page along with a revised Last Updated date. Continued use of our website after changes become effective constitutes acceptance of the updated Terms."] },
    { id: "contact", title: "13. Contact Information", content: ["If you have any questions regarding these Terms & Conditions, please contact us:"] },
  ];

  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-100">Smart ePrint Services</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Terms of <span className="text-[#65adff]">Service</span></h1>
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
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Legal Agreement</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Terms of Service</h2>
              <p className="mt-3 text-sm font-semibold text-slate-500">Last updated: January 2026</p>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website smarteprintservices.com and any related services provided by Smart ePrint Services. By accessing our website or making a purchase, you agree to be bound by these Terms. Please read them carefully before using our services. If you do not agree with any part of these Terms, you should not use our website or purchase products from our store.
              </p>
            </div>

            {sections.map((section) => (
              <section id={section.id} key={section.id} className="border-t border-slate-200 py-10">
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl"><span className="mr-3 text-[#0758cf]">{section.title.split(".")[0]}.</span>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}
                  {section.id === "products-services" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Printers</li>
                      <li>Ink cartridges</li>
                      <li>Toner cartridges</li>
                      <li>Printer accessories</li>
                      <li>Printer setup assistance</li>
                      <li>Wireless printer setup</li>
                      <li>Driver installation guidance</li>
                      <li>Printer troubleshooting assistance</li>
                      <li>General product information</li>
                    </ul>
                  )}
                  {section.id === "acceptable-use" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Violate any applicable laws or regulations.</li>
                      <li>Attempt unauthorized access to our website or systems.</li>
                      <li>Introduce viruses, malware, or harmful code.</li>
                      <li>Interfere with the operation or security of the website.</li>
                      <li>Use automated tools to scrape or extract website content without permission.</li>
                      <li>Misrepresent your identity or affiliation.</li>
                    </ul>
                  )}
                  {section.id === "indemnification" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Your use of our website or services.</li>
                      <li>Your violation of these Terms.</li>
                      <li>Your violation of any applicable law or the rights of another party.</li>
                    </ul>
                  )}
                  {section.id === "contact" && (
                    <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-6">
                      <p className="text-lg font-black">Smart ePrint Services</p><p className="mt-1 text-xs font-semibold text-slate-500">Owned &amp; Operated by Innovation Dynamic Group LLC</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">11397 Quincy St NE<br />Blaine, Minnesota, 55434<br />United States</p>
                      <a href="mailto:support@smarteprintservices.com" className="mt-3 block font-bold text-[#0758cf] hover:underline">support@smarteprintservices.com</a>
                      <a href="tel:+18777652289" className="mt-2 block text-sm font-semibold text-[#0758cf] hover:underline">+1 (877) 765-2289</a>
                    </div>
                  )}
                </div>
              </section>
            ))}

            <div className="border-t border-slate-200 pt-8 text-sm font-semibold text-slate-500">
              If you have any questions about our Terms of Service or need clarification on any policy, our customer support team is here to help.
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}

