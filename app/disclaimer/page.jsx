import StandardCTA from "../components/StandardCTA";

export const metadata = {
  title: "Disclaimer | Smart ePrint Services",
  description: "Disclaimer for Smart ePrint Services.",
};

const sections = [
  {
    id: "general-information",
    title: "1. General Information",
    content: [
      "The information provided on smarteprintservices.com (\"Website\") is intended for general informational purposes only. While we strive to ensure the accuracy of all product descriptions, specifications, prices, and availability, we do not warrant that such information is error-free, complete, or current at all times.",
      "Product specifications, features, and availability are subject to change without prior notice. We recommend verifying product details with the manufacturer before making purchasing decisions, especially for technical specifications and compatibility requirements."
    ]
  },
  {
    id: "product-information",
    title: "2. Product Information & Availability",
    content: [
      "All products displayed on the Website are subject to availability. Prices shown are in U.S. dollars and may vary based on promotions, market conditions, or supplier pricing changes. Smart ePrint Services reserves the right to:",
      "Modify product pricing at any time without prior notice.",
      "Limit quantities available for purchase.",
      "Cancel orders if products are discontinued or unavailable.",
      "Correct any pricing errors that may occur.",
      "Product images are for illustration purposes only and may not exactly represent the actual product. Colors, dimensions, and features shown may vary from the physical product."
    ]
  },
  {
    id: "trademark-notice",
    title: "3. Trademark Notice",
    content: [
      "All product names, brand names, logos, and trademarks displayed on this Website are the property of their respective owners. Reference to any products, services, processes, or other information by trade name, trademark, manufacturer, or otherwise does not constitute or imply endorsement, sponsorship, or recommendation by Smart ePrint Services.",
      "Smart ePrint Services is an independent retailer and is not affiliated with, authorized by, or sponsored by any of the manufacturers whose products we sell, unless otherwise explicitly stated. Trademarks are used for identification and informational purposes only.",
      "HPÂ® is a registered trademark of HP Inc. CanonÂ® is a registered trademark of Canon Inc. EpsonÂ® is a registered trademark of Seiko Epson Corporation. BrotherÂ® is a registered trademark of Brother Industries, Ltd. All other trademarks are the property of their respective owners."
    ]
  },
  {
    id: "warranty-information",
    title: "4. Warranty Information",
    content: [
      "Products sold through Smart ePrint Services may be eligible for manufacturer warranty coverage where applicable. Smart ePrint Services does not provide manufacturer warranty service, technical support, or repair services directly.",
      "For warranty service or product support, please contact the manufacturer directly. Warranty terms and coverage vary by manufacturer and product. Customers are advised to review manufacturer warranty policies and retain proof of purchase for warranty claims.",
      "Extended warranty options may be available for select products. Any extended warranty offerings are provided by third-party warranty providers and are subject to their terms and conditions."
    ]
  },
  {
    id: "third-party-links",
    title: "5. Third-Party Links",
    content: [
      "This Website may contain links to third-party websites. These links are provided for convenience and informational purposes only. Smart ePrint Services:",
      "Does not endorse or assume responsibility for any third-party content.",
      "Is not responsible for the content, availability, or accuracy of any third-party sites.",
      "Does not guarantee the security or privacy practices of third-party websites.",
      "Recommends reviewing the terms of service and privacy policies of any third-party sites you visit.",
      "Clicking on third-party links is at your own risk, and Smart ePrint Services shall not be liable for any damages or losses arising from your use of third-party websites."
    ]
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Smart ePrint Services, its officers, directors, employees, agents, suppliers, and affiliates shall not be liable for any direct or indirect damages, loss of data, income, or profits, business interruption or loss of business opportunity, special, incidental, consequential, or punitive damages, damages arising from your use of or inability to use the Website, or damages resulting from reliance on any information obtained through the Website.",
      "This limitation applies regardless of the theory of liability, whether based on contract, tort (including negligence), strict liability, or any other legal theory, even if Smart ePrint Services has been advised of the possibility of such damages.",
      "Your use of this Website is at your sole risk. The Website and all information, products, and services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied."
    ]
  },
  {
    id: "accuracy-of-information",
    title: "7. Accuracy of Information",
    content: [
      "While we make every effort to ensure the information on this Website is accurate and up-to-date, we make no representations or warranties about the completeness or accuracy of any information, the reliability or suitability of the content for any particular purpose, or the availability or functionality of the Website at any given time.",
      "Errors and omissions may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice."
    ]
  },
  {
    id: "changes",
    title: "8. Changes to This Disclaimer",
    content: [
      "We may update this Disclaimer at any time by posting a revised version on this page. The updated Disclaimer takes effect when it is published. We encourage you to periodically review this page for any changes.",
      "Your continued use of the Website after any changes to this Disclaimer constitutes your acceptance of such changes."
    ]
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      "If you have any questions about this Disclaimer or need clarification on any information provided on our Website, please contact us:"
    ]
  }
];

