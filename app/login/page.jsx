"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiFetch as fetch } from "../../lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [returnTo, setReturnTo] = useState("/");

  useEffect(() => {
    const requestedPath = new URLSearchParams(window.location.search).get("returnTo");
    if (requestedPath?.startsWith("/") && !requestedPath.startsWith("//")) setReturnTo(requestedPath);
  }, []);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || "Unable to sign in.");
        return;
      }
      router.push(data.user.isAdmin ? "/admin/dashboard" : returnTo);
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
        <h1 className="text-3xl font-extrabold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to your SmartEprint account.</p>
        {message && <p className="mt-5 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{message}</p>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" type="email" placeholder="Email address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" type="password" placeholder="Password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button disabled={loading} className="w-full rounded-xl bg-brand-500 py-3 font-bold text-white transition hover:bg-brand-700 disabled:opacity-60">{loading ? "Signing in..." : "Sign In"}</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">New here? <Link href="/signup" className="font-bold text-brand-600">Create an account</Link></p>
      </div>
    </main>
  );
}
