/* eslint-disable @next/next/no-img-element */
"use client";
import Checkout from "./checkout";
import { Edit } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import ShippingAddressDialog from "./shipping-address";
import { useState } from "react";

export type ShippingAddress = {
  fullName: string;
  phoneNumber: string;
  streetName: string;
  city: string;
  region: string;
  postalCode: string;
};

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;


type shippingMethod = {
  name: "FREE" | "STANDARD" | "EXPRESS";
};

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const [address, setAddress] = useState<ShippingAddress | undefined>(
    undefined
  );

  const cartItems = useSelector((state: RootState) => state.cart);

  const [method, setMethod] = useState<"1" | "2" | "3">("1");
  const getQuantity = () => {
    let quantity = 0;
    cartItems.forEach((item: any) => (quantity += item.quantity));
    return quantity;
  };

  const cartCount = getQuantity();

  const getTotal = (cartItem: any[]) => {
    let totalQuantity = 0;
    let subtotal = 0;
    cartItem.forEach((item) => {
      totalQuantity += item.quantity!;
      subtotal += item.price! * item.quantity!;
    });
    return { subtotal, totalQuantity };
  };

  const { subtotal, totalQuantity } = getTotal(cartItems);
  const totalTax = 0.16 * subtotal;
  const totalAmount = subtotal // + totalTax;
  const shipping = method == "1" ? 200 : method == "2" ? 300 : 400;

  const grandTotal = totalAmount + shipping;

  return (
    <div className="px-20 py-20 gap-6 grid grid-cols-12">
      <div className="h-fit col-span-8">
        <div className="p-4 border border-gray-200 dark:border-neutral-700 rounded-md">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-neutral-700 dark:text-neutral-100">
              Shipping address
            </h3>
            <ShippingAddressDialog address={address} setAddress={setAddress}>
              <div className="flex justify-between p-4 rounded-md  items-center bg-neutral-200 dark:bg-neutral-800">
                {address ? (
                  <>
                    <p className="text-xs">
                      {address.streetName}, {address.region},{" "}
                      {address.postalCode}, {address.city}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs">No Adress set.</p>
                  </>
                )}
                <Edit className="h-6 w-6 text-primary-light" />
              </div>
            </ShippingAddressDialog>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-neutral-700">
              Shipping Method
            </h3>
            <div className="flex flex-col gap-5">
              <button
                onClick={() => setMethod("1")}
                className={`flex justify-between p-2 gap-4 dark:bg-neutral-800 font-light rounded-md items-center border ${
                  method == "1"
                    ? "border-primary-light bg-blue-100"
                    : "bg-neutral-200"
                }`}
              >
                <div className="h-full py-1 flex items-start">
                  <div
                    className={`h-5 w-5 border-2 rounded-full flex flex-row items-center justify-center ${
                      method == "1" ? "border-primary-light" : "border-gray-500"
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full ${
                        method == "1" ? "bg-primary-light" : "border-transparent"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start justify-start">
                  <p className="font-light">Basic Shipping</p>
                  <p className="text-neutral-600">7-30 business days</p>
                </div>
                <div className="flex flex-col items-end text-xs h-full justify-end">
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "KES",
                    }).format(200)}
                  </p>
                </div>
              </button>
              <button
                onClick={() => setMethod("2")}
                className={`flex justify-between p-2 gap-4 dark:bg-neutral-800 font-light rounded-md items-center border ${
                  method == "2"
                    ? "border-primary-light bg-blue-100"
                    : "bg-neutral-200"
                }`}
              >
                <div className="h-full py-1 flex items-start">
                  <div
                    className={`h-5 w-5 border-2 rounded-full flex flex-row items-center justify-center ${
                      method == "2" ? "border-primary-light" : "border-gray-500"
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full ${
                        method == "2" ? "bg-primary-light" : "border-transparent"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start justify-start">
                  <p className="font-light">Standard Shipping</p>
                  <p className="text-neutral-600">3-7 business days</p>
                </div>
                <div className="flex flex-col items-end text-xs h-full justify-end">
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "KES",
                    }).format(300)}
                  </p>
                </div>
              </button>
              <button
                onClick={() => setMethod("3")}
                className={`flex justify-between p-2 gap-4 dark:bg-neutral-800 font-light rounded-md items-center border ${
                  method == "3"
                    ? "border-primary-light bg-blue-100"
                    : "bg-neutral-200"
                }`}
              >
                <div className="h-full py-1 flex items-start">
                  <div
                    className={`h-5 w-5 border-2 rounded-full flex flex-row items-center justify-center ${
                      method == "3" ? "border-primary-light" : "border-gray-500"
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full ${
                        method == "3" ? "bg-primary-light" : "border-transparent"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-start justify-start">
                  <p className="font-light">Express Shipping</p>
                  <p className="text-neutral-600">1-3 business days</p>
                </div>
                <div className="flex flex-col items-end text-xs h-full justify-end">
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "KES",
                    }).format(400)}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-left p-4">
          <a
            href="#"
            className="font-normal text-blue-600 hover:underline underline-offset-4"
          >
            Return to cart
          </a>
        </div>
      </div>
      <div className="border border-gray-200 dark:border-neutral-700 rounded-md p-4 flex flex-col gap-4 col-span-4">
        <h3 className="font-semibold text-lg text-neutral-700">Your Order</h3>
        <div className="flex flex-col gap-2">
          {cartItems.map((d) => (
            <div
              key={d.slug}
              className="grid grid-cols-12 gap-3 p-2 w-full border-b border-gray-300 last:border-b-0"
            >
              <div className="col-span-5 h-24 w-24 flex justify-center">
                <img className="object-contain h-full" src={NEXT_PUBLIC_STRAPI_URL + d.image} alt="" />
              </div>
              <div className="col-span-7 flex flex-1 p-1 text-sm font-normal flex-col justify-between">
                <div>
                  <h3>{d.name}</h3>
                  <p>x{d.quantity}</p>
                </div>
                <div className="flex text-xs justify-end">
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "KES",
                    }).format(d.price * d.quantity)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-2 grid grid-cols-12 flex-row gap-3 justify-between">
          <div className="col-span-8">
            <input
              className="p-2 w-full outline-none focus:outline-none rounded-md border border-gray-500"
              placeholder="discount code"
            />
          </div>
          <button className="py-2 col-span-4 px-8 text-sm text-primary border rounded-md border-primary outline-none hover:text-white hover:bg-primary duration-150 ease-in transition-colors">
            Apply
          </button>
        </div>
        <div className="rounded-lg dark:bg-neutral-800 p-4 border border-neutral-300">
          <div className="flex flex-row py-1 justify-between text-neutral-600 dark:text-neutral-300">
            <span>Subtotal:</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(totalAmount)}
            </span>
          </div>
          <div className="flex flex-row py-1 justify-between text-neutral-600 dark:text-neutral-300">
            <span>Discount:</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(0)}
            </span>
          </div>
          {/* <div className="flex flex-row py-1 justify-between text-neutral-600">
            <span>Tax:</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(totalTax)}
            </span>
          </div> */}
          <div className="flex flex-row py-1 justify-between text-neutral-600 dark:text-neutral-300">
            <span>Shipment cost:</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(shipping)}
            </span>
          </div>
          <div className="h-[1px] bg-gray-300 my-2"></div>
          <div className="py-2 font-bold flex justify-between text-lg">
            <span>Grand Total:</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "KES",
              }).format(grandTotal)}
            </span>
          </div>

          <div className="py-4">
            <Checkout amount={grandTotal} />
          </div>
        </div>
      </div>
    </div>
  );
}
