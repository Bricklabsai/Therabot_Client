import CheckoutPage from "@/components/checkout-page";

export default async function Page() {
  return (
    <>
      <div className="py-28 lg:py-20">
        <div className="container px-6 lg:px-20 mx-auto">
          <div className="">
            <CheckoutPage />
          </div>
        </div>
      </div>
    </>
  );
}
