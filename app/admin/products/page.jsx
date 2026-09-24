"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Plus,
  Search,
  UploadCloud,
  Edit2,
  Trash2,
  X,
  Check,
  Package,
  Layers,
  Sparkles,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Bold,
  Italic,
  List,
} from "lucide-react";
import { apiFetch as fetch } from "../../../lib/api";
import { categories, brands } from "@/lib/productsData";

const defaultProductForm = {
  _id: null,
  title: "",
  brand: "HP",
  category: "laser",
  technology: "",
  usageCategory: "",
  allInOneType: "",
  wireless: "",
  mainFunction: "",
  price: "",
  salePrice: "",
  countInStock: 15,
  badge: "Best Seller",
  image: "",
  images: [],
  shortDesc: "",
  highlights: "",
  overview: "",
  keywords: [],
  features: ["Automatic 2-sided printing", "Dual-band Wi-Fi connectivity"],
  technicalSpecificationRows: [
    { label: "Print Speed", value: "Up to 35 ppm" },
    { label: "Connectivity", value: "Dual-band Wi-Fi, USB, Ethernet" },
    { label: "Warranty", value: "1-Year Official Manufacturer Warranty" },
  ],
  reviews: [],
};

function ProductsManager() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterBrand, setFilterBrand] = useState("All Brands");

  // Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState(defaultProductForm);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [toast, setToast] = useState(null);

  // Check if opened with ?action=new
  useEffect(() => {
    if (searchParams.get("action") === "new") {
      setIsFormOpen(true);
      setFormData(defaultProductForm);
    }
  }, [searchParams]);

  // Load products from API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data.success) {
        showToast(data.message || "Failed to load products", "error");
      } else if (Array.isArray(data.products)) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Image Upload to Cloudinary
  const handleImageFileChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    if (files.length > 8) return showToast("Select up to 8 images", "error");
    if (files.some((file) => file.size > 5 * 1024 * 1024)) return showToast("Each image must be 5MB or smaller", "error");

    setUploadingImage(true);
    try {
      const uploadData = new FormData();
      files.forEach((file) => uploadData.append("files", file));

      const res = await fetch("/api/products/upload", {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();
      if (data.success && data.urls) {
        setFormData((prev) => ({ ...prev, image: prev.image || data.urls[0], images: [...(prev.images || []), ...data.urls] }));
        showToast(`${data.urls.length} image${data.urls.length === 1 ? "" : "s"} uploaded successfully!`);
      } else {
        showToast(data.message || "Image upload failed", "error");
      }
    } catch (err) {
      showToast("Error uploading image to Cloudinary", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  const removeImage = (url) => setFormData((prev) => ({ ...prev, image: prev.image === url ? (prev.images.find((item) => item !== url) || "") : prev.image, images: prev.images.filter((item) => item !== url) }));

  const addReview = () => setFormData((prev) => ({ ...prev, reviews: [...prev.reviews, { author: "", rating: 5, text: "" }] }));
  const updateReview = (index, field, value) => setFormData((prev) => ({ ...prev, reviews: prev.reviews.map((review, itemIndex) => itemIndex === index ? { ...review, [field]: value } : review) }));
  const removeReview = (index) => setFormData((prev) => ({ ...prev, reviews: prev.reviews.filter((_, itemIndex) => itemIndex !== index) }));
  const formatHighlights = (command) => {
    document.execCommand(command, false);
    setFormData((prev) => ({ ...prev, highlights: document.querySelector("[data-highlights-editor]")?.innerHTML || "" }));
  };

  // Features List helper
  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const updateFeature = (index, val) => {
    setFormData((prev) => {
      const updated = [...prev.features];
      updated[index] = val;
      return { ...prev, features: updated };
    });
  };

  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  // Tech Spec Rows helper
  const addSpecRow = () => {
    setFormData((prev) => ({
      ...prev,
      technicalSpecificationRows: [
        ...prev.technicalSpecificationRows,
        { label: "", value: "" },
      ],
    }));
  };

  const updateSpecRow = (index, field, val) => {
    setFormData((prev) => {
      const updated = [...prev.technicalSpecificationRows];
      updated[index] = { ...updated[index], [field]: val };
      return { ...prev, technicalSpecificationRows: updated };
    });
  };

  const removeSpecRow = (index) => {
    setFormData((prev) => ({
      ...prev,
      technicalSpecificationRows: prev.technicalSpecificationRows.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // Edit action
  const handleEdit = (product) => {
    const specsArray =
      product.technicalSpecificationRows && product.technicalSpecificationRows.length > 0
        ? product.technicalSpecificationRows
        : product.specifications || product.specs
        ? Object.entries(product.specifications || product.specs).map(([label, value]) => ({
            label,
            value: String(value),
          }))
        : [];

    setFormData({
      _id: product._id || product.id,
      title: product.title || product.name || "",
      brand: product.brand || "HP",
      category: product.category || "laser",
      technology: product.technology || "",
      usageCategory: product.usageCategory || "",
      allInOneType: product.allInOneType || "",
      wireless: product.wireless || "",
      mainFunction: product.mainFunction || "",
      price: product.price || "",
      salePrice: product.salePrice || "",
      countInStock: product.countInStock ?? product.stockCount ?? 15,
      badge: product.badge || "",
      image: product.image || "",
      images: product.images || (product.image ? [product.image] : []),
      shortDesc: product.shortDesc || "",
      highlights: product.highlights || "",
      overview: product.overview || product.shortDesc || "",
      keywords: product.keywords || [],
      features: product.features && product.features.length > 0 ? product.features : [""],
      technicalSpecificationRows: specsArray.length > 0 ? specsArray : [{ label: "", value: "" }],
      reviews: product.reviews || [],
    });
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete action
  const handleDelete = async (productId) => {
    if (!confirm("Are you sure you want to delete this product from the catalog?")) {
      return;
    }

    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        setProducts((prev) => prev.filter((p) => (p._id || p.id) !== productId));
        showToast("Product deleted from catalog");
      } else {
        showToast(data.message || "Failed to delete product", "error");
      }
    } catch (err) {
      showToast("Error deleting product", "error");
    }
  };

  // Submit Add / Edit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const isEditing = Boolean(formData._id);
      const url = isEditing ? `/api/products/${formData._id}` : "/api/products";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        showToast(data.message || "Failed to save product", "error");
        setSaving(false);
        return;
      }

      showToast(
        isEditing
          ? "Product updated successfully in store!"
          : "New product published to storefront!",
        "success"
      );

      setIsFormOpen(false);
      setFormData(defaultProductForm);
      fetchProducts();
    } catch (err) {
      showToast("Network error saving product", "error");
    } finally {
      setSaving(false);
    }
  };

  // Filtered list
  const filteredProducts = products.filter((p) => {
    const title = (p.title || p.name || "").toLowerCase();
    const brand = (p.brand || "").toLowerCase();
    const q = search.toLowerCase();

    const matchesSearch = !q || title.includes(q) || brand.includes(q);
    const matchesCategory = filterCategory === "all" || p.category === filterCategory;
    const matchesBrand = filterBrand === "All Brands" || p.brand.toLowerCase() === filterBrand.toLowerCase();

    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-semibold shadow-2xl transition-all ${
            toast.type === "error"
              ? "border border-rose-200 bg-rose-600 text-white"
              : "border border-emerald-200 bg-emerald-600 text-white"
          }`}
        >
          {toast.type === "error" ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Inventory & Products
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Upload hardware to Cloudinary, manage pricing, and publish directly to the storefront.
          </p>
        </div>

        <button
          onClick={() => {
            setFormData(defaultProductForm);
            setIsFormOpen(!isFormOpen);
          }}
          className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-700"
        >
          {isFormOpen ? <X size={17} /> : <Plus size={17} />}
          <span>{isFormOpen ? "Close Form" : "Upload New Product"}</span>
        </button>
      </div>

      {/* Form Drawer / Accordion */}
      {isFormOpen && (
        <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {formData._id ? "Edit Product Details" : "Upload New Hardware Model"}
              </h3>
              <p className="text-xs text-slate-500">
                Uploaded images will be stored on Cloudinary and instantly visible in `/shop`.
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X size={16} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Product Name / Model Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. HP LaserJet Pro MFP 3101fdwe All-in-One Wireless Monochrome Printer"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brand *
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 cursor-pointer"
                >
                  <option value="HP">HP</option>
                  <option value="Canon">Canon</option>
                  <option value="Epson">Epson</option>
                  <option value="Brother">Brother</option>
                  <option value="SmartEprint">SmartEprint</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 cursor-pointer"
                >
                  <option value="laser">Laser Printers</option>
                  <option value="inkjet">Inkjet & EcoTank</option>
                  <option value="all-in-one">All-in-One Multi-Function</option>
                  <option value="supplies">Ink & Toners</option>
                  
                </select>
              </div>

              {[['technology', 'Technology', ['Inkjet', 'Laser', 'Laser (B/W)']], ['usageCategory', 'Usage Category', ['Home Office', 'Office Printer', 'Mobile', 'Photo']], ['allInOneType', 'All-in-One Type', ['Multifunction', 'Single Function']], ['wireless', 'Wireless', ['Yes', 'No']], ['mainFunction', 'Main Function', ['Print', 'Scan', 'Copy', 'Fax', 'Print Only']]].map(([field, label, options]) => (
                <div key={field}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">{label}</label>
                  <select value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 cursor-pointer">
                    <option value="">Select {label}</option>
                    {options.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
              ))}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Retail Price ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="249.99"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Sale Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.salePrice}
                  onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                  placeholder="299.99"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  value={formData.countInStock}
                  onChange={(e) => setFormData({ ...formData, countInStock: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Badge Label
                </label>
                <input
                  type="text"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  placeholder="Best Seller, Top Value, Hot Deal..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
            </div>

            {/* Cloudinary Image Upload Section */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Product Media
              </label>

              <div className="flex flex-col md:flex-row items-center gap-5">
                {/* Upload Box */}
                <div className="flex-1 w-full">
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-4 cursor-pointer hover:border-brand-500 hover:bg-white transition bg-white/50">
                    <UploadCloud size={24} className="text-brand-500 mb-1.5" />
                    <span className="text-xs font-bold text-slate-800">
                      {uploadingImage ? "Uploading to Cloudinary..." : "Upload Product Images"}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5">
                      Select multiple images (JPG, PNG, WebP). Max 5MB each.
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageFileChange}
                      disabled={uploadingImage}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="text-xs font-bold text-slate-400 uppercase">Or URL</div>

                {/* Direct URL Input */}
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://res.cloudinary.com/... or /hp-printer4.png"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <div className="flex max-w-full flex-wrap gap-2">
                  {(formData.images || []).map((url) => <div key={url} className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm"><Image src={url} alt="Product preview" fill className="object-contain" /><button type="button" onClick={() => removeImage(url)} className="absolute right-1 top-1 rounded-full bg-slate-900/80 p-0.5 text-white hover:bg-rose-600"><X size={12} /></button></div>)}
                </div>
              </div>
            </div>

            {/* Descriptions */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Highlights (Rich Text)
                </label>
                <div className="overflow-hidden rounded-2xl border border-slate-200 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
                  <div className="flex gap-1 border-b border-slate-200 bg-slate-50 p-2">
                    <button type="button" onClick={() => formatHighlights("bold")} className="rounded-lg p-2 text-slate-600 hover:bg-white"><Bold size={15} /></button>
                    <button type="button" onClick={() => formatHighlights("italic")} className="rounded-lg p-2 text-slate-600 hover:bg-white"><Italic size={15} /></button>
                    <button type="button" onClick={() => formatHighlights("insertUnorderedList")} className="rounded-lg p-2 text-slate-600 hover:bg-white"><List size={15} /></button>
                  </div>
                  <div data-highlights-editor contentEditable suppressContentEditableWarning onInput={(e) => setFormData({ ...formData, highlights: e.currentTarget.innerHTML, shortDesc: e.currentTarget.textContent })} dangerouslySetInnerHTML={{ __html: formData.highlights }} className="min-h-24 px-4 py-3 text-sm text-slate-900 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Narrative Overview
                </label>
                <textarea
                  rows={3}
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  placeholder="Engineered for high-productivity home offices and small business teams..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Keywords</label>
              <input type="text" value={(formData.keywords || []).join(", ")} onChange={(e) => setFormData({ ...formData, keywords: e.target.value.split(",").map((keyword) => keyword.trim()).filter(Boolean) })} placeholder="wireless printer, home office, duplex" className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
              <p className="mt-1 text-[11px] text-slate-400">Separate keywords with commas.</p>
            </div>

            {/* Bullet Features */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Key Features
                </label>
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  + Add Feature
                </button>
              </div>

              <div className="space-y-2">
                {formData.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      value={feat}
                      onChange={(e) => updateFeature(idx, e.target.value)}
                      placeholder="e.g. Print speed up to 35 ppm"
                      className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-brand-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(idx)}
                      className="rounded-xl border border-slate-200 px-3 text-xs text-rose-500 hover:bg-rose-50"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between"><label className="text-xs font-bold uppercase tracking-wider text-slate-700">Reviews & Testimonials</label><button type="button" onClick={addReview} className="text-xs font-bold text-brand-600 hover:text-brand-700">+ Add Review</button></div>
              {formData.reviews.length === 0 ? <p className="rounded-xl bg-slate-50 p-4 text-xs text-slate-400">No reviews added for this product.</p> : <div className="space-y-2">{formData.reviews.map((review, index) => <div key={index} className="grid gap-2 sm:grid-cols-[1fr_100px_2fr_auto]"><input value={review.author} onChange={(e) => updateReview(index, "author", e.target.value)} placeholder="Customer name" className="rounded-xl border border-slate-200 px-3 py-2 text-xs" /><input type="number" min="1" max="5" value={review.rating} onChange={(e) => updateReview(index, "rating", Number(e.target.value))} className="rounded-xl border border-slate-200 px-3 py-2 text-xs" /><input value={review.text} onChange={(e) => updateReview(index, "text", e.target.value)} placeholder="Customer testimonial" className="rounded-xl border border-slate-200 px-3 py-2 text-xs" /><button type="button" onClick={() => removeReview(index)} className="rounded-xl border border-slate-200 px-3 text-rose-500"><Trash2 size={14} /></button></div>)}</div>}
            </div>

            {/* Technical Specifications Table */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Technical Specifications (Label / Value)
                </label>
                <button
                  type="button"
                  onClick={addSpecRow}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  + Add Specification Row
                </button>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-3 space-y-2">
                {formData.technicalSpecificationRows.map((row, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      value={row.label}
                      onChange={(e) => updateSpecRow(idx, "label", e.target.value)}
                      placeholder="Label (e.g. Connectivity)"
                      className="w-1/3 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-brand-500"
                    />
                    <input
                      type="text"
                      value={row.value}
                      onChange={(e) => updateSpecRow(idx, "value", e.target.value)}
                      placeholder="Value (e.g. Wi-Fi, Ethernet, USB 2.0)"
                      className="flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-brand-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeSpecRow(idx)}
                      className="rounded-xl border border-slate-200 bg-white px-3 text-xs text-rose-500 hover:bg-rose-50"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit & Cancel Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setFormData(defaultProductForm);
                }}
                className="rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 rounded-2xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand-500/25 hover:bg-brand-700 disabled:opacity-75"
              >
                {saving ? (
                  <span>Saving Product to MongoDB...</span>
                ) : (
                  <>
                    <Check size={16} />
                    <span>{formData._id ? "Update Product" : "Publish to Store"}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Inventory Filters & Search */}
      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-xs">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products by model or brand..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>

            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer"
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <button
              onClick={fetchProducts}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
              title="Refresh Inventory"
            >
              <RefreshCw size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> products
          </p>
        </div>

        {loading ? (
          <div className="py-16 text-center text-sm font-semibold text-slate-400">
            Loading products...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-sm text-slate-500">
            No products found matching your filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="pb-3 pl-2">Product</th>
                  <th className="pb-3">Brand</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Stock</th>
                  <th className="pb-3 text-right pr-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((p) => {
                  const id = p._id || p.id;
                  return (
                    <tr key={id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 pl-2">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                            <Image
                              src={p.image || "/logo.png"}
                              alt={p.title || p.name}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                          <div className="min-w-0 max-w-xs sm:max-w-md">
                            <p className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">
                              {p.title || p.name}
                            </p>
                            <p className="text-[11px] text-slate-400 line-clamp-1">
                              {p.shortDesc || "No short description"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-xs font-semibold text-slate-700">
                        {p.brand}
                      </td>
                      <td className="py-4">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 capitalize">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-4 text-xs font-bold text-slate-900">
                        ${Number(p.price).toFixed(2)}
                        {p.salePrice && p.salePrice < p.price && (
                          <span className="ml-1 text-[11px] text-slate-400 line-through">
                            ${Number(p.price).toFixed(2)}
                          </span>
                        )}
                      </td>
                      <td className="py-4">
                        {(p.countInStock || p.stockCount || 0) > 0 ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            {p.countInStock || p.stockCount} in stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                            Sold out
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-right pr-2">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(p)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-brand-500 hover:text-brand-600 transition"
                          >
                            <Edit2 size={13} />
                            <span>Edit</span>
                          </button>

                          <button
                            onClick={() => handleDelete(id)}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition"
                          >
                            <Trash2 size={13} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-sm font-semibold text-slate-400">
          Loading Inventory Manager...
        </div>
      }
    >
      <ProductsManager />
    </Suspense>
  );
}
