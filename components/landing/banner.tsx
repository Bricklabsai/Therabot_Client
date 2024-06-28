/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react";
import Image from 'next/image'

export default function Banner() {

  return (
    <>
    <section className="">
      <div className="flex justify-center items-center h-20 text-black border-y border-gray-100 dark:border-neutral-800">
        <div className="text-center flex flex-row items-center space-x-2">
          <p className="text-xl font-semibold text-black dark:text-white">Backed by
          </p>
          <div className="inline-flex items-center">
            <Image
              alt="Microsoft for Startups"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              data-nimg="1"
              src="/Microsoft_logo.svg"
            />
            <span className="text-lg font-semibold ml-2 text-black dark:text-white">
              Microsoft for Startups
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
