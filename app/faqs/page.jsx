import { ChevronDown, HelpCircle, MessageSquareText, Package, Truck, RotateCcw, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "FAQs | Smart ePrint Services — Online Printer & Scanner Retailer",
  description: "Frequently asked questions about ordering, shipping, returns, refunds, warranties, and product compatibility at Smart ePrint Services.",
};

const faqCategories = [
  {
    label: "Products & Shopping",
    Icon: Package,
    faqs: [
      {
        question: "What products do you sell?",
        answer: "Smart ePrint Services is an online retailer selling printers, document scanners, all-in-one multifunction devices, laser printers, inkjet printers, original OEM ink cartridges, toner cartridges, and printing accessories. We carry brands including HP, Canon, Epson, and Brother.",
      },
      {
        question: "Are your products brand new?",
        answer: "Yes. All products listed as new on our website are brand new and sealed in original manufacturer packaging. If a product is open-box or refurbished, it will be clearly labeled on the product page.",
      },
      {
        question: "How can I check printer, ink, or toner compatibility?",
        answer: "Each product page includes compatibility information and specifications. You can also contact our customer service team by email at support@smarteprintservices.com or by phone at +1 (877) 765-2289 and we will help you find the right supplies for your printer model.",
      },
      {
        question: "Do products include a manufacturer warranty?",
        answer: "Yes. Brand-new printers and hardware sold through Smart ePrint Services include the applicable manufacturer standard warranty, typically 1 to 2 years depending on the brand and model. Warranty service is handled directly by the manufacturer. Please retain your proof of purchase.",
      },
    ],
  },
  {
    label: "Orders & Shipping",
    Icon: Truck,
    faqs: [
      {
        question: "Do you ship throughout the United States?",
        answer: "Yes. We ship to all 50 U.S. states. Free standard shipping is available on qualifying orders over $49 within the continental United States. Expedited shipping options are available at checkout.",
      },
      {
        question: "How long does order processing take?",
        answer: "Orders are typically processed and dispatched within 1 to 2 business days after payment is confirmed. You will receive a shipment confirmation email with tracking information once your order ships.",
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you will receive an email containing your tracking number and carrier information. You can use this number on the carrier website to monitor your shipment in real time.",
      },
      {
        question: "Can I cancel an order?",
        answer: "You may request an order cancellation before the order has been shipped. Please contact us as soon as possible at support@smarteprintservices.com or call +1 (877) 765-2289. Once an order has shipped, it cannot be cancelled and must follow our standard return process.",
      },
    ],
  },
  {
    label: "Returns & Refunds",
    Icon: RotateCcw,
    faqs: [
      {
        question: "What is the return period?",
        answer: "We offer a 30-day return policy from the date of delivery. Items must be unused, in original condition, and returned in their original packaging with all included accessories and documentation.",
      },
      {
        question: "How do I return a product?",
        answer: "To initiate a return, contact our customer service team at support@smarteprintservices.com with your order number and reason for return. If approved, we will provide a Return Merchandise Authorization (RMA) number and return instructions. Do not send items back without an RMA number.",
      },
      {
        question: "Who pays for return shipping?",
        answer: "For standard returns, the customer is responsible for return shipping costs. If a product arrives damaged, defective, or if we sent the wrong item, we will provide a prepaid return shipping label.",
      },
      {
        question: "When will I receive my refund?",
        answer: "Once we receive and inspect your returned item, we will notify you of the approval status. Approved refunds are processed to your original payment method within 5 to 10 business days. Your bank or card provider may take additional time to post the credit.",
      },
      {
        question: "What should I do if an item arrives damaged?",
        answer: "Please contact us within 48 hours of delivery with photos of the damaged packaging and product at support@smarteprintservices.com. We will arrange a free return and offer either a replacement or a full refund.",
      },
    ],
  },
  {
    label: "Customer Service",
    Icon: Phone,
    faqs: [
      {
        question: "How can I contact customer service?",
        answer: "You can reach our customer service team by email at support@smarteprintservices.com or by phone at +1 (877) 765-2289. Our team is available Monday to Friday 9:00 AM to 6:00 PM EST, and Saturday 10:00 AM to 4:00 PM EST.",
      },
      {
        question: "What can your team help with?",
        answer: "Our team can assist with product selection and compatibility questions, order status and tracking, returns and refund requests, shipping inquiries, and general customer service matters. For manufacturer warranty service, driver support, or product technical issues, please contact the manufacturer directly — links to manufacturer support are available on our Disclaimer page.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      {/* Hero */}
      <section className="relative isolate border-b border-blue-950/10 bg-[#061d39]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#061d39_10%,rgba(6,29,57,.9),rgba(6,29,57,.45))]" />
        <div className="mx-auto flex min-h-[330px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-blue-100 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#65adff] shadow-[0_0_10px_rgba(101,173,255,0.8)]" />
              Smart ePrint Services
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Frequently Asked <span className="text-[#65adff]">Questions</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg">
              Everything you need to know about ordering, shipping, returns, refunds, and products at Smart ePrint Services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        {/* Contact card */}
        <div className="mb-10 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#0758cf]">
              <MessageSquareText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Still need help?</p>
              <p className="mt-1 text-lg font-bold text-[#10233d]">Contact our customer service team</p>
              <p className="mt-0.5 text-xs text-slate-500">Mon–Fri 9 AM–6 PM EST &bull; Sat 10 AM–4 PM EST</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:support@smarteprintservices.com" className="inline-flex items-center gap-2 rounded-full bg-[#061d39] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d2d55]">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <a href="tel:+18777652289" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50">
              <Phone className="h-4 w-4" />
              +1 (877) 765-2289
            </a>
          </div>
        </div>

        {/* FAQ categories */}
        <div className="space-y-10">
          {faqCategories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5ff] text-[#0758cf]">
                  <cat.Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-black text-[#10233d]">{cat.label}</h2>
              </div>
              <div className="space-y-3">
                {cat.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-[0_12px_30px_rgba(10,38,72,0.06)]"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef5ff] text-[#0758cf]">
                          <HelpCircle className="h-5 w-5" />
                        </div>
                        <span className="text-base font-black tracking-tight text-[#10233d] sm:text-lg">{faq.question}</span>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition group-open:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </summary>
                    <div className="border-t border-slate-200 bg-slate-50/30 px-5 py-5 text-[15px] leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[28px] bg-gradient-to-br from-[#0c1e3c] to-[#0f3a8a] p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-black sm:text-3xl">Have more questions?</h2>
          <p className="mt-3 text-sm text-blue-100 max-w-lg mx-auto">
            Our customer service team is here to help with product selection, orders, shipping, returns, and anything else you need.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-black text-[#0f6cff] transition hover:bg-blue-50">
              Contact Us
            </Link>
            <Link href="/shop" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/20">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
