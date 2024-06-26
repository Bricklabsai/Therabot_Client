'use client'
/* eslint-disable @next/next/no-img-element */
import Button from '../button'
import React from 'react'

import Image from 'next/image'


export default function Working() {

    //variants={isMobile ? undefined : slideFromLeft} animate={control1} ref={ref1} initial="initial"
    // variants={isMobile ? undefined : slideFromRight} animate={control2} ref={ref2} initial="initial" 
  return (
    <section className="py-6 bg-primary-light text-black">
    <div className="py-8 px-3 mx-3 sm:mx-8 max-w-screen-xl text-center lg:py-16 z-10 relative">
      <div className="grid grid-cols-12 gap-6">
        <div  className="hidden max-h-[520px] sm:block duration-[600ms] col-span-12 h-full lg:col-span-8">
          <Image
           width={800}
           height={300}
            loading="lazy"
            className="object-cover h-full w-full rounded-md"
            src="/stornado.jfif"
            alt="people sitting"
          />
        </div>
        <div className=" border col-span-12 duration-[600ms] lg:col-span-4 p-8 bg-white rounded-2xl lg:rounded-tl-none lg:rounded-bl-none">
          <h2 className="text-3xl text-left space-x-2">How it works</h2>
          <br />
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-start">
              <Image width={72} height={72} src="/therapy1.png" className="object-contain" alt="" />
              <p className="text-left text-sm leading-6">
                Psychotherapy is a type of treatment that helps individuals
                understand and overcome their psychological problems.
              </p>
            </div>
            <div className="flex gap-5">
              <Image width={72} height={72} src="/therapy2.png" className="object-contain" alt="" />
              <p className="text-left text-sm leading-6">
                The therapy typically involves several steps that are
                necessary to achieve a positive outcome.
              </p>
            </div>
            <div className="flex gap-5">
              <Image width={72} height={72} src="/therapy3.png" className="object-contain" alt="" />
              <p className="text-left text-sm leading-6">
                By working through the therapy steps, patients can
                experience significant improvements in their mental health
                and quality of life.
              </p>
            </div>
          </div>
          <br />
          <br />
          <Button className="shadow-md shadow-gray-400 text-white px-8 items-center flex gap-4 bg-primary-dark hover:bg-primary-darker">
            <p className="uppercase font-medium">Sign up</p>
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
      </div>
    </div>
  </section>
  )
}
