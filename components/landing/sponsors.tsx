import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto px-6 py-8 lg:px-20 md:w-2/3  sm:mx-24 text-center lg:py-16 z-10 relative">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-3xl md:text-5xl">Our Sponsors</h2>
            <br />
            <p className="max-w-md mx-auto mt-2 text-gray-500">
              We are thankful to each and every sponsor and partner.
            </p>
          </div>
          <br />

          <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
            <div className="text-gray-400 ">
              <Image
                alt="Microsoft for Startups"
                loading="lazy"
                width="48"
                height="48"
                decoding="async"
                data-nimg="1"
                src="/Microsoft_logo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
