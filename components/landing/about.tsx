"use client";

import Button from "../button";
import React from "react";
import Image from 'next/image';

export default function About() {
  //variants={isMobile ? undefined : riseWithFade} animate={controls} initial="initial"

  return (
    <section
      className="py-8 text-black sm:px-8 items-center justify-between flex bg-primary-light min-h-[600px]  "
      // style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}  bg-[url('/ai-thera.webp')]
    >
      {/* sm:rounded-tr-[200px] */}
      <div className="duration-[600ms] min-h-[520px] py-12 px-8 sm:pl-12 sm:pr-20 sm:w-[75%] md:w-1/2  bg-gradient-to-r from-neutral-100 rounded h-full to-white">
        <h2 className="font-medium text-2xl uppercase">ABOUT US</h2>
        <br />
        <p>
          Our psychotherapy practice is committed to providing a safe and
          compassionate space for individuals to explore their thoughts,
          feelings, and behaviors.
        </p>
        <br />
        <p>
          Our team of licensed therapists brings a variety of therapeutic
          approaches to address a wide range of mental health concerns,
          including anxiety, depression, trauma, and relationship issues.
        </p>
        <br />
        <p>
          We prioritize collaboration with our clients to identify their unique
          needs and tailor treatment accordingly. We believe in a
          strengths-based approach that empowers clients to build resiliency and
          achieve their goals.
        </p>
        <br />
        <Button className="shadow-md text-white shadow-gray-400 flex gap-4 bg-primary-dark hover:bg-primary-darker">
          <p className="uppercase font-medium">Explore more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </Button>
      </div>

      <div className="hidden min-h-[520px] sm:block duration-[600ms] h-full">
        <Image
          width={500}
          height={800}
          loading="lazy"
          className="h-full rounded-md"
          src="/ai-thera.webp"
          alt="people sitting"
        />
      </div>
    </section>
  );
}
