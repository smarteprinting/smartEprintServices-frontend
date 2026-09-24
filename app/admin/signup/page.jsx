"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, User, Mail, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { apiFetch as fetch } from "../../../lib/api";

export default function AdminSignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationStep, setVerificationStep] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Failed to register administrator");
        setLoading(false);
        return;
      }

      setVerificationStep(true);
      setError("Verification code sent. Check the admin email inbox.");
      setLoading(false);
    } catch (err) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/verify-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.message || "Invalid verification code");
        setLoading(false);
        return;
      }
      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#01235b] p-4 sm:p-6 text-slate-100">
      <div className="w-full max-w-md">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 p-2 shadow-2xl backdrop-blur-xl border border-white/20">
            <Image
              src="/logo.png"
              alt="Smart ePrint Services"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Admin Registration
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Create an administrator account for Smart ePrint Services
          </p>
        </div>

        {/* Signup Box */}
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
          {error && (
            <div className="mb-5 flex items-center gap-2.5 rounded-2xl border border-rose-500/30 bg-rose-500/20 p-3.5 text-xs text-rose-200">
              <AlertCircle size={16} className="flex-shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={verificationStep ? handleVerify : handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                  className="w-full rounded-2xl border border-white/20 bg-slate-900/60 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@smarteprintservices.com"
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
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/20 bg-slate-900/60 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/20 bg-slate-900/60 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            </div>

            {verificationStep && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email Verification Code
                </label>
                <input
                  inputMode="numeric"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="000000"
                  className="w-full rounded-2xl border border-white/20 bg-slate-900/60 py-3 px-4 text-center text-lg tracking-[0.5em] text-white placeholder:text-slate-500 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                <span>{verificationStep ? "Verifying code..." : "Creating administrator account..."}</span>
              ) : (
                <>
                  <span>{verificationStep ? "Verify Admin Account" : "Create Admin Account"}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Already have an account?</span>
            <Link
              href="/admin/login"
              className="font-bold text-blue-400 hover:text-blue-300 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
