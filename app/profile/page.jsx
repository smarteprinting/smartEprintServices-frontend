"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ClipboardList, KeyRound, LogOut, Save, UserCircle } from "lucide-react";
import { useAuth } from "../components/AuthContext";

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading, refresh } = useAuth();
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [ordersError, setOrdersError] = useState("");
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace("/login?returnTo=/profile");
    if (user) setForm({ firstName: user.firstName || user.name?.split(" ")[0] || "", lastName: user.lastName || user.name?.split(" ").slice(1).join(" ") || "" });
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    fetch("/api/auth/orders", { cache: "no-store" })
      .then((response) => response.json().then((data) => ({ response, data })))
      .then(({ response, data }) => {
        if (!response.ok) throw new Error(data.message || "Could not load your order history.");
        setOrders(data.orders || []);
      })
      .catch((reason) => setOrdersError(reason.message))
      .finally(() => setOrdersLoading(false));
  }, [user]);

  async function saveProfile(event) {
    event.preventDefault();
    setMessage("");
    setError("");
    setSaving(true);
    try {
      const response = await fetch("/api/auth/profile", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not update your profile.");
      await refresh();
      setMessage(data.message);
    } catch (reason) {
      setError(reason.message);
    } finally {
      setSaving(false);
    }
  }

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" });
    await refresh();
    router.replace("/");
    router.refresh();
  }

  async function changePassword(event) {
    event.preventDefault();
    setPasswordMessage("");
    setPasswordError("");
    setChangingPassword(true);
    try {
      const response = await fetch("/api/auth/password", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(passwordForm) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not change your password.");
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setPasswordMessage(data.message);
    } catch (reason) {
      setPasswordError(reason.message);
    } finally {
      setChangingPassword(false);
    }
  }

  if (loading || !user) return <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-slate-50 text-sm font-semibold text-slate-500">Loading profile...</main>;

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-50 px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"><ArrowLeft size={16} /> Back to home</Link>
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="bg-gradient-to-r from-slate-900 to-brand-700 px-6 py-8 text-white sm:px-10">
            <div className="flex items-center gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15"><UserCircle size={32} /></div><div><p className="text-sm font-semibold text-blue-100">Smart ePrint account</p><h1 className="text-3xl font-black">My Profile</h1></div></div>
          </div>
          <div className="p-6 sm:p-10">
            <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-4"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Account email</p><p className="mt-1 font-semibold text-slate-800">{user.email}</p><p className="mt-1 text-xs text-slate-500">Your email is used for order confirmations and cannot be changed here.</p></div>
            {message && <p className="mb-5 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">{message}</p>}
            {error && <p className="mb-5 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700">{error}</p>}
            <form onSubmit={saveProfile} className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700">First name<input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" value={form.firstName} onChange={(event) => setForm({ ...form, firstName: event.target.value })} required /></label>
              <label className="text-sm font-bold text-slate-700">Last name<input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" value={form.lastName} onChange={(event) => setForm({ ...form, lastName: event.target.value })} /></label>
              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row"><button disabled={saving} className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700 disabled:opacity-60"><Save size={16} />{saving ? "Saving..." : "Save Profile"}</button><button type="button" onClick={signOut} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"><LogOut size={16} /> Sign Out</button></div>
            </form>

            <div className="mt-10 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-3"><KeyRound size={20} className="text-brand-500" /><div><h2 className="text-xl font-extrabold text-slate-900">Change password</h2><p className="text-sm text-slate-500">Keep your account secure with a new password.</p></div></div>
              {passwordMessage && <p className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">{passwordMessage}</p>}
              {passwordError && <p className="mt-5 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700">{passwordError}</p>}
              <form onSubmit={changePassword} className="mt-5 grid gap-4 sm:grid-cols-3">
                <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500" type="password" placeholder="Current password" value={passwordForm.currentPassword} onChange={(event) => setPasswordForm({ ...passwordForm, currentPassword: event.target.value })} required />
                <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500" type="password" placeholder="New password" value={passwordForm.newPassword} onChange={(event) => setPasswordForm({ ...passwordForm, newPassword: event.target.value })} minLength={6} required />
                <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-500" type="password" placeholder="Confirm password" value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })} minLength={6} required />
                <button disabled={changingPassword} className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-500 px-5 py-3 text-sm font-bold text-brand-600 hover:bg-brand-50 disabled:opacity-60 sm:col-span-3 sm:w-fit"><KeyRound size={16} />{changingPassword ? "Changing..." : "Change Password"}</button>
              </form>
            </div>

            <div className="mt-10 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-3"><ClipboardList size={20} className="text-brand-500" /><div><h2 className="text-xl font-extrabold text-slate-900">Order history</h2><p className="text-sm text-slate-500">Review your Smart ePrint purchases.</p></div></div>
              {ordersLoading && <p className="mt-5 text-sm text-slate-500">Loading your orders...</p>}
              {ordersError && <p className="mt-5 rounded-xl bg-rose-50 p-3 text-sm font-semibold text-rose-700">{ordersError}</p>}
              {!ordersLoading && !ordersError && orders.length === 0 && <p className="mt-5 rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">You have not placed any orders yet.</p>}
              {!ordersLoading && !ordersError && orders.length > 0 && <div className="mt-5 space-y-3">{orders.map((order) => <article key={order._id} className="rounded-2xl border border-slate-200 p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="font-bold text-slate-900">{order.orderId}</p><p className="mt-1 text-xs text-slate-500">{new Date(order.createdAt).toLocaleDateString()} · {order.items?.length || 0} item{order.items?.length === 1 ? "" : "s"}</p></div><div className="text-right"><p className="font-extrabold text-slate-900">${Number(order.total || 0).toFixed(2)}</p><span className="text-xs font-bold text-brand-600">{order.status}</span></div></div><div className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-600">{order.items?.map((item) => <p key={`${order._id}-${item.name}`}>{item.name} × {item.quantity}</p>)}</div></article>)}</div>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
