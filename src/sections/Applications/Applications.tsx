/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "abair-web-components";

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
    }, 11100);
  }, []);

  return (
    <div className="z-0 -mt-[20px] w-screen overflow-x-hidden">
      <div
        className={`ml-[-25%] h-[150px] w-[150%] rounded-t-[40%] md:rounded-t-[100%] transition-colors duration-500 ${
          startApplicationsAnimation ? "bg-primary-500" : "bg-primary-400"
        }`}
      >
        <div className="text-center">
          <div className="text-xl md:text-2xl pt-[50px] font-mono text-white">
            Applications
          </div>
        </div>
      </div>
      <div
        className={`w-full transition-colors duration-500 ${
          startApplicationsAnimation ? "bg-primary-500" : "bg-primary-400"
        }`}
      >
        <div className="flex justify-center ">
          <div className="max-w-6xl w-full h-full mt-[-70px]">
            <div className="w-full flex flex-col justify-center ">
              <div className="flex justify-center">
                <div className="ml-[-70px]">
                  <img
                    src={"/abair-applications.png"}
                    width={700}
                    height={500}
                    alt="ABAIR applications image"
                    className="drop-shadow-applications"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <Button
            label="see all"
            colors="bg-inherit text-lg text-white border-2 border-white hover:bg-primary-300"
            sizes="w-48 p-1.5 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Applications;
