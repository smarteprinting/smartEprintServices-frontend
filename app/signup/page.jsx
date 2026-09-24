"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiFetch as fetch } from "../../lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [otp, setOtp] = useState("");
  const [verificationStep, setVerificationStep] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function requestCode(event) {
    event.preventDefault();
    setMessage("");
    if (form.password !== form.confirmPassword) return setMessage("Passwords do not match.");
    if (form.password.length < 6) return setMessage("Password must be at least 6 characters.");
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await response.json();
      if (!response.ok) return setMessage(data.message || "Unable to send verification code.");
      setVerificationStep(true);
      setMessage("Verification code sent. Check your email.");
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/auth/verify-signup", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp }),
      });
      const data = await response.json();
      if (!response.ok) return setMessage(data.message || "Unable to verify code.");
      router.push("/");
      router.refresh();
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Create your account</h1>
        <p className="mt-2 text-sm text-slate-500">{verificationStep ? "Enter the code sent to your email." : "Join Smart ePrint Services."}</p>
        {message && <p className="mt-5 rounded-xl bg-blue-50 p-3 text-sm text-blue-700">{message}</p>}
        {!verificationStep ? (
          <form onSubmit={requestCode} className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" name="name" placeholder="Full name" required value={form.name} onChange={update} />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" name="email" type="email" placeholder="Email address" required value={form.email} onChange={update} />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" name="password" type="password" placeholder="Password" required value={form.password} onChange={update} />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" name="confirmPassword" type="password" placeholder="Confirm password" required value={form.confirmPassword} onChange={update} />
            <button disabled={loading} className="w-full rounded-xl bg-brand-500 py-3 font-bold text-white hover:bg-brand-700 disabled:opacity-60">{loading ? "Sending code..." : "Continue"}</button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-center text-xl tracking-[0.5em]" inputMode="numeric" maxLength={6} placeholder="000000" required value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} />
            <button disabled={loading} className="w-full rounded-xl bg-brand-500 py-3 font-bold text-white hover:bg-brand-700 disabled:opacity-60">{loading ? "Verifying..." : "Verify Account"}</button>
          </form>
        )}
        <p className="mt-6 text-center text-sm text-slate-500">Already registered? <Link href="/login" className="font-bold text-brand-600">Sign in</Link></p>
      </div>
    </main>
  );
}
