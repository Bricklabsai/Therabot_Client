/* eslint-disable @next/next/no-img-element */
import { StrapiBase } from "@/lib/blog";
import { ProductSummary } from "@/lib/product";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductListings() {
  const products = await getProducts();

  if (!products) {
    return notFound();
  }

  return (
    <>
      {!products?.error &&
        products?.meta?.pagination.total &&
        products?.meta?.pagination.total > 0 && (
          <>
            {products.data?.map((product) => (
              <Link
                href={`/shop/${product.attributes.slug}`}
                key={product.id}
                className="flex flex-col gap-2 p-4 rounded-lg shadow-md"
              >
                <div className="h-44 flex justify-center">
                  <img
                    className="object-contain"
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      product.attributes.images.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
                <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <div>
                  <h3>{product.attributes.name}</h3>
                </div>
                <div>
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "KES",
                    }).format(product.attributes.price)}
                  </p>
                </div>
              </Link>
            ))}
          </>
        )}
    </>
  );
}

async function getProducts() {
  if (process.env.NEXT_PUBLIC_STRAPI_URL === null) {
    Error("NEXT_PUBLIC_STRAPI_URL not defined.");
    return null;
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?fields[1]=name&fields[3]=updatedAt&populate=*&fields[2]=sizes&fields[4]=price&fields[5]=slug`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `bearer ${process.env.STRAPI_AUTH_TOKEN}`,
        },
      }
    );
    return (await res.json()) as StrapiBase<ProductSummary[]>;
  } catch (error: any) {
    console.error("Error");
    return null;
  }
}
