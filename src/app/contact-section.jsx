"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.target);
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setStatus("success");
      event.target.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  const colors = {
    gold: "#C8A968",
    graphite: "#B3B6BC",
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0E10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: colors.graphite }}>
          Discreet Contact
        </h2>
        <p className="text-white/70 mb-10 max-w-2xl mx-auto">
          Prefer a direct introduction? Reach out below. All enquiries are handled in confidence.
        </p>

        <form
          name="contact"
          onSubmit={handleSubmit}
          netlify-honeypot="bot-field"
          className="mx-auto max-w-lg space-y-4 p-8 rounded-2xl bg-black/30 border border-white/10 shadow-xl backdrop-blur-md"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input name="name" placeholder="Full Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3" required />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3" required />
          <textarea name="message" rows="5" placeholder="Your Message" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3" required />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 text-white font-medium tracking-wide"
            style={{ color: colors.gold }}
          >
            {status === "submitting" ? "Sending..." : "Send Securely"}
          </button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 inline-block rounded-xl border border-[#C8A968]/30 bg-black/40 px-6 py-3 text-[#C8A968] shadow-lg"
            >
              Message sent successfully. We’ll be in touch shortly.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 inline-block rounded-xl border border-red-500/30 bg-black/40 px-6 py-3 text-red-400 shadow-lg"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 text-sm text-white/60 space-y-1">
          <p>
            or email us directly at{" "}
            <a href="mailto:concierge@arcbrim.com" className="text-white hover:text-[#C8A968] transition">
              concierge@arcbrim.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
