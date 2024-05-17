/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { SERVICES, Service } from "@/constants/services";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Services() {
  // variants={isMobile ? undefined : slideFromRight} animate={control1}
  //  variants={isMobile ? undefined : riseWithFade} animate={CONTROLS[index]} initial="initial"
  return (
    <section className="py-6 bg-white text-black">
      <div className="py-8 px-4 lg:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
        <div className="mx-auto">
          <motion.h2 className="text-3xl duration-[600ms] max-sm:font-medium sm:text-4xl uppercase tracking-wider">
            OUR SERVICES FOR BUILDING HEALTHY RELATIONSHIPS
          </motion.h2>
        </div>
        <br />
        <br />
        <div className="md:mx-10 grid grid-rows-3 gap-12">
          {SERVICES.map((service: Service, index: number) => (
            <motion.div
              key={service.title}
              className="grid grid-cols-12 justify-items-center gap-6 duration-[600ms]"
            >
              <div className="hidden md:block md:col-span-6 gap-12 h-full">
                <Image
                  width={400}
                  height={300}
                  className="object-cover h-full"
                  src={service.image}
                  alt=""
                />
              </div>

              <div className="col-span-2 hidden sm:block md:hidden"></div>
              <div className="flex justify-self-center col-span-12 sm:col-span-8 md:col-span-6 gap-4 justify-end items-end">
                <div className="bg-primary-light h-4/5 rounded-full w-10"></div>
                <a
                  href="#"
                  className="group flex flex-col h-full justify-end gap-3"
                >
                  <div className="flex py-2 flex-row items-center w-fit gap-5">
                    <p className="text-3xl lg:text-5xl uppercase w-2/3 text-left tracking-wide group-hover:text-primary-dark">
                      {service.title}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-10 w-10 group-hover:text-primary-dark"
                    >
                      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                    </svg>
                  </div>

                  <p className="text-left">{service.description}</p>
                </a>
              </div>
              <div className="col-span-2 hidden sm:block md:hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
