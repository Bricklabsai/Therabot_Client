import { notFound } from "next/navigation";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductGallery from "@/components/gallery";
import ProductTitle from "@/components/product";
import ProductDescription from "@/components/product-description";
import { getProduct } from "@/lib/product/getProduct";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return notFound();
  }
  return (
    <>
      <div className="sm:px-10 lg:px-20 mx-auto">
        <div className="mx-auto mb-10 lg:mb-14">
          <div className="px-20">
            <div className="flex flex-row items-center gap-2 py-4 text-neutral-400">
              <Link href={`/`} className="hover:text-primary hover:underline">
                Home
              </Link>

              <RiArrowRightSLine className="h-4 w-4" />
              <p>{product.data?.attributes.slug}</p>
            </div>
          </div>
          <div className="px-20">
            <div className="h-full p-4 rounded-md grid grid-cols-2 gap-8">
              {product.data?.attributes.images && (
                <ProductGallery images={product.data?.attributes.images.data} />
              )}

              <ProductTitle
                product={product.data}
                name={product.data?.attributes.name as string}
                price={product.data?.attributes.price as number}
                id={product.data?.id as number}
              />
            </div>
          </div>

          <div className="px-20 mt-6 grid grid-cols-12 gap-2">
            <div className="col-span-9 flex flex-col gap-5">
              <ProductDescription
                content={product.data?.attributes.description as string}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
