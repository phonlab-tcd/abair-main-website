// "use client";

import { getBreakpoint } from "@/utils";
import imageCarouselData from "./imageCarouselData";
import Image from "next/image";
import { useEffect, useState } from "react";

const TopImages = () => {
  // const [breakpoint, setBreakpoint] = useState<string>("xl");

  // const handleResize = () => {
  //   setBreakpoint(getBreakpoint());
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className={`w-full overflow-hidden h-[150px] border`}>
      <div className="relative flex overflowx-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {imageCarouselData.map((image, index) => (
            <Image
              key={index}
              src={"/images/frontPageImages" + image.path}
              // width={
              //   ["lg", "xl"].includes(breakpoint)
              //     ? 160 * image.ratio
              //     : 112 * image.ratio
              // }
              // height={["lg", "xl"].includes(breakpoint) ? 160 : 112}
              width={150 * image.ratio}
              height={150}
              alt={`Image ${index}`}
            />
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
          {imageCarouselData.map((image, index) => (
            <Image
              key={index}
              src={"/images/frontPageImages" + image.path}
              // width={
              //   ["lg", "xl"].includes(breakpoint)
              //     ? 160 * image.ratio
              //     : 112 * image.ratio
              // }
              // height={["lg", "xl"].includes(breakpoint) ? 160 : 112}
              width={150 * image.ratio}
              height={150}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopImages;
