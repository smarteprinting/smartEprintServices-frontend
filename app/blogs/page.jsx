import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Blogs | SmartEprint Services",
  description:
    "Helpful articles and practical guidance for everyday technology and appliance care. Tips on device setup, maintenance, smart home technology, and on-site support from SmartEprint Services.",
};

const blogPosts = [
  {
    id: "on-site-technology-consultation",
    title:
      "What to Expect During an On-Site Technology Service Consultation",
    excerpt:
      "Technology and appliances have become part of everyday routines, supporting work, communication, entertainment, and household responsibilities. When a computer slows down, a printer refuses to connect, a network becomes unreliable, or a household appliance begins to show signs of inconsistent performance, it can disrupt daily activities and cause unnecessary inconvenience. In many situations, an on-site service consultation provides a practical way to understand the issue before deciding on the next steps.",
    image: "/k-hub1.png",
    date: "July 10, 2026",
    readTime: "6 min read",
    category: "Service Guide",
  },
  {
    id: "keep-technology-running-smoothly",
    title:
      "Simple Ways to Keep Home and Office Technology Running Smoothly",
    excerpt:
      "Technology supports nearly every part of modern life. From computers used for work and education to printers, Wi-Fi networks, smart home devices, and office equipment, reliable performance often depends on consistent care rather than waiting for problems to appear. While no device can operate perfectly forever, a few practical habits can help reduce interruptions and support everyday productivity.",
    image: "/k-hub2.png",
    date: "July 8, 2026",
    readTime: "5 min read",
    category: "Maintenance",
  },
  {
    id: "improving-home-wifi-stability",
    title:
      "A Practical Guide to Improving Home Wi-Fi and Network Stability",
    excerpt:
      "A reliable network has become just as important as electricity in many homes and workplaces. Computers, printers, televisions, smart home devices, security systems, video meetings, and online entertainment all depend on a stable connection. When the network begins slowing down or disconnecting unexpectedly, even simple daily tasks can become frustrating.",
    image: "/k-hub3.png",
    date: "July 5, 2026",
    readTime: "7 min read",
    category: "Networking",
  },
  {
    id: "tv-installation-guide",
    title:
      "What to Know Before Installing or Mounting a Television at Home",
    excerpt:
      "A television often becomes the centerpiece of a living room, bedroom, office, or entertainment area. While selecting the right screen size and display technology receives plenty of attention, the installation itself plays an equally important role in creating a comfortable viewing experience. Proper planning can improve visibility, reduce cable clutter, and help the television fit naturally within the surrounding space.",
    image: "/blog-tv-mounting.png",
    date: "July 3, 2026",
    readTime: "5 min read",
    category: "Installation",
  },
  {
    id: "common-printer-performance-issues",
    title:
      "Understanding Common Printer Performance Issues in Homes and Offices",
    excerpt:
      "Printers remain one of the most frequently used devices in homes, schools, and workplaces. From everyday documents and assignments to business reports and presentations, they help transform digital information into physical copies whenever needed. Like any equipment used regularly, printers may occasionally behave differently than expected. A document may take longer to print, colors may appear inconsistent, or the printer may stop communicating with a computer.",
    image: "/blog-printer-issues.png",
    date: "June 30, 2026",
    readTime: "6 min read",
    category: "Troubleshooting",
  },
  {
    id: "computer-system-care",
    title:
      "Keeping Computers Running Efficiently Through Regular System Care",
    excerpt:
      "Computers have become essential tools for work, education, communication, entertainment, and everyday household tasks. Whether used for managing business operations, attending virtual meetings, storing personal files, or browsing the internet, consistent performance often depends on regular care rather than reacting only when problems appear.",
    image: "/blog-computer-care.png",
    date: "June 27, 2026",
    readTime: "5 min read",
    category: "Computer Care",
  },
  {
  id: "smart-home-device-maintenance-guide",
  title:
    "Keeping Smart Home Devices Reliable Through Regular Maintenance and Proper Setup",
  excerpt:
    "Smart home technology has become an important part of everyday living. From smart speakers and security cameras to connected thermostats, lighting systems, and home automation devices, these products make daily routines more convenient and efficient. Like any technology, however, smart home devices perform best when they are properly configured, maintained, and connected to a stable network. Understanding a few simple maintenance practices can help improve reliability, reduce connectivity issues, and extend the life of your smart home equipment.",
  image: "/k-hub4.png",
  date: "July 12, 2026",
  readTime: "6 min read",
  category: "Smart Home",
},
];

/* Split into featured (first) + rest */
const featuredPost = blogPosts[0];
const remainingPosts = blogPosts.slice(1);

export default function BlogsPage() {
  return (
    <section className="bg-white">

      {/* ========== FULL-WIDTH HERO ========== */}

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
          </div>

          <div className="relative z-10 mx-auto flex min-h-[45vh] max-w-7xl flex-col justify-center px-6 py-16 lg:py-20">
            <div className="max-w-3xl">

              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                SmartEprint Blog
              </span>

              <h1 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Insights &
                <span className="block bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
                  Practical Guidance
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15.5px] sm:text-[17px] leading-relaxed text-blue-100/90 font-medium">
                Helpful articles covering technology tips, appliance care,
                smart home setup, and maintenance advice from
                SmartEprint Services.
              </p>

            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ========== FEATURED POST ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
              <BookOpen className="h-3.5 w-3.5" />
              Featured Article
            </span>
          </div>

          <Link
            href={`/blogs/${featuredPost.id}`}
            className="group block overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#024AD8]/8"
          >
            <div className="grid lg:grid-cols-[1.2fr_1fr]">

              {/* Image */}
              <div className="relative h-72 overflow-hidden lg:h-auto lg:min-h-[420px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />

                {/* Category badge */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#024AD8] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    <Tag className="h-3 w-3" />
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">

                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-black leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#024AD8] sm:text-2xl lg:text-3xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed font-medium text-gray-500 line-clamp-4">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-6 py-3.5 text-[14px] font-bold text-white shadow-md shadow-[#024AD8]/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#024AD8]/30">
                    Read Full Article
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>

              </div>

            </div>
          </Link>

        </div>
      </div>

      {/* ========== ALL ARTICLES GRID ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <div className="bg-gradient-to-b from-[#F8FAFF] to-white">

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #024AD8 0.5px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16">

            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#024AD8]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#024AD8]">
                Latest Articles
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                More from <span className="text-[#024AD8]">SmartEprint</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-gray-500">
                Browse our latest articles for practical tips and
                insights on technology and appliance care.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#024AD8]/8"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#024AD8] px-3 py-1 text-xs font-bold text-white shadow-md">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">

                    <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-[16px] font-extrabold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#024AD8] line-clamp-3">
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[13.5px] font-medium leading-relaxed text-gray-500 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#024AD8] transition-all duration-300 group-hover:gap-3">
                      View More
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ========== BOTTOM CTA ========== */}

      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#011B3E] via-[#024AD8] to-[#0B63F6]">

          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center text-white lg:flex-row lg:text-left">

            <div>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Need On-Site
                <span className="block text-blue-200">Assistance?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-blue-100/90">
                Contact SmartEprint Services today to schedule a consultation
                and let us help with your technology or appliance service needs.
              </p>
            </div>

            <Link
              href="/book-an-appointment"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[14px] font-bold text-[#024AD8] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Book an Appointment
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </section>
      </div>

    </section>
  );
}
