import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swarn Bawa Photography | Abbotsford, BC",
  description:
    "Photography portfolio of Swarn Bawa, based in Abbotsford, British Columbia. Featuring landscapes, architecture, portraits, and visual storytelling.",
  keywords: [
    "Swarn Bawa Photography",
    "Abbotsford photographer",
    "British Columbia photographer",
    "landscape photography",
    "architecture photography",
    "portrait photography",
    "Canada photographer",
  ],
  authors: [{ name: "Swarn Bawa" }],
  creator: "Swarn Bawa",
  openGraph: {
    title: "Swarn Bawa Photography",
    description:
      "Explore the photography portfolio of Swarn Bawa, based in Abbotsford, British Columbia.",
    type: "website",
    locale: "en_CA",
    siteName: "Swarn Bawa Photography",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-01DHV05GH1"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-01DHV05GH1');
    `}
  </Script>
</body>
    </html>
  );
}