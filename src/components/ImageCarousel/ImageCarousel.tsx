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
  const [coverOpacity, setCoverOpacity] = useState("100");

  useEffect(() => {
    setCoverOpacity("0");
  }, []);

  return (
    <div className="w-full overflow-hidden z-1 h-full absolute -mt-4">
      <div className="mt-16">
        <div className="relative flex overflowx-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {images.map((image, index) => (
              <img
                key={index}
                src={"/frontPageImages" + image.path}
                width={128 * image.ratio}
                height={128}
                alt={`Image ${index}`}
              />
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {images.map((image, index) => (
              <img
                key={index}
                src={"/frontPageImages" + image.path}
                width={128 * image.ratio}
                height={128}
                alt={`Image ${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-full -top-16 left-0 flex">
        <div className="flex flex-auto"></div>
        <div className="flex flex-none relative">
          <img
            className="drop-shadow-[4px_2px_2px_rgba(0,0,0,0.33)]"
            src={"/frontPageImages" + "/ABAIR-transparent.png"}
            width={580}
            alt={`ABAIR text`}
          />
          <img
            className={`absolute drop-shadow-[4px_2px_2px_rgba(0,0,0,0.33)] duration-2000 transition-opacity opacity-${coverOpacity}`}
            src={"/frontPageImages" + "/ABAIRLettersBigLogo.png"}
            width={580}
            alt={`ABAIR text`}
          />
        </div>
        <div className="border-2 flex flex-auto"></div>
      </div>
      <div className=" top-0 absolute flex w-full h-[240px]">
        <div className="h-full flex flex-auto bg-grey-100"></div>
        <div className="flex flex-none w-[550px]"></div>
        <div className="z-100 border-2flex flex-auto bg-grey-100"></div>
      </div>
      <div
        className={`absolute w-full h-full left-0 top-0 bg-grey-100 duration-1000 transition-opacity opacity-${coverOpacity}`}
      ></div>
    </div>
  );
};

export default ImageCarousel;
