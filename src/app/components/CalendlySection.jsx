"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlySection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#0D0E10] border-t border-white/10 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#B3B6BC] mb-6">
          Schedule a Private Consultation
        </h2>
        <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Secure a private appointment to discuss acquisition opportunities,
          sourcing, or personalized introductions to select vehicles.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C8A968]/10">
          <InlineWidget
            url="https://calendly.com/arcbrim/consultation"
            styles={{
              height: "700px",
              backgroundColor: "#0D0E10",
            }}
            pageSettings={{
              backgroundColor: "0D0E10",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "#C8A968",
              textColor: "#ffffff",
            }}
          />
        </div>
      </div>
    </section>
  );
}
