import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Package,
  RotateCcw,
  Truck,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import ContactForm from "./ContactForm";

const contactCards = [
  {
    icon: Phone,
    title: "Phone Support",
    value: "+1 (877) 765-2289",
    href: "tel:+18777652289",
    subtext: "Mon – Fri: 9:00 AM – 6:00 PM EST",
    badge: "Toll-Free",
  },
  {
    icon: Mail,
    title: "Email Customer Care",
    value: "support@smarteprintservices.com",
    href: "mailto:support@smarteprintservices.com",
    subtext: "24/7 ticket response within 24h",
    badge: "Online Support",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "11397 Quincy St NE",
    subtext: "Blaine, Minnesota 55434, United States",
    badge: "Headquarters",
  },
];

const selfServiceLinks = [
  {
    icon: Package,
    title: "Track an Order",
    description: "Check delivery progress and carrier tracking",
    href: "/shop",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Read our 30-day return policy and guidelines",
    href: "/refund-cancellation-policy",
  },
  {
    icon: HelpCircle,
    title: "Help & FAQs",
    description: "Answers to common shipping and payment questions",
    href: "/faqs",
  },
  {
    icon: ShoppingBag,
    title: "Explore Store",
    description: "Printers, scanners, ink, toner, and accessories",
    href: "/shop",
  },
];

const faqItems = [
  {
    question: "How do I check the status of my order?",
    answer:
      "Once your order ships, you will receive a confirmation email with tracking information. You can also reach out to our support team with your Order ID for immediate updates.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 30-day return policy on eligible printers, scanners, and accessories in original packaging. Please review our Return Policy page for step-by-step instructions.",
  },
  {
    question: "How quickly will my shipment arrive?",
    answer:
      "Orders are typically processed within 1–2 business days. Standard delivery within the contiguous United States takes approximately 3–7 business days.",
  },
  {
    question: "Are your products covered by manufacturer warranties?",
    answer:
      "Yes, all brand-new printers and hardware sold on SmartEprint Services include the manufacturer's standard warranty and direct customer support.",
  },
];

export default function PremiumContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* ========== HERO BANNER ========== */}
      <section className="relative overflow-hidden bg-[#061d39] py-14 sm:py-20 text-white">
        {/* Ambient background accents */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#061d39_0%,#092b56_50%,#0b3a75_100%)] opacity-95" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#0041cf]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#93c5fd] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
              Customer Support & Inquiries
            </span>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              We&apos;re Here to Help
            </h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100/80 leading-relaxed">
              Have questions about your order, shipping, returns, or need product recommendations? Get in touch with our customer service team.
            </p>
          </div>

          {/* E-Commerce Support Value Pillars */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Package className="h-6 w-6 text-[#60a5fa] mb-2" />
              <span className="text-xs font-bold text-white">Order Tracking</span>
              <span className="text-[11px] text-blue-200/70 mt-0.5">Live shipping updates</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <RotateCcw className="h-6 w-6 text-[#60a5fa] mb-2" />
              <span className="text-xs font-bold text-white">30-Day Returns</span>
              <span className="text-[11px] text-blue-200/70 mt-0.5">Hassle-free refunds</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Truck className="h-6 w-6 text-[#60a5fa] mb-2" />
              <span className="text-xs font-bold text-white">Fast Dispatch</span>
              <span className="text-[11px] text-blue-200/70 mt-0.5">Prompt order processing</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="h-6 w-6 text-[#60a5fa] mb-2" />
              <span className="text-xs font-bold text-white">Genuine Tech</span>
              <span className="text-[11px] text-blue-200/70 mt-0.5">Full brand warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CHANNELS & FORM SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* LEFT: Contact Cards & Self Service (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#024AD8]">
                  Get In Touch
                </span>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                  Reach Our Customer Care
                </h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Choose the channel most convenient for you. Our team is dedicated to providing prompt, helpful assistance for every customer.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3.5">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  const isLink = Boolean(card.href);
                  const CardWrapper = isLink ? "a" : "div";
                  const props = isLink ? { href: card.href } : {};

                  return (
                    <CardWrapper
                      key={card.title}
                      {...props}
                      className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#024AD8] transition-colors group-hover:bg-[#024AD8] group-hover:text-white">
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                            {card.title}
                          </p>
                          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
                            {card.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors">
                          {card.value}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {card.subtext}
                        </p>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>

              {/* Self-Service Quick Navigation */}
              <div className="rounded-2xl border border-blue-100 bg-[#EEF4FF] p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#024AD8]" />
                  <h3 className="text-sm font-bold text-gray-900">
                    Quick Self-Service Options
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selfServiceLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="group flex flex-col p-3 rounded-xl bg-white border border-blue-100/70 shadow-2xs transition-all hover:border-[#024AD8] hover:shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#024AD8]" />
                          <span className="text-xs font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors">
                            {link.title}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                          {link.description}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMMON QUESTIONS SECTION ========== */}
      <section className="border-t border-gray-200/80 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gray-700">
              Shopping FAQ
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Quick answers about shipping, returns, and ordering with SmartEprint Services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5 sm:p-6 transition hover:shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  {item.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Store Banner */}
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#024AD8] to-[#0B63F6] p-6 sm:p-8 text-white shadow-xl shadow-[#024AD8]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Shop With Confidence
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-white">
                Looking for new printers or scanners?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-blue-100 max-w-md">
                Browse our store for top-rated office hardware, multi-function printers, and guaranteed authentic accessories.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#024AD8] shadow-md transition-all hover:bg-blue-50 active:translate-y-0"
            >
              Browse All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
