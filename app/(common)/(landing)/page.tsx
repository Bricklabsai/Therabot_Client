/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/button";
import { Metadata } from "next";

import First from "@/components/landing/first";
import Banner from "@/components/landing/banner";
import Interests from "@/components/landing/interests";
import Working from "@/components/landing/working";
import Services from "@/components/landing/services";
import About from "@/components/landing/about";
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
      <Working />
      {/* <Services /> */}
      {/* <About /> */}
      <FAQ preview={true} />
    </div>
  );
}

export default page;
