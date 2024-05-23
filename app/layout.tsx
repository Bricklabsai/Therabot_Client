import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/global.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Therabot: Your Compassionate Digital Partner",
    template: "%s | Therabot",
  },
  keywords:
    "AI therapist, therapy bot, mental health support, online counseling, virtual therapy, emotional well-being, cognitive behavioral therapy, personalized therapy sessions",
  description:
    "Life's journey can be daunting but remember that you aren't alone.",
  openGraph: {
    title: "Therabot: Your Compassionate Digital Partner",
    description:
      "Life's journey can be daunting but remember that you aren't alone.",
    url: BASE_URL,
    siteName: "Therabot",
    locale: "en-US",
    type: "website",
    images: [{ url: `${BASE_URL}/assets/therabot.jpeg` }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Therabot: Your Compassionate Digital Partner",
    description:
      "Life's journey can be daunting but remember that you aren't alone.",
    card: "summary_large_image",
    site: "@trytherabot",
    images: [`${BASE_URL}/assets/therabot.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
