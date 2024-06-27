import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import { BASE_URL } from "@/global.config";
import TelemetryProvider from "@/components/TelemetryProvider";

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
      <Head>
        <title>Therabot: Your Compassionate Digital Partner</title>
        <meta name="description" content="Life's journey can be daunting but remember that you aren't alone." />
        <meta property="og:title" content="Therabot: Your Compassionate Digital Partner" />
        <meta property="og:description" content="Life's journey can be daunting but remember that you aren't alone." />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:site_name" content="Therabot" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/assets/therabot.jpeg`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trytherabot" />
        <meta name="twitter:title" content="Therabot: Your Compassionate Digital Partner" />
        <meta name="twitter:description" content="Life's journey can be daunting but remember that you aren't alone." />
        <meta name="twitter:image" content={`${BASE_URL}/assets/therabot.jpeg`} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "my3o5ts432");`,
          }}
        ></script>
      </Head>
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        <TelemetryProvider />
        {children}
      </body>
    </html>
  );
}