export default function Disclaimer() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10233d]">
      <section className="relative isolate border-b border-blue-950/10 bg-[#023b9f]">
        <div className="absolute inset-0 -z-10 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#024AD8_0%,#023b9f_48%,#011f59_100%)]" />
        <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-100">Smart ePrint Services</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">Disclaimer</h1>
            <p className="mt-4 text-sm font-medium text-blue-50/80">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <aside className="top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">On this page</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-xs font-bold leading-5 text-slate-500">
              {sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`} className="hover:text-[#0758cf]">{section.title.replace(/^\d+\.\s*/, "")}</a></li>
              ))}
            </ol>
          </aside>

          <article className="min-w-0 rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,38,72,0.05)] sm:px-10 lg:px-14 lg:py-12">
            <div className="border-b border-slate-200 pb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0758cf]">Legal Information</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Disclaimer</h2>
              <p className="mt-3 text-sm font-semibold text-slate-500">Last updated: January 2026</p>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                The information provided on smarteprintservices.com ("Website") is intended for general informational purposes only. By accessing and using this Website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. If you do not agree with any part of this Disclaimer, please do not use our Website.
              </p>
            </div>

            {sections.map((section) => (
              <section id={section.id} key={section.id} className="border-t border-slate-200 py-10">
                <h2 className="text-2xl font-black tracking-tight text-[#10233d] sm:text-3xl"><span className="mr-3 text-[#0758cf]">{section.title.split(".")[0]}.</span>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
                  {section.content.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}
                  {section.id === "product-information" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Modify product pricing at any time without prior notice.</li>
                      <li>Limit quantities available for purchase.</li>
                      <li>Cancel orders if products are discontinued or unavailable.</li>
                      <li>Correct any pricing errors that may occur.</li>
                    </ul>
                  )}
                  {section.id === "third-party-links" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Does not endorse or assume responsibility for any third-party content.</li>
                      <li>Is not responsible for the content, availability, or accuracy of any third-party sites.</li>
                      <li>Does not guarantee the security or privacy practices of third-party websites.</li>
                      <li>Recommends reviewing the terms of service and privacy policies of any third-party sites you visit.</li>
                    </ul>
                  )}
                  {section.id === "limitation-of-liability" && (
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Direct or indirect damages.</li>
                      <li>Loss of data, income, or profits.</li>
                      <li>Business interruption or loss of business opportunity.</li>
                      <li>Special, incidental, consequential, or punitive damages.</li>
                      <li>Damages arising from your use of or inability to use the Website.</li>
                      <li>Damages resulting from reliance on any information obtained through the Website.</li>
                    </ul>
                  )}
                  {section.id === "contact" && (
                    <div className="rounded-2xl border border-blue-100 bg-[#f2f7ff] p-6">
                      <p className="text-lg font-black">Smart ePrint Services</p><p className="mt-1 text-xs font-semibold text-slate-500">Owned &amp; Operated by Innovation Dynamic Group LLC</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">11397 Quincy St NE<br />Blaine, Minnesota, 55434<br />United States</p>
                      <a href="mailto:support@smarteprintservices.com" className="mt-3 block font-bold text-[#0758cf] hover:underline">support@smarteprintservices.com</a>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <StandardCTA />
    </main>
  );
}

