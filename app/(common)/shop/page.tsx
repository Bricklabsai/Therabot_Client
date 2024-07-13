/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ProductListings from "@/components/product-listings";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  inventory: number;
  categoryName: string;
  categorySlug: string;
};

const PRODUCTS: Product[] = [
  {
    id: "edjajja",
    name: "T-shirt",
    slug: "t-shirt",
    price: 700,
    image: "/t-shirt.jpg",
    inventory: 8,
    categoryName: "wear",
    categorySlug: "wear",
  },
  {
    id: "edjja",
    name: "Vacuum Water Bottle",
    slug: "water-bottle",
    price: 1900,
    image: "/flask.webp",
    inventory: 8,
    categoryName: "wear",
    categorySlug: "wear",
  },
];
export const metadata: Metadata = {
  title: "Shop - Therabot",
  openGraph: {
    title: "Shop - Therabot",
  },
  twitter: {
    title: "Shop - Therabot",
  },
};

export default function Page() {
  return (
    <>
      <div className=" py-28 sm:px-10  lg:px-20 lg:py-20 mx-auto">
        <div className="mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl  md:leading-tight ">
            Shop
          </h2>
          <br />
          <div className="py-3">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 lg:grid-cols-4">
              <>
                <Suspense
                  fallback={
                    <>
                      {[1, 2, 3, 4].map((_, index) => (
                        <Skeleton
                          key={index}
                          className="flex h-[290px] bg-neutral-100 dark:bg-neutral-800 flex-col gap-2 p-4 rounded-lg"
                        ></Skeleton>
                      ))}
                    </>
                  }
                >
                  <ProductListings />
                </Suspense>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
