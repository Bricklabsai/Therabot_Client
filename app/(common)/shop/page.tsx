import { Metadata } from "next";
import Product from "@/components/product";

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
          <h2 className="text-2xl border font-bold md:text-4xl text-black md:leading-tight ">
            Shop
          </h2>

          <div className="py-3">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((no: number) => (
                <>
                  {/* <Product product={} /> */}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
