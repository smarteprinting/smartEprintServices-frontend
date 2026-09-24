"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ClipboardList, Search, Trash2 } from "lucide-react";
import { apiFetch as fetch } from "../../../lib/api";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState("");
  const [deleting, setDeleting] = useState("");
  useEffect(() => { fetch("/api/admin/orders").then((response) => response.json()).then((data) => setOrders(data.orders || [])).finally(() => setLoading(false)); }, []);
  const filtered = orders.filter((order) => `${order.orderId} ${order.customerName} ${order.customerEmail}`.toLowerCase().includes(search.toLowerCase()));
  async function updateOrder(id, status) {
    setUpdating(id);
    try {
      const response = await fetch(`/api/admin/orders/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
      const data = await response.json();
      if (data.success) setOrders((current) => current.map((order) => order._id === id ? { ...order, status: data.order.status } : order));
    } finally {
      setUpdating("");
    }
  }
  async function deleteOrder(order) {
    if (!window.confirm(`Delete order ${order.orderId}? This cannot be undone.`)) return;
    setDeleting(order._id);
    try {
      const response = await fetch(`/api/admin/orders/${order._id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to delete order");
      setOrders((current) => current.filter((item) => item._id !== order._id));
    } catch (error) { window.alert(error.message); } finally { setDeleting(""); }
  }
  return <div className="mx-auto max-w-[1180px] space-y-6"><div><h1 className="text-2xl font-extrabold text-[#111a32]">Orders Management</h1><p className="mt-1 text-sm text-[#607492]">Track and manage customer orders and delivery status.</p></div><section className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(20,37,63,0.04)]"><div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-7 py-5 sm:flex-row sm:items-center"><h2 className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#263650]"><ClipboardList size={18} className="text-[#2164f5]" />All Orders <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px]">{orders.length}</span></h2><label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-400"><Search size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search orders..." className="w-48 outline-none" /></label></div><div className="overflow-x-auto"><table className="w-full min-w-[880px] text-left"><thead><tr className="border-b border-slate-100 text-[9px] font-bold uppercase tracking-[0.18em] text-[#91a3c1]"><th className="px-7 py-5">Order ID</th><th>Customer</th><th>Total</th><th>Status & Tracking</th><th>Items</th><th className="pr-7 text-right">Actions</th></tr></thead><tbody>{loading ? <tr><td colSpan="6" className="p-12 text-center text-sm text-slate-400">Loading orders...</td></tr> : filtered.length === 0 ? <tr><td colSpan="6" className="p-12 text-center text-sm text-slate-400">No orders found.</td></tr> : filtered.map((order) => <tr key={order._id} className="border-b border-slate-100 last:border-0"><td className="px-7 py-5 text-sm font-bold text-[#2164d8]">{order.orderId}</td><td><p className="text-sm font-bold text-[#1c2a42]">{order.customerName}</p><p className="text-[10px] text-slate-400">{order.customerEmail}</p></td><td className="text-sm font-bold">${Number(order.total || 0).toFixed(2)}</td><td><select value={order.status} disabled={updating === order._id} onChange={(event) => updateOrder(order._id, event.target.value)} className="rounded-full border-0 bg-blue-50 px-3 py-1 text-[10px] font-bold text-[#2164d8] outline-none"><option>Pending</option><option>Processing</option><option>Shipped</option><option>Delivered</option><option>Cancelled</option></select>{order.trackingNumber && <p className="mt-2 text-[10px] text-slate-400">{order.trackingNumber}</p>}</td><td className="text-sm text-slate-600">{order.items?.reduce((total, item) => total + (item.quantity || 0), 0) || 0}</td><td className="pr-7 text-right"><div className="flex justify-end gap-1"><button title="Open order" className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"><ArrowUpRight size={17} /></button><button title="Delete order" disabled={deleting === order._id} onClick={() => deleteOrder(order)} className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"><Trash2 size={16} /></button></div></td></tr>)}</tbody></table></div></section></div>;
}
