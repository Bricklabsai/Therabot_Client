/* eslint-disable @next/next/no-img-element */
import { PostSummary } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";

function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleCard({
  key,
  post,
}: {
  key: any;
  post: PostSummary;
}) {
  return (
    <div
      key={key}
      className="group flex flex-col h-full transition-all duration-300 rounded-xl p-5"
    >
      <Link
        href={`/blog/${post.attributes.slug}`}
        className="h-64 rounded-lg overflow-hidden"
      >
        {post.attributes.featuredImage.data != null ? (
          <Image
            height={
              post.attributes.featuredImage.data.attributes.formats.small.height
            }
            width={
              post.attributes.featuredImage.data.attributes.formats.small.width
            }
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL +
              post.attributes.featuredImage.data.attributes.formats.small.url
            }
            alt="Image Description"
          />
        ) : (
          <Image
            height={924}
            width={1640}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={`/og?title=${post.attributes.title}`}
            alt="Image Description"
          />
        )}
      </Link>
      <br />
      <Link
        href={`/blog/${post.attributes.slug}`}
        className="font-semibold text-sm text-primary-dark transition-transform duration-500 ease-in-out"
      >
        {(post.attributes as any).category.data &&
          (post.attributes as any).category.data.attributes["Name"]}
      </Link>
      <Link
        href={`/blog/${post.attributes.slug}`}
        className=" transition-transform duration-500 ease-in-out"
      >
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
  );
}
