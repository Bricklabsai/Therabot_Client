'use client'

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { heroTextAnimation } from "@/lib/animation";
import Button from "./button";
import gsap from "gsap";

export default function Hero({
  title,
  description,
  buttonLabel,
  buttonIcon,
  buttonLink,
  image,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon?: React.ReactNode;
  buttonLink: string;
  image: string;
}) {
  const ref = useRef(null);
  let animationStep = 0;
  useGSAP(() => {
    let textAnimation = gsap.timeline();

    textAnimation.from(ref.current, {
      y: 100,
      duration: 0.7,
      stagger: {
        each: 0.07,
      },
    });
  }, []);
  return (
    <>
      <section className="h-screen 2xl:h-full relative items-center">
        <div>
          <div className="container px-6 lg:px-20 grid grid-cols-12 mx-auto pb-10 pt-12 sm:pt-20 w-full">
            <div
              className="py-8 duration-[600ms] col-span-12 lg:col-span-6 h-full fade-in-100 text-center md:text-left lg:py-16 z-10 relative"
            >
              <div className="lg:hidden">
                <br></br>
              </div>

              <br />
              <div className="min-[250px] z-[50] max-w-[600px] w-full">
                <h1
                  className="animate-hero-text-reveal mb-4 text-4xl animate-text-hero-text-reveal text-neutral-900 text-left font-extrabold tracking-normal leading-[50px] md:text-5xl lg:text-6xl dark:text-white"
                  style={heroTextAnimation.getVariables(1)}
                >
                  {title}
                </h1>

                <br />
                <p
                  style={heroTextAnimation.getVariables(2)}
                  className="animate-hero-text-reveal mb-8 md:mb-1 text-left text-lg font-semibold text-neutral-700 lg:text-xl dark:text-gray-200"
                >
                  {description}
                </p>

                <br />

                <div
                  style={heroTextAnimation.getVariables(2)}
                  className="animate-hero-text-reveal"
                >
                  <Button
                    asChild={true}
                    className="w-fit button-slice relative after:bg-primary-darker translate-y-[1px] overflow-hidden text-black dark:text-white transition-colors origin-bottom-left ease-in duration-200 hover:text-white border-2 border-primary-darker py-3 px-6 shadow-gray-400 max-sm:py-4 max-sm:px-12 flex gap-4 bg-transparent"
                  >
                    <a href={buttonLink} className="p-0 m-0">
                      {buttonIcon}
                      <p className="uppercase font-medium">{buttonLabel}</p>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden col-span-6 p-8 h-full lg:flex justify-start items-center z-[10]">
              <motion.img
                width={500}
                height={300}
                src={image}
                className="object-contain h-full w-4/5 brightness-[.9]"
                alt=""
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75 }}
              />
            </div>
          </div>
          {/* <div className="bg-gradient-to-b from-primary-light to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0 backdrop-blur-lg"></div> */}
        </div>
      </section>
    </>
  );
}
