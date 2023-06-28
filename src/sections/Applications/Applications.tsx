"use client";

import { Button } from "abair-web-components";
import Image from "next/image";
import { useEffect, useState } from "react";
const Applications = () => {
  const [startApplicationsAnimation, setStartApplicationsAnimation] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartApplicationsAnimation(true);
      setTimeout(() => {
        setStartApplicationsAnimation(false);
      }, 1800);
    }, 10800);
  }, []);

  return (
    <div className="z-0 -mt-[300px] w-screen overflow-x-hidden">
      <div
        className={`ml-[-50%] h-[860px] w-[200%] rounded-t-[40%] md:rounded-t-[40%] transition-colors duration-500 ${
          startApplicationsAnimation ? "bg-primary-500" : "bg-primary-400"
        }`}
      >
        <div className="flex justify-center ">
          <div className="max-w-6xl w-full h-full mt-[360px]">
            <div className="w-full flex flex-col justify-center ">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-mono text-white">
                  Applications
                </div>
              </div>
              <div className="flex justify-center">
                <div className="ml-[-70px]">
                  <Image
                    src={"/abair-applications.png"}
                    width={700}
                    height={500}
                    alt="ABAIR applications image"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  label="See All"
                  colors="bg-inherit text-white border-2 border-white hover:bg-primary-300"
                  sizes="w-48 p-1 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
