import Link from "next/link";
import {
  Truck,
  Clock,
  ShieldCheck,
  RotateCcw,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle2,
  Package,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Shipping & Delivery Policy | Smart ePrint Services",
  description:
    "Official Shipping & Delivery Policy for Smart ePrint Services, owned and operated by Innovation Dynamics Group LLC. Free shipping over $49 in the continental US, 24-hour dispatch on business days, delivery timeframes, tracking, and claims.",
};

const sections = [
  {
    id: "overview-destinations",
    title: "1. Shipping Destinations (Where We Ship)",
    content: [
      "Smart ePrint Services delivers to residential and commercial street addresses across the United States, including all 50 states (the 48 contiguous states, Washington D.C., Alaska, and Hawaii).",
      "Continental United States: All standard and expedited delivery services are available throughout the 48 contiguous states and Washington D.C.",
      "Alaska & Hawaii: We proudly ship to Alaska and Hawaii. Standard carrier transit times may require additional transit days, and free-shipping promotions generally apply to the contiguous United States.",
      "P.O. Boxes & APO/FPO Addresses: Standard parcel shipments (such as OEM ink and toner cartridges, printheads, cables, and compact accessories) can be shipped to P.O. Boxes and APO/FPO addresses via the United States Postal Service (USPS). Heavy office printers, floor-standing multifunction units, and freight equipment require a valid physical street address for commercial carrier delivery (UPS or FedEx).",
      "International Shipping: Smart ePrint Services currently ships exclusively within the United States and does not deliver to international addresses or freight forwarders.",
    ],
  },
  {
    id: "free-shipping-rates",
    title: "2. Shipping Rates & Free Shipping Over $49",
    content: [
      "Free Standard Shipping ($0.00): We offer Free Standard Delivery on all qualifying orders with a merchandise subtotal of $49.00 or more shipped to addresses within the Continental United States.",
      "Orders Under $49.00: For orders with a subtotal under $49.00, standard shipping rates are calculated in real time during checkout based on parcel weight, package dimensions, and destination ZIP code, with standard rates typically starting at $9.95.",
      "Expedited Shipping: If you require faster delivery, expedited options (such as Priority or 2-Day Air) are available at checkout. Expedited carrier fees will be clearly displayed before you submit payment.",
      "No Hidden Fees: All shipping fees, handling costs, and applicable taxes are calculated and presented transparently in your checkout order summary before you confirm your order.",
    ],
  },
  {
    id: "order-processing-dispatch",
    title: "3. Order Processing & 24-Hour Dispatch",
    content: [
      "Standard Order Processing: In-stock items are typically processed and packed within 1 to 2 business days (Monday through Friday, excluding official federal holidays).",
      "24-Hour Dispatch Policy: For in-stock items ordered Monday through Friday before 1:00 PM Eastern Standard Time (EST), our fulfillment team processes and hands off your package to the carrier within 24 business hours (1 business day).",
      "Orders Placed After Cutoff & Weekends: Orders placed after 1:00 PM EST on Friday, over the weekend (Saturday and Sunday), or on official U.S. holidays begin processing on the immediately following business day.",
      "Security Verification: In rare cases where an order requires additional address verification or payment authorization from our fraud prevention team, dispatch may take up to 48 business hours. We will contact you immediately if any clarification is needed.",
    ],
  },
  {
    id: "transit-delivery-times",
    title: "4. Estimated Transit & Delivery Times",
    content: [
      "Once your order has been dispatched from our distribution facilities, estimated delivery transit times are as follows:",
      "• Continental US Standard Delivery: 2 to 3 business days following carrier dispatch.",
      "• Continental US Expedited Delivery: 1 to 2 business days following carrier dispatch (when selected at checkout).",
      "• Alaska & Hawaii Standard Delivery: 5 to 7 business days following carrier dispatch.",
      "Carrier Partners: We partner with established, reputable domestic shipping carriers including United Parcel Service (UPS), FedEx, and the United States Postal Service (USPS) to ensure secure, dependable delivery.",
      "Delivery Delays: Transit times are estimates provided by carriers. Actual delivery dates may occasionally be impacted by severe weather conditions, national carrier volume surges (such as peak holiday seasons), or natural disruptions beyond our reasonable control.",
    ],
  },
  {
    id: "order-tracking",
    title: "5. Order Tracking & Notifications",
    content: [
      "Automated Shipping Confirmation: As soon as your order has been packed and handed over to the carrier, we will dispatch an automated shipping confirmation email to the email address provided at checkout.",
      "Tracking Number: Your shipping confirmation email includes the official carrier name (UPS, FedEx, or USPS), package tracking number, and a direct tracking link.",
      "Carrier Scan Timing: Please allow 12 to 24 hours from the time your shipment confirmation email is received for initial carrier tracking scans to populate in the carrier system.",
      "Support Inquiries: You can also inquire about order tracking anytime by contacting our customer care team at support@smarteprintservices.com with your order number.",
    ],
  },
  {
    id: "address-errors-corrections",
    title: "6. Address Accuracy & In-Transit Corrections",
    content: [
      "Customer Responsibility: Customers are responsible for reviewing and verifying the complete accuracy of their shipping address during checkout, including apartment, suite, floor, or building numbers, and the correct 5-digit ZIP code.",
      "Immediate Corrections Before Dispatch: If you notice an error in your delivery address after placing an order, contact our support team immediately by phone at +1 (877) 765-2289 or by email at support@smarteprintservices.com before our 1:00 PM EST dispatch cutoff.",
      "In-Transit Limitations: Once a package has received a carrier scan and departed our facility, carrier security rules prohibit address rerouting or corrections while the package is in transit.",
      "Undeliverable & Returned Packages: If a shipment is returned to our warehouse by the carrier due to an incorrect, incomplete, or vacated address provided by the customer, we will notify you upon receipt. You may choose to have the order reshipped (customer pays applicable reshipment carrier fees) or refunded minus actual return shipping costs incurred.",
    ],
  },
  {
    id: "delayed-lost-damaged",
    title: "7. Delayed, Lost & Damaged Shipments",
    content: [
      "Delayed Shipments: If your carrier tracking has not updated for more than 4 business days or exceeds the estimated delivery window, please notify us. Our logistics team will open an official carrier trace and inquiry on your behalf.",
      "Lost Shipments (\"Delivered\" but Missing): If carrier tracking indicates that your package was delivered, but you cannot locate it:",
      "1. Check all exterior entrances, porches, garage doors, side yards, and parcel lockers.",
      "2. Check with other household members, neighbors, or building front desk management.",
      "3. Verify that the shipping address on your confirmation matches your exact location.",
      "4. Notify us within 5 business days of the marked delivery date. We will initiate a formal lost-package investigation with the carrier. If the carrier confirms the package is lost or misdelivered, we will immediately send a replacement at no cost or issue a 100% full refund.",
      "Damaged Shipments (48-Hour Notice): All deliveries must be inspected upon arrival. If your package arrives crushed, punctured, water-damaged, or broken in transit:",
      "• You must contact Smart ePrint Services within 48 hours of delivery at support@smarteprintservices.com.",
      "• Please include clear photos of the damaged shipping box, carrier shipping label, and damaged contents.",
      "• We will immediately provide a prepaid return shipping label and arrange an urgent replacement or a full 100% refund.",
    ],
  },
  {
    id: "cancellation-cutoff",
    title: "8. Order Cancellation Cutoff",
    content: [
      "Cancellation Window: You may cancel an order free of charge at any time prior to the package being processed for dispatch or transferred to the carrier.",
      "Daily Cancellation Cutoff: For same-day dispatch orders, the cancellation cutoff is 1:00 PM EST on business days (Monday through Friday).",
      "How to Cancel: To cancel an order before cutoff, immediately call our toll-free support line at +1 (877) 765-2289 or email support@smarteprintservices.com with the subject line \"URGENT: Cancel Order #[Your Order Number]\".",
      "Orders Already in Transit: Once an order has entered the carrier network, cancellation is no longer possible. You must accept the delivery and initiate a return in accordance with our 30-day Returns & Refunds Policy.",
    ],
  },
  {
    id: "contact-information",
    title: "9. Customer Care & Shipping Support",
    content: [
      "Have a question about your order, tracking, or delivery schedule? Our dedicated customer support specialists are ready to help:",
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      {/* Hero Header */}
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-100 backdrop-blur-sm">
              <Truck className="h-3.5 w-3.5 text-blue-200" />
              <span>NATIONWIDE DELIVERY POLICY</span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Shipping &amp; <span className="text-[#65adff]">Delivery Policy</span>
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

      {/* Trust Highlights Strip */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Free Over $49</p>
                <p className="text-[11px] text-slate-500">Continental US orders</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">24h Dispatch</p>
                <p className="text-[11px] text-slate-500">Order by 1 PM EST</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">2–3 Days Transit</p>
                <p className="text-[11px] text-slate-500">Standard delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0758cf]">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Full Tracking</p>
                <p className="text-[11px] text-slate-500">Emailed at dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-14">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="top-24 space-y-6 lg:sticky">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">
                On This Page
              </p>
              <nav className="mt-4">
                <ol className="list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-500">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="transition-colors hover:text-[#0758cf]"
                      >
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Quick Contact Box */}
            <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-5 text-xs text-slate-600">
              <p className="font-black text-slate-900">Need Delivery Help?</p>
              <p className="mt-1 text-slate-500">
                Contact our customer support team for shipment tracking and address inquiries.
              </p>
              <div className="mt-4 space-y-2 font-medium">
                <a
                  href="tel:+18777652289"
                  className="flex items-center gap-2 text-[#0758cf] hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +1 (877) 765-2289
                </a>
                <a
                  href="mailto:support@smarteprintservices.com"
                  className="flex items-center gap-2 text-[#0758cf] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  support@smarteprintservices.com
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Document Article */}
          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:px-10 lg:px-14 lg:py-12">
            
            {/* Header intro */}
            <div className="border-b border-slate-200 pb-8">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0758cf]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Transparent Delivery Standards</span>
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Shipping &amp; Delivery Terms
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Effective &amp; Last updated: October 2026
              </p>
              
              {/* Highlight callout establishing entity */}
              <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 p-5 text-sm leading-relaxed text-slate-700">
                <p className="font-bold text-slate-900">
                  Store Identification Notice:
                </p>
                <p className="mt-1">
                  <strong>Smart ePrint Services</strong> (<a href="https://smarteprintservices.com" className="text-[#0758cf] underline">smarteprintservices.com</a>) is an online retail store owned and operated by <strong>Innovation Dynamics Group LLC</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a Minnesota limited liability company based at 11397 Quincy St NE, Blaine, MN 55434.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  This policy outlines our exact shipping zones, dispatch timelines, free shipping threshold, carrier procedures, and support commitments.
                </p>
              </div>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="scroll-mt-24 border-t border-slate-200 py-10"
              >
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">
                    {section.title.split(".")[0]}.
                  </span>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}

                  {/* Section specific highlight banners */}
                  {section.id === "free-shipping-rates" && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm text-emerald-900">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <div>
                          <p className="font-bold text-emerald-950">Free Standard Shipping Guarantee:</p>
                          <p className="mt-0.5 text-xs text-emerald-800 leading-relaxed">
                            Every order with a merchandise total of <strong>$49.00 or more</strong> qualifies for 100% Free Standard Shipping within the 48 contiguous United States. No coupon codes required; the discount applies automatically at checkout.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "order-processing-dispatch" && (
                    <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-950">
                      <div className="flex items-start gap-2.5">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                        <div>
                          <p className="font-bold text-blue-950">24-Hour Dispatch Terms:</p>
                          <p className="mt-0.5 text-xs text-blue-800 leading-relaxed">
                            Eligible in-stock items placed Monday through Friday before <strong>1:00 PM EST</strong> are dispatched within 24 business hours (1 business day). Orders placed after 1:00 PM EST, on weekends, or holidays dispatch on the following business day.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "delayed-lost-damaged" && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-sm text-rose-950">
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                        <div>
                          <p className="font-bold text-rose-950">Damaged Goods Notice (48-Hour Deadline):</p>
                          <p className="mt-0.5 text-xs text-rose-800 leading-relaxed">
                            Inspect your shipment immediately upon arrival. All shipping damage, broken boxes, or item loss must be reported within <strong>48 hours of delivery</strong> to <a href="mailto:support@smarteprintservices.com" className="font-bold underline">support@smarteprintservices.com</a> with photographs to ensure an immediate replacement or refund.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section 9 Contact Block */}
                  {section.id === "contact-information" && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-[#f4f8ff] p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0758cf]">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-lg font-black text-slate-900">
                            Smart ePrint Services
                          </p>
                          <p className="text-xs font-semibold text-slate-500">
                            Owned &amp; Operated by{" "}
                            <span className="font-bold text-slate-700">
                              Innovation Dynamics Group LLC
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 border-t border-blue-100 pt-5 text-sm sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Physical Headquarters
                            </p>
                            <p className="mt-0.5 font-semibold text-slate-700 leading-relaxed">
                              11397 Quincy St NE<br />
                              Blaine, Minnesota 55434<br />
                              United States
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Toll-Free Phone Support
                            </p>
                            <a
                              href="tel:+18777652289"
                              className="mt-0.5 block font-bold text-[#0758cf] hover:underline"
                            >
                              +1 (877) 765-2289
                            </a>
                            <p className="text-xs text-slate-500">
                              Mon – Fri: 9:00 AM – 6:00 PM EST<br />
                              Sat: 10:00 AM – 4:00 PM EST
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Shipping &amp; Support Email
                            </p>
                            <a
                              href="mailto:support@smarteprintservices.com"
                              className="mt-0.5 block font-bold text-[#0758cf] hover:underline"
                            >
                              support@smarteprintservices.com
                            </a>
                            <p className="text-xs text-slate-500">
                              Ticket responses within 24 business hours
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Need to Return an Item?
                            </p>
                            <Link
                              href="/refund-cancellation-policy"
                              className="mt-0.5 block font-bold text-[#0758cf] hover:underline"
                            >
                              View Returns &amp; Refunds Policy &rarr;
                            </Link>
                            <p className="text-xs text-slate-500">
                              30-day hassle-free return window
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Cross-Policy Navigation Footer */}
            <div className="mt-8 border-t border-slate-200 pt-8 text-xs font-semibold text-slate-500">
              <p className="text-slate-700">Related Store Policies &amp; Agreements:</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/terms-and-conditions"
                  className="text-[#0758cf] hover:underline"
                >
                  Terms &amp; Conditions
                </Link>
                <span>&bull;</span>
                <Link
                  href="/refund-cancellation-policy"
                  className="text-[#0758cf] hover:underline"
                >
                  Returns &amp; Refunds Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/privacy-policy"
                  className="text-[#0758cf] hover:underline"
                >
                  Privacy Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/disclaimer"
                  className="text-[#0758cf] hover:underline"
                >
                  Disclaimer
                </Link>
                <span>&bull;</span>
                <Link
                  href="/contact-us"
                  className="text-[#0758cf] hover:underline"
                >
                  Contact Customer Care
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
