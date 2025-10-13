export const metadata = {
  title: "Arcbrim Exotics — Access the Extraordinary",
  description:
    "A private automotive atelier curating the world’s finest machines. Invitation-only. Beyond ownership.",
};

import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0D0E10]">
      <head>
        {/* Calendly overlay assets */}
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <meta name="theme-color" content="#0D0E10" />
      </head>
      <body className={`${inter.className} antialiased text-white`}>
        <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-white/10 bg-[#0D0E10]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/arcbrim-logo.png" alt="Arcbrim Exotics Logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-semibold text-[#B3B6BC] group-hover:text-[#C8A968] transition">Arcbrim Exotics</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/80 hover:text-[#C8A968] transition">Home</Link>
            <Link href="/#curated" className="text-white/80 hover:text-[#C8A968] transition">Curated Machines</Link>
            <Link href="/get-started" className="px-6 py-2 border border-[#C8A968] text-[#C8A968] rounded-full hover:bg-[#C8A968]/10 transition duration-300">Get Started</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
