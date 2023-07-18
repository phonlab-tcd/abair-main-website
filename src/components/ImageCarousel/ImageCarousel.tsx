/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

interface ImageCarouselDataModel {
  path: string;
  ratio: number;
}

interface ImageCarouselProps {
  images: ImageCarouselDataModel[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div className="w-full overflow-x-hidden z-1 border absolute">
      <div className="absolute w-full -top-8 left-0 flex">
        <div className="z-100 flex flex-auto bg-grey-100"></div>
        <div className="flex flex-none pt-">
          <img
            className="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
            src={"/frontPageImages" + "/ABAIR-transparent.png"}
            width={580}
            alt={`ABAIR text`}
          />
        </div>
        <div className="flex flex-auto bg-grey-100"></div>
      </div>
      <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={"/frontPageImages" + image.path}
            width={136 * image.ratio}
            height={136}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
