/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/button";
import { Metadata } from "next";
import { INTERESTS, Interest } from "@/constants/interests";
import { SERVICES, Service } from "@/constants/services";
import { motion } from 'framer-motion'


export const metadata: Metadata = {
  title: "Therabot: Your Personal AI Therapist",
  description:
    "Experience personalized therapy sessions with Therabot, an advanced AI therapist designed to provide support and guidance whenever you need it.",
};

function page() {
  return (
    <>
      <section className="bg-white relative py-10 min-h-screen bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
        <div className="absolute top-0 bottom-[20%] overflow-hidden hidden md:block rounded-bl-[350px] z-[10] right-0">
          <img src="/landing.png" className="object-cover h-full" alt="" />
        </div>
        <div className="py-8 px-6 sm:px-4 sm:mx-12 max-w-screen-xl text-center md:text-left lg:py-16 z-10 relative">
          <div className="md:hidden">
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
              A heathier choice for a healthier you
            </h1>
            <br />
            <p className="mb-8 text-left text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-200">
              Psychotherapy is a form of therapeutic treatment that focuses on
              improving mental health conditions through counseling and talk
              therapy.
            </p>
            <br />
            <Button
              asChild={true}
              className="shadow-md w-fit shadow-gray-400 max-sm:py-4 max-sm:px-12 flex gap-4 bg-primary-dark hover:bg-primary-darker"
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg> */}
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
        <div className="py-8 px-4 sm:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="sm:px-10 w-full sm:w-4/5 mx-auto">
            <h2 className="text-4xl font-medium text-center">
              CHOOSE WHAT INTEREST YOU
            </h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INTERESTS.map((interest: Interest) => (
              <a key={interest.label} className="flex group flex-col gap-3">
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
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 bg-primary-light text-black min-h-screen">
        <div className="py-8 px-3 mx-3 sm:mx-8 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="hidden sm:block col-span-12 h-full lg:col-span-8">
              <img
                loading="lazy"
                className="object-cover h-full w-full rounded-md"
                src="/sitting.jpeg"
                alt="people sitting"
              />
            </div>
            <div className=" border col-span-12  lg:col-span-4 p-8 bg-white rounded-2xl lg:rounded-tl-none lg:rounded-bl-none">
              <h2 className="text-3xl text-left space-x-2">How it works</h2>
              <br />
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-start">
                  <img src="/therapy1.png" className="object-contain" alt="" />
                  <p className="text-left text-sm leading-6">
                    Psychotherapy is a type of treatment that helps individuals
                    understand and overcome their psychological problems.
                  </p>
                </div>
                <div className="flex gap-5">
                  <img src="/therapy2.png" className="object-contain" alt="" />
                  <p className="text-left text-sm leading-6">
                    The therapy typically involves several steps that are
                    necessary to achieve a positive outcome.
                  </p>
                </div>
                <div className="flex gap-5">
                  <img src="/therapy3.png" className="object-contain" alt="" />
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
      <section className="py-6 bg-white text-black">
        <div className="py-8 px-4 lg:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="mx-auto">
            <h2 className="text-3xl max-sm:font-medium sm:text-4xl uppercase tracking-wider">
              OUR SERVICES FOR BUILDING HEALTHY RELATIONSHIPS
            </h2>
          </div>
          <br />
          <br />
          <div className="md:mx-10 grid grid-rows-3 gap-12">
            {SERVICES.map((service: Service) => (
              <div
                key={service.title}
                className="grid grid-cols-12 justify-items-center gap-6"
              >
                <div className="hidden md:block md:col-span-6 gap-12 h-full">
                  <img
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
                    
                    <p className="text-left">
                      {service.description}
                    </p>
                  </a>
                </div>
                <div className="col-span-2 hidden sm:block md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white text-black flex items-end  min-h-screen bg-[url('/about.png')]"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="h-4/5 py-12 px-8 sm:pl-12 sm:pr-20 sm:w-[75%] md:w-1/2 sm:rounded-tr-[200px] bg-gradient-to-r from-primary-light  to-primary-lighter">
          <h2 className="font-medium text-2xl uppercase">ABOUT US</h2>
          <br />
          <p>
            Our psychotherapy practice is committed to providing a safe and
            compassionate space for individuals to explore their thoughts,
            feelings, and behaviors.
          </p>
          <br />
          <p>
            Our team of licensed therapists brings a variety of therapeutic
            approaches to address a wide range of mental health concerns,
            including anxiety, depression, trauma, and relationship issues.
          </p>
          <br />
          <p>
            We prioritize collaboration with our clients to identify their
            unique needs and tailor treatment accordingly. We believe in a
            strengths-based approach that empowers clients to build resiliency
            and achieve their goals.
          </p>
          <br />
          <Button className="shadow-md text-white shadow-gray-400 flex gap-4 bg-primary-dark hover:bg-primary-darker">
            <p className="uppercase font-medium">Explore more</p>
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
      </section>
    </>
  );
}

export default page;
