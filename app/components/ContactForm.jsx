"use client";

import { useState } from "react";
import { ArrowRight, Mail, User, Hash, HelpCircle, MessageSquare } from "lucide-react";
import Turnstile from "../../components/Turnstile";

const inquiryTypes = [
  "Order Status & Tracking",
  "Product Inquiries & Availability",
  "Returns, Refunds & Exchanges",
  "Shipping & Delivery Questions",
  "Billing, Invoices & Payment",
  "General Customer Support",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orderId: "",
    subject: "Order Status & Tracking",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    if (!turnstileToken) {
      setStatus("error");
      setStatusMessage("Please complete the security check and try again.");
      return;
    }

    // Format full message including Order ID and Subject for the recipient
    const formattedMessage = [
      formData.orderId ? `[Order ID: ${formData.orderId.trim()}]` : null,
      `[Inquiry Topic: ${formData.subject}]`,
      "",
      formData.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          message: formattedMessage,
          turnstileToken,
          honeypot,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been sent to our customer care team.");
        setFormData({
          fullName: "",
          email: "",
          orderId: "",
          subject: "Order Status & Tracking",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please check your information and try again.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Unable to send message right now. Please try again later or reach us via phone.");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-[#024AD8]/5">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024AD8] via-[#0B63F6] to-[#3B82F6]" />

      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#024AD8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#024AD8]">
          Customer Care
        </span>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Need help with an order, product advice, or returns? Fill out the form below and our support team will respond within 24 hours.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`mb-6 rounded-xl p-4 text-center text-sm font-medium transition-all duration-300 ${
            status === "success"
              ? "bg-green-50 text-green-800 border border-green-200 shadow-sm"
              : status === "error"
              ? "bg-red-50 text-red-800 border border-red-200 shadow-sm"
              : ""
          }`}
        >
          {statusMessage}
        </div>
      )}

      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="honeypot"
            tabIndex="-1"
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-600">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2.5 text-sm outline-none transition duration-200 focus:border-[#024AD8] focus:bg-white focus:ring-4 focus:ring-[#024AD8]/10"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-600">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2.5 text-sm outline-none transition duration-200 focus:border-[#024AD8] focus:bg-white focus:ring-4 focus:ring-[#024AD8]/10"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Order ID */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-600">
              Order ID <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <div className="relative">
              <Hash className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                placeholder="e.g. #ORD-84920"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2.5 text-sm outline-none transition duration-200 focus:border-[#024AD8] focus:bg-white focus:ring-4 focus:ring-[#024AD8]/10"
              />
            </div>
          </div>

          {/* Subject / Inquiry Type */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-600">
              Inquiry Topic *
            </label>
            <div className="relative">
              <HelpCircle className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2.5 text-sm outline-none transition duration-200 focus:border-[#024AD8] focus:bg-white focus:ring-4 focus:ring-[#024AD8]/10 cursor-pointer"
              >
                {inquiryTypes.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-600">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your order, product question, or return request..."
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2.5 text-sm outline-none transition duration-200 focus:border-[#024AD8] focus:bg-white focus:ring-4 focus:ring-[#024AD8]/10 resize-none"
            />
          </div>
        </div>

        {/* Cloudflare Turnstile invisible security - no UI shown */}
        <Turnstile onToken={setTurnstileToken} />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#024AD8]/30 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "loading" ? "Sending Message..." : "Send Message"}
          {status !== "loading" && (
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
      </form>
    </div>
  );
}
