"use client";

import Image from "next/image";
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
    <div className="w-full overflow-x-hidden z-1">
      <div className="flex">
        {images.map((image, index) => (
          <Image
            key={index}
            src={"/frontPageImages" + image.path}
            width={220 * image.ratio}
            height={220}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
