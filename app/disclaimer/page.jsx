import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Award,
  Tag,
  Gavel,
  Link2,
  AlertCircle,
  FileText,
  Phone,
  Mail,
  MapPin,
  Info,
  CheckCircle2,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Disclaimer & Trademark Notice | Smart ePrint Services",
  description:
    "Disclaimer and Trademark Notice for Smart ePrint Services, an independent online retailer owned and operated by Innovation Dynamics Group LLC. HP Authorized Reseller status, third-party trademark disclosures, limitation of liability, and accuracy of information.",
};

export default function Disclaimer() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      {/* Hero */}
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-100 backdrop-blur-sm">
              <Scale className="h-3.5 w-3.5 text-blue-200" />
              <span>LEGAL NOTICE &amp; TRADEMARK DISCLOSURE</span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Disclaimer &amp; <span className="text-[#65adff]">Trademark Notice</span>
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
                    ["store-identity", "Store Identity"],
                    ["trademark-notice", "Trademark Notice"],
                    ["hp-authorized-reseller", "HP Authorized Reseller Status"],
                    ["product-information", "Product Information"],
                    ["warranty-information", "Warranty Information"],
                    ["third-party-links", "Third-Party Links"],
                    ["accuracy-of-information", "Accuracy of Information"],
                    ["limitation-of-liability", "Limitation of Liability"],
                    ["changes", "Changes to This Disclaimer"],
                    ["contact", "Contact Us"],
                  ].map(([id, label]) => (
                    <li key={id}>
                      <a href={`#${id}`} className="transition-colors hover:text-[#0758cf]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-5 text-xs text-slate-600">
              <p className="font-black text-slate-900">Questions?</p>
              <p className="mt-1 text-slate-500">Contact our customer care team for any questions about our policies.</p>
              <div className="mt-4 space-y-2 font-medium">
                <a href="tel:+18777652289" className="flex items-center gap-2 text-[#0758cf] hover:underline">
                  <Phone className="h-3.5 w-3.5" />
                  +1 (877) 765-2289
                </a>
                <a href="mailto:support@smarteprintservices.com" className="flex items-center gap-2 text-[#0758cf] hover:underline">
                  <Mail className="h-3.5 w-3.5" />
                  support@smarteprintservices.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Article */}
          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:px-10 lg:px-14 lg:py-12">

            {/* Header */}
            <div className="border-b border-slate-200 pb-8">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0758cf]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Legal Notice &amp; Trademark Disclosure</span>
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Disclaimer &amp; Trademark Notice
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">Effective &amp; Last updated: October 2026</p>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                The information provided on <strong>smarteprintservices.com</strong> (the &ldquo;Website&rdquo;) is intended for general informational and commercial purposes. By accessing and using this Website, you acknowledge that you have read and understood the notices below. If you have any questions, please <Link href="/contact-us" className="font-bold text-[#0758cf] hover:underline">contact us</Link>.
              </p>
            </div>

            {/* Section 1 — Store Identity */}
            <section id="store-identity" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">1.</span>Store Identity
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <div className="overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-[#f4f8ff] p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0758cf]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900">Smart ePrint Services</p>
                      <p className="text-xs font-semibold text-slate-500">
                        An online store owned and operated by{" "}
                        <span className="font-bold text-slate-700">Innovation Dynamics Group LLC</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    <strong>Smart ePrint Services</strong> is an independent online retail store owned and operated by <strong>Innovation Dynamics Group LLC</strong>, a limited liability company organized under the laws of the United States. Smart ePrint Services is not a manufacturer. We are an authorized reseller and independent retailer of printers, ink, toner, and printing accessories sold to consumers throughout the continental United States.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 — Trademark Notice */}
            <section id="trademark-notice" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Tag className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">2.</span>Trademark Notice
                </h2>
              </div>
              <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-600">
                <p>
                  All product names, brand names, logos, model numbers, and trademarks displayed on this Website are the property of their respective owners. The use of any third-party trademark, trade name, or brand name on this Website is solely for the purpose of accurately identifying and describing the products being sold and does not imply any endorsement, sponsorship, or affiliation beyond what is explicitly stated herein.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm">
                  <p className="font-bold text-slate-900">Third-Party Trademarks Referenced on This Website</p>
                  <div className="mt-3 space-y-2">
                    {[
                      ["HP®", "Registered trademark of HP Inc. Smart ePrint Services is an HP Authorized Reseller. See Section 3 for important details about what this means."],
                      ["Canon®", "Registered trademark of Canon Inc."],
                      ["Epson®", "Registered trademark of Seiko Epson Corporation."],
                      ["Brother®", "Registered trademark of Brother Industries, Ltd."],
                      ["Xerox®", "Registered trademark of Xerox Holdings Corporation."],
                      ["Samsung®", "Registered trademark of Samsung Electronics Co., Ltd."],
                    ].map(([brand, note]) => (
                      <div key={brand} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                        <div>
                          <span className="font-bold text-slate-900">{brand}</span>
                          <span className="ml-2 text-slate-500">— {note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    All other product and company names mentioned on this Website are trademarks or registered trademarks of their respective holders.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 — HP Authorized Reseller */}
            <section id="hp-authorized-reseller" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">3.</span>HP Authorized Reseller Status
                </h2>
              </div>
              <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-600">
                <p>
                  <strong>Innovation Dynamics Group LLC (Smart ePrint Services) is an HP Authorized Reseller.</strong> This means we are authorized by HP Inc. to sell genuine HP products, and the HP products listed on this Website are authentic HP merchandise sourced through authorized HP distribution channels.
                </p>

                {/* What it DOES mean */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 text-sm">
                  <p className="font-bold text-emerald-900">✓ What &ldquo;HP Authorized Reseller&rdquo; Means:</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "HP products we sell are genuine, new, and sourced through HP's authorized distribution network.",
                      "We are permitted to sell HP products and use HP trademarks, logos, and branding for the purpose of accurately identifying and marketing HP merchandise.",
                      "Customers purchasing HP products from Smart ePrint Services are entitled to applicable HP manufacturer warranty coverage.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span className="text-emerald-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What it does NOT mean */}
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5 text-sm">
                  <p className="font-bold text-amber-900">
                    <AlertCircle className="mb-0.5 mr-1.5 inline h-4 w-4 text-amber-600" />
                    Important Clarification — What &ldquo;HP Authorized Reseller&rdquo; Does <em>Not</em> Mean:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Smart ePrint Services is NOT HP Inc. or any division, subsidiary, or agent of HP Inc.",
                      "Smart ePrint Services is NOT HP Customer Support, HP Technical Support, or HP's official service and repair network.",
                      "Purchasing from Smart ePrint Services does not create a direct commercial relationship between the customer and HP Inc.",
                      "For HP warranty service, technical support, driver downloads, and product registration, customers must contact HP Inc. directly at hp.com or through HP's official support channels.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <span className="text-amber-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-sm text-blue-900">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                  <p>
                    <strong>In summary:</strong> Smart ePrint Services is an authorized, independent business that sells genuine HP products. We are not HP itself. If you need HP manufacturer support, warranty service, or technical assistance from HP directly, please visit{" "}
                    <a href="https://support.hp.com" target="_blank" rel="noopener noreferrer" className="font-bold underline">
                      support.hp.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 — Product Information */}
            <section id="product-information" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">4.</span>Product Information &amp; Availability
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  All products displayed on the Website are subject to availability. Prices shown are in U.S. dollars and are subject to change. Product images are provided for illustrative purposes only and may not exactly represent the actual product in color, dimensions, or included accessories. We recommend verifying technical specifications and compatibility requirements directly with the manufacturer before purchase.
                </p>
                <p>Smart ePrint Services expressly reserves the right to:</p>
                <ul className="space-y-2 pl-0">
                  {[
                    "Modify product pricing at any time without prior notice.",
                    "Limit quantities available for purchase at our sole discretion.",
                    "Cancel orders if products are discontinued, out of stock, or become unavailable from our suppliers.",
                    "Correct any pricing errors that may occur on the Website — see our Terms & Conditions for full pricing error policy.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0758cf] text-[10px] font-black text-white">{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 5 — Warranty */}
            <section id="warranty-information" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">5.</span>Warranty Information
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  Products sold through Smart ePrint Services may be eligible for manufacturer warranty coverage where applicable. <strong>Smart ePrint Services does not provide manufacturer warranty service, technical support, or repair services.</strong> For warranty claims, software support, driver downloads, and technical assistance, customers must contact the applicable manufacturer directly:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  {[
                    ["HP Inc.", "https://support.hp.com"],
                    ["Canon USA", "https://www.usa.canon.com/support"],
                    ["Epson America", "https://epson.com/support"],
                    ["Brother", "https://www.brother-usa.com/support"],
                  ].map(([name, url]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-[#0758cf] hover:bg-white transition-colors"
                    >
                      <span className="font-bold text-slate-900">{name} Support</span>
                      <span className="text-xs text-[#0758cf] font-semibold">→</span>
                    </a>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Warranty terms, duration, and coverage vary by manufacturer, product model, and region. Customers are advised to review the manufacturer&apos;s warranty documentation included with their product and retain proof of purchase for any warranty claim.
                </p>
              </div>
            </section>

            {/* Section 6 — Third-Party Links */}
            <section id="third-party-links" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Link2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">6.</span>Third-Party Links
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  This Website may contain links to third-party websites provided for convenience and informational purposes only. Smart ePrint Services does not endorse, control, or assume responsibility for any third-party content, availability, accuracy, security, or privacy practices. Clicking on third-party links is at your own risk.
                </p>
                <p>
                  We recommend reviewing the terms of service and privacy policies of any third-party site you visit before submitting personal information.
                </p>
              </div>
            </section>

            {/* Section 7 — Accuracy */}
            <section id="accuracy-of-information" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">7.</span>Accuracy of Information
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  While we make every reasonable effort to ensure that product descriptions, specifications, pricing, and availability information on this Website are accurate and current, we make no representations or warranties — express or implied — regarding the completeness or accuracy of any information at any given time.
                </p>
                <p>
                  Errors and omissions may occur. Smart ePrint Services reserves the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. This includes after an order has been submitted. We will notify you of material corrections affecting your pending order.
                </p>
              </div>
            </section>

            {/* Section 8 — Limitation of Liability */}
            <section id="limitation-of-liability" className="scroll-mt-24 border-t border-slate-200 py-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <Gavel className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">8.</span>Limitation of Liability
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  To the maximum extent permitted by applicable law, Smart ePrint Services, Innovation Dynamics Group LLC, and their respective officers, directors, employees, agents, and suppliers shall not be liable for any:
                </p>
                <ul className="space-y-2 pl-0">
                  {[
                    "Direct or indirect damages arising from use of or inability to use the Website.",
                    "Loss of data, income, profits, or business opportunity.",
                    "Business interruption or operational disruptions.",
                    "Special, incidental, consequential, or punitive damages.",
                    "Damages resulting from reliance on any content or information obtained through the Website.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm">
                  This limitation applies regardless of the theory of liability — whether in contract, tort (including negligence), strict liability, or any other legal theory — even if Smart ePrint Services has been advised of the possibility of such damages. Your use of this Website is at your sole risk. The Website, content, and services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                </p>
              </div>
            </section>

            {/* Section 9 — Changes */}
            <section id="changes" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">9.</span>Changes to This Disclaimer
              </h2>
              <div className="mt-5 text-[15px] leading-7 text-slate-600">
                <p>
                  We may update this Disclaimer and Trademark Notice at any time by posting a revised version on this page with an updated effective date. Your continued use of the Website after any changes constitutes your acceptance of the revised Disclaimer. We encourage you to periodically review this page.
                </p>
              </div>
            </section>

            {/* Section 10 — Contact */}
            <section id="contact" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">10.</span>Contact Us
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  If you have any questions about this Disclaimer, our trademark usage, or our Authorized Reseller status, please contact us:
                </p>

                <div className="overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-[#f4f8ff] p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0758cf]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900">Smart ePrint Services</p>
                      <p className="text-xs font-semibold text-slate-500">
                        Owned &amp; Operated by{" "}
                        <span className="font-bold text-slate-700">Innovation Dynamics Group LLC</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 border-t border-blue-100 pt-5 text-sm sm:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Toll-Free</p>
                        <a href="tel:+18777652289" className="mt-0.5 block font-bold text-[#0758cf] hover:underline">
                          +1 (877) 765-2289
                        </a>
                        <p className="text-xs text-slate-500">Mon–Fri: 9 AM–6 PM EST<br />Sat: 10 AM–4 PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                        <a href="mailto:support@smarteprintservices.com" className="mt-0.5 block font-bold text-[#0758cf] hover:underline break-all">
                          support@smarteprintservices.com
                        </a>
                        <p className="text-xs text-slate-500">Response within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Address</p>
                        <p className="mt-0.5 font-semibold text-slate-700 leading-relaxed">
                          11397 Quincy St NE<br />
                          Blaine, Minnesota 55434<br />
                          United States
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
                <Link href="/terms-and-conditions" className="text-[#0758cf] hover:underline">Terms &amp; Conditions</Link>
                <span>&bull;</span>
                <Link href="/privacy-policy" className="text-[#0758cf] hover:underline">Privacy Policy</Link>
                <span>&bull;</span>
                <Link href="/shipping-policy" className="text-[#0758cf] hover:underline">Shipping Policy</Link>
                <span>&bull;</span>
                <Link href="/refund-cancellation-policy" className="text-[#0758cf] hover:underline">Returns &amp; Refunds</Link>
                <span>&bull;</span>
                <Link href="/cookie-policy" className="text-[#0758cf] hover:underline">Cookie Policy</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
