/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/button";

interface Interest {
  src: string;
  alt: string;
  label: string;
}
const INTERESTS: Interest[] = [
  {
    src: "/mind.png",
    alt: "picture of a head scapture",
    label: "Mind",
  },
  {
    src: "/body.png",
    alt: "picture of a body",
    label: "Body",
  },
  {
    src: "/environment.png",
    alt: "picture of a person holding a flower",
    label: "Environment",
  },
];

function page() {
  return (
    <>
      <section className="bg-white py-10 min-h-screen bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
        <div className="py-8 px-4 mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-violet-700 bg-violet-100 rounded-full dark:bg-violet-900 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-800"
          >
            <span className="text-xs bg-secondary-dark rounded-full text-white px-4 py-1.5 me-3">
              New
            </span>
            <span className="text-sm font-medium">
              Try therabot on whatsapp now
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
          <div className="min-[250px] max-w-[500px] w-full">
            <h1 className="mb-4 text-3xl sm:text-left font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
              A heathier choice for a healthier you
            </h1>
            <br />
            <p className="mb-8 sm:text-left text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-200">
              Psychotherapy is a form of therapeutic treatment that focuses on
              improving mental health conditions through counseling and talk
              therapy.
            </p>
            <br />
            <Button className="shadow-md shadow-gray-400 flex gap-4 bg-primary-dark hover:bg-purple-500">
              <p className="uppercase font-medium">Join Now</p>
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
        <div className="bg-gradient-to-b from-primary-light to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section>
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
      </section>
      <section className="py-6 bg-white text-black">
        <div className="py-8 px-4 mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="px-10 sm:w-4/5 mx-auto">
          <h2 className="text-4xl">CHOOSE WHAT INTEREST YOU</h2>
          <br />
          <p className="">
            Psychotherapy is a form of therapeutic treatment that focuses on
            improving mental health conditions through counseling and talk
            therapy. The goal of psychotherapy is to help individuals confront
            and overcome their emotional or psychological issues, such as
            anxiety, depression, trauma, and addiction.
          </p>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-3 gap-6">
            {INTERESTS.map((interest: Interest) => (
              <a key={interest.label} className="flex group flex-col gap-3">
                <img
                  className="rounded-2xl"
                  src={interest.src}
                  alt={interest.alt}
                />
                <div className="flex gap-6 px-2 items-center">
                  <p className="text-lg font-medium group-hover:underline underline-offset-4">{interest.label}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
