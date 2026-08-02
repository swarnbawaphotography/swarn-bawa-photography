import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portrait Photography | Swarn Bawa | Abbotsford BC",
  description:
    "Explore portrait photography by Swarn Bawa in Abbotsford, British Columbia, featuring natural light, authentic expression and timeless images.",
  alternates: {
    canonical: "https://swarnbawaphotography.com/portrait",
  },
  openGraph: {
    title: "Portrait Photography | Swarn Bawa",
    description:
      "A portrait photography collection by Swarn Bawa featuring natural light, authentic expression and timeless images.",
    url: "https://swarnbawaphotography.com/portrait",
    type: "website",
  },
};

export default function PortraitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}