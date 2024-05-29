/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState } from "react";
import Button from "../button";
import Image from "next/image";

export default function First() {
  return (
    <section className="bg-white border-2 relative border-red-600 items-center bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
      {/* <div className="absolute top-0 bottom-[20%] overflow-hidden rounded-bl-[350px] hidden lg:block z-[10] right-0">
        <Image
          width={700}
          height={300}
          src="/Groupchatbot.svg"
          className="object-contain border-2 border-red-800 h-full"
          alt=""
        />
      </div> */}
      <div className="grid grid-cols-12 max-w-[800px] mx-auto pb-10 pt-20 w-full">
        <div className="py-8 duration-[600ms] border col-span-12 lg:col-span-6 h-full fade-in-100 text-center md:text-left lg:py-16 z-10 relative">
          <div className="lg:hidden">
            <br></br>
          </div>
          <a
            href="https://shorturl.at/aFY78"
            className="inline-flex mt-4 sm:mt-0 border justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-violet-700 bg-violet-100 rounded-full dark:bg-violet-900 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-800"
          >
            <span className="text-xs bg-secondary-dark rounded-full text-white px-4 py-1.5 me-3">
              New
            </span>
            <span className="text-sm font-medium">
              Try Therabot on whatsapp now
            </span>
            <svg
              className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="ht
            tp://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <br />
          <div className="min-[250px] z-[50] max-w-[600px] w-full">
            <h1 className="mb-4 hidden md:block text-4xl text-left font-extrabold tracking-normal leading-[50px] text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
              Your Compassionate Digital Partner
            </h1>
            <h1 className="mb-4 md:hidden text-5xl text-left font-extrabold tracking-normal leading-[80px] text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
              Never Walk Alone
            </h1>
            <br />
            <p className="mb-8 md:mb-1 text-left text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-200">
              Life&apos;s journey can be daunting but remember that you
              aren&apos;t alone. Therabot is here to support you, offering
              encouragement, resilience, and hope. Together, we will navigate
              the path ahead.
            </p>
            <br />
            <Button
              asChild={true}
              className="w-fit button-slice relative after:bg-primary-darker translate-y-[1px] overflow-hidden text-black transition-colors origin-bottom-left ease-in duration-200 hover:text-white border-2 border-primary-darker py-3 px-6 shadow-gray-400 max-sm:py-4 max-sm:px-12 flex gap-4 bg-transparent"
            >
              <a href="https://shorturl.at/aFY78" className="p-0 m-0">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
                </svg>
                <p className="uppercase font-medium">Chat NOW</p>
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden border-2 border-blue-700 col-span-6 h-full lg:flex justify-start items-center z-[10]">
          <Image
            width={500}
            height={300}
            src="/Groupchatbot.svg"
            className="object-contain h-full w-full"
            alt=""
          />
        </div>
        
      </div>
      <div className="bg-gradient-to-b from-primary-light to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}
