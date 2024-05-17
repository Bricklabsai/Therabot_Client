/* eslint-disable @next/next/no-img-element */
"use client";
import { fallWithFade } from "@/utils/animations";
import Button from "../button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useScreenSize } from "@/hooks/screen";
import Image from "next/image";

export default function First() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <section className="bg-white relative py-10 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
      <div className="absolute top-0 bottom-[20%] overflow-hidden hidden md:block rounded-bl-[350px] z-[10] right-0">
        <Image
          width={700}
          height={300}
          src="/landing.png"
          className="object-cover h-full"
          alt=""
        />
      </div>
      <div
        className="py-8 duration-[600ms] fade-in-100 px-6 sm:px-4 sm:mx-12 max-w-screen-xl text-center md:text-left lg:py-16 z-10 relative"
      >
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
        <div className="min-[250px] z-[50] max-w-[500px] w-full">
          <h1 className="mb-4 text-5xl text-left font-extrabold tracking-normal leading-12 text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Never Walk Alone
          </h1>
          <br />
          <p className="mb-8 text-left text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-200">
            Therabot is your compassionate digital companion, here to lend an
            empathetic ear and guide you through life&apos;s twists and turns.
            Whether you&apos;re battling twists and turns. Whether you&apos;re
            battling anxiety, seeking solace or simply need someone to listen,
            Therabot is by you side.
          </p>
          <br />
          <Button
            asChild={true}
            className="shadow-md w-fit text-white shadow-gray-400 max-sm:py-4 max-sm:px-12 flex gap-4 bg-primary-dark hover:bg-primary-darker"
          >
            <a href="https://shorturl.at/aFY78">
              <svg
                className="w-5 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.65 10.025l1.95.825q.35-.7.725-1.35t.825-1.3l-1.4-.275l-2.1 2.1ZM9.2 12.1l2.85 2.825q1.05-.4 2.25-1.225t2.25-1.875q1.75-1.75 2.738-3.887T20.15 4q-1.8-.125-3.95.863T12.3 7.6q-1.05 1.05-1.875 2.25T9.2 12.1Zm4.45-1.625q-.575-.575-.575-1.412t.575-1.413q.575-.575 1.425-.575t1.425.575q.575.575.575 1.413t-.575 1.412q-.575.575-1.425.575t-1.425-.575Zm.475 8.025l2.1-2.1l-.275-1.4q-.65.45-1.3.812t-1.35.713l.825 1.975ZM21.95 2.175q.475 3.025-.587 5.888T17.7 13.524L18.2 16q.1.5-.05.975t-.5.825l-4.2 4.2l-2.1-4.925L7.075 12.8L2.15 10.7l4.175-4.2q.35-.35.838-.5t.987-.05l2.475.5q2.6-2.6 5.45-3.675t5.875-.6Zm-18.025 13.8q.875-.875 2.138-.887t2.137.862q.875.875.863 2.138t-.888 2.137q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.038t1.075-2.087Zm1.425 1.4q-.25.25-.5.913t-.35 1.337q.675-.1 1.338-.338t.912-.487q.3-.3.325-.725T6.8 17.35q-.3-.3-.725-.288t-.725.313Z"
                ></path>
              </svg>
              <p className="uppercase font-medium">Try Now</p>
            </a>
          </Button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-primary-light to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}
