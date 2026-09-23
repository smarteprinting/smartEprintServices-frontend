import {
  ShieldCheck,
  Laptop,
  Home,
  CalendarCheck,
  Users,
  Wrench,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "About Us | SmartEprint Services",
  description:
    "Learn about SmartEprint Services — on-site technology and appliance assistance for homes and businesses. Consultation-first approach with flexible scheduling.",
};

const features = [
  {
    title: "Residential & Business Support",
    description:
      "Reliable on-site assistance for homeowners, offices, and commercial spaces with technology and appliance service needs.",
    icon: Users,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
  },
  {
    title: "Consultation First",
    description:
      "Every service request begins with a consultation to understand your equipment, concerns, and the most suitable assistance.",
    icon: ClipboardCheck,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
  },
  {
    title: "On-Site Technology Support",
    description:
      "Help with computers, printers, networking, smart devices, and office technology at your location.",
    icon: Laptop,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
  },
  {
    title: "Home Appliance Assistance",
    description:
      "Practical assistance for a wide range of household appliances with convenient scheduling.",
    icon: Home,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Appointments are arranged based on your location, availability, and service requirements.",
    icon: CalendarCheck,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Routine maintenance services designed to help keep your technology and appliances operating efficiently.",
    icon: Wrench,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
  },
];

const whyChoose = [
  {
    title: "Consultation-Based Service",
    description:
      "We take time to understand every request before scheduling a technician, ensuring the right assistance from the start.",
    icon: ClipboardCheck,
  },
  {
    title: "Convenient On-Site Visits",
    description:
      "Our team comes directly to your home or business, providing practical assistance where you need it most.",
    icon: Home,
  },
  {
    title: "Residential & Commercial Solutions",
    description:
      "From home technology to business equipment, we support a wide variety of service requirements.",
    icon: Users,
  },
  {
    title: "Independent Service Provider",
    description:
      "SmartEprint Services operates independently and is not affiliated with or authorized by any equipment manufacturer.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Computers & Laptops",
  "Printers & Scanners",
  "Networking Equipment",
  "Smart Home Devices",
  "Home Appliances",
  "Office Technology",
];

export default function AboutPage() {
  return (
    <section className="bg-white">

      {/* ========== FULL-WIDTH HERO WITH BACKGROUND IMAGE ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/about-hero-bg.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#011B3E]/95 via-[#024AD8]/80 to-[#0B63F6]/70" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-3xl" />
            <div className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-16 lg:py-20">

            <div className="max-w-4xl">

              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                About SmartEprint Services
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                On-Site
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Technology & Appliance
                </span>
                Support and Assistance
              </h1>

              <p className="mt-6 max-w-2xl text-[15.5px] sm:text-[17px] leading-relaxed text-blue-100/90 font-medium">
                SmartEprint Services provides dependable consultation-based
                technology and appliance assistance for residential and business
                customers. Practical solutions, transparent communication, and
                convenient on-site support tailored to your needs.
              </p>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                {[
                  { value: "On-Site", label: "On-Site Service" },
                  { value: "Flexible", label: "Consultation Support" },
                  { value: "Client", label: "Focused" },
                ].map((stat) => (
                  <div key={stat.label} className="min-w-[120px]">
                    <div className="text-2xl font-extrabold text-white md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[13px] font-medium text-blue-200/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== TECHNOLOGY & APPLIANCE ASSISTANCE SECTION ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

            {/* Left column — content */}
            <div className="lg:sticky lg:top-32">

              <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
                What We Do
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
                Technology & Appliance
                <span className="block text-[#024AD8]">Assistance</span>
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-slate-500 font-medium">
                SmartEprint Services helps homeowners and businesses arrange
                dependable on-site assistance for a broad range of technology and
                appliance needs. Every request starts with a consultation so we
                can understand your situation, discuss available options, and
                schedule service based on your location and requirements.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-500 font-medium">
                Whether you need support for computers, printers, networking,
                smart home devices, or household appliances, our goal is to
                deliver straightforward assistance, clear communication, and reliable scheduling from beginning to end.
              </p>

              {/* Highlights pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-[#024AD8]/30 hover:bg-[#024AD8]/5 hover:text-[#024AD8]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#024AD8]" />
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Right column — feature cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8"
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute left-0 top-0 h-1 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: item.gradient }}
                    />

                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                      style={{ background: item.gradient }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-[16px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-500 font-medium">
                      {item.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-[#024AD8]/[0.03] transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-[#024AD8]/[0.06]" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* ========== WHY CHOOSE US ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#F0F7FF] py-12 lg:py-16">

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #024AD8 0.5px, transparent 0)", backgroundSize: "40px 40px" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
                Dependable Service Built
                <span className="text-[#024AD8]"> Around Your Needs</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500 font-medium">
                Every service request is handled with a consultation-first
                approach, allowing us to understand your requirements before
                arranging the most suitable on-site assistance.
              </p>

            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {whyChoose.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#024AD8]/10"
                  >
                    {/* Number watermark */}
                    <span className="absolute -right-2 -top-4 text-[5rem] font-black leading-none text-[#024AD8]/[0.04] transition-all duration-500 group-hover:text-[#024AD8]/[0.08]">
                      0{index + 1}
                    </span>

                    <div className="relative">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#024AD8] to-[#0B63F6] shadow-lg shadow-[#024AD8]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-[16px] font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-[#024AD8]">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-relaxed text-slate-500 text-[13.5px] font-medium">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </section>
      </div>

      {/* ========== OUR PROCESS ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <section className="py-12 lg:py-16">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
                Our Process
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
                A Simple & Reliable
                <span className="text-[#024AD8]"> Service Experience</span>
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">

              {[
                {
                  title: "Request a Consultation",
                  text: "Contact us to discuss your technology or appliance requirements so we can better understand your situation.",
                  icon: ClipboardCheck,
                },
                {
                  title: "Assessment & Scheduling",
                  text: "After reviewing your request, we arrange a convenient on-site appointment based on your location and service needs.",
                  icon: CalendarCheck,
                },
                {
                  title: "On-Site Service",
                  text: "A technician visits your location to check your equipment and explain the service options.",
                  icon: Wrench,
                },
              ].map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#024AD8]/8"
                  >
                    {/* Connector line (between cards) */}
                    {index < 2 && (
                      <div className="absolute -right-4 top-1/2 z-10 hidden h-px w-8 bg-[#024AD8]/20 md:block" />
                    )}

                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#024AD8] to-[#0B63F6] text-xl font-extrabold text-white shadow-lg shadow-[#024AD8]/20">
                        {index + 1}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#024AD8]/20 to-transparent" />
                    </div>

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#024AD8]/5">
                      <StepIcon className="h-6 w-6 text-[#024AD8]" />
                    </div>

                    <h3 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#024AD8] transition-colors duration-300 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-slate-500 text-[13.5px] font-medium">
                      {step.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>
      </div>

      {/* ========== CTA ========== */}

   <StandardCTA />

    </section>
  );
}