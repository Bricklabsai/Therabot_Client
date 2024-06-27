import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/global.config";
import TelemetryProvider from "@/components/TelemetryProvider";
import Script from "next/script";
const inter = Raleway({ subsets: ["latin"] });

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
      <script type="text/javascript">
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "my3o5ts432");
      </script>
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        <TelemetryProvider />
        {children}
      </body>
    </html>
  );
}
