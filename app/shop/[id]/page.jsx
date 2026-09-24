"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Award,
} from "lucide-react";
import { useCart } from "../../components/CartContext";
import CheckoutModal from "../../components/CheckoutModal";
import { useAuth } from "../../components/AuthContext";
import { products as fallbackCatalog } from "../../../lib/productsData";
import { apiFetch as fetch } from "../../../lib/api";

function htmlToText(value = "") {
  if (typeof window === "undefined")
    return String(value)
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent?.replace(/\s+/g, " ").trim() || "";
}

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const { user, loading: authLoading } = useAuth();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("overview");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [error, setError] = useState("");

  const openCheckout = () => {
    if (authLoading) return;
    if (!user) {
      window.location.assign(`/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setCheckoutOpen(true);
  };

  useEffect(() => {
    if (!params?.id) return;
    fetch(`/api/products/${params.id}`, { cache: "no-store" })
      .then((response) => response.json().then((data) => ({ response, data })))
      .then(({ response, data }) => {
        if (!response.ok || !data.success)
          throw new Error(data.message || "Product not found");
        setProduct(data.product);
      })
      .catch((reason) => {
        const fb = fallbackCatalog.find(
          (p) => String(p.id) === String(params.id) || String(p.slug) === String(params.id)
        );
        if (fb) {
          setProduct({
            ...fb,
            id: fb.id,
            name: fb.name || fb.title,
            title: fb.name || fb.title,
            image: fb.image || fb.images?.[0] || "",
            price: fb.price,
            salePrice: fb.price,
            oldPrice: fb.originalPrice || fb.price,
            originalPrice: fb.originalPrice || fb.price,
            images: Array.from(new Set([...(fb.images || []), fb.image].filter(Boolean))),
            shortDesc: fb.shortDesc || "",
            highlights: fb.highlights || fb.shortDesc || "",
            overview: fb.overview || fb.shortDesc || "",
            countInStock: fb.stockCount || 10,
            inStock: fb.inStock !== false,
            technicalSpecificationRows: fb.specs
              ? Object.entries(fb.specs).map(([label, value]) => ({ label, value: String(value) }))
              : [],
            specs: fb.specs || {},
          });
          setError("");
        } else {
          setError(reason.message);
        }
      });
  }, [params?.id]);

  const images = useMemo(
    () =>
      product
        ? Array.from(
            new Set([...(product.images || []), product.image].filter(Boolean)),
          )
        : [],
    [product],
  );
  const rows = product?.technicalSpecificationRows?.length
    ? product.technicalSpecificationRows
    : Object.entries(product?.specifications || {}).map(([label, value]) => ({
        label,
        value,
      }));
  const overviewText = htmlToText(product?.overview || "");
  const highlightsText = htmlToText(product?.highlights || "");
  const price = Number(product?.salePrice || product?.price || 0);
  const regularPrice = product?.salePrice
    ? Number(product.price)
    : Number(product?.oldPrice || 0);

  if (error)
    return (
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900">
          Product unavailable
        </h1>
        <p className="mt-2 text-slate-500">{error}</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </Link>
      </main>
    );
  if (!product)
    return (
      <main className="mx-auto max-w-5xl px-6 py-24 text-center text-sm font-semibold text-slate-400">
        Loading product...
      </main>
    );

  return (
    <main className="min-h-screen bg-[#f7f8fa] pb-20 text-slate-900">
      <div className="mx-auto max-w-[1180px] px-4 pt-4 sm:px-8 sm:pt-5">
        <nav className="flex min-w-0 items-center gap-2 overflow-hidden text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <Link className="shrink-0" href="/">Home</Link>
          <ChevronRight className="shrink-0" size={12} />
          <Link className="shrink-0" href="/shop">Shop</Link>
          <ChevronRight className="shrink-0" size={12} />
          <span className="min-w-0 truncate text-slate-900">
            {product.name}
          </span>
        </nav>
        <div className="mt-8 grid min-w-0 gap-8 lg:mt-12 lg:gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,.96fr)]">
          <section className="min-w-0">
            <div className="relative flex h-[clamp(280px,70vw,500px)] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8">
              <span className="absolute left-3 top-3 z-10 rounded-md bg-brand-500 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white sm:left-4 sm:top-4 sm:px-3 sm:py-2">
                {product.inStock ? "✓ In Stock" : "Out of Stock"}
              </span>
              {images.length ? (
                <Image
                  src={images[selectedImage] || images[0]}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-6 sm:p-12"
                />
              ) : (
                <span className="text-sm font-semibold text-slate-400">
                  No product image uploaded
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-5 flex min-w-0 gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-md border-2 bg-white p-2 ${selectedImage === index ? "border-brand-500" : "border-slate-200"}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} image ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </section>

          <section className="min-w-0 pt-0 sm:pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-blue-50 px-3 py-2 text-[10px] font-bold text-brand-600">
                {product.brand}
              </span>
              <span className="rounded-md bg-slate-100 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {product.category}
              </span>
            </div>
            <h1 className="mt-5 break-words text-2xl font-black leading-tight tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-black">${price.toFixed(2)}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ["Technology", product.technology],
                ["Use", product.usageCategory],
                ["Wireless", product.wireless],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <span
                    key={label}
                    className="max-w-full break-words rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    <span className="text-slate-400">{label}: </span>
                    {value}
                  </span>
                ))}
            </div>
            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Quantity
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center rounded-md border border-slate-200 bg-white">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) => Math.max(1, value - 1))
                    }
                    className="p-3"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-bold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) =>
                        Math.min(Number(product.countInStock || 99), value + 1),
                      )
                    }
                    className="p-3"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <span className="text-xs text-slate-400">
                  {product.countInStock || 0} available
                </span>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => addToCart(product, quantity, true)}
                className="flex items-center justify-center gap-2 rounded-md bg-black py-3.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={openCheckout}
                className="flex items-center justify-center gap-2 rounded-md bg-brand-500 py-3.5 text-sm font-bold text-white hover:bg-brand-700"
              >
                Buy Now
              </button>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-200 pt-7 text-xs">
              <div className="flex gap-3">
                <Truck size={18} className="text-brand-500" />
                <span>
                  <b>Free Shipping</b>
                  <small className="block text-slate-400">
                    Orders over $49
                  </small>
                </span>
              </div>
              <div className="flex gap-3">
                <RotateCcw size={18} className="text-brand-500" />
                <span>
                  <b>Easy Returns</b>
                  <small className="block text-slate-400">30-day window</small>
                </span>
              </div>
              <div className="flex gap-3">
                <ShieldCheck size={18} className="text-brand-500" />
                <span>
                  <b>Warranty</b>
                  <small className="block text-slate-400">
                    Manufacturer covered
                  </small>
                </span>
              </div>
              <div className="flex gap-3">
                <Award size={18} className="text-brand-500" />
                <span>
                  <b>Genuine Products</b>
                  <small className="block text-slate-400">
                    Trusted brand sources
                  </small>
                </span>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:mt-16">
          <div className="flex gap-6 overflow-x-auto border-b border-slate-100 px-4 pt-5 text-xs font-bold uppercase tracking-wider text-slate-400 sm:gap-8 sm:px-7">
            <button
              type="button"
              onClick={() => setTab("overview")}
              className={`shrink-0 whitespace-nowrap border-b-2 pb-4 ${tab === "overview" ? "border-brand-500 text-brand-600" : "border-transparent"}`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setTab("specifications")}
              className={`shrink-0 whitespace-nowrap border-b-2 pb-4 ${tab === "specifications" ? "border-brand-500 text-brand-600" : "border-transparent"}`}
            >
              Specifications
            </button>
            <button
              type="button"
              onClick={() => setTab("reviews")}
              className={`shrink-0 whitespace-nowrap border-b-2 pb-4 ${tab === "reviews" ? "border-brand-500 text-brand-600" : "border-transparent"}`}
            >
              Reviews
            </button>
          </div>
          <div className="min-h-[260px] px-4 py-8 sm:px-8 sm:py-10">
            {tab === "overview" && (
              <div className="max-w-4xl">
                <h2 className="text-xl font-extrabold">Product Overview</h2>
                {highlightsText && (
                  <p className="mt-5 rounded-lg bg-blue-50 p-5 text-sm leading-7 text-slate-700">
                    {highlightsText}
                  </p>
                )}
                {overviewText && (
                  <p className="mt-6 whitespace-pre-line text-sm leading-8 text-slate-600">
                    {overviewText}
                  </p>
                )}
                {product.features?.length > 0 && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-slate-600"
                      >
                        <Check size={16} className="mt-1 text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {tab === "specifications" && (
              <div>
                <h2 className="text-xl font-extrabold">
                  Technical Specifications
                </h2>
                {rows.length ? (
                  <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200">
                    <table className="min-w-[560px] w-full text-left text-sm">
                      <tbody>
                        {rows.map((row) => (
                          <tr
                            key={`${row.label}-${row.value}`}
                            className="border-b border-slate-100 last:border-0"
                          >
                            <th className="w-1/3 bg-slate-50 px-5 py-4 font-bold text-slate-500">
                              {row.label}
                            </th>
                            <td className="px-5 py-4 text-slate-700">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-slate-400">
                    No technical specifications added.
                  </p>
                )}
              </div>
            )}
            {tab === "reviews" && (
              <div>
                <h2 className="text-xl font-extrabold">
                  Reviews & Testimonials
                </h2>
                {product.reviews?.length ? (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {product.reviews.map((review, index) => (
                      <article
                        key={`${review.author}-${index}`}
                        className="rounded-lg border border-slate-200 p-5"
                      >
                        <div className="flex items-center justify-between">
                          <b>{review.author || "Verified customer"}</b>
                          <span className="flex text-amber-500">
                            {Array.from({ length: review.rating || 5 }).map(
                              (_, star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  fill="currentColor"
                                />
                              ),
                            )}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {review.text}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-slate-400">
                    No reviews added for this product.
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
      {checkoutOpen && (
        <CheckoutModal
          isOpen={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          directItem={{ ...product, quantity }}
        />
      )}
    </main>
  );
}
