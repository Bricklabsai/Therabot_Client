"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clear,
} from "@/lib/store/slice/cart-slice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { Product } from "@/lib/product";

export default function ProductTitle({
  product,
  name,
  price,
  id,
}: {
  product: any;
  name: string;
  price: number;
  id: number;
}) {
  const dispatch = useDispatch();

  const onAddToCart = (product: Product) => {
    console.log(product);
    let productData = {
      id: product.id,
      name: product.attributes.name,
      slug: product.attributes.slug,
      price: product.attributes.price,
      image: product.attributes.images.data[0].attributes.formats.thumbnail.url,
    };

    dispatch(addToCart(productData));
  };

  const cartItems = useSelector((state: RootState) => {
    console.log(JSON.parse(JSON.stringify(state.cart)));
    return state.cart.filter((p: any) => {
      console.log(p);
      console.log(p.id, id);
      return p.id == id;
    });
  });

  const itemInCart = useSelector((state: RootState) =>
    state.cart.filter((p: any) => p.id == id)
  );

  const onIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const onDecreaseQuantity = (productId: number) => {
    if (cartItems[0].quantity == 1) {
      dispatch(removeItem({ id: productId }));
    } else {
      dispatch(decreaseQuantity({ id: productId }));
    }
  };

  const clearState = () => {
    dispatch(clear({ id: product }));
  };

  return (
    <div className="flex flex-col gap-6 py-3">
      <div className="flex justify-start font-bold text-3xl">
        <p>{name}</p>
      </div>
      {/* <div className="text-normal text-neutral-500">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&quot;ll withstand we{" "}
          withstand everything the weather can offer.
        </p>
      </div> */}
      <div className="flex font-bold text-primary text-2xl">
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "KES",
          }).format(price)}
        </p>
      </div>

      {itemInCart.length > 0 ? (
        <>
          <div className="flex w-fit items-center gap-8 rounded-md py-1 px-3 bg-sky-100">
            <button
              onClick={() => onDecreaseQuantity(product.id)}
              className="font-bold text-2xl text-primary-dark"
            >
              -
            </button>
            <span className="font-bold text-xl">
              {cartItems.length ? cartItems[0].quantity : 0}
            </span>
            <button
              onClick={() => onIncreaseQuantity(product.id)}
              className="font-bold text-2xl text-primary-dark"
            >
              +
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => onAddToCart(product)}
              className="outline-none w-full rounded-md font-semibold text-xl px-4 py-2 bg-primary-dark text-white"
            >
              Add to Cart
            </button>
            {/* <button className="outline-none rounded-md font-semibold text-xl px-4 py-1 bg-primary text-white">
          Buy Now
        </button> */}
          </div>
        </>
      )}
    </div>
  );
}
