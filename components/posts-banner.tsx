import { PostSummary, StrapiBase } from "@/lib/blog";
import ArticleCard from "./article-card";

export default async function PostsBanner() {
  const posts = await getPosts(3);
  if (!posts) return;

  return (
    <>
      {!posts?.error &&
        posts?.meta?.pagination.total &&
        posts?.meta?.pagination.total > 0 && (
          <div className="py-6">
            <div className="container px-6 lg:px-20  mx-auto w-full">
              <div className="py-12 flex justify-center">
                <h2 className="text-3xl font-bold tracking-wider">
                  Checkout our latest posts
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.data?.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        )}
    </>
  );
}

const getPosts = async (pageSize = 100) => {
  if (process.env.STRAPI_URL === null) {
    Error("STRAPI_URL not defined.");
    return null;
  }
  // <StrapiBase<PostSummary[]>>
  try {
    const res = await fetch(
      `${
        process.env.STRAPI_URL
      }/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt${
        pageSize ? "&pagination[pageSize]=" + pageSize : ""
      }&sort[0]=createdAt:desc&populate=*`,
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
