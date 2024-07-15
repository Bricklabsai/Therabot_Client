/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Therabot",
  openGraph: {
    title: "Contact Us - Therabot",
  },
  twitter: {
    title: "Contact Us - Therabot"
  }
}

function page() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      <Contact />
    </div>
  );
}

export default page;
