"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/therabot.svg";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activated, setActivated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // let's initially check if user is reloading and in a target scroll postion
    if (window.scrollY > 10) {
      setActivated(true);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setActivated(true);
      } else {
        setActivated(false);
      }
    });
  }, []);

  return (
    <>
    {/* <div className="h-20 top-0 right-0 bg-transparent"></div> */}
    <nav
      className={`${
        activated
          ? "bg-white border-gray-200"
          : "bg-transparent border-transparent"
      } border-b fixed max-h-20 top-0 w-full transition-colors ease-in duration-200 text-gray-900  z-20 start-0 `}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 max-w-[100vw]  py-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={logo}
            className="h-8"
            alt="gtahidi Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gtahidiDarkBlue">
            TheraBot
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white font-semibold bg-primary-dark hover:bg-primary-darker hover:bg-gtahidiPurple rounded-lg text-sm px-4 py-3 text-center "
          >
            <a href="/dashboard">Get started</a>
          </button>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`transition-transform flex bg-transparent duration-300 origin-top-right w-fit ease-in-out ${
            isMenuOpen ? "" : ""
          } items-center justify-end py-2 w-full lg:flex lg:w-auto lg:order-1`}
          id=""
        >
          <ul className={` ${activated ? "" : "shadow-m"} ${isMenuOpen ? "scale-1 opacity-100" : "max-lg:scale-0 max-lg:opacity-100"} transition-transform origin-top-right duration-200 flex flex-col items-center p-4 md:p-0 md:px-2 md:py-1 rounded-md md:rounded-full font-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white`}>
            <li>
              <a
                href="/"
                className="block py-2 px-6 hover:bg-primary-light hover:bg-opacity-60 rounded-lg md:rounded-full duration-150 ease-in transition-colors"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/pricing"
                className="block py-2 px-6 hover:bg-primary-light hover:bg-opacity-60 rounded-lg md:rounded-full duration-150 ease-in transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block py-2 px-6 hover:bg-primary-light hover:bg-opacity-60 rounded-lg md:rounded-full duration-150 ease-in transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 px-6 hover:bg-primary-light hover:bg-opacity-60 rounded-lg md:rounded-full duration-150 ease-in transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-6 hover:bg-primary-light hover:bg-opacity-60 rounded-lg md:rounded-full duration-150 ease-in transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
