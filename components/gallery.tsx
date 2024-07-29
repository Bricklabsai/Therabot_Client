/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const NEXT_PUBLIC_STRAPI_URL = "https://therabot-strapi.azurewebsites.net";

export default function ProductGallery({ images }: { images: any[] }) {
  const [currentImage, SetCurrentImage] = useState(images[0]);
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="h-80 p-2 rounded-md flex justify-center">
          <img
            className="h-full object-contain rounded-md"
            src={NEXT_PUBLIC_STRAPI_URL + currentImage.attributes.url}
            alt=""
          />
        </div>
        <div className="flex gap-6 h-20">
          {images.map((c) => (
            <div
              key={c.id}
              className="rounded-md cursor-pointer h-20 w-20 border-primary border-2 p-1"
              onClick={() => SetCurrentImage(c)}
            >
              <img
                src={
                  NEXT_PUBLIC_STRAPI_URL + c.attributes.formats.thumbnail.url
                }
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
