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
  metadataBase: new URL("https://www.swarnbawaphotography.com"),
  title: "Swarn Bawa Photography | Landscape, Portrait & Architecture Photographer | Abbotsford BC",
  description:
  "Professional landscape, portrait and architecture photography by Swarn Bawa in Abbotsford, British Columbia. Capturing timeless images since 1999.",
  keywords: [
  "Abbotsford photographer",
  "British Columbia photographer",
  "Landscape photographer",
  "Portrait photographer",
  "Architecture photographer",
  "Fine art photography",
  "Fraser Valley photographer",
  "Canadian photographer",
  "Swarn Bawa Photography",
],
  authors: [{ name: "Swarn Bawa" }],
  creator: "Swarn Bawa",
  openGraph: {
  title: "Swarn Bawa Photography",
  description:
    "Landscape, portrait and architecture photography by Swarn Bawa in Abbotsford, British Columbia.",
  url: "https://www.swarnbawaphotography.com",
  siteName: "Swarn Bawa Photography",
  locale: "en_CA",
  type: "website",
  images: [
    {
      url: "https://www.swarnbawaphotography.com/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Autumn landscape photography by Swarn Bawa",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "Swarn Bawa Photography",
  description:
    "Landscape, portrait and architecture photography by Swarn Bawa in Abbotsford, British Columbia.",
  images: [
  "https://www.swarnbawaphotography.com/opengraph-image.jpg",
],
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
  <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Swarn Bawa Photography",
      image: "https://swarnbawaphotography.com/images/hero/hero.jpg",
      url: "https://swarnbawaphotography.com",
      email: "mailto:abbyfilms78@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abbotsford",
        addressRegion: "British Columbia",
        addressCountry: "CA",
      },
      sameAs: [
        "https://www.instagram.com/sbawa78",
      ],
      areaServed: [
        "Abbotsford",
        "Fraser Valley",
        "British Columbia",
      ],
      description:
        "Professional landscape, portrait and architecture photography by Swarn Bawa.",
    }),
  }}
/>
</body>
    </html>
  );
}