/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { unWrapPromise } from "@/lib/unwrap";
import axios from "axios";
import { StrapiBase, PostSummary } from "@/lib/blog";

function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}

export const metadata: Metadata = {
  title: "Blog - Therabot",
  openGraph: {
    title: "Blog - Therabot",
  },
  twitter: {
    title: "Blog - Therabot",
  },
};

async function page() {
  // const allPosts = getAllPosts();
  const posts = await getPosts();

  return (
    <div className="py-28 lg:py-20">
      <div className="container px-6 lg:px-20 mx-auto">
        <div className=" mx-auto text-center py-3 mb-10 lg:mb-14">
          <h2 className="font-bold md:text-4xl md:leading-tight ">Blog</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {!posts?.error &&
            posts?.meta?.pagination.total &&
            posts?.meta?.pagination.total > 0 && (
              <>
                {posts.data?.map((post) => (
                 <div
                 key={post.id}
                 className="group flex flex-col h-full transition-all duration-300 rounded-xl p-5"
               >
                 <Link href={`/blog/${post.attributes.slug}`} className="h-64 rounded-lg overflow-hidden">
                   {post.attributes.featuredImage.data != null ? (
                     <img
                       height={
                         post.attributes.featuredImage.data.attributes.formats.small.height
                       }
                       width={
                         post.attributes.featuredImage.data.attributes.formats.small.width
                       }
                       className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                       src={
                         process.env.STRAPI_URL +
                         post.attributes.featuredImage.data.attributes.formats.small.url
                       }
                       alt="Image Description"
                     />
                   ) : (
                     <></>
                   )}
                 </Link>
                 <br />
                 <Link href={`/blog/${post.attributes.slug}`} className="font-semibold text-sm text-primary-dark transition-transform duration-500 ease-in-out">
                   {(post.attributes as any).category.data &&
                     (post.attributes as any).category.data.attributes["Name"]}
                 </Link>
                 <Link href={`/blog/${post.attributes.slug}`} className=" transition-transform duration-500 ease-in-out">
                   <h3 className="text-xl py-2 font-semibold text-gray-800 dark:text-white">
                     {post.attributes.title}
                   </h3>
                   <p className="text-gray-600 dark:text-white">
                     {post.attributes.excerpt}
                   </p>
                 </Link>
                 <br />
                 <div className="flex items-center gap-x-6">
                   {post.attributes && post.attributes.author.data && (
                     <>
                       <div>
                         <Image
                           height={40}
                           width={40}
                           className="rounded-full"
                           src="/placeholder.jpg"
                           alt="Image Description"
                         />
                       </div>
                       <div>
                         <h5 className="text-sm dark:text-white font-medium text-neutral-900">
                           By {post.attributes.author.data.attributes.name}
                         </h5>
                         <h3>{formatDate(post.attributes.updatedAt)}</h3>
                       </div>
                     </>
                   )}
                 </div>
               </div>
               
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default page;

const getPosts = async () => {
  if (process.env.STRAPI_URL === null) {
    Error("STRAPI_URL not defined.");
    return null;
  }
  // <StrapiBase<PostSummary[]>>
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt&populate=*`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `bearer ${process.env.STRAPI_AUTH_TOKEN}`,
        },
      }
    );
    return (await res.json()) as StrapiBase<PostSummary[]>;
  } catch (error: any) {
    console.error("Error");
    return null;
  }
};
