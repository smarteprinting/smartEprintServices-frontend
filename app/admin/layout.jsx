"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { apiFetch as fetch } from "../../lib/api";
import {
  LayoutDashboard,
  FolderKanban,
  Package,
  Users,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Settings,
  PlusCircle,
  ShoppingBag,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  User,
  ExternalLink,
  Search,
  Bell,
  ChevronDown,
  CalendarDays,
  Clock3,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Keep the login flow separate from the admin shell.
  const isAuthPage = ["/admin", "/admin/login", "/admin/signup"].includes(pathname);

  useEffect(() => {
    if (pathname === "/admin") {
      router.replace("/admin/login");
      return;
    }

    if (isAuthPage) return;

    // Check session
    fetch("/api/admin/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setAdminUser(data.user);
        } else {
          router.replace("/admin/login");
        }
      })
      .catch(() => router.replace("/admin/login"));
  }, [pathname, isAuthPage, router]);

  if (isAuthPage) {
    return <>{children}</>;
  }

  const handleLogout = () => {
    document.cookie = "admin-auth=; path=/; max-age=0";
    document.cookie = "auth_token=; path=/; max-age=0";
    router.push("/admin/login");
  };

  const navLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-[244px] shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-slate-200 px-5 py-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111a32] text-white shadow-lg"><ShieldCheck size={20} /></div>
              <div><p className="text-base font-extrabold text-slate-900">Admin Portal</p><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#2164d8]">Management</p></div>
            </div>
          </div>
          <div className="flex-1 px-2 py-7">
            <p className="mb-3 px-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#91a3c1]">Main Menu</p>
            <nav className="space-y-1">
              {navLinks.map((link, index) => {
                const active = pathname === link.href || (link.href !== "/admin/dashboard" && pathname.startsWith(`${link.href}/`));
                const Icon = link.icon;
                return <Link key={`${link.label}-${index}`} href={link.href} className={`flex items-center gap-4 rounded-2xl px-5 py-3 text-[13px] font-medium transition ${active ? "bg-[#111a32] text-white shadow-lg shadow-slate-300" : "text-slate-800 hover:bg-slate-50"}`}><Icon size={18} className={active ? "text-white" : "text-[#8ca3c6]"} /><span>{link.label}</span></Link>;
              })}
            </nav>
          </div>
          <div className="border-t border-slate-200 p-4">
            <Link href="/shop" target="_blank" className="flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50"><ShoppingBag size={17} className="text-[#8ca3c6]" />View Store <ExternalLink size={13} className="ml-auto" /></Link>
            <button onClick={handleLogout} className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-xs font-bold text-rose-500 hover:bg-rose-50"><LogOut size={16} />Sign Out</button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex h-[90px] items-center justify-between border-b border-slate-200 bg-white px-5 lg:px-9">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="rounded-xl border border-slate-200 p-2 lg:hidden"><Menu size={19} /></button>
              <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:flex"><CalendarDays size={14} className="text-[#2164d8]" />Sep 13 <Clock3 size={14} className="ml-1 text-[#2164d8]" />01:21</div>
              <h1 className="text-lg font-extrabold text-slate-900 lg:hidden">Admin Portal</h1>
            </div>
            <div className="flex items-center gap-5"><div className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-400 md:flex"><Search size={15} />Search analytics...</div><Bell size={18} className="text-[#8ca3c6]" /><div className="hidden h-7 border-l border-slate-200 sm:block" /><div className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111a32] text-sm font-bold text-white">H</div><div className="hidden sm:block"><p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">{adminUser?.name || "Administrator"}</p><p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#2164d8]">Administrator</p></div><ChevronDown size={14} className="text-[#8ca3c6]" /></div></div>
          </div>
          <main className="w-full p-5 sm:p-7 lg:p-9">{children}</main>
        </div>
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-white p-5 text-slate-900 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="font-bold text-lg">Admin Portal</span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${pathname === link.href || (link.href !== "/admin/dashboard" && pathname.startsWith(`${link.href}/`)) ? "bg-[#111a32] text-white" : "text-slate-700 hover:bg-slate-100"}`}
                  >
                    <link.icon size={18} className={pathname === link.href || (link.href !== "/admin/dashboard" && pathname.startsWith(`${link.href}/`)) ? "text-white" : "text-[#8ca3c6]"} />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <button
              onClick={handleLogout}
              className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-rose-50 py-3 text-sm font-bold text-rose-500 hover:bg-rose-500 hover:text-white"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
