"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, User, Phone, Mail, ChevronDown, MessageSquare, Wrench } from "lucide-react";
import Turnstile from "../../components/Turnstile";
import { getCountries, getCountryCallingCode, isValidPhoneNumber } from "libphonenumber-js";

const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
const countries = getCountries().map((code) => ({
  code,
  name: countryNames.of(code) || code,
  callingCode: `+${getCountryCallingCode(code)}`,
  flagUrl: `https://flagcdn.com/20x15/${code.toLowerCase()}.png`,
})).sort((first, second) => first.name.localeCompare(second.name));

const serviceOptions = [
  "Printer Setup & Installation",
  "Printer Troubleshooting & Repair",
  "Computer Support",
  "Network & Wi-Fi Setup",
  "Smart Home Device Assistance",
  "Home Appliance Help",
  "Business Printing Solutions",
  "General Consultation",
];

export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    modelNumber: "",
    description: "",
  });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState(countries.find((item) => item.code === "US") || countries[0]);
  const countryPickerRef = useRef(null);

  useEffect(() => {
    const closePicker = (event) => {
      if (countryPickerRef.current && !countryPickerRef.current.contains(event.target)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", closePicker);
    return () => document.removeEventListener("mousedown", closePicker);
  }, []);

  const visibleCountries = countries.filter((item) =>
    `${item.name} ${item.callingCode}`.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (!isValidPhoneNumber(formData.phone, country.code)) {
      setStatus("error");
      setStatusMessage("Please enter a valid phone number.");
      return;
    }

    setStatus("loading");

    if (!turnstileToken) {
      setStatus("error");
      setStatusMessage("Please complete the security check and try again.");
      return;
    }

    try {
      const response = await fetch("/api/book-appointment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, phone: `${country.callingCode} ${formData.phone}`, turnstileToken, honeypot }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceType: "",
          modelNumber: "",
          description: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.message);
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 lg:p-7 shadow-xl shadow-[#024AD8]/5 w-full">
      {/* Decorative colored bar on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#024AD8] via-[#0B63F6] to-[#3B82F6]" />

      {/* Decorative corner accent */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#024AD8]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#0B63F6]/5 blur-3xl pointer-events-none" />

      {statusMessage && (
        <div
          className={`mb-4 rounded-xl p-3 text-center text-xs sm:text-sm font-medium transition-all duration-300 ${
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

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5" onSubmit={handleSubmit}>
        <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
          <label htmlFor="appointment-website">Website</label>
          <input id="appointment-website" type="text" name="honeypot" tabIndex="-1" autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>
        <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
          <Turnstile onToken={setTurnstileToken} />
        </div>
        {/* Full Name */}
        <div className="relative">
          <label className="mb-1 block text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label className="mb-1 block text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Phone Number *</label>
          <div className="relative">
            <div ref={countryPickerRef} className="relative flex w-full rounded-xl border border-gray-200 bg-gray-50/50 transition-all duration-300 focus-within:border-[#024AD8] focus-within:ring-4 focus-within:ring-[#024AD8]/10 focus-within:bg-white">
              <button
                type="button"
                aria-label={`Select country calling code. Currently ${country.name} ${country.callingCode}`}
                title={`${country.name} ${country.callingCode}`}
                aria-expanded={countryOpen}
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex w-14 shrink-0 items-center justify-center gap-1 rounded-l-xl border-r border-gray-200 px-2 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-100/70"
              >
                <img src={country.flagUrl} alt="" width="20" height="15" className="h-[15px] w-5 object-cover" />
                <span className="text-xs text-gray-600">{country.callingCode}</span>
                <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform ${countryOpen ? "rotate-180" : ""}`} />
              </button>
              {/* <Phone className="ml-3 h-4 w-4 shrink-0 self-center text-gray-400" /> */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="min-w-0 flex-1 rounded-r-xl bg-transparent px-3 py-2.5 text-sm outline-none placeholder-gray-400 font-normal"
              />
              {countryOpen && (
                <div className="absolute left-0 top-[calc(100%+6px)] z-30 w-full min-w-[260px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                  <input
                    type="search"
                    value={countrySearch}
                    onChange={(event) => setCountrySearch(event.target.value)}
                    placeholder="Search country"
                    autoFocus
                    className="w-full border-b border-gray-200 px-4 py-2.5 text-sm outline-none"
                  />
                  <div className="max-h-56 overflow-y-auto py-1">
                    {visibleCountries.map((item) => (
                      <button 
                        key={item.code}
                        type="button"
                        onClick={() => { setCountry(item); setCountryOpen(false); setCountrySearch(""); }}
                        className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-50"
                      >
                        <img src={item.flagUrl} alt="" width="20" height="15" className="h-[15px] w-5 object-cover" />
                        <span className="min-w-0 flex-1 truncate text-gray-700">{item.name}</span>
                        <span className="text-gray-500">{item.callingCode}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Email Address */}
        <div className="relative">
          <label className="mb-1 block text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal"
            />
          </div>
        </div>

        {/* Service Type */}
        <div className="relative">
          <label className="mb-1 block text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Service Type *</label>
          <div className="relative">
            <Wrench className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300 pointer-events-none" />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-2.5 text-sm outline-none appearance-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal cursor-pointer"
            >
              <option value="" disabled>Select Service</option>
              {serviceOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-400 transition-colors duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Model Number */}
        <div className="relative">
          <label className="mb-1 block text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Model Number *</label>
          <div className="relative">
            <Wrench className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-300" />
            <input
              type="text"
              name="modelNumber"
              value={formData.modelNumber}
              onChange={handleChange}
              placeholder="Enter your equipment model number"
              required
              maxLength={100}
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal"
            />
          </div>
        </div>

        {/* Describe Your Requirements */}
        <div className="sm:col-span-2 relative">
          <label className="mb-1 block text-[11px] font-semibold text-gray-600 uppercase tracking-wide">Describe Your Requirements</label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-gray-400 transition-colors duration-300" />
            <textarea
              rows={2}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your equipment or the assistance you need?"
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#024AD8] focus:ring-4 focus:ring-[#024AD8]/10 bg-gray-50/50 focus:bg-white placeholder-gray-400 font-normal resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 mt-0.5">
          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#024AD8] to-[#0B63F6] px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#024AD8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#024AD8]/30 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "loading" ? "Sending..." : "Request Consultation"}
            {status !== "loading" && (
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
