import { ChevronDown, HelpCircle, MessageSquareText } from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "FAQs | Smart ePrint Services",
  description: "Frequently asked questions about Smart ePrint Services and support.",
};

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide professional printing, scanning, repair, setup, maintenance, and office productivity support for homes and businesses, with a focus on reliable, efficient solutions.",
  },
  {
    question: "Do you service both homes and businesses?",
    answer:
      "Yes. We support residential customers, small businesses, and office environments with tailored service plans and dependable support for everyday printing and device needs.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book through our appointment page, call us directly, or contact our team by email. Our team will help confirm the best time and service for your request.",
  },
  {
    question: "Do you offer printer repair and maintenance?",
    answer:
      "Absolutely. We diagnose printer issues, handle routine maintenance, and help resolve performance problems to keep your devices running smoothly and efficiently.",
  },
  {
    question: "Can you help with ink and toner supply needs?",
    answer:
      "Yes. We supply compatible and quality-focused printing essentials, including ink and toner options suited to many printer models and usage needs.",
  },
  {
    question: "Do you provide support for new office setups?",
    answer:
      "Yes. We can help with device setup, configuration, and productivity support for new office or home-office environments, making sure your equipment works as expected from day one.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve customers across the Blaine, Minnesota area and nearby locations. Contact us to confirm availability for your specific service area.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, and other standard payment options for supported services. Please contact us if you have a specific payment question.",
  },
  {
    question: "Can I get urgent or time-sensitive help?",
    answer:
      "We do our best to accommodate urgent needs. If you need immediate assistance, please contact our support team and we will review the best available option.",
  },
];

export default function FAQs() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
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
              Everything you need to know about our printer services, support, supplies, and appointment process.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#0758cf]">
              <MessageSquareText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Need help?</p>
              <p className="mt-1 text-lg font-bold text-[#10233d]">Contact our support team</p>
            </div>
          </div>

          <a
            href="mailto:support@smarteprintservices.com"
            className="inline-flex items-center justify-center rounded-full bg-[#061d39] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d2d55]"
          >
            support@smarteprintservices.com
          </a>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
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
      </section>

      <StandardCTA />
    </main>
  );
}
