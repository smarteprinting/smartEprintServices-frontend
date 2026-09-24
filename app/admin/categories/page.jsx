"use client";

import { useEffect, useState } from "react";
import { Layers, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { apiFetch as fetch } from "../../../lib/api";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadCategories() {
    try {
      const response = await fetch("/api/admin/categories");
      const data = await response.json();
      if (response.status === 401) {
        setMessage("Your admin session has expired. Please sign in again.");
        return;
      }
      if (data.success) setCategories(data.categories);
      else setMessage(data.message || "Unable to load categories");
    } catch {
      setMessage("Unable to connect to the category service.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { loadCategories(); }, []);

  async function saveCategory(event) {
    event.preventDefault();
    const response = await fetch(editing ? `/api/admin/categories/${editing._id}` : "/api/admin/categories", { method: editing ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }) });
    const data = await response.json();
    if (response.status === 401) return setMessage("Your admin session has expired. Please sign in again.");
    if (!response.ok) return setMessage(data.message || "Unable to save category");
    setName(""); setEditing(null); setMessage("Category saved successfully"); await loadCategories();
  }

  async function removeCategory(id) {
    if (!window.confirm("Delete this category?")) return;
    await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
    loadCategories();
  }

  return (
    <div className="mx-auto max-w-[1180px] space-y-6">
      <div><h1 className="text-2xl font-extrabold text-[#111a32]">Categories</h1><p className="mt-1 text-sm text-[#607492]">Quickly manage your product categories.</p></div>
      {open && <section className="overflow-hidden rounded-[22px] bg-white shadow-[0_15px_35px_rgba(20,37,63,0.14)]"><div className="flex items-center justify-between bg-[#111a32] px-6 py-4 text-white"><div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em]"><Layers size={18} className="text-[#4ca0ff]" />{editing ? "Edit Category" : "New Category"}</div><button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white"><X size={20} /></button></div><form onSubmit={saveCategory} className="flex flex-col gap-4 p-7 sm:flex-row sm:items-end"><label className="flex-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#91a3c1]">Category Name<input autoFocus value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter category name..." required className="mt-2 w-full rounded-xl border border-[#4d8cff] bg-slate-50 px-5 py-4 text-base font-semibold text-slate-700 outline-none ring-4 ring-blue-100 placeholder:text-slate-400" /></label><button className="flex h-[54px] items-center justify-center gap-2 rounded-xl bg-[#2164f5] px-8 text-sm font-extrabold text-white shadow-lg shadow-blue-200 hover:bg-[#1553d5]"><Save size={17} />Save</button></form>{message && <p className="px-7 pb-5 text-xs font-semibold text-[#2164d8]">{message}</p>}</section>}
      <section className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(20,37,63,0.04)]"><div className="flex items-center gap-3 border-b border-slate-100 px-7 py-5"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2164f5] text-white"><Layers size={18} /></div><h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#263650]">Active Categories <span className="ml-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] text-[#607492]">{categories.length}</span></h2></div>{loading ? <div className="p-12 text-center text-sm text-slate-400">Loading categories...</div> : categories.length === 0 ? <div className="p-12 text-center text-sm text-slate-400">No categories yet. Create your first category above.</div> : <div>{categories.map((category) => <div key={category._id} className="flex items-center justify-between border-b border-slate-100 px-7 py-6 last:border-0"><div className="flex items-center gap-5"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#2164f5] shadow-sm"><Layers size={23} /></div><span className="text-xl font-extrabold text-[#1c2a42]">{category.name}</span></div><div className="flex gap-3"><button onClick={() => { setEditing(category); setName(category.name); setOpen(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="rounded-xl border border-slate-100 p-3 text-[#91a3c1] shadow-sm hover:text-[#2164d8]"><Pencil size={18} /></button><button onClick={() => removeCategory(category._id)} className="rounded-xl border border-slate-100 p-3 text-[#91a3c1] shadow-sm hover:text-rose-500"><Trash2 size={18} /></button></div></div>)}</div>}</section>
      {!open && <button onClick={() => setOpen(true)} className="fixed bottom-7 right-7 flex items-center gap-2 rounded-full bg-[#2164f5] px-5 py-3 text-xs font-bold text-white shadow-xl"><Plus size={16} />New Category</button>}
    </div>
  );
}
