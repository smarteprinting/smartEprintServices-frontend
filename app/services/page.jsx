import {
  Printer,
  Wrench,
  Wifi,
  Settings,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Home,
  Building2,
  HelpCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import StandardCTA from "../components/StandardCTA";
import PremiumServicesPage from "../components/PremiumServicesPage";

export const metadata = {
  title: "Printer Services | SmartEprint Services",
  description:
    "Smart ePrint Services provides printer setup, troubleshooting, maintenance, and configuration services for residential and business customers across the United States.",
};

const services = [
  {
    id: "complete-printer-services",
    title: "Complete Printer Services",
    tagline: "Help With Setup, Connectivity, Performance, and Maintenance",
    descriptions: [
      "Printer problems can come from many different sources. A device may be working correctly but have an incorrect setting, a lost network connection, a blocked print queue, or a paper-handling issue. In other situations, the printer may need cleaning, adjustment, replacement supplies, or further inspection.",
      "We begin by understanding what is happening, when the problem started, and how the printer is being used. This helps us recommend a service that fits the actual issue rather than applying the same solution to every device."
    ],
    items: [],
    note: "",
    buttonText: "",
    icon: Printer,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
  },
  {
    id: "printer-setup-and-installation",
    title: "Printer Setup and Installation",
    tagline: "A properly configured printer is easier to use and less likely to experience avoidable connection problems.",
    descriptions: [
      "We assist customers with setting up new or relocated printers for home and workplace use. This may include basic printer preparation, connection to a compatible computer, wireless configuration, printer preferences, scanning setup, and test printing.",
      "Setup assistance may include:"
    ],
    items: [
      "New printer configuration",
      "Connection to a desktop or laptop",
      "Wireless network setup",
      "USB printer setup",
      "Printer software configuration",
      "Print and scan testing",
      "Default printer selection",
      "Basic user guidance"
    ],
    note: "",
    buttonText: "Schedule Printer Setup",
    icon: Wrench,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
  },
  {
    id: "printer-troubleshooting",
    title: "Printer Troubleshooting",
    tagline: "When a printer stops working as expected, the visible symptom does not always reveal the actual cause. A printer that appears offline may have a network problem, while incomplete printing may be caused by settings, supplies, or internal maintenance requirements.",
    descriptions: [
      "We review the reported issue, the printer environment, and the available device information before recommending the next step.",
      "Common problems we assist with:"
    ],
    items: [
      "Printer not responding",
      "Printer showing offline",
      "Printing stops unexpectedly",
      "Documents remain in the print queue",
      "Printer is not detected by the computer",
      "Repeated error messages",
      "Slow or interrupted printing",
      "Printer starts but does not produce a page"
    ],
    note: "",
    buttonText: "Request Troubleshooting",
    icon: AlertCircle,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
  },
  {
    id: "wireless-and-network-printer-assistance",
    title: "Wireless and Network Printer Assistance",
    tagline: "Wireless printers can lose their connection after a router replacement, password change, computer update, network reset, or change in office equipment.",
    descriptions: [
      "We help review the existing setup and assist with reconnecting compatible printers to available home or workplace networks.",
      "Network assistance may include:"
    ],
    items: [
      "Connecting a printer to Wi-Fi",
      "Updating saved network information",
      "Reconnecting after a router change",
      "Adding a printer to compatible computers",
      "Reviewing basic network communication",
      "Checking common offline conditions",
      "Testing wireless printing",
      "Supporting shared printer configuration"
    ],
    note: "Network performance, security settings, device compatibility, and administrative permissions may affect the available setup options.",
    buttonText: "Get Network Assistance",
    icon: Wifi,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
  },
  {
    id: "paper-jam-and-paper-feed-assistance",
    title: "Paper Jam and Paper-Feed Assistance",
    tagline: "An occasional paper jam may be caused by incorrectly loaded paper, but repeated jams often indicate a tray, roller, paper-path, or internal feeding problem.",
    descriptions: [
      "We inspect accessible areas of the printer and review how the paper is being loaded and handled.",
      "We can help review:"
    ],
    items: [
      "Frequent paper jams",
      "Paper not feeding",
      "Multiple pages feeding together",
      "Paper entering at an angle",
      "Wrinkled or damaged pages",
      "Incorrect tray settings",
      "Paper size or type mismatches",
      "Visible debris in the paper path"
    ],
    note: "For safety, customers should avoid forcing paper through the printer or using sharp objects inside the device.",
    buttonText: "Request Paper-Feed Service",
    icon: FileText,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
  },
  {
    id: "print-quality-assistance",
    title: "Print-Quality Assistance",
    tagline: "Faded text, lines, streaks, blank areas, incorrect colors, and smudged pages can make otherwise working printers difficult to use.",
    descriptions: [
      "Print-quality problems may be related to ink or toner, printer settings, cleaning requirements, alignment, paper selection, or wear within the printer.",
      "Print-quality services may cover:"
    ],
    items: [
      "Faded or light printing",
      "Streaks and horizontal lines",
      "Missing text or blank areas",
      "Smudged pages",
      "Uneven color output",
      "Incorrect color reproduction",
      "Repeated marks on printed pages",
      "Basic alignment and cleaning checks"
    ],
    note: "Where new ink, toner, or other supplies may be required, the customer is informed before any purchase or replacement is recommended.",
    buttonText: "Improve Print Quality",
    icon: Settings,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
  },
  {
    id: "scanner-and-multifunction-printer-setup",
    title: "Scanner and Multifunction Printer Setup",
    tagline: "Many all-in-one printers require separate configuration for printing and scanning. A printer may produce documents correctly while the scanner remains unavailable on the computer.",
    descriptions: [
      "We assist with basic scanning setup and common communication issues on compatible multifunction devices.",
      "Scanner assistance may include:"
    ],
    items: [
      "Connecting the scanner to a computer",
      "Reviewing available scanning software",
      "Flatbed scanning setup",
      "Document feeder testing",
      "Basic scan-quality settings",
      "File format and save-location guidance",
      "Scan-to-computer configuration",
      "Common scanner connection problems"
    ],
    note: "",
    buttonText: "Request Scanner Assistance",
    icon: Search,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
  },
  {
    id: "preventive-printer-maintenance",
    title: "Preventive Printer Maintenance",
    tagline: "Routine care can help reduce paper dust, ink buildup, feeding problems, and other issues that may affect everyday performance.",
    descriptions: [
      "Our maintenance service focuses on accessible printer areas and basic operational checks. It is suitable for customers who want to keep frequently used printers in better working condition.",
      "Maintenance may include:"
    ],
    items: [
      "General visual inspection",
      "Accessible interior cleaning",
      "Paper-path review",
      "Roller and tray inspection",
      "Removal of loose paper debris",
      "Basic print testing",
      "Supply-level review",
      "Identification of visible wear",
      "Practical maintenance recommendations"
    ],
    note: "Maintenance cannot prevent every future issue, but it can help identify problems before they cause longer interruptions.",
    buttonText: "Schedule Maintenance",
    icon: Wrench,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
  },
  {
    id: "home-printer-services",
    title: "Home Printer Services",
    tagline: "Simple Assistance for Everyday Home Printing",
    descriptions: [
      "Home printers are used for personal documents, remote work, school projects, forms, photographs, and household records. When the printer stops connecting or produces poor results, even a minor problem can become frustrating.",
      "We assist home users with:"
    ],
    items: [
      "New printer setup",
      "Wireless connection",
      "Printer offline issues",
      "Computer and printer communication",
      "Paper-feed problems",
      "Print-quality concerns",
      "Scanning setup",
      "Basic maintenance",
      "Printer relocation and reconnection",
      "General printer-use guidance"
    ],
    note: "Our team explains the available steps in clear language so customers can better understand what is being done and why.",
    buttonText: "Book Home Printer Service",
    icon: Home,
    gradient: "linear-gradient(135deg, #0B63F6, #3B82F6)",
  },
  {
    id: "business-printer-services",
    title: "Business Printer Services",
    tagline: "Reliable Printer Assistance for the Workplace",
    descriptions: [
      "Printers remain an important part of everyday business operations. They are used for invoices, customer documents, labels, reports, records, shipping paperwork, and internal administration.",
      "Smart ePrint Services works with small businesses, professional offices, remote teams, and other workplace environments that need assistance with printer setup and ongoing operation.",
      "Business services may include:"
    ],
    items: [
      "New office printer setup",
      "Connection to compatible workstations",
      "Wireless and network configuration",
      "Printer relocation",
      "Common printer troubleshooting",
      "Print and scan configuration",
      "Routine maintenance",
      "Multiple-printer assessments",
      "Recurring service planning",
      "Recommendations based on workplace needs"
    ],
    note: "The scope of service is based on the number of devices, printer models, network environment, business location, and requested work.",
    buttonText: "Request Business Service",
    icon: Building2,
    gradient: "linear-gradient(135deg, #024AD8, #0B63F6)",
  },
  {
    id: "printer-assessment-and-replacement-guidance",
    title: "Printer Assessment and Replacement Guidance",
    tagline: "Not every printer problem requires an immediate replacement. At the same time, an older printer with repeated failures may no longer be economical to maintain.",
    descriptions: [
      "We can review the printer’s condition and help the customer better understand the available options.",
      "An assessment may consider:"
    ],
    items: [
      "The age and condition of the printer",
      "How frequently the problem occurs",
      "The expected cost of service or parts",
      "Availability of compatible supplies",
      "The customer’s printing volume",
      "Required printing and scanning features",
      "Whether continued maintenance is practical"
    ],
    note: "We provide general guidance based on the available information. The final decision to service or replace the printer remains with the customer.",
    buttonText: "Request a Printer Assessment",
    icon: HelpCircle,
    gradient: "linear-gradient(135deg, #0137a7, #024AD8)",
  },
];

/* Quick-nav icons for the top grid */
const quickServices = services.map((s) => ({
  title: s.title,
  icon: s.icon,
  id: s.id,
  gradient: s.gradient,
}));

function LegacyServicesPage() {
  return (
    <section className="bg-white">

      {/* ========== FULL-WIDTH HERO WITH BACKGROUND IMAGE ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/bg-hero.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#011B3E]/95 via-[#024AD8]/85 to-[#0B63F6]/75" />

          {/* Decorative orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#3B82F6]/10 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-16 lg:py-20">

            <div className="max-w-4xl">

              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                Printer Services for Home and Business
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Practical Solutions for
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Everyday Printing Needs
                </span>
              </h1>

              <div className="mt-6 space-y-4 max-w-2xl text-[15.5px] sm:text-[17px] leading-relaxed text-blue-100/90 font-medium">
                <p>
                  Smart ePrint Services provides printer setup, troubleshooting, maintenance, and configuration services for residential and business customers across the United States.
                </p>
                <p>
                  Whether you are setting up a new printer, dealing with an offline device, experiencing poor print quality, or managing several printers in an office, our team helps you understand the problem and find a practical way forward.
                </p>
                <p>
                  Service options may vary by location, printer model, device condition, and the type of assistance required.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/book-an-appointment"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[14px] font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Book an Appointment
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== QUICK-NAV SERVICE GRID ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              What We <span className="text-[#024AD8]">Offer</span>
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-gray-500">
              Tap any service below to learn more about what&apos;s included.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {quickServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <a
                  href={`#${svc.id}`}
                  key={svc.id}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:border-[#024AD8]/20 hover:shadow-lg hover:shadow-[#024AD8]/8"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                    style={{ background: svc.gradient }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#024AD8] transition-colors duration-300">
                      {svc.title}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* ========== DETAILED SERVICE SECTIONS ========== */}

      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;

        return (
          <div
            key={service.id}
            id={service.id}
            className="relative left-1/2 w-screen -ml-[50vw] scroll-mt-24"
          >
            <div className={isEven ? "bg-white" : "bg-[#F8FAFF]"}>
              <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

                <div className={`grid items-center gap-12 ${service.items.length > 0 ? "lg:grid-cols-2 lg:gap-16" : "grid-cols-1"} ${!isEven && service.items.length > 0 ? "lg:[direction:rtl]" : ""}`}>

                  {/* Content Side */}
                  <div className={`${!isEven && service.items.length > 0 ? "lg:[direction:ltr]" : ""} ${service.items.length === 0 ? "max-w-3xl" : ""}`}>

                    {/* Service icon header */}
                    <div className="mb-5 flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                        style={{
                          background: service.gradient,
                          boxShadow: "0 12px 30px rgba(2, 74, 216, 0.2)",
                        }}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl mt-0.5">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-4 text-[16px] font-bold leading-relaxed text-gray-800">
                      {service.tagline}
                    </p>

                    <div className="mt-4 space-y-3">
                      {service.descriptions.map((desc, i) => (
                        <p key={i} className="text-[15px] font-medium leading-relaxed text-gray-600">
                          {desc}
                        </p>
                      ))}
                    </div>

                    {service.note && (
                      <div className="mt-4 rounded-lg bg-blue-50 p-4 border border-blue-100">
                        <p className="text-[13.5px] font-medium leading-relaxed text-blue-900 italic">
                          {service.note}
                        </p>
                      </div>
                    )}

                    {service.buttonText && (
                      <div className="mt-8">
                        <Link
                          href="/book-an-appointment"
                          className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#024AD8]/30"
                        >
                          {service.buttonText}
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    )}

                  </div>

                  {/* Feature List Card */}
                  {service.items.length > 0 && (
                    <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">

                        {/* Decorative top accent */}
                        <div
                          className="absolute left-0 top-0 h-1.5 w-full"
                          style={{ background: service.gradient }}
                        />

                        {/* Background watermark */}
                        <span className="absolute -bottom-4 -right-2 text-[7rem] font-black leading-none text-[#024AD8]/[0.03] select-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <ul className="relative z-10 space-y-3.5">
                          {service.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#024AD8]" />
                              <span className="text-[14px] font-medium leading-relaxed text-gray-600">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Decorative corner circle */}
                        <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#024AD8]/[0.03]" />

                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* ========== BOTTOM CTA ========== */}

      <StandardCTA  />
    </section>
  );
}

export default PremiumServicesPage;
