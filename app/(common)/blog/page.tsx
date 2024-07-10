/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";
import { StrapiBase, PostSummary } from "@/lib/blog";
import ArticleCard from "@/components/article-card";

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
                  <ArticleCard key={post.id} post={post} />
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default page;

const getPosts = async (pageSize=undefined) => {
  if (process.env.STRAPI_URL === null) {
    Error("STRAPI_URL not defined.");
    return null;
  }
  // <StrapiBase<PostSummary[]>>
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt${pageSize ? '&pagination[pageSize]=' + pageSize : ''}&sort[0]=createdAt:desc&populate=*`,
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
