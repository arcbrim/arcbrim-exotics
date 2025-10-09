export default function ContactSection() {
  const colors = {
    gold: "#C8A968",
    graphite: "#B3B6BC",
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0E10] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-3"
          style={{ color: colors.graphite }}
        >
          Discreet Contact
        </h2>
        <p className="text-white/70 mb-10 max-w-2xl mx-auto">
          Prefer a direct introduction? Reach out below. All enquiries are handled in confidence.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mx-auto max-w-lg space-y-4 p-8 rounded-2xl bg-black/30 border border-white/10 shadow-xl backdrop-blur-md"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            name="name"
            placeholder="Full Name"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-white/20 focus:ring-1 focus:ring-white/20 outline-none transition resize-none"
            required
          />

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl text-white font-medium tracking-wide transition-all duration-300 border border-white/20 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(200,169,104,0.25)]"
            style={{ color: colors.gold }}
          >
            Send Securely
          </button>
        </form>

        <div className="mt-10 text-sm text-white/60 space-y-1">
          <p>
            or email us directly at{" "}
            <a
              href="mailto:concierge@arcbrim.com"
              className="text-white hover:text-[#C8A968] transition"
            >
              concierge@arcbrim.com
            </a>
          </p>
          <p>+1 (xxx) xxx-xxxx</p>
        </div>
      </div>
    </section>
  );
}
