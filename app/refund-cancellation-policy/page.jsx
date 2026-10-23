import Link from "next/link";
import {
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Package,
  Truck,
  Clock,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Returns & Refunds Policy | Smart ePrint Services",
  description:
    "30-day return policy for Smart ePrint Services, owned and operated by Innovation Dynamics Group LLC. Covers return conditions, non-returnable items, RMA process, refund timelines, shipping costs, and damaged item procedures.",
};

export default function RefundCancellationPolicy() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      {/* Hero */}
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-100 backdrop-blur-sm">
              <RotateCcw className="h-3.5 w-3.5 text-blue-200" />
              <span>CUSTOMER SATISFACTION GUARANTEE</span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Returns &amp; <span className="text-[#65adff]">Refunds Policy</span>
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

      {/* Trust Strip */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <RotateCcw className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">30-Day Returns</p>
                <p className="text-[11px] text-slate-500">From date of delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">5–10 Day Refunds</p>
                <p className="text-[11px] text-slate-500">After inspection approval</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">RMA Required</p>
                <p className="text-[11px] text-slate-500">Contact us before shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Damaged: 48h</p>
                <p className="text-[11px] text-slate-500">Report deadline for claims</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-14">

          {/* Sidebar */}
          <aside className="top-24 space-y-6 lg:sticky">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">
                On This Page
              </p>
              <nav className="mt-4">
                <ol className="list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-500">
                  {[
                    ["30-day-return-window", "30-Day Return Window"],
                    ["return-eligibility", "Product Condition Required"],
                    ["non-returnable", "Non-Returnable Items"],
                    ["how-to-return", "How to Request a Return"],
                    ["return-shipping", "Return Shipping Responsibility"],
                    ["restocking-fee", "Restocking Fee"],
                    ["damaged-defective", "Damaged / Defective Items"],
                    ["refund-processing", "Refund Processing & Timeline"],
                    ["original-shipping", "Original Shipping Charges"],
                    ["exchanges", "Exchanges"],
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
              <p className="font-black text-slate-900">Need Help With a Return?</p>
              <p className="mt-1 text-slate-500">
                Contact our customer care team to start the return process.
              </p>
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
                <span>Customer Satisfaction Guarantee</span>
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Returns &amp; Refunds Policy
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Effective &amp; Last updated: October 2026
              </p>

              {/* Intro callout */}
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 text-sm leading-relaxed text-emerald-950">
                <p className="font-bold">✓ Smart ePrint Services — 30-Day Return Guarantee</p>
                <p className="mt-1 text-xs text-emerald-800">
                  Smart ePrint Services, an online store owned and operated by <strong>Innovation Dynamics Group LLC</strong>, stands behind every product we sell. If you are not completely satisfied with your purchase, you have <strong>30 calendar days from the confirmed carrier delivery date</strong> to initiate a return under the conditions stated below.
                </p>
                <p className="mt-2 text-xs text-emerald-800">
                  <strong>Important:</strong> Please read all sections carefully. The refund amount you receive may be less than the original purchase price in specific situations—these deductions are clearly explained in each relevant section below.
                </p>
              </div>
            </div>

            {/* Section 1 — 30-Day Return Window */}
            <section id="30-day-return-window" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">1.</span>30-Day Return Window
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  You have <strong>30 calendar days from the date of confirmed carrier delivery</strong> to contact us and request a return authorization. This 30-day period begins on the date the carrier marks your shipment as delivered to your shipping address.
                </p>
                <p>
                  Return requests submitted after the 30-day window has passed will be reviewed on a case-by-case basis at our sole discretion and are not guaranteed.
                </p>
                <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p className="text-emerald-900">
                    <strong>Homepage Claim Confirmed:</strong> Our website advertises &ldquo;30-Day Returns.&rdquo; This policy fully supports and defines that claim. The return window is <strong>30 calendar days from delivery</strong>, not from the order date.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 — Product Condition */}
            <section id="return-eligibility" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">2.</span>Product Condition Required for Return
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  To qualify for a return and refund, the returned item <strong>must meet all of the following conditions</strong> upon inspection at our returns facility:
                </p>
                <ul className="space-y-3 pl-0">
                  {[
                    "Brand-new and completely unused — the item must not have been installed, activated, powered on, loaded with paper, or had ink cartridges inserted.",
                    "In its original manufacturer packaging — original box, foam inserts, protective wrapping, and factory seals must be intact and undamaged.",
                    "Includes all original contents — power cords, cables, USB adapters, ink/toner starter cartridges (factory-sealed), software media, documentation, warranty cards, and all accessories originally included.",
                    "Serial number and UPC barcode labels must be fully intact and not defaced, removed, or damaged.",
                    "Must not show signs of customer use, cosmetic wear, scratch marks, chemical exposure, or physical modification.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-amber-900">
                    <strong>Partial Refund Warning:</strong> Items returned that do not meet all conditions above — such as missing accessories, damaged packaging, or signs of use — may be subject to a partial refund or rejection of the return at our inspection team&apos;s discretion. This will be communicated to you before any deduction is made.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 — Non-Returnable Items */}
            <section id="non-returnable" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">3.</span>Items That Cannot Be Returned
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  The following items are <strong>final sale and cannot be returned or refunded</strong> unless the product arrived damaged or is proven defective at the time of initial use:
                </p>
                <ul className="space-y-3 pl-0">
                  {[
                    "Opened, installed, or used ink cartridges, toner cartridges, or printhead assemblies — even if only partially used.",
                    "Software licenses, digital activation keys, or downloadable products where the package seal has been broken or the license has been activated.",
                    "Consumable media including opened reams of paper, photo paper, specialty print media, cleaning supplies, and maintenance kits.",
                    "Products returned without all original accessories, manuals, cables, or packaging.",
                    "Items showing evidence of misuse, accidental damage, liquid damage, unauthorized repair, or modification by the customer.",
                    "Items for which the serial number has been defaced, removed, or altered.",
                    "Custom-configured or special-order products arranged on behalf of the customer.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50/60 p-3.5 text-sm">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 4 — How to Request */}
            <section id="how-to-return" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">4.</span>How to Request a Return (RMA Process)
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  All returns require prior authorization. <strong>Do not ship any item back without first obtaining a Return Merchandise Authorization (RMA) number.</strong> Items returned without an approved RMA number will be refused at our returns facility or held without processing.
                </p>
                <div className="space-y-3">
                  {[
                    ["Step 1 — Contact Us", "Email support@smarteprintservices.com or call +1 (877) 765-2289 with your order number, the item(s) you wish to return, and the reason for the return. Do this within the 30-day return window."],
                    ["Step 2 — Eligibility Review", "Our team will review your request against our return conditions. Eligible returns will be issued an RMA number and return warehouse address. Ineligible requests (e.g., non-returnable item, outside window) will be communicated to you with an explanation."],
                    ["Step 3 — Pack the Item Securely", "Re-pack the item in its original manufacturer packaging with all original accessories, documentation, power cords, and components included."],
                    ["Step 4 — Ship the Return", "Ship the item to the RMA return address provided using a trackable shipping carrier. Write your RMA number clearly on the outside of the package. Retain your tracking number as proof of return shipment."],
                    ["Step 5 — Inspection & Refund", "Once received, our returns team will inspect the item within 2–3 business days. You will be notified of the inspection result and refund approval status by email."],
                  ].map(([step, desc], i) => (
                    <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0758cf] text-[11px] font-black text-white">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{step}</p>
                        <p className="mt-0.5 text-slate-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5 — Return Shipping */}
            <section id="return-shipping" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">5.</span>Return Shipping Responsibility
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-slate-600" />
                      <p className="font-bold text-slate-900">Customer Responsibility</p>
                    </div>
                    <p className="mt-2 text-slate-600">
                      For <strong>discretionary returns</strong> (change of mind, wrong model ordered, no longer needed), the customer is responsible for all return shipping costs. We recommend using a trackable, insured carrier. Return shipping fees paid by the customer are <strong>not refunded</strong>.
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-emerald-600" />
                      <p className="font-bold text-emerald-900">Smart ePrint Responsibility</p>
                    </div>
                    <p className="mt-2 text-emerald-800">
                      If the return is due to <strong>our fulfillment error</strong> (wrong item shipped) or the product arrived <strong>damaged or defective out of the box</strong>, Smart ePrint Services will provide a <strong>prepaid return shipping label</strong> at no cost to you.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 — Restocking Fee */}
            <section id="restocking-fee" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">6.</span>Restocking Fee
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  Smart ePrint Services does <strong>not charge a flat restocking fee</strong> for standard returns of eligible items returned in new, unused condition in original packaging with all accessories included.
                </p>
                <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <div className="text-amber-900">
                    <p className="font-bold">Deduction Conditions:</p>
                    <p className="mt-1">
                      If an item is returned in a condition that does not fully meet our return eligibility criteria — for example, missing accessories, damaged packaging, or signs of use — our inspection team may apply a <strong>partial value deduction</strong> to the refund amount to cover the diminished resale value of the item. The deduction amount will be communicated to you <strong>before any refund is processed</strong>, giving you the option to accept the partial refund or, in some cases, request the item be returned to you at your shipping cost.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 — Damaged / Defective */}
            <section id="damaged-defective" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">7.</span>Damaged or Defective Item Process
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  If your product arrives physically damaged in transit or is found to be defective upon first use, we will make it right at no cost to you.
                </p>

                <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-sm">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                    <p className="font-bold text-rose-950">
                      Critical: You must notify us within <strong>48 hours of delivery</strong> for transit-damaged shipments. After this window, carrier damage claims may be denied.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    ["Contact Us Immediately", "Email support@smarteprintservices.com within 48 hours of delivery (for transit damage) or within 7 days of first use (for manufacturing defects). Include your order number and a clear description of the issue."],
                    ["Provide Evidence", "Attach clear photographs of the damaged shipping box, shipping label, and the damaged product contents. For defects, describe the specific fault and include any error codes displayed."],
                    ["Retain All Packaging", "Keep all original packaging, foam inserts, and contents until your claim has been fully resolved. Discarding packaging may affect your claim."],
                    ["Resolution Options", "Once verified, we will offer your choice of: (a) a prompt free replacement of the same item, or (b) a full 100% refund of the item purchase price. We provide the prepaid return shipping label — you pay nothing."],
                  ].map(([step, desc], i) => (
                    <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[11px] font-black text-white">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{step}</p>
                        <p className="mt-0.5 text-slate-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8 — Refund Processing */}
            <section id="refund-processing" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">8.</span>Refund Processing &amp; Timeline
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  Once your returned item is received at our facility, our inspection team will process it within <strong>2 to 3 business days</strong>. Here is the complete refund timeline:
                </p>
                <div className="space-y-2">
                  {[
                    ["Days 1–3 after receipt", "Inspection completed. You receive an email confirming approval status and refund amount (or explanation if partially adjusted)."],
                    ["Days 3–13 after receipt", "Approved refund credited to your original payment method (5–10 business days from inspection approval)."],
                    ["Additional bank processing", "Depending on your card issuer or bank, it may take an additional 2–5 business days for the credit to appear in your account statement."],
                  ].map(([timing, desc], i) => (
                    <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0758cf] text-[11px] font-black text-white">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{timing}</p>
                        <p className="mt-0.5 text-slate-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-amber-900">
                    <strong>Refund Not Arrived?</strong> If you have not received a refund credit after <strong>15 business days from your refund approval email</strong>, first check with your bank or card issuer. If the issue persists, contact us at <a href="mailto:support@smarteprintservices.com" className="font-bold underline">support@smarteprintservices.com</a> with your order number and we will investigate immediately.
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  <strong>Refund Method:</strong> All refunds are credited to the original payment method used at checkout (credit/debit card or the payment account used). We do not issue refunds via check, cash, or alternative payment methods.
                </p>
              </div>
            </section>

            {/* Section 9 — Original Shipping */}
            <section id="original-shipping" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">9.</span>Original Shipping Charges &amp; Refunds
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  The following rules apply to the original outbound shipping fees you were charged at checkout:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-rose-600" />
                      <p className="font-bold text-rose-900">Not Refunded</p>
                    </div>
                    <p className="mt-2 text-rose-800">
                      Original outbound shipping fees are <strong>non-refundable</strong> for discretionary returns (change of mind, wrong model ordered). If you received free shipping on your order, no shipping deduction is made from your refund — only the product price is refunded.
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <p className="font-bold text-emerald-900">Refunded in Full</p>
                    </div>
                    <p className="mt-2 text-emerald-800">
                      If the return is the result of <strong>our error</strong> (wrong item shipped) or the product arrived <strong>damaged or defective</strong>, we will refund the <strong>full item price plus the original shipping charge</strong> you paid — a complete 100% refund of total amount paid.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 — Exchanges */}
            <section id="exchanges" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">10.</span>Exchanges
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>
                  Smart ePrint Services does not process automatic product exchanges. If you need a different product, model, or color, please follow this two-step process:
                </p>
                <ol className="space-y-2 pl-0">
                  <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <span className="font-black text-[#0758cf]">1.</span>
                    <span>Return the original item for a refund by following our standard return process (Sections 2–4 above).</span>
                  </li>
                  <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <span className="font-black text-[#0758cf]">2.</span>
                    <span>Place a new, separate order on <Link href="/shop" className="font-bold text-[#0758cf] hover:underline">smarteprintservices.com</Link> for the product you want.</span>
                  </li>
                </ol>
                <p className="text-sm text-slate-500">
                  This process ensures you get exactly the product you need quickly, while your return is processed in parallel.
                </p>
              </div>
            </section>

            {/* Section 11 — Contact */}
            <section id="contact" className="scroll-mt-24 border-t border-slate-200 py-10">
              <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                <span className="mr-3 text-[#0758cf]">11.</span>Contact Us
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                <p>If you have questions about returns, refunds, or need assistance with an order, please contact our customer care team:</p>

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
                <Link href="/shipping-policy" className="text-[#0758cf] hover:underline">Shipping &amp; Delivery Policy</Link>
                <span>&bull;</span>
                <Link href="/terms-and-conditions" className="text-[#0758cf] hover:underline">Terms &amp; Conditions</Link>
                <span>&bull;</span>
                <Link href="/privacy-policy" className="text-[#0758cf] hover:underline">Privacy Policy</Link>
                <span>&bull;</span>
                <Link href="/contact-us" className="text-[#0758cf] hover:underline">Contact Us</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
