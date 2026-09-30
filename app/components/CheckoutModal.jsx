"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle,
  ShieldCheck,
  Truck,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import { apiFetch as fetch } from "../../lib/api";

export default function CheckoutModal({ isOpen, onClose, directItem = null }) {
  const { cart, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const [step, setStep] = useState("form"); // 'form' | 'success'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [submitError, setSubmitError] = useState("");
  const [shippingFee, setShippingFee] = useState(null);
  const [shippingLoading, setShippingLoading] = useState(false);
  const [shippingError, setShippingError] = useState("");
  const [cardReady, setCardReady] = useState(false);
  const [cardError, setCardError] = useState("");
  const cloverRef = useRef(null);
  const cardElementsRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "MN",
    zipCode: "",
    notes: "",
  });

  useEffect(() => {
    if (!user) return;
    setFormData((current) => ({ ...current, fullName: current.fullName || user.name || "", email: current.email || user.email || "" }));
  }, [user]);

  const items = directItem ? [directItem] : cart;
  const itemsSubtotal = directItem
    ? directItem.price * directItem.quantity
    : subtotal;

  useEffect(() => {
    const { address, city, state, zipCode, fullName } = formData;
    if (!address.trim() || !city.trim() || !state.trim() || !zipCode.trim()) {
      setShippingFee(null);
      setShippingError("");
      return;
    }

    const stateUpper = state.trim().toUpperCase();
    const isContinentalUS = !["AK", "HI", "ALASKA", "HAWAII", "PR", "GU", "VI", "AS", "MP"].includes(stateUpper);

    // Free standard delivery for qualifying Continental US orders $49+
    if (itemsSubtotal >= 49 && isContinentalUS) {
      setShippingFee(0);
      setShippingError("");
      setShippingLoading(false);
      return;
    }

    const controller = new AbortController();
    setShippingLoading(true);
    setShippingError("");
    fetch("/api/shipping/rates", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: fullName, street1: address, city, state, zip: zipCode }), signal: controller.signal })
      .then((response) => response.json().then((data) => ({ response, data })))
      .then(({ response, data }) => {
        if (!response.ok || !data.success || !data.rates?.length) throw new Error(data.message || "No shipping rates are available for this address.");
        const amounts = data.rates.map((rate) => Number(rate.amount)).filter(Number.isFinite);
        if (!amounts.length) throw new Error("No shipping rates are available for this address.");
        setShippingFee(Math.min(...amounts));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          // Fallback standard carrier rate if API service is unreachable
          setShippingFee(9.95);
          setShippingError("");
        }
      })
      .finally(() => setShippingLoading(false));
    return () => controller.abort();
  }, [formData.address, formData.city, formData.state, formData.zipCode, formData.fullName, itemsSubtotal]);

  useEffect(() => {
    if (!isOpen || paymentMethod !== "card") return undefined;
    let cancelled = false;
    async function setupClover() {
      setCardReady(false);
      setCardError("");
      try {
        const configResponse = await fetch("/api/payments/clover/config", { cache: "no-store" });
        const config = await configResponse.json();
        if (!configResponse.ok || !config.success) throw new Error(config.message || "Card payments are unavailable.");
        if (!window.Clover) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = config.environment === "production" ? "https://checkout.clover.com/sdk.js" : "https://checkout.sandbox.dev.clover.com/sdk.js";
            script.onload = resolve;
            script.onerror = () => reject(new Error("Unable to load the secure card form."));
            document.head.appendChild(script);
          });
        }
        if (cancelled) return;
        const clover = new window.Clover(config.publicKey, { merchantId: config.merchantId });
        const elements = clover.elements();
        const styles = { input: { fontSize: "14px", color: "#1e293b" } };
        [
          ["card-number", "CARD_NUMBER"],
          ["card-date", "CARD_DATE"],
          ["card-cvv", "CARD_CVV"],
          ["card-postal-code", "CARD_POSTAL_CODE"],
        ].forEach(([id, type]) => elements.create(type, styles).mount(`#${id}`));
        cloverRef.current = clover;
        cardElementsRef.current = elements;
        setCardReady(true);
      } catch (error) {
        if (!cancelled) setCardError(error.message);
      }
    }
    setupClover();
    return () => { cancelled = true; cloverRef.current = null; cardElementsRef.current = null; };
  }, [isOpen, paymentMethod]);

  if (!isOpen) return null;

  // Final total calculation
  const finalTotal = itemsSubtotal + (shippingFee || 0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      let cloverToken = "";
      if (paymentMethod === "card") {
        if (!cardReady || !cloverRef.current) throw new Error("Complete the secure card fields before placing your order.");
        const tokenResult = await cloverRef.current.createToken();
        if (tokenResult.errors) throw new Error(Object.values(tokenResult.errors).join(" "));
        cloverToken = tokenResult.token;
      }
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          items,
          paymentMethod,
          includeSetup: false,
          shippingFee,
          cloverToken,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setSubmitError(data.message || "We could not place your order.");
        return;
      }
      setOrderNumber(data.order.orderId);
      setStep("success");
      if (!directItem) clearCart();
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep("form");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {step === "form" ? (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-brand-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Secure Checkout
                </h3>
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Smart ePrint Services</span>
                  {" "}&bull;{" "}
                  <span>Operated by Innovation Dynamics Group LLC</span>
                </p>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Order Summary ({items.length} {items.length === 1 ? "item" : "items"})
              </p>
              <div className="max-h-36 overflow-y-auto space-y-2.5 pr-1 divide-y divide-slate-200/60">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between pt-2 first:pt-0">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
                        <Image
                          src={item.image || "/logo.png"}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-1 text-sm font-semibold text-slate-800">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-800 ml-3">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Customer Info */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Street Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="1234 Main St, Apt 4B"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Minneapolis"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="MN"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="55401"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
              </div>

              {/* Payment Method Option */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Payment Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center rounded-xl border p-3 text-center transition ${
                      paymentMethod === "card"
                        ? "border-brand-500 bg-brand-50 text-brand-700 font-semibold"
                        : "border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <CreditCard size={18} className="mb-1 text-brand-500" />
                    <span className="text-xs">Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("delivery")}
                    className={`flex flex-col items-center justify-center rounded-xl border p-3 text-center transition ${
                      paymentMethod === "delivery"
                        ? "border-brand-500 bg-brand-50 text-brand-700 font-semibold"
                        : "border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <Truck size={18} className="mb-1 text-emerald-600" />
                    <span className="text-xs">Cash on Delivery</span>
                  </button>
                </div>
                {paymentMethod === "card" && (
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-3 text-xs font-semibold text-slate-600">Secure card details</p>
                    <div className="space-y-3">
                      <div id="card-number" className="min-h-10 rounded-xl border border-slate-200 bg-white px-3 py-2" />
                      <div className="grid grid-cols-3 gap-3">
                        <div id="card-date" className="min-h-10 rounded-xl border border-slate-200 bg-white px-3 py-2" />
                        <div id="card-cvv" className="min-h-10 rounded-xl border border-slate-200 bg-white px-3 py-2" />
                        <div id="card-postal-code" className="min-h-10 rounded-xl border border-slate-200 bg-white px-3 py-2" />
                      </div>
                    </div>
                    {!cardReady && !cardError && <p className="mt-3 text-xs text-slate-500">Loading secure card fields...</p>}
                    {cardError && <p className="mt-3 text-xs font-semibold text-rose-600">{cardError}</p>}
                  </div>
                )}
              </div>

              {/* Pricing Totals */}
              <div className="border-t border-slate-200 pt-4 space-y-1.5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${itemsSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Standard Shipping</span>
                  <span>
                    {shippingLoading ? (
                      "Calculating..."
                    ) : shippingFee === null ? (
                      "Enter address"
                    ) : shippingFee === 0 ? (
                      <span className="font-bold text-emerald-600">FREE (Orders $49+)</span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500 text-xs">
                  <span>Sales Tax</span>
                  <span className="italic">Calculated at payment</span>
                </div>
                <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Order Total</span>
                  <span className="text-brand-600">${finalTotal.toFixed(2)}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  * Applicable sales tax will be calculated and shown at final payment processing. The total above excludes tax.
                </p>
              </div>

              {shippingError && <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm font-semibold text-amber-700">{shippingError}</p>}

              {/* Submit Button */}
              {submitError && <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-700">{submitError}</p>}
              <button
                type="submit"
                disabled={isSubmitting || shippingLoading || shippingFee === null}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-700 active:scale-[0.99] disabled:opacity-75 mt-4"
              >
                {isSubmitting ? (
                  <span>Processing Your Order...</span>
                ) : (
                  <>
                    <span>Place Order • ${finalTotal.toFixed(2)}</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Order Received
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your order has been sent to Smart ePrint Services for processing.
            </p>

            <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left text-sm space-y-3">
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Order Reference</span>
                <span className="font-mono font-bold text-brand-600">
                  {orderNumber}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Delivery Address</span>
                <span className="font-medium text-slate-800 text-right">
                  {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Shipping</span>
                <span className="font-medium text-slate-800">
                  Standard Delivery
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Payment Status</span>
                <span className="font-bold text-emerald-600">{paymentMethod === "delivery" ? "Cash on delivery" : "Paid by card"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Delivery</span>
                <span className="font-bold text-emerald-600">
                  Within 2 - 3 Business Days
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              A confirmation email has been sent to <span className="font-medium text-slate-700">{formData.email}</span>. A Smart ePrint Services representative will reach out if additional details are required for your shipment.
            </p>

            <div className="mb-5 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 text-xs text-slate-600 text-left">
              <p className="font-bold text-slate-800 mb-2">Need help with your order?</p>
              <a href="tel:+18777652289" className="flex items-center gap-2 font-semibold text-brand-600 hover:underline mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.4a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +1 (877) 765-2289
              </a>
              <a href="mailto:support@smarteprintservices.com" className="flex items-center gap-2 font-semibold text-brand-600 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                support@smarteprintservices.com
              </a>
            </div>

            <button
              onClick={handleClose}
              className="w-full rounded-2xl bg-brand-500 py-3.5 font-bold text-white shadow-md transition hover:bg-brand-700"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
