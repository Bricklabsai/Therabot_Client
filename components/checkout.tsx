"use client";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

export default function Checkout({
  email,
  first_name,
  last_name,
  amount,
}: {
  email: string;
  first_name: string;
  last_name: string;
  amount: number;
}) {
  // const session = useSession();
  const cartItems = useSelector((state: RootState) => state.cart);

  const router = useRouter();

  function proceedToPay() {
    Axios.post("https://sandbox.intasend.com/api/v1/checkout/", {
      public_key: "ISPubKey_test_0fe947fb-4035-49bf-8fa3-e9f7bf90c85b",
      email: email,
      first_name: first_name,
      last_name: last_name,
      amount: amount,
      currency: "KES",
    })
      .then((res) => {
        router.push(res.data.url);
        console.log(cartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <button
        onClick={() => proceedToPay()}
        className="text-center font-semibold text-sm w-full py-2 px-4 rounded-md bg-primary-dark hover:bg-sky-800 text-white"
      >
        Continue to pay
      </button>
    </>
  );
}
