"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, User, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { apiFetch as fetch } from "../../../lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          router.replace("/admin/dashboard");
        }
      })
      .catch(() => {
        // no-op; keep login page visible if not authenticated
      });
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Invalid admin credentials");
        setLoading(false);
        return;
      }

      // Successful login
      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError("Network error connecting to login service. Please try again.");
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setUsername("admin");
    setPassword("admin123");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#01235b] p-4 sm:p-6 text-slate-100">
      <div className="w-full max-w-md">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 p-2 shadow-2xl backdrop-blur-xl border border-white/20">
            <Image
              src="/logo.png"
              alt="SmartEprint"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Admin Console
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Sign in to manage SmartEprint product catalog & inventory
          </p>
        </div>

        {/* Login Form Box */}
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
          {error && (
            <div className="mb-5 flex items-center gap-2.5 rounded-2xl border border-rose-500/30 bg-rose-500/20 p-3.5 text-xs text-rose-200">
              <AlertCircle size={16} className="flex-shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Username or Admin Email
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full rounded-2xl border border-white/20 bg-slate-900/60 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/20 bg-slate-900/60 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </div>

            {/* Quick Demo Fill Button */}
            <button
              type="button"
              onClick={handleFillDemo}
              className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-blue-400/30 bg-blue-500/10 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition"
            >
              <Sparkles size={13} className="text-blue-400" />
              <span>Fill Default Demo Credentials (admin / admin123)</span>
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Registration link */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>New administrator?</span>
            <Link
              href="/admin/signup"
              className="font-bold text-blue-400 hover:text-blue-300 transition"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Back to main website link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition"
          >
            ← Back to SmartEprint Services Home
          </Link>
        </div>
      </div>
    </div>
  );
}
