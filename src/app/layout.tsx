import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Developer collective`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, sameAs: site.social.map((s) => s.href) };
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        {children}
      </body>
    </html>
  );
}
