/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import { Metadata } from "next";

import First from "@/components/landing/first";
import Banner from "@/components/landing/banner";
import HowItWorks from "@/components/landing/howitworks";
import FAQ from "@/components/landing/faq";
import ChatBanner from "@/components/landing/chatBanner";
import Sponsors from "@/components/landing/sponsors";
import PostsBanner from "@/components/posts-banner";

export const metadata: Metadata = {
  title: "Therabot: Your Compassionate Digital Partner",
  description:
    "Life's journey can be daunting but remember that you aren't alone.",
};

function page() {
  return (
    <div>
      <First />
      <Banner />
      {/* <Interests /> */}
      <HowItWorks />

      {/* <Services /> */}
      {/* <About /> */}
      <FAQ preview={true} />
      <Sponsors />
      <Suspense>
        <PostsBanner />
      </Suspense>
      <ChatBanner />
    </div>
  );
}

export default page;
