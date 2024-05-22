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
    <>
      <PostBody content={content} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
