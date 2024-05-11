/* eslint-disable @next/next/no-img-element */
'use client';
import { riseWithFade } from "@/utils/animations";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Banner() {
    const controls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref);

    useEffect(() => {
        if(inView) {
            controls.start("animate")
        }
    }, [controls, inView])

  return (
    <motion.section className="duration-[600ms]" variants={riseWithFade} animate={controls} ref={ref} initial="initial">
      <div className="flex justify-center items-center h-20 bg-white text-black border">
        <div className="text-center flex flex-row items-center space-x-2">
          <p className="text-xl font-semibold">Backed by</p>
          <div className="inline-flex items-center">
            <img
              alt="Microsoft for Startups"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              data-nimg="1"
              src="/Microsoft_logo.svg"
            />
            <span className="text-lg font-semibold ml-2">
              Microsoft for Startups
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
