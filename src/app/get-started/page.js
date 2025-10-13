import CalendlySection from "../components/CalendlySection";

export const metadata = {
  title: "Get Started | Arcbrim Exotics",
  description: "Schedule a private consultation with Arcbrim Exotics.",
};

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-[#0D0E10] text-white font-light tracking-wide overflow-x-hidden">
      <section className="py-24 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#B3B6BC] mb-4">Get Started</h1>
        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Begin your journey with Arcbrim Exotics. Schedule a private consultation below.
        </p>
      </section>
      <CalendlySection />
    </main>
  );
}
