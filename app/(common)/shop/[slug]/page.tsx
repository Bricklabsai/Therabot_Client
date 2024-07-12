import { notFound } from "next/navigation";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductGallery from "@/components/gallery";
import ProductTitle from "@/components/product";
import ProductDescription from "@/components/product-description";


export default async function Page({ params }: { params: { slug: string } }) {
  const product = {
    id: "edjajja",
    name: "T-shirt",
    slug: "t-shirt",
    description: "This is a descrition of a piece of T-shirt",
    price: 700,
    images: ["/t-shirt.jpg"],
    inventory: 8,
    categoryName: "wear",
    categorySlug: "wear",
  }; //await (await axios.get(`/products/${params.slug}`)).data;

  if (!product) {
    return notFound();
  }
  return (
    <>
      <div className=" py-28 sm:px-10 bg-white lg:px-20 lg:py-20 mx-auto">
        <div className="mx-auto mb-10 lg:mb-14">
          <div className="px-20">
            <div className="flex flex-row items-center gap-2 py-4 text-neutral-400">
              <Link href={`/`} className="hover:text-primary hover:underline">
                Home
              </Link>
              <RiArrowRightSLine className="h-4 w-4" />

              <RiArrowRightSLine className="h-4 w-4" />
              <p>{product.slug}</p>
            </div>
          </div>
          <div className="px-20">
            <div className="h-full p-4 rounded-md border border-sky-300 bg-white grid grid-cols-2 gap-8">
              <ProductGallery images={product.images} />
                <ProductTitle
                  product={product}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                />
            </div>
          </div>

          <div className="px-20 mt-6 grid grid-cols-12 gap-2 bg-gray-50">
            <div className="col-span-9 flex flex-col gap-5">
              <ProductDescription content={product.description} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
