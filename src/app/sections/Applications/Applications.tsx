"use client";
import { getBreakpoint } from "@/utils";
/* eslint-disable react-hooks/exhaustive-deps */

import { Button } from "abair-web-components";
import Image from "next/image";
import { useEffect, useState } from "react";

const Applications = () => {
  const [breakpoint, setBreakpoint] = useState<string>("");

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mt-8">
        <div className="text-xl lg:text-2xl font-mono text-applications-700">
          Applications
        </div>
      </div>
      <div className="w-full flex justify-center items-end p-4">
        <div className="text-base text-center lg:text-lg font-light text-recognition-700 max-w-lg md:max-w-2xl lg:max-w-5xl">
          Discover a world of Irish language applications for education,
          accessibility and the public
        </div>
      </div>
      <div className="flex justify-center w-full py-4">
        <Image
          src={"/frontPageImages/applications.png"}
          width={
            ["lg", "xl"].includes(breakpoint)
              ? 800
              : breakpoint === "md"
              ? 600
              : 400
          }
          height={["lg", "xl"].includes(breakpoint) ? 400 : 250}
          alt="ABAIR applications image"
          className="drop-shadow-applications"
        />
      </div>
      <div className="flex justify-center py-8">
        <Button
          colors="bg-inherit text-applications-600 text-lg lg:text-xl hover:text-applications-700 hover:underline"
          sizes="py-0.5 px-1 rounded-sm"
        >
          see all <span className="text-3xl lg:text-4xl">&#8594;</span>
        </Button>
      </div>
    </div>
  );
};

export default Applications;
