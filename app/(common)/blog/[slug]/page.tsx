/* eslint-disable @next/next/no-img-element */
import { PostBody } from "@/components/post";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdowntohtml";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className=" py-28 sm:px-10 lg:px-20 lg:py-20 mx-auto">
      <div className="px-4 sm:px-20 md:px-36 leading-[1.5] mx-auto flex flex-col min-h-screen h-full justify-between">
        <div className="blob w-full h-[510px] md:h-[650px] absolute top-0 left-0 -z-10 bg-opacity-60 bg-gradient-to-b from-primary-light to-white"></div>
        <br />
        <div className="flex flex-row gap-4">
          {/** TODO: integrate tags to markdown files */}
          {["Mental Health", "Discourse"].map((tag: any) => (
            <p key={tag} className="tag">
              #{tag}
            </p>
          ))}
        </div>
        <br />
        <h2 className="text-4xl md:text-6xl font-semibold">{post.title}</h2>
        <br />
        <p className="font-semibold text-normal">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
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
                <img
                  src="/placeholder.jpg"
                  className="object-contain"
                  alt="image of author"
                />
              </div>
              <p className="font-semibold">{post.author}</p>
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

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
