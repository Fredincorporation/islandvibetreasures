import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://islandvibetreasures.com";

export const metadata: Metadata = {
  title: {
    default: "Island Vibe Treasures | Island-Inspired Fashion & Jewelry",
    template: "%s | Island Vibe Treasures",
  },
  description:
    "Discover your island vibe at Island Vibe Treasures — a Las Vegas boutique offering women's clothing, men's fashion, artisan jewelry, and vacation-inspired treasures. Shop online or visit our Paradise Road store.",
  keywords: [
    "island fashion",
    "tropical clothing",
    "Las Vegas boutique",
    "women's apparel",
    "men's fashion",
    "artisan jewelry",
    "vacation wear",
    "beach style",
    "resort wear",
    "Island Vibe Treasures",
  ],
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Island Vibe Treasures",
    title: "Island Vibe Treasures | Island-Inspired Fashion & Jewelry",
    description:
      "Women's clothing, men's fashion, artisan jewelry, and treasures for the soul. Based in Las Vegas, NV.",
    images: [
      {
          url: "https://picsum.photos/seed/og-island-vibe/1200/630",
        width: 1200,
        height: 630,
        alt: "Island Vibe Treasures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Island Vibe Treasures",
    description:
      "Discover your island vibe with our curated collection of tropical fashion and jewelry.",
    images: [
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae9?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
