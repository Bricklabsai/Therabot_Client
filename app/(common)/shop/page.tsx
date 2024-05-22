/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";

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
    image: "/tshirt.webp",
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
      <div className=" py-28 sm:px-10 bg-white lg:px-20 lg:py-20 mx-auto">
        <div className="mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl text-black md:leading-tight ">
            Shop
          </h2>
          <br/>
          <div className="py-3">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 lg:grid-cols-4">
              {PRODUCTS.map((product: Product) => (
                <Link
                  href={`/shop/${product.slug}`}
                  key={product.id}
                  className="flex flex-col gap-2 border p-4 rounded-lg shadow-md"
                >
                  <div className="h-44 flex justify-center">
                    <img
                      className="object-contain"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <hr className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                  <div>
                    <h3>{product.name}</h3>
                  </div>
                  <div>
                    <p>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
