import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E10] text-white font-light tracking-wide overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 border-b border-white/10 overflow-hidden">
        <Image
          src="/hero-lamborghini-aventador-svj.jpg"
          alt="Lamborghini Aventador SVJ"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 max-w-4xl">
          <Image
            src="/arcbrim-logo.png"
            alt="Arcbrim Exotics Logo"
            width={160}
            height={160}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#B3B6BC] mb-4">
            Access the Extraordinary
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
            Private introductions to performance, heritage, and modern expression.
            For those who understand the value of motion.
          </p>
          <a
            href="#experience"
            className="inline-block px-8 py-3 border border-[#C8A968] text-[#C8A968] rounded-full hover:bg-[#C8A968]/10 transition duration-300"
          >
            Discover More
          </a>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="relative py-32 bg-[#0D0E10] border-t border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 flex items-center justify-center">
          <Image
            src="/arcbrim-logo.png"
            alt="Arcbrim Logo Watermark"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#B3B6BC]">
            The Experience
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Arcbrim Exotics offers more than vehicles — it offers access.
            Every introduction is private, every journey bespoke. Whether pursuing
            the quiet opulence of a Rolls-Royce Ghost or the adrenaline of a
            McLaren 750S, our approach remains the same: discretion, precision,
            and integrity.
          </p>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
            We work within a global network of collectors, manufacturers, and
            curators to secure automotive excellence. The experience is not
            transactional — it’s personal.
          </p>
        </div>
      </section>

      {/* CURATED MACHINES SECTION */}
      <section
        id="curated"
        className="py-24 px-6 border-t border-white/10 bg-black/20"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#B3B6BC] mb-4">
            Curated Machines
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Icons of performance and design — meticulously sourced, quietly delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/rolls-royce-ghost.jpg", alt: "Rolls-Royce Ghost" },
            { src: "/aston-martin-vanquish.jpg", alt: "Aston Martin Vanquish" },
            { src: "/mclaren-750s.jpg", alt: "McLaren 750S" },
            { src: "/porsche-992-turbo-s.jpg", alt: "Porsche 992 Turbo S" },
            { src: "/bugatti-chiron.jpg", alt: "Bugatti Chiron" },
          ].map((car, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-white/5"
            >
              <Image
                src={car.src}
                alt={car.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-[#C8A968] text-lg font-medium tracking-wide">
                  {car.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRIVATE ACCESS SECTION */}
      <section className="py-32 px-6 bg-[#0D0E10] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#B3B6BC] mb-6">
            Private Access
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Arcbrim Exotics operates by introduction.  
            If you would like to be considered for private acquisition access or
            collaboration, please request a consultation below.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-10 py-3 rounded-full border border-[#C8A968] text-[#C8A968] hover:bg-[#C8A968]/10 transition duration-300"
          >
            Request Access
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/40 text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Arcbrim Exotics — Access the Extraordinary</p>
      </footer>
    </main>
  );
}
