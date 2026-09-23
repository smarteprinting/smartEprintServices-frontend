"use client";

import { useEffect, useState } from "react";
import { Search, Users, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState("");
  useEffect(() => { fetch("/api/admin/customers").then((response) => response.json()).then((data) => setCustomers(data.customers || [])).finally(() => setLoading(false)); }, []);
  const filtered = customers.filter((customer) => `${customer.name} ${customer.email}`.toLowerCase().includes(search.toLowerCase()));
  async function editCustomer(customer) {
    const name = window.prompt("Customer name", customer.name);
    if (name === null) return;
    const email = window.prompt("Customer email", customer.email);
    if (email === null) return;
    setSaving(customer._id);
    try {
      const response = await fetch(`/api/admin/customers/${customer._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to update customer");
      setCustomers((current) => current.map((item) => item._id === customer._id ? { ...item, ...data.customer, stats: item.stats } : item));
    } catch (error) { window.alert(error.message); } finally { setSaving(""); }
  }
  async function deleteCustomer(customer) {
    if (!window.confirm(`Delete ${customer.name}? This cannot be undone.`)) return;
    setSaving(customer._id);
    try {
      const response = await fetch(`/api/admin/customers/${customer._id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to delete customer");
      setCustomers((current) => current.filter((item) => item._id !== customer._id));
    } catch (error) { window.alert(error.message); } finally { setSaving(""); }
  }
  return <div className="mx-auto max-w-[1180px] space-y-6"><div><h1 className="text-2xl font-extrabold text-[#111a32]">Customers</h1><p className="mt-1 text-sm text-[#607492]">Manage user accounts and permissions.</p></div><section className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(20,37,63,0.04)]"><div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-7 py-5 sm:flex-row sm:items-center"><h2 className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#263650]"><Users size={18} className="text-[#2164f5]" />All Customers <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px]">{customers.length}</span></h2><label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-400"><Search size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search customers..." className="w-48 outline-none" /></label></div><div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left"><thead><tr className="border-b border-slate-100 text-[9px] font-bold uppercase tracking-[0.18em] text-[#91a3c1]"><th className="px-7 py-5">Customer Info</th><th>Contact</th><th>Orders</th><th>Spent</th><th>Items Bought</th><th>Status</th><th className="pr-7 text-right">Actions</th></tr></thead><tbody>{loading ? <tr><td colSpan="7" className="p-12 text-center text-sm text-slate-400">Loading customers...</td></tr> : filtered.length === 0 ? <tr><td colSpan="7" className="p-12 text-center text-sm text-slate-400">No customers found.</td></tr> : filtered.map((customer) => <tr key={customer._id} className="border-b border-slate-100 last:border-0"><td className="px-7 py-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111a32] text-xs font-bold text-white">{customer.name?.charAt(0).toUpperCase()}</div><div><p className="text-sm font-bold text-[#1c2a42]">{customer.name}</p><p className="text-[10px] text-slate-400">Joined {new Date(customer.createdAt).toLocaleDateString()}</p></div></div></td><td className="text-xs text-slate-600">{customer.email}</td><td className="text-sm font-bold">{customer.stats.orders}</td><td className="text-sm font-bold">${Number(customer.stats.spent || 0).toFixed(2)}</td><td className="text-sm text-slate-600">{customer.stats.items}</td><td><span className={`rounded-full px-3 py-1 text-[10px] font-bold ${customer.isBlocked ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"}`}>{customer.isBlocked ? "Blocked" : "Active"}</span></td><td className="pr-7 text-right"><div className="flex justify-end gap-1"><button title="Edit customer" disabled={saving === customer._id} onClick={() => editCustomer(customer)} className="rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-[#2164d8] disabled:opacity-50"><Pencil size={16} /></button><button title="Delete customer" disabled={saving === customer._id} onClick={() => deleteCustomer(customer)} className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"><Trash2 size={16} /></button></div></td></tr>)}</tbody></table></div></section></div>;
}
