"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Activity, ArrowUpRight, Box, CheckCircle2, Clock3, Package, Plus, Users } from "lucide-react";

const statusItems = [
  { label: "Total Volume", key: "products", icon: Box, color: "text-[#2164d8]", background: "bg-blue-50" },
  { label: "Active Queue", key: "queue", icon: Clock3, color: "text-orange-500", background: "bg-orange-50" },
  { label: "Client Base", key: "customers", icon: Users, color: "text-fuchsia-500", background: "bg-fuchsia-50" },
];

export default function AdminDashboardPage() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customerCount, setCustomerCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetch("/api/products"), fetch("/api/admin/orders"), fetch("/api/admin/customers")])
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then(([productsData, ordersData, customersData]) => {
        setProducts(productsData.success && productsData.products ? productsData.products : []);
        setOrders(ordersData.success && ordersData.orders ? ordersData.orders : []);
        setCustomerCount(customersData.success ? customersData.total || 0 : 0);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const inStock = products.filter((product) => (product.countInStock || product.stockCount || 0) > 0).length;
  const statusValues = { products: products.length, queue: orders.filter((order) => !["Delivered", "Cancelled"].includes(order.status)).length, customers: customerCount };

  return (
    <div className="mx-auto max-w-[1180px] space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#91a3c1]">Overview</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111a32] sm:text-[28px]">Dashboard</h2>
          <p className="mt-1 text-sm text-slate-400">Welcome back. Here&apos;s what&apos;s happening today.</p>
        </div>
        <Link href="/admin/products?action=new" className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#111a32] px-4 py-3 text-xs font-bold text-white shadow-lg shadow-slate-300 transition hover:bg-[#2164d8]"><Plus size={15} />Add Product</Link>
      </div>

      <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_358px]">
        <section className="min-h-[430px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(20,37,63,0.04)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-7 py-6">
            <div><h3 className="text-lg font-extrabold text-[#111a32]">Recent Orders</h3><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#91a3c1]">Latest marketplace activity</p></div>
            <Link href="/admin/orders" className="inline-flex items-center gap-2 rounded-xl bg-[#111a32] px-4 py-3 text-[10px] font-extrabold uppercase tracking-wider text-white hover:bg-[#2164d8]">View All <ArrowUpRight size={13} /></Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left">
              <thead><tr className="border-b border-slate-100 text-[9px] font-bold uppercase tracking-[0.2em] text-[#91a3c1]"><th className="px-7 py-5">Order Ref</th><th className="py-5">Customer</th><th className="py-5">Amount</th><th className="py-5">Status</th><th className="py-5 pr-7 text-right">Date</th></tr></thead>
              <tbody>{loading ? <tr><td colSpan="5" className="h-[245px] text-center text-sm text-slate-400">Loading orders...</td></tr> : orders.length === 0 ? <tr><td colSpan="5" className="h-[245px] text-center"><div className="flex flex-col items-center justify-center text-[#b8c6da]"><Package size={22} strokeWidth={1.5} /><p className="mt-3 text-[9px] font-bold uppercase tracking-[0.3em]">No records found</p></div></td></tr> : orders.slice(0, 5).map((order) => <tr key={order._id} className="border-b border-slate-100 last:border-0"><td className="px-7 py-4 text-sm font-bold text-[#2164d8]">{order.orderId}</td><td className="py-4"><p className="text-sm font-bold text-[#1c2a42]">{order.customer?.name || order.customerName}</p><p className="text-[10px] text-slate-400">{order.customer?.email || order.customerEmail}</p></td><td className="py-4 text-sm font-bold">${Number(order.total || 0).toFixed(2)}</td><td className="py-4"><span className={`rounded-full px-3 py-1 text-[10px] font-bold ${order.status === "Cancelled" ? "bg-rose-50 text-rose-600" : order.status === "Delivered" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-[#2164d8]"}`}>{order.status}</span></td><td className="py-4 pr-7 text-right text-xs text-slate-400">{new Date(order.createdAt).toLocaleDateString()}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <div className="space-y-7">
          <section className="rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(20,37,63,0.04)]">
            <h3 className="text-lg font-extrabold text-[#111a32]">System Status</h3>
            <div className="mt-6 space-y-4">
              {statusItems.map(({ label, key, icon: Icon, color, background }) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-[#fbfcfe] px-4 py-4">
                  <div className="flex items-center gap-4"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${background} ${color}`}><Icon size={19} /></div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#667895]">{label}</span></div>
                  <span className="text-lg font-extrabold text-[#111a32]">{loading ? "-" : statusValues[key]}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[28px] bg-[#111a32] p-8 text-white shadow-xl">
            <div className="relative z-10"><div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#55a2ff]"><Activity size={21} /></div><h3 className="text-xl font-extrabold">Need Support?</h3><p className="mt-3 max-w-[220px] text-xs leading-6 text-slate-400">Access advanced logistics configurations and system documentation in the resource center.</p><Link href="/contact-us" className="mt-7 flex items-center justify-center rounded-xl bg-white py-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#111a32] hover:bg-blue-50">Resource Center</Link></div><div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full border-[20px] border-white/5" />
          </section>
        </div>
      </div>

      <section className="rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(20,37,63,0.04)]">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><h3 className="text-lg font-extrabold text-[#111a32]">Inventory Snapshot</h3><p className="mt-1 text-xs text-slate-400">Live products available in your storefront.</p></div><Link href="/admin/products" className="text-xs font-bold text-[#2164d8]">Manage Inventory <ArrowUpRight size={13} className="inline" /></Link></div>
        {products.length === 0 ? <div className="mt-6 rounded-xl bg-slate-50 p-5 text-sm text-slate-400">{loading ? "Loading inventory..." : "No products have been added yet."}</div> : <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0, 3).map((product) => <div key={product.id || product._id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"><div className="relative h-12 w-12 shrink-0 rounded-lg bg-slate-50"><Image src={product.image || "/logo.png"} alt={product.name || product.title || "Product"} fill className="object-contain p-1" /></div><div className="min-w-0"><p className="truncate text-sm font-bold text-slate-800">{product.name || product.title}</p><p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-600"><CheckCircle2 size={12} />{product.countInStock || product.stockCount || 0} in stock</p></div></div>)}</div>}
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-400"><CheckCircle2 size={14} className="text-emerald-500" />{inStock} active product listings</div>
      </section>
    </div>
  );
}
