/* eslint-disable @next/next/no-img-element */
"use client";
import { INTERESTS, Interest } from "@/constants/interests";
import { fadeFromLeft, fadeFromRight, popOut } from "@/utils/animations";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Interests() {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
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
  }, [control1,control2, control3, inView1, inView2, inView3]);

  return (
    <div>
      <section className="py-6 bg-white text-black">
        <div className="py-8 px-4 sm:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="sm:px-10 w-full sm:w-4/5 mx-auto">
            <motion.h2
              variants={fadeFromRight}
              animate={control1}
              ref={ref1}
              initial="initial"
              className="text-4xl font-medium text-center"
            >
              CHOOSE WHAT INTEREST YOU
            </motion.h2>
            <br />
            <motion.p
              variants={fadeFromLeft}
              animate={control2}
              ref={ref2}
              initial="initial"
              className=""
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
            {INTERESTS.map((interest: Interest) => (
              <motion.a
                variants={popOut}
                animate={control3}
                ref={ref3}
                initial="initial"
                key={interest.label}
                className="flex group flex-col gap-3"
              >
                <img
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
