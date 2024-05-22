/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Therabot",
  openGraph: {
    title: "Blog - Therabot",
  },
  twitter: {
    title: "Blog - Therabot",
  },
};

function page() {
  const allPosts = getAllPosts();

  return (
    <div>
      <div className=" py-28 sm:px-6 bg-white lg:px-8 lg:py-20 mx-auto">
        <div className="max-w-2xl mx-auto text-left py-3 mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl text-black md:leading-tight ">
            Blog
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.length > 0 && (
            <>
              {allPosts.map((post) => (
                <Link
                  key={post.slug}
                  className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 "
                  href={`/blog/${post.slug}`}
                >
                  <div className="aspect-w-16 aspect-h-11">
                    <Image
                      height={230}
                      width={350}
                      className="w-full object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800  ">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-gray-600 ">{post.preview}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-x-3">
                    <Image
                      height={32}
                      width={32}
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                    <div>
                      <h5 className="text-sm text-gray-800 ">
                        By Lauren Waller
                      </h5>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Read more
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
