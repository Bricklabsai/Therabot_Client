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

export const metadata: Metadata = {
  title: "Therabot: Your Personal AI Therapist",
  description:
    "Experience personalized therapy sessions with Therabot, an advanced AI therapist designed to provide support and guidance whenever you need it.",
};

function page() {
  return (
    <div className="bg-white">
      <First />
      <Banner />
      {/* <Interests /> */}
      <Working />
      <Services />
      <About />
    </div>
  );
}

export default page;
