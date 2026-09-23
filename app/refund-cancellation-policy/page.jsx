import Link from "next/link";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Returns & Refunds Policy | Smart ePrint Services",
  description: "Returns and refunds policy for Smart ePrint Services.",
};

const sections = [
  {
    id: "eligibility",
    title: "1. Eligibility for Returns",
    content: [
      "To qualify for a return, please ensure your item meets the following conditions:",
      "Items must be returned within 30 days of delivery.",
      "The item must be unused and in its original condition.",
      "The item must include original packaging.",
      "All accessories, manuals, and components must be included.",
      "Items must not show signs of wear, damage, or modification."
    ]
  },
  {
    id: "initiate",
    title: "2. How to Initiate a Return",
    content: [
      "To start a return, please follow these steps:",
      "1. Contact our customer service team at support@smarteprintservices.com with your order number.",
      "2. We will verify eligibility and provide a Return Merchandise Authorization (RMA) number.",
      "3. Package the item securely with all original accessories and documentation.",
      "4. Ship the item to our return address using a trackable shipping method.",
      "Important: Do not send items back without an RMA number. Returns without an RMA may be refused or delayed."
    ]
  },
  {
    id: "shipping-costs",
    title: "3. Return Shipping Costs",
    content: [
      "Standard returns: Customer pays return shipping.",
      "Defective or damaged items: Free return shipping provided.",
      "Our error (wrong item sent): Free return shipping provided."
    ]
  },
  {
    id: "refunds",
    title: "4. Refunds",
    content: [
      "Once your return is received and inspected, we will notify you of the approval status:",
      "Refund will be issued to your original payment method.",
      "Refund processing takes 5-10 business days after inspection.",
      "Your bank may take additional time to post the refund.",
      "Original shipping costs are non-refundable (unless our error).",
      "If you haven't received your refund after 15 business days from approval, please contact your financial institution first, then reach out to our customer service team."
    ]
  },
  {
    id: "damaged-defective",
    title: "5. Damaged or Defective Items",
    content: [
      "If a product arrives damaged or defective, we'll make it right:",
      "1. Contact us within 48 hours of delivery with photos of the damage.",
      "2. Keep all original packaging until the claim is resolved.",
      "3. We will arrange for pickup or provide return shipping instructions.",
      "4. Choose between a replacement or full refund.",
      "Resolution options for damaged/defective items: Replacement, Refund, Store Credit."
    ]
  },
  {
    id: "non-returnable",
    title: "6. Non-Returnable Items",
    content: [
      "The following items cannot be returned unless defective:",
      "Opened ink or toner cartridges.",
      "Software with broken seal or activated license.",
      "Consumables (paper, labels, cleaning supplies).",
      "Items returned without original accessories.",
      "Custom or personalized orders.",
      "Items damaged due to customer misuse."
    ]
  },
  {
    id: "exchanges",
    title: "7. Exchanges",
    content: [
      "We do not automatically exchange items. If you need a different product, please follow this process:",
      "1. Return the original item for a refund (following our return process).",
      "2. Place a new order on our website for the desired product.",
      "This ensures you get exactly what you want and allows us to process your orders efficiently."
    ]
  },
  {
    id: "updates",
    title: "8. Policy Updates",
    content: [
      "Smart ePrint Services reserves the right to update this Returns & Refunds Policy at any time. Changes take effect when posted on this page.",
      "The \"Last updated\" date at the top of this page indicates when the policy was most recently revised. We encourage you to review this policy periodically."
    ]
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      "If you have questions about returns, refunds, or need assistance with an order, please contact us:",
      "Returns & Refunds: support@smarteprintservices.com",
      "General Support: support@smarteprintservices.com"
    ]
  }
];

export default function RefundCancellationPolicy() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-100">Smart ePrint Services</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Returns &amp; <span className="text-[#65adff]">Refunds Policy</span></h1>
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
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Customer Care</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Returns &amp; Refunds Policy</h2>
              <p className="mt-3 text-sm font-semibold text-slate-500">Last updated: January 2026</p>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                At Smart ePrint Services, your satisfaction is our priority. If you're not completely happy with your purchase, we offer a straightforward 30-day return policy. Please read this Returns & Refunds Policy carefully before placing an order to understand your rights and our procedures.
              </p>
            </div>

            {sections.map((section) => (
              <section id={section.id} key={section.id} className="border-t border-slate-200 py-10">
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl"><span className="mr-3 text-[#0758cf]">{section.title.split(".")[0]}.</span>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t border-slate-200 pt-8 text-sm font-semibold text-slate-500">
              Need More Help? Our customer support team is ready to assist you with any questions about returns, refunds, or your orders.
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
