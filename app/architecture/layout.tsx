import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Photography | Swarn Bawa | British Columbia",
  description:
    "Explore architecture photography by Swarn Bawa, featuring modern buildings, lines, light and design across British Columbia and beyond.",
  alternates: {
    canonical: "https://swarnbawaphotography.com/architecture",
  },
  openGraph: {
    title: "Architecture Photography | Swarn Bawa",
    description:
      "A collection of architecture photography by Swarn Bawa featuring buildings, lines, light and design.",
    url: "https://swarnbawaphotography.com/architecture",
    type: "website",
  },
};

export default function ArchitectureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}