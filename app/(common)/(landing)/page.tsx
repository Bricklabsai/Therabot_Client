/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";

import First from "@/components/landing/first";
import Banner from "@/components/landing/banner";
import Working from "@/components/landing/working";
import HowItWorks from "@/components/landing/howitworks";
import FAQ from "@/components/landing/faq";

export const metadata: Metadata = {
  title: "Therabot: Your Compassionate Digital Partner",
  description:
    "Life's journey can be daunting but remember that you aren't alone.",
};

function page() {
  return (
    <div className="bg-white">
      <First />
      <Banner />
      {/* <Interests /> */}
      <HowItWorks />
      
      {/* <Services /> */}
      {/* <About /> */}
      <FAQ preview={true} />
    </div>
  );
}

export default page;
