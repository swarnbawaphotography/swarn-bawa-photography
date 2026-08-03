import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscape Photography | Swarn Bawa | British Columbia",
  description:
    "Explore landscape photography by Swarn Bawa, featuring nature, light and scenery from British Columbia and beyond.",
  alternates: {
    canonical: "https://swarnbawaphotography.com/landscape",
  },
  openGraph: {
    title: "Landscape Photography | Swarn Bawa Photography",
    description:
      "A collection of landscape photography featuring nature, light and scenery by Swarn Bawa.",
    url: "https://swarnbawaphotography.com/landscape",
    type: "website",
  },
};

export default function LandscapeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}