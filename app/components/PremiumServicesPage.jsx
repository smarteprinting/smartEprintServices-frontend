import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  FileText,
  Home,
  Printer,
  Search,
  Settings,
  Wifi,
  Wrench,
  CalendarCheck,
} from "lucide-react";
import StandardCTA from "./StandardCTA";

const services = [
  {
    id: "setup",
    number: "01",
    title: "Setup and Installation",
    short: "Get a new or relocated printer connected, configured, and ready to work.",
    icon: Wrench,
    points: ["New printer configuration", "Wi-Fi, USB, and computer setup", "Print and scan testing"],
    accent: "#0758cf",
  },
  {
    id: "troubleshooting",
    number: "02",
    title: "Printer Troubleshooting",
    short: "Resolve offline devices, blocked queues, error messages, and interrupted printing.",
    icon: AlertCircle,
    points: ["Printer not responding", "Offline and queue issues", "Error and connection diagnosis"],
    accent: "#0758cf",
  },
  {
    id: "network",
    number: "03",
    title: "Wireless and Network Help",
    short: "Reconnect compatible printers after router, password, or computer changes.",
    icon: Wifi,
    points: ["Wi-Fi reconnection", "Shared printer configuration", "Wireless printing tests"],
    accent: "#0758cf",
  },
  {
    id: "paper",
    number: "04",
    title: "Paper-Feed Assistance",
    short: "Find the cause of repeated jams, angled feeds, and multiple-page feeding.",
    icon: FileText,
    points: ["Paper-path review", "Tray and roller inspection", "Paper size and type checks"],
    accent: "#0758cf",
  },
  {
    id: "quality",
    number: "05",
    title: "Print-Quality Assistance",
    short: "Improve faded text, streaks, smudges, blank areas, and uneven color output.",
    icon: Settings,
    points: ["Cleaning and alignment checks", "Supply-level review", "Print-quality testing"],
    accent: "#0758cf",
  },
  {
    id: "scanner",
    number: "06",
    title: "Scanner and All-in-One Setup",
    short: "Make printing and scanning work together across compatible devices.",
    icon: Search,
    points: ["Scan-to-computer setup", "Document feeder testing", "File format guidance"],
    accent: "#0758cf",
  },
  {
    id: "maintenance",
    number: "07",
    title: "Preventive Maintenance",
    short: "Keep frequently used printers in better working condition with practical care.",
    icon: Printer,
    points: ["Accessible interior cleaning", "Paper-path and roller review", "Visible wear assessment"],
    accent: "#0758cf",
  },
  {
    id: "assessment",
    number: "08",
    title: "Printer Assessment",
    short: "Understand whether service, supplies, or replacement makes the most sense.",
    icon: Check,
    points: ["Condition and age review", "Supply availability", "Practical replacement guidance"],
    accent: "#0758cf",
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <a
      href={`#${service.id}`}
      className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(7,88,207,0.12)]"
    >
      {/* Top accent bar on hover */}
      <div className="absolute left-0 top-0 h-[3px] w-full scale-x-0 rounded-full bg-gradient-to-r from-[#0758cf] to-[#55a2ff] transition-transform duration-300 group-hover:scale-x-100 origin-left" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#0758cf] transition-all duration-300 group-hover:bg-[#0758cf] group-hover:text-white group-hover:shadow-lg">
          <Icon size={20} />
        </div>
        <span className="text-[11px] font-black tracking-[0.25em] text-slate-300 mt-0.5">{service.number}</span>
      </div>

      <h3 className="mt-5 text-[15px] font-black leading-snug tracking-tight text-[#10233d] transition-colors duration-200 group-hover:text-[#0758cf]">
        {service.title}
      </h3>
      <p className="mt-2 text-[13px] leading-6 text-slate-500">{service.short}</p>

      <div className="mt-5 space-y-2">
        {service.points.map((p) => (
          <div key={p} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#0758cf]/40 group-hover:bg-[#0758cf] transition-colors duration-200 shrink-0" />
            <span className="text-[12px] font-semibold text-slate-500">{p}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0758cf]">
        Learn more
        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </a>
  );
}

function ServiceDetailRow({ service, index }) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`scroll-mt-24 ${isEven ? "bg-white" : "bg-[#f0f6ff]"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${!isEven ? "lg:flex-row-reverse" : ""}`}>

          {/* Left / Content */}
          <div className="flex-1 min-w-0">
            {/* Number + icon row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0758cf] text-white shadow-lg shadow-blue-900/20 shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0758cf]">
                  Service {service.number}
                </p>
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl mt-0.5">
                  {service.title}
                </h2>
              </div>
            </div>

            <p className="text-[15px] leading-7 text-slate-600 max-w-lg">
              {service.short}
            </p>

            <Link
              href="/book-an-appointment"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#0758cf] px-6 py-3 text-[13px] font-bold text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0549b0] hover:shadow-lg"
            >
              <CalendarCheck size={15} />
              Request this service
            </Link>
          </div>

          {/* Right / Points card */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="border-b border-slate-100 px-6 py-4 bg-gradient-to-r from-[#0758cf]/5 to-transparent">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0758cf]">What&apos;s included</p>
              </div>
              {/* Points list */}
              <ul className="divide-y divide-slate-100">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-4 px-6 py-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eaf2ff] text-[#0758cf]">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-[14px] font-semibold text-[#10233d]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PremiumServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">

      {/* ─── HERO ─── */}
      <section
        className="relative isolate border-b border-blue-950/10 overflow-hidden"
        style={{ backgroundImage: "url('/bg-hero.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d39]/92 via-[#061d39]/70 to-[#061d39]/30" />
        <div className="relative z-10 mx-auto grid min-h-[55vh] max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#55a2ff]" />
              Printer support, made practical
            </span>
            <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              A printer should<br />
              <span className="text-blue-700">just work.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
              From first-time setup to stubborn offline errors, Smart ePrint Services brings calm, practical help to homes and workplaces across the United States.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-an-appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-extrabold text-[#0758cf] shadow-xl transition hover:-translate-y-0.5">
                Book an appointment <ArrowRight size={17} />
              </Link>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">
                View services
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-6 text-white">
              <div><p className="text-2xl font-black">8+</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-blue-200/70">Service areas</p></div>
              <div><p className="text-2xl font-black">Home</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-blue-200/70">And business</p></div>
              <div><p className="text-2xl font-black">Clear</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-blue-200/70">Next steps</p></div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative ml-auto max-w-[390px] rounded-[30px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <img src="/printer-support-hero.png" alt="Printer support equipment" className="h-[390px] w-full rounded-[22px] object-cover" />
              <div className="absolute -bottom-7 -left-7 max-w-[230px] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0758cf]">The Smart ePrint approach</p>
                <p className="mt-2 text-sm font-bold leading-5 text-[#10233d]">Understand the issue. Explain the options. Get you moving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE CARDS GRID ─── */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#0758cf]">Services, without the jargon</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#10233d] sm:text-5xl">
              Focused help for the problems people actually face.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Choose a starting point below. Every service is shaped around your printer, environment, and desired outcome.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ─── SERVICE DETAIL ROWS ─── */}
      {services.slice(0, 6).map((service, index) => (
        <ServiceDetailRow key={service.id} service={service} index={index} />
      ))}

      {/* ─── HOME / BUSINESS CTA ─── */}
      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#0758cf]">Who we help</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#10233d] sm:text-4xl">
              Service for every environment
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm leading-6 text-slate-500">
              Whether you need help at home or across an office floor, we tailor our service around your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Home */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0758cf] to-[#0549b0] p-8 sm:p-10 text-white">
              {/* decorative circles */}
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm mb-6">
                  <Home size={26} className="text-white" />
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-200 mb-3">For your home</p>
                <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                  Personal &amp; home office printing
                </h3>
                <p className="mt-4 text-sm leading-7 text-blue-100/90 max-w-md">
                  Get your home printer connected, understood, and ready for school, work, forms, and everyday life. We explain every step in plain language.
                </p>

                <ul className="mt-6 space-y-2">
                  {["New printer setup", "Wireless connection help", "Print-quality fixes", "Scanning setup"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                      <CheckCircle2 size={14} className="shrink-0 text-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book-an-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-extrabold text-[#0758cf] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Book home service <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Business */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e1c35] to-[#10233d] p-8 sm:p-10 text-white">
              {/* decorative circles */}
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/[0.04]" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-500/10" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <Building2 size={26} className="text-blue-300" />
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-400 mb-3">For your business</p>
                <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                  Workplace &amp; office printing
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 max-w-md">
                  Keep office printers, scanners, and shared devices dependable without adding more technical noise to your day. We work around your schedule.
                </p>

                <ul className="mt-6 space-y-2">
                  {["Office printer setup", "Network & shared printing", "Multi-device assessment", "Ongoing maintenance"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="shrink-0 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book-an-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#55a2ff] px-6 py-3 text-[13px] font-extrabold text-[#10233d] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#70b3ff] hover:shadow-xl"
                >
                  Request business help <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
