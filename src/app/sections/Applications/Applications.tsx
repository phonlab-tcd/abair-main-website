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
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="text-center mt-8">
        <div className="text-xl lg:text-2xl font-mono text-applications-700">
          Applications
        </div>
      </div>
      <div className="w-full flex justify-center items-end p-4">
        <div className=" text-base lg:text-lg font-light text-recognition-700">
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
          colors="bg-inherit text-applications-700 border border-applications-700 hover:bg-applications-100"
          sizes="w-28 lg:w-36 p-1 rounded-sm"
        >
          see all
        </Button>
      </div>
    </div>
  );
};

export default Applications;
