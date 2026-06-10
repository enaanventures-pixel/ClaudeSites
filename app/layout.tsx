import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { business } from "./lib/business";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interDisplay = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${business.fullName} | Sutherland Corner Store, Saskatoon`,
  description: business.tagline,
  keywords: [
    "convenience store Saskatoon",
    "Sutherland grocery",
    "corner store Central Ave",
    business.fullName,
  ],
  openGraph: {
    title: business.fullName,
    description: business.tagline,
    locale: "en_CA",
    type: "website",
    images: [{ url: "/StoreFront.png", alt: business.fullName }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={cn("scroll-smooth dark", inter.variable, interDisplay.variable)}>
      <body className="min-h-screen font-body text-foreground antialiased">
        <div className="ambient-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
