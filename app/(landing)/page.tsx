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
      <section className="bg-white border border-red-600 py-10 min-h-screen bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
        <div className="py-8 px-4 mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
  
          <a
            href="#"
            className="inline-flex mt-4 sm:mt-0 justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-violet-700 bg-violet-100 rounded-full dark:bg-violet-900 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-800"
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
        <div className="py-8 px-4 sm:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="px-2 sm:px-10 w-full sm:w-4/5 mx-auto">
            <h2 className="text-4xl text-center">CHOOSE WHAT INTEREST YOU</h2>
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
        <div className="py-8 px-3 mx-8 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 h-full  lg:col-span-8">
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
              <Button className="shadow-md shadow-gray-400 text-white px-8 items-center flex gap-4 bg-primary-dark hover:bg-purple-500">
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
          <div className="px-10 mx-auto">
            <h2 className="text-4xl uppercase tracking-wider">
              OUR SERVICES FOR BUILDING HEALTHY RELATIONSHIPS
            </h2>
            <br />
            <br />
          </div>
          <div className="md:mx-10">
            <div className="grid grid-cols-12 justify-items-center gap-6">
              <div className="hidden md:block md:col-span-6 gap-12 h-full">
                <img className="object-cover h-full" src="/readin.png" alt="" />
              </div>

              <div className="col-span-2 hidden sm:block md:hidden"></div>
              <div className="flex justify-self-center col-span-12 sm:col-span-8 md:col-span-6 gap-4 justify-end items-end">
                <div className=" bg-primary-light h-4/5 rounded-full w-10"></div>
                <a href="#" className="group flex flex-col h-full p-2 justify-center gap-3">
                  <div className="flex flex-row items-center gap-5">
                    <p className="text-4xl lg:text-5xl uppercase w-2/3 text-left tracking-wide group-hover:text-primary-dark">
                      individual therapy
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
                  <br />
                  <p className="text-left">
                    Individual therapy, also called psychotherapy, is a type of
                    treatment that involves meeting with a therapist one-on-one
                    to discuss emotional and mental health issues. The goal of
                    individual therapy is to help an individual understand and
                    manage their emotions, behaviors, and thoughts better.
                  </p>
                </a>
              </div>
              <div className="col-span-2 hidden sm:block md:hidden"></div>
            </div>
          </div>
        </div>
      </section>


      <section
        className="bg-white text-black flex items-end  min-h-screen bg-[url('/about.png')]"
        style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
        <div className="h-4/5 py-12 pl-12 pr-20 sm:w-[75%] md:w-1/2 sm:rounded-tr-[200px] bg-gradient-to-r from-primary-light  to-primary-lighter">
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
          <Button className="shadow-md text-white shadow-gray-400 flex gap-4 bg-primary-dark hover:bg-purple-500">
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
