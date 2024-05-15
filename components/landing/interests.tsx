/* eslint-disable @next/next/no-img-element */
"use client";
import { INTERESTS, Interest } from "@/constants/interests";
import {
  fadeFromLeft,
  fadeFromRight,
  popOut,
  riseWithFade,
} from "@/utils/animations";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Interests() {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);
  const inView5 = useInView(ref5);
  const interestRefs = [ref3, ref4, ref5];
  useEffect(() => {
    if (inView1) {
      control1.start("animate");
    }
    if (inView2) {
      control2.start("animate");
    }
    if (inView3) {
      control3.start("animate");
    }
    if (inView4) {
      control4.start("animate");
    }
    if (inView5) {
      control5.start("animate");
    }
  }, [
    control1,
    control2,
    control3,
    control4,
    control5,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
  ]);

  return (
    <div>
      <section className="py-6 bg-white text-black">
        <div className="py-8 px-4 sm:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="sm:px-10 w-full sm:w-4/5 mx-auto">
            <motion.h2
              variants={riseWithFade}
              animate={control1}
              ref={ref1}
              initial="initial"
              className="text-4xl font-medium text-center duration-[600ms]"
            >
              CHOOSE WHAT INTEREST YOU
            </motion.h2>
            <br />
            <motion.p
              variants={riseWithFade}
              animate={control2}
              ref={ref2}
              initial="initial"
              className="duration-[600ms]"
            >
              Psychotherapy is a form of therapeutic treatment that focuses on
              improving mental health conditions through counseling and talk
              therapy. The goal of psychotherapy is to help individuals confront
              and overcome their emotional or psychological issues, such as
              anxiety, depression, trauma, and addiction.
            </motion.p>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INTERESTS.map((interest: Interest, index: number) => (
              <motion.a
                variants={popOut}
                animate={control3}
                ref={interestRefs[index]}
                initial="initial"
                key={interest.label}
                style={{ transitionDelay: `${200 + (index + 1) * 2 * 100}ms` }}
                className={`flex group delay-[${
                  200 + (index + 1) * 4 * 100
                }ms] delay-75 flex-col gap-3 duration-[500ms]`}
              >
                <Image
                  width={400}
                  height={700}
                  className="rounded-2xl"
                  src={interest.src}
                  alt={interest.alt}
                />
                <div className="flex gap-6 px-2 items-center">
                  <p className="text-lg font-medium group-hover:underline underline-offset-4">
                    {interest.label}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
