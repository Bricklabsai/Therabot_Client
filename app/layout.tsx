import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import { BASE_URL } from "@/global.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
 
  title: {
    default: "Therabot: Your Personal AI Therapist",
    template: "%s | Therabot",
  },
  keywords: "AI therapist, therapy bot, mental health support, online counseling, virtual therapy, emotional well-being, cognitive behavioral therapy, personalized therapy sessions",
  description:
    "Experience personalized therapy sessions with Therabot, an advanced AI therapist designed to provide support and guidance whenever you need it.",
  openGraph: {
    title: "Therabot: Your Personal AI Therapist",
    description:
      "Experience personalized therapy sessions with Therabot, an advanced AI therapist designed to provide support and guidance whenever you need it.",
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
    title: "Therabot: Your Personal AI Therapist",
    description:
      "Experience personalized therapy sessions with Therabot, an advanced AI therapist designed to provide support and guidance whenever you need it.",
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
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
