import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const domain = "http://www.hajarhamza.com";

export const metadata: Metadata = {
  title: {
    default: "Hajar Hamza | Software Developer, Mother, and Wife",
    template: "%s | Personal Portfolio",
  },
  description:
    "Explore the portfolio of Hajar Hamza, a dynamic Software Developer blending life as a mother and wife with her passion for technology. Discover her projects, skills, and professional journey in the tech world.",
  keywords: [
    "Hajar Hamza",
    "Software Developer",
    "Tech Mother",
    "Junior Developer",
    "Tech Enthusiast",
    "Tech Portfolio",
    "Women in tech",
  ],
  authors: {
    url: domain,
    name: "Hajar Hamza",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: domain,
    title: "Hajar Hamza | Software Developer, Mother, and Wife",
    description:
      "Discover Hajar Hamza's unique journey as a software developer, mother, and wife. Explore her portfolio showcasing her tech projects and skills.",
    siteName: "HajarHamza",
    images: [
      {
        url: `${domain}/og-image.jpg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HajarHamza",
    creator: "@HajarHamza",
    title: "Hajar Hamza | Software Developer, Mother, and Wife",
    description:
      "Explore Hajar Hamza's professional world and personal insights as a tech enthusiast balancing family and career.",
    images: {
      url: `${domain}/twitter-card.jpg`,
      alt: "Hajar Hamza working on a computer in her office.",
    },
  },
  applicationName: "Hajar Hamza Portfolio",
  manifest: `${domain}/manifest.json`,
  icons: [
    { rel: "icon", url: `${domain}/favicon.ico` },
    {
      rel: "apple-touch-icon",
      url: `${domain}/apple-touch-icon.png`,
    },
  ],
  alternates: {
    canonical: domain,
    languages: {
      "en-US": domain,
      "sv-SE": `${domain}/sv`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
