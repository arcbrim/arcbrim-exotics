export const metadata = {
  title: "Arcbrim Exotics — Access the Extraordinary",
  description:
    "A private automotive atelier curating the world’s finest machines. Invitation-only. Beyond ownership.",
};

import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

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
        {children}
      </body>
    </html>
  );
}
