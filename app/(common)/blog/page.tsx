/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/blog/getPost";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { unWrapPromise } from "@/lib/unwrap";

export const metadata: Metadata = {
  title: "Blog - Therabot",
  openGraph: {
    title: "Blog - Therabot",
  },
  twitter: {
    title: "Blog - Therabot",
  },
};

async function page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // const allPosts = getAllPosts();
  console.log(params.slug)
  const posts = await getPosts();

  return (
    <div>
      <div className=" py-28 sm:px-6 bg-white lg:px-8 lg:py-20 mx-auto">
        <div className="max-w-2xl mx-auto text-center py-3 mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl text-black md:leading-tight ">
            Blog
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {!posts?.error &&
            posts?.meta?.pagination.total &&
            posts?.meta?.pagination.total > 0 && (
              <>
                {posts.data?.map((post) => (
                  <Link
                    key={post.id}
                    className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 "
                    href={`/blog/${post.attributes.slug}`}
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
                        {post.attributes.title}
                      </h3>
                      <p className="mt-5 text-gray-600 ">
                        {post.attributes.excerpt}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-x-3">
                      <Image
                        height={32}
                        width={32}
                        className="size-8 rounded-full"
                        src="/placeholder.jpg"
                        alt="Image Description"
                      />
                      <div>
                        <h5 className="text-sm text-gray-800 ">
                          By {post.attributes.author.data.attributes.name}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default page;
