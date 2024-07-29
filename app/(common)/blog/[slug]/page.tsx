/* eslint-disable @next/next/no-img-element */
import { PostBody } from "@/components/post";
import { getPost, getPosts } from "@/lib/blog/getPost";
import markdownToHtml from "@/lib/markdowntohtml";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function generateMetadata(
  {
    params
  }: Params,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  let content = await getPost(params.slug);
  if (!content) {
    return;
  }
  return {
    title: content.data?.attributes.title,
    description: content.data?.attributes.excerpt,
    openGraph: {
      images: [{ url: `https:://trytherabot.com/og?title=${content.data?.attributes.title}` }],
      title: content.data?.attributes.title,
      description: content.data?.attributes.excerpt,
      url: `https://trytherabot.com/blog/${content.data?.attributes.slug}`,
      siteName: "Therabot",
    },
    twitter: {
      title: content.data?.attributes.title,
      description: content.data?.attributes.title,
      images: [`https:://trytherabot.com/og?title=${content.data?.attributes.title}`],
    },
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = await getPost(params.slug);
  // console.log('post: ', post?.data)

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.data?.attributes.content || "");

  return (
    <div className=" py-28 sm:px-10 lg:px-20 lg:py-20 mx-auto">
      <div className="px-4 sm:px-20 md:px-36 leading-[1.5] mx-auto flex flex-col min-h-screen h-full justify-between">
        <div className="blob w-full h-[510px] md:h-[650px] absolute top-0 left-0 -z-10 bg-opacity-60 bg-gradient-to-b from-primary-light dark:from-tbdark to-white dark:to-tbdark"></div>
        <br />
        <div className="flex flex-row gap-4">
          <p className="tag">
            #{post.data?.attributes.category.data.attributes.Name}
          </p>
        </div>
        <br />
        <h2 className="text-4xl md:text-6xl font-semibold">
          {post.data?.attributes.title}
        </h2>
        <br />
        <p className="font-semibold text-normal">
          {new Date(post.data?.attributes?.updatedAt || "").toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }
          )}
        </p>
        <br />

        <div className="grid grid-cols-12 gap-3 flex-col-reverse">
          <div className="md:col-span-9 order-last md:order-first col-span-12 prose-slate prose-lg lg:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:leading-relaxed max-sm:prose-headings:mb-4 max-sm:prose-headings:my-8 max-sm:prose-headings:text-3xl prose-headings:tracking-tighter prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <PostBody content={content} />
          </div>
          <div className="md:col-span-3 col-span-12 p-1">
            <p>Written by</p>
            <div className="flex flex-row py-2 gap-4 items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden border">
                <Image
                  height={40}
                  width={40}
                  className="rounded-full"
                  src="/placeholder.jpg"
                  alt="Image Description"
                />
              </div>
              <p className="font-semibold">
                {post.data?.attributes.author.data.attributes.name}
              </p>
            </div>
            <br />
            <div className="hidden md:static">
              <p>In this post</p>
              <div className="ml-3 py-1">
                {/* <TableOfContents headings={headings} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts = await getPosts();

//   if (!posts || posts.data == undefined) {
//     return [];
//   }

//   return posts?.data.map((post) => ({
//     slug: post.attributes.slug,
//   }));
// }
