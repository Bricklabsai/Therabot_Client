/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || null;

export default function ProductGallery({ images }: { images: any[] }) {
  const [currentImage, SetCurrentImage] = useState(images[0]);
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="h-80 p-2 rounded-md">
          <img
            className="w-full h-full object-contain rounded-md"
            src={NEXT_PUBLIC_STRAPI_URL + currentImage.attributes.url}
            alt=""
          />
        </div>
        <div className="flex gap-6 h-20">
          {images.map((c) => (
            <div
              key={c.id}
              className="rounded-md h-20 w-20 border-primary border-2 p-1"
              onClick={() => SetCurrentImage(c)}
            >
              <img
                src={NEXT_PUBLIC_STRAPI_URL + c.attributes.formats.thumbnail.url}
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
