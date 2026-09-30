import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  FileText,
  CreditCard,
  DollarSign,
  Package,
  CheckCircle2,
} from "lucide-react";
import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Terms & Conditions | Smart ePrint Services",
  description:
    "Official Terms and Conditions for Smart ePrint Services, an online store owned and operated by Innovation Dynamics Group LLC. Covers order acceptance, pricing, payments, taxes, shipping, returns, and warranties.",
};

const sections = [
  {
    id: "store-ownership",
    title: "1. Store Ownership & Acceptance of Terms",
    content: [
      "Welcome to Smart ePrint Services. These Terms & Conditions (\"Terms\") govern your access to and use of smarteprintservices.com (the \"Website\") and any purchase of products or services through our online store.",
      "Smart ePrint Services is an e-commerce online retail store owned and operated by Innovation Dynamics Group LLC (\"Innovation Dynamics Group LLC\", \"Company\", \"we\", \"us\", or \"our\"), a registered business entity based in the State of Minnesota, United States.",
      "By browsing our catalog, creating an account, submitting an inquiry, placing an order, or purchasing any merchandise from Smart ePrint Services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms, along with our Privacy Policy and Returns & Refunds Policy.",
      "If you do not agree with any provision of these Terms, you must immediately discontinue using our Website and refrain from placing orders.",
    ],
  },
  {
    id: "orders-acceptance",
    title: "2. Orders & Order Acceptance",
    content: [
      "Order Submission: When you place an order on smarteprintservices.com, your submission represents an offer to purchase the selected merchandise subject to these Terms.",
      "Order Confirmation vs. Acceptance: Receipt of an electronic order confirmation, receipt notice, or order number does not signify our final acceptance of your order, nor does it constitute confirmation of our offer to sell. An order is officially accepted and a binding contract formed only when your payment has cleared verification, your shipping address has been authenticated, and the merchandise is fulfilled and dispatched to the carrier.",
      "Right to Decline or Cancel: Smart ePrint Services reserves the right, at its sole discretion and at any time after receiving your order, to accept, decline, limit, or cancel your order for any legitimate business reason. Common reasons include product unavailability or inventory shortages, errors in product descriptions or pricing, suspected fraudulent or unauthorized transactions, or address verification failures.",
      "Order Quantity Limits: We reserve the right to limit the quantity of items purchased per person, per household, or per order. Such restrictions may apply to orders placed using the same customer account, credit card, billing address, or shipping address.",
    ],
  },
  {
    id: "prices-pricing-errors",
    title: "3. Prices & Pricing Errors",
    content: [
      "Currency: All prices listed on smarteprintservices.com are displayed in United States Dollars ($ USD) unless otherwise explicitly stated.",
      "Price Adjustments: We reserve the right to adjust prices, promotional offers, and product specifications at any time without prior notice prior to order confirmation. The price charged will be the price reflected on the checkout screen at the time the order is submitted.",
      "Pricing Errors: While we make every reasonable effort to provide accurate pricing across our entire catalog, typographical errors, feed synchronization delays, or vendor discrepancies may occasionally occur. If a product is listed at an incorrect price due to a clerical, typographical, or technical error:",
      "• Smart ePrint Services reserves the right to cancel, refuse, or decline any orders placed for products listed at the incorrect price, regardless of whether the order has been acknowledged or your payment method has been charged.",
      "• If your credit card or payment method has already been charged for an order cancelled due to a pricing error, we will promptly issue a full 100% refund to your original payment method.",
      "• We are under no legal obligation to fulfill or ship products at an erroneously listed price.",
    ],
  },
  {
    id: "payments-billing",
    title: "4. Payments & Billing",
    content: [
      "Accepted Payment Methods: We accept major credit and debit cards (Visa, MasterCard, American Express, Discover) through secure online card processing, as well as Cash on Delivery (COD) for qualifying orders and destinations where offered during checkout.",
      "Payment Security: All online credit and debit card transactions are encrypted using 256-bit SSL technology and processed through secure, PCI-DSS compliant third-party payment gateways (including Clover). Smart ePrint Services does not store full credit card numbers or security CVV codes on its servers.",
      "Authorization & Verification: By submitting payment details, you represent and warrant that you are authorized to use the designated payment method, that the billing information provided is true and accurate, and that you authorize our payment processor to charge the total order amount (including merchandise subtotal, shipping fees, and applicable taxes).",
      "Payment Hold & Fraud Prevention: If our fraud prevention filters flag a transaction, or if your card issuer declines authorization, your order will be paused or canceled. We reserve the right to request additional identification or address verification before fulfilling flagged orders.",
    ],
  },
  {
    id: "taxes",
    title: "5. Taxes",
    content: [
      "Sales Tax Collection: Smart ePrint Services calculates, collects, and remits applicable state and local sales taxes in accordance with federal, state, and municipal statutory requirements based on the shipping destination provided at checkout.",
      "Tax Estimation at Checkout: An estimated sales tax amount is calculated and displayed on the checkout page prior to final order submission.",
      "Customer Tax Responsibility: If a transaction is not subject to sales tax collection by Smart ePrint Services in your jurisdiction, you may remain personally responsible for any applicable state or local use taxes. Customers are encouraged to consult their tax advisor regarding local tax obligations.",
      "Tax-Exempt Orders: Organizations eligible for sales tax exemption must contact our support team at support@smarteprintservices.com with a valid, signed state tax-exemption certificate prior to placing their order so their account can be configured appropriately.",
    ],
  },
  {
    id: "product-availability",
    title: "6. Product Availability & Catalog Accuracy",
    content: [
      "Catalog Offerings: Smart ePrint Services offers genuine, brand-new home printers, office printers, laser printers, inkjet multifunction devices, document scanners, original OEM ink and toner cartridges, and printer accessories from leading manufacturers including HP, Canon, Epson, and Brother.",
      "Stock Availability: All products displayed on the Website are subject to availability. While we strive to maintain real-time inventory counts, high demand or supply chain delays may occasionally cause items to become temporarily backordered or discontinued.",
      "Backorder & Out-of-Stock Remedies: If an item you ordered is determined to be unavailable or backordered after order submission, our customer service team will contact you promptly by email or phone. You will be provided the option to:",
      "1. Wait for incoming stock replenishment with an updated delivery estimate;",
      "2. Select an equivalent alternative product (with any price difference adjusted); or",
      "3. Cancel the unavailable item or complete order for an immediate full refund.",
      "Product Depictions: Images, photographs, and specifications on the Website are provided for illustrative purposes. While we strive for photographic fidelity, actual manufacturer packaging or slight cosmetic variations may differ from displayed images.",
    ],
  },
  {
    id: "order-cancellation",
    title: "7. Order Cancellation",
    content: [
      "Customer Cancellation Before Dispatch: You may request to cancel an order at no penalty before the order has entered our packaging and fulfillment workflow or been handed to the shipping carrier. To request cancellation, contact our customer service team immediately by phone at +1 (877) 765-2289 or by email at support@smarteprintservices.com with your order number.",
      "Orders Already Shipped: Once an order has been packaged, labeled, or handed over to a freight or parcel carrier, it cannot be intercepted or cancelled in transit. You must accept the delivery and initiate a standard return under our 30-day Returns & Refunds Policy.",
      "Unauthorized Package Refusal: Refusing a package upon delivery without prior authorization from Smart ePrint Services may incur carrier return fees, return shipping deductions, or delays in refund processing.",
      "Merchant Cancellation: As outlined in Section 2, Smart ePrint Services reserves the right to cancel orders due to inventory exhaustion, payment failure, suspicion of fraud, or pricing errors. In such cases, you will be notified immediately and issued a prompt 100% refund.",
    ],
  },
  {
    id: "shipping-delivery",
    title: "8. Shipping & Delivery Policy",
    content: [
      "Shipping Scope: We ship to residential and commercial street addresses across the United States, including all 50 states (continental US, Alaska, and Hawaii). Certain oversized items may have delivery restrictions to P.O. Boxes or APO/FPO addresses.",
      "Free Standard Shipping: We offer Free Standard Delivery on all qualifying orders with a merchandise subtotal of $49.00 or more shipped within the Continental United States.",
      "Standard Shipping Fees: For orders under $49.00, or for expedited shipping methods selected during checkout, standard shipping fees are calculated based on weight, dimensions, and destination ZIP code.",
      "Order Handling & Processing Time: Most in-stock orders are processed and prepared for carrier pickup within 1 to 2 business days (Monday through Friday, excluding federal holidays) following payment confirmation.",
      "Estimated Delivery Timeframe: Standard delivery transit typically takes 2 to 3 business days following dispatch within the continental United States. Transit times are estimates and may vary due to carrier volume, seasonal peaks, inclement weather, or remote geographic locations.",
      "Tracking: A shipping confirmation email containing the carrier name and tracking number is dispatched as soon as your package leaves our facility.",
      "Title & Risk of Loss: All merchandise purchased from Smart ePrint Services is shipped pursuant to a commercial shipping contract. Risk of loss and title for products pass to you upon delivery to the carrier or upon physical delivery to the designated delivery address, in accordance with applicable consumer protection laws.",
      "Damaged in Transit / Inspection Requirement: Customers must inspect all packages upon arrival. If your shipment arrives visibly damaged, crushed, tampered with, or short of items, you must notify Smart ePrint Services within 48 hours of delivery at support@smarteprintservices.com with photos of the damaged box, shipping label, and contents so we can file a carrier claim and arrange a prompt replacement or refund.",
    ],
  },
  {
    id: "returns-refunds",
    title: "9. Returns & Refunds Policy",
    content: [
      "30-Day Return Window: We provide a 30-day return policy. You have 30 calendar days from the date of confirmed carrier delivery to initiate a return request for eligible merchandise.",
      "Return Eligibility Criteria: To qualify for a return and refund, the item must be brand-new, unused, uninstalled, and in its original manufacturer packaging with all factory seals, serial numbers, power cords, cables, software media, accessories, and instruction manuals intact.",
      "Return Merchandise Authorization (RMA) Required: You must contact our customer service team at support@smarteprintservices.com or call +1 (877) 765-2289 to obtain an RMA number and return warehouse address prior to shipping any product back. Items returned without an approved RMA number will be rejected or significantly delayed.",
      "Return Shipping Costs:",
      "• Customer Responsibility: For discretionary returns (e.g., changed mind, purchased wrong model, no longer needed), the customer is responsible for safe return shipping and shipping costs. We recommend using a trackable, insured carrier.",
      "• Store Responsibility: If the return is due to our error (wrong item sent) or the product arrived damaged or defective out of the box, Smart ePrint Services will provide a prepaid return shipping label at no expense to you.",
      "Non-Returnable Items:",
      "• Opened, unsealed, or installed ink cartridges, toner cartridges, or printheads (unless proven defective upon installation).",
      "• Software, digital licenses, or downloadable products where the license key or packaging seal has been broken or activated.",
      "• Consumable media such as opened reams of paper, photo paper, specialty media, or cleaning supplies.",
      "• Items missing original serial numbers, UPC barcodes, accessories, or items exhibiting signs of customer misuse or neglect.",
      "Refund Processing: Returned items are inspected within 2 to 3 business days of arrival at our returns facility. Once inspected and approved, refunds are credited to the original payment method within 5 to 10 business days. Original outbound shipping charges are non-refundable unless the return is due to store error.",
      "For complete procedures, please consult our dedicated Returns & Refunds Policy page.",
    ],
  },
  {
    id: "product-warranties",
    title: "10. Product & Manufacturer Warranties",
    content: [
      "Genuine Authentic Hardware: Smart ePrint Services guarantees that all printers, document scanners, and printing supplies sold on our Website are 100% genuine, authentic OEM products sourced through authorized distribution channels.",
      "Manufacturer Limited Warranty: Brand-new hardware products are covered exclusively under the respective manufacturer's standard limited warranty (e.g., HP, Canon, Epson, Brother) in accordance with the manufacturer's specific terms, conditions, and coverage periods (typically 1 to 2 years from original purchase date).",
      "Warranty Service & Technical Support: Warranty service, repairs, and technical diagnostics are administered directly by the original product manufacturer. Customers should retain their Smart ePrint Services order receipt and invoice as official proof of purchase for manufacturer warranty claims.",
      "Independent Retailer Disclaimer: Smart ePrint Services and Innovation Dynamics Group LLC are independent online retailers. Except as expressly required by applicable consumer law, Smart ePrint Services does not independently manufacture hardware, provide express repair warranties, or assume liability for manufacturer warranty decisions. Our customer service team is happy to assist you in locating warranty documentation, serial numbers, and manufacturer contact channels.",
      "Disclaimer of Implied Warranties: To the fullest extent permitted by applicable law, all products and website materials are provided \"as is\" and \"as available\" without express or implied warranties of any kind, including implied warranties of merchantability or fitness for a particular purpose, other than those warranties provided directly by product manufacturers.",
    ],
  },
  {
    id: "website-use-ip",
    title: "11. Website Use & Intellectual Property",
    content: [
      "License to Access: Smart ePrint Services grants you a limited, non-exclusive, non-transferable, revocable license to access and make personal or commercial purchasing use of smarteprintservices.com in accordance with these Terms.",
      "Intellectual Property Ownership: All content included on the Website—including text, graphics, logos, button icons, images, audio clips, digital downloads, compilations, and software—is the property of Innovation Dynamics Group LLC, Smart ePrint Services, or its content suppliers and is protected by United States and international copyright, trademark, and unfair competition laws.",
      "Trademark Notice: Smart ePrint Services and associated logos are service marks of Innovation Dynamics Group LLC. HP®, Canon®, Epson®, Brother®, and other brand names, product designations, and logos referenced on the Website are registered trademarks of their respective owners. Innovation Dynamics Group LLC is an authorized reseller of select brand products (including HP); all other third-party trademarks are used strictly for descriptive, identification, and compatibility purposes.",
    ],
  },
  {
    id: "prohibited-activities",
    title: "12. Prohibited Activities & Security",
    content: [
      "Prohibited Conduct: You agree not to engage in any of the following restricted activities when using smarteprintservices.com:",
      "• Violating any applicable federal, state, local, or international laws or regulations.",
      "• Attempting unauthorized access to our servers, networks, user databases, or payment gateways.",
      "• Using scrapers, crawlers, robots, or automated data extraction tools to harvest catalog information, prices, or customer data without our written consent.",
      "• Introducing viruses, trojans, worms, malware, or other malicious code into our systems.",
      "• Submitting false, fraudulent, or deceptive information, including using unauthorized credit cards or false shipping addresses.",
      "• Interfering with, disrupting, or imposing an unreasonable burden on the infrastructure or performance of the Website.",
      "Account Security: If you create an account on our store, you are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.",
    ],
  },
  {
    id: "limitation-liability",
    title: "13. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Smart ePrint Services, Innovation Dynamics Group LLC, its members, managers, officers, employees, agents, affiliates, and suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive damages of any kind, including but not limited to loss of profits, loss of revenue, loss of data, loss of business opportunity, replacement procurement costs, or operational downtime, arising out of or related to your use of the Website, delays in shipment, or the purchase or use of any product.",
      "In no event shall the total cumulative liability of Smart ePrint Services and Innovation Dynamics Group LLC for any claim or damage arising out of these Terms or any product sold exceed the actual dollar amount paid by you for the specific item or service giving rise to the claim.",
      "Some jurisdictions do not allow certain warranty exclusions or damage limitations; in such jurisdictions, our liability shall be limited to the minimum extent permitted by applicable law.",
    ],
  },
  {
    id: "indemnification",
    title: "14. Indemnification",
    content: [
      "You agree to defend, indemnify, and hold harmless Smart ePrint Services, Innovation Dynamics Group LLC, and their respective officers, directors, members, employees, contractors, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, damages, judgments, losses, costs, or expenses (including reasonable legal and accounting fees) arising from or relating to:",
      "1. Your access to or use of the Website or products purchased through the store;",
      "2. Your breach or violation of these Terms & Conditions or our policies; or",
      "3. Your violation of any applicable law or infringement of any intellectual property or privacy right of a third party.",
    ],
  },
  {
    id: "governing-law",
    title: "15. Governing Law & Dispute Resolution",
    content: [
      "Governing Law: These Terms and any transaction or dispute arising out of or related to your use of smarteprintservices.com shall be governed by, construed, and enforced in accordance with the laws of the State of Minnesota, United States, without regard to its conflict of law principles.",
      "Jurisdiction: You agree that any legal action, suit, or proceeding arising out of or relating to these Terms or your purchase shall be instituted exclusively in the state or federal courts located in Anoka County or Hennepin County, Minnesota, and you irrevocably submit to the exclusive personal jurisdiction of such courts.",
      "Informal Resolution: Before initiating any formal legal claim, you agree to contact our customer support team in writing with a comprehensive description of the dispute. Both parties agree to make a good-faith effort to resolve the dispute amicably before pursuing litigation.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "16. Changes to These Terms",
    content: [
      "We reserve the right to revise, update, or modify these Terms & Conditions at any time to reflect updates in our business operations, product catalog, payment technologies, or applicable legal requirements.",
      "Any revisions will be posted on this page with an updated \"Last updated\" date at the top. Revisions become effective immediately upon posting. Your continued use of the Website or placement of orders after any updates constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact-information",
    title: "17. Contact Information",
    content: [
      "If you have questions, inquiries, or require assistance regarding these Terms & Conditions or any order placed on our store, please contact our customer care team using the information below:",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      {/* Hero Header */}
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-blue-100 backdrop-blur-sm">
              <FileText className="h-3.5 w-3.5 text-blue-200" />
              <span>OFFICIAL STORE POLICIES</span>
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Terms &amp; <span className="text-[#65adff]">Conditions</span>
            </h1>
            <p className="mt-3 text-sm font-medium text-blue-50/90 sm:text-base">
              Smart ePrint Services &bull; Owned &amp; Operated by Innovation Dynamics Group LLC
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-blue-200/80">
              Last updated: October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-14">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="top-24 space-y-6 lg:sticky">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">
                Table of Contents
              </p>
              <nav className="mt-4">
                <ol className="list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-500">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="transition-colors hover:text-[#0758cf]"
                      >
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Quick Support Card */}
            <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-5 text-xs text-slate-600">
              <p className="font-black text-slate-900">Have Questions?</p>
              <p className="mt-1 text-slate-500">Our support team is ready to assist you with orders, returns, and store policies.</p>
              <div className="mt-4 space-y-2 font-medium">
                <a
                  href="tel:+18777652289"
                  className="flex items-center gap-2 text-[#0758cf] hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +1 (877) 765-2289
                </a>
                <a
                  href="mailto:support@smarteprintservices.com"
                  className="flex items-center gap-2 text-[#0758cf] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  support@smarteprintservices.com
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Document Article */}
          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:px-10 lg:px-14 lg:py-12">
            
            {/* Header intro */}
            <div className="border-b border-slate-200 pb-8">
              <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0758cf]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Binding Customer Agreement</span>
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Terms of Service &amp; Sale
              </h2>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Effective &amp; Last updated: October 2026
              </p>
              
              {/* Highlight callout establishing entity */}
              <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 p-5 text-sm leading-relaxed text-slate-700">
                <p className="font-bold text-slate-900">
                  Store Identification Notice:
                </p>
                <p className="mt-1">
                  <strong>Smart ePrint Services</strong> (<a href="https://smarteprintservices.com" className="text-[#0758cf] underline">smarteprintservices.com</a>) is an online store owned and operated by <strong>Innovation Dynamics Group LLC</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a Minnesota limited liability company.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  These Terms set forth the legally binding terms and conditions governing your use of our online store and all purchases made through it.
                </p>
              </div>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="scroll-mt-24 border-t border-slate-200 py-10"
              >
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl">
                  <span className="mr-3 text-[#0758cf]">
                    {section.title.split(".")[0]}.
                  </span>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}

                  {/* Enhanced callouts per section */}
                  {section.id === "prices-pricing-errors" && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-amber-900">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <div>
                          <p className="font-bold text-amber-950">Pricing Error Safeguard:</p>
                          <p className="mt-0.5 text-xs text-amber-800 leading-relaxed">
                            In the event that an item is mistakenly listed at an incorrect price, Smart ePrint Services reserves the right to cancel the order. If your payment has already been captured, a 100% full refund will be processed immediately to your original payment method.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "shipping-delivery" && (
                    <div className="space-y-3 pt-2">
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                          <Truck className="mx-auto h-5 w-5 text-[#0758cf]" />
                          <p className="mt-2 text-xs font-bold text-slate-900">Free Delivery Over $49</p>
                          <p className="text-[11px] text-slate-500">Continental US orders</p>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                          <Clock className="mx-auto h-5 w-5 text-[#0758cf]" />
                          <p className="mt-2 text-xs font-bold text-slate-900">1–2 Days Handling</p>
                          <p className="text-[11px] text-slate-500">24h dispatch before 1 PM</p>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                          <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" />
                          <p className="mt-2 text-xs font-bold text-slate-900">2–3 Days Transit</p>
                          <p className="text-[11px] text-slate-500">Estimated delivery window</p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3.5 text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span>Looking for detailed shipping guidelines, carrier info, or tracking procedures?</span>
                        <Link href="/shipping-policy" className="font-bold text-[#0758cf] underline hover:text-blue-800 shrink-0">
                          View Full Shipping Policy &rarr;
                        </Link>
                      </div>
                    </div>
                  )}

                  {section.id === "returns-refunds" && (
                    <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-sm text-blue-950">
                      <div className="flex items-start gap-2.5">
                        <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                        <div>
                          <p className="font-bold text-blue-950">Need to Initiate a Return?</p>
                          <p className="mt-0.5 text-xs text-blue-800 leading-relaxed">
                            Please contact customer service at{" "}
                            <a href="mailto:support@smarteprintservices.com" className="font-bold underline">
                              support@smarteprintservices.com
                            </a>{" "}
                            to request a mandatory Return Merchandise Authorization (RMA) number. For step-by-step guidance, visit our full{" "}
                            <Link href="/refund-cancellation-policy" className="font-bold text-[#0758cf] underline">
                              Returns &amp; Refunds Policy
                            </Link>.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "product-warranties" && (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
                      <p className="font-bold text-slate-800">Manufacturer Warranty Notice:</p>
                      <p className="mt-1">
                        All brand-new printers, scanners, and supplies are backed by their respective manufacturer standard limited warranty (typically 1 to 2 years). Warranty claims, diagnostic support, and service repairs are fulfilled directly by the manufacturer (HP, Canon, Epson, Brother).
                      </p>
                    </div>
                  )}

                  {/* Section 17 Contact Block */}
                  {section.id === "contact-information" && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-[#f4f8ff] p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0758cf]">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-lg font-black text-slate-900">
                            Smart ePrint Services
                          </p>
                          <p className="text-xs font-semibold text-slate-500">
                            An Online Store Owned &amp; Operated by{" "}
                            <span className="font-bold text-slate-700">
                              Innovation Dynamics Group LLC
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-4 border-t border-blue-100 pt-5 text-sm sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Headquarters / Mail
                            </p>
                            <p className="mt-0.5 font-semibold text-slate-700 leading-relaxed">
                              11397 Quincy St NE<br />
                              Blaine, Minnesota 55434<br />
                              United States
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Toll-Free Telephone
                            </p>
                            <a
                              href="tel:+18777652289"
                              className="mt-0.5 block font-bold text-[#0758cf] hover:underline"
                            >
                              +1 (877) 765-2289
                            </a>
                            <p className="text-xs text-slate-500">
                              Mon – Fri: 9:00 AM – 6:00 PM EST<br />
                              Sat: 10:00 AM – 4:00 PM EST
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Support Email
                            </p>
                            <a
                              href="mailto:support@smarteprintservices.com"
                              className="mt-0.5 block font-bold text-[#0758cf] hover:underline"
                            >
                              support@smarteprintservices.com
                            </a>
                            <p className="text-xs text-slate-500">
                              24/7 ticket response within 24 business hours
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0758cf]" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Online Inquiries
                            </p>
                            <Link
                              href="/contact-us"
                              className="mt-0.5 block font-bold text-[#0758cf] hover:underline"
                            >
                              Visit Contact Page &rarr;
                            </Link>
                            <p className="text-xs text-slate-500">
                              Submit inquiries, RMA requests &amp; support tickets
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Cross-Policy Navigation Footer */}
            <div className="mt-8 border-t border-slate-200 pt-8 text-xs font-semibold text-slate-500">
              <p className="text-slate-700">Related Store Policies &amp; Agreements:</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/shipping-policy"
                  className="text-[#0758cf] hover:underline"
                >
                  Shipping &amp; Delivery Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/refund-cancellation-policy"
                  className="text-[#0758cf] hover:underline"
                >
                  Returns &amp; Refunds Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/privacy-policy"
                  className="text-[#0758cf] hover:underline"
                >
                  Privacy Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/disclaimer"
                  className="text-[#0758cf] hover:underline"
                >
                  Disclaimer
                </Link>
                <span>&bull;</span>
                <Link
                  href="/cookie-policy"
                  className="text-[#0758cf] hover:underline"
                >
                  Cookie Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/contact-us"
                  className="text-[#0758cf] hover:underline"
                >
                  Contact Customer Care
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}
