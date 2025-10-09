"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import dynamic from "next/dynamic";

// ✅ Import the new ContactSection (server-rendered for Netlify)
const ContactSection = dynamic(() => import("./contact-section"), { ssr: true });

const brand = {
  gold: "#C8A968",
  graphite: "#B3B6BC",
  dark: "#0D0E10",
  slate: "#1A1C1F",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeInOut" },
  viewport: { once: true, amount: 0.6 },
});

export default function Page() {
  const openCalendly = useCallback(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/your-handle/arcbrim-consult?hide_landing_page_details=1&hide_event_type_details=1",
      });
    }
  }, []);

  return (
    <main
      style={{
        background: `radial-gradient(1000px 600px at 70% -10%, rgba(200,169,104,0.10), transparent 70%), ${brand.dark}`,
      }}
      className="min-h-screen"
    >
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <div
              className="h-9 w-9 grid place-items-center rounded-xl shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,169,104,0.22), rgba(200,169,104,0.06))",
              }}
            >
              <span className="text-2xl font-semibold" style={{ color: brand.gold }}>
                A
              </span>
            </div>
            <div className="leading-tight">
              <div
                className="font-semibold uppercase tracking-wide"
                style={{ color: brand.graphite }}
              >
                Arcbrim
              </div>
              <div className="text-[11px] tracking-[0.22em] text-white/55 -mt-0.5">
                EXOTICS
              </div>
            </div>
          </div>

          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            Book Consult
            <Calendar className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>

      {/* HERO — The Invitation */}
      <section className="relative h-[100svh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 px-3 py-1.5 text-white/60">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: brand.gold }} />
              Private Automotive Atelier
            </p>

            <h1
              className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight"
              style={{ color: brand.graphite }}
            >
              Access the Extraordinary.
            </h1>

            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Not for everyone. For the few who understand the art of rarity.
              Arcbrim is an introduction—curation, acquisition, and quiet stewardship.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={openCalendly}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition inline-flex items-center gap-2"
              >
                Begin a Private Consult
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#contact" className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-black/30"
            {...fadeUp(0.15)}
          >
            <div className="absolute inset-0 grid place-items-center">
              <img src="/arcbrim-logo.png" alt="Arcbrim Logo" className="h-36 opacity-90" />
            </div>
            {/* soft gold sweep */}
            <div
              className="absolute -inset-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(40% 25% at 60% 20%, rgba(200,169,104,0.18), transparent 70%)",
              }}
            />
          </motion.div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
          SCROLL
        </div>
      </section>

      {/* EXPERIENCE — Narrative */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          {[
            "Arcbrim is not a dealership.",
            "It is an introduction to rarity.",
            "A concierge for those who prefer to move unseen.",
          ].map((line, i) => (
            <motion.p
              key={i}
              className="text-xl md:text-2xl text-white/75"
              {...fadeUp(0.1 * i)}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </section>

      {/* CONCIERGE — Expertise */}
      <section
        className="py-24 border-y border-white/10"
        style={{ background: brand.slate }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Acquisition",
              desc: "Sourcing the unobtainable via a private global network and protected transactions.",
            },
            {
              title: "Curation",
              desc: "Portfolio strategy, provenance research, and value preservation for discerning collections.",
            },
            {
              title: "Advisory",
              desc: "Long-horizon guidance, discreet logistics, and white-glove delivery—beyond ownership.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              className="p-6 rounded-2xl border border-white/10 bg-black/30 hover:bg-black/40 transition shadow-xl"
              {...fadeUp(0.1 * i)}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: brand.gold }}>
                {c.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: brand.graphite }}
            {...fadeUp(0)}
          >
            Private Appointment
          </motion.h2>
          <motion.p className="mt-3 text-white/70" {...fadeUp(0.08)}>
            For introductions, by appointment only.
          </motion.p>
          <motion.div {...fadeUp(0.16)} className="mt-8">
            <button
              onClick={openCalendly}
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition inline-flex items-center gap-2"
              aria-label="Book a private consultation"
            >
              Book Your Private Consultation
              <Calendar className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ✅ CONTACT SECTION (Server-rendered for Netlify forms) */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 px-6 text-sm text-white/55">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="h-7 w-7 grid place-items-center rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,169,104,0.18), rgba(200,169,104,0.06))",
              }}
            >
              <span className="text-lg font-semibold" style={{ color: brand.gold }}>
                A
              </span>
            </div>
            <span>© {new Date().getFullYear()} Arcbrim Exotics. All rights reserved.</span>
          </div>
          <div className="text-xs text-white/40">
            Curating the World’s Finest Machines.
          </div>
        </div>
      </footer>
    </main>
  );
}
