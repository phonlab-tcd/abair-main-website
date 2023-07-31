/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "abair-web-components";

import { useEffect, useState } from "react";
interface ApplicationsProps {
  flashApplicationColor?: string;
  applicationColor?: string;
}
import {
  delayToStartRecognitionCardFlash,
  cardFlashDuration,
} from "../animationTimings/animationTimings";

const Applications = ({
  flashApplicationColor = "bg-applications-500",
  applicationColor = "bg-applications-400",
}: ApplicationsProps) => {
  const [startApplicationsAnimation, setStartApplicationsAnimation] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartApplicationsAnimation(true);
      setTimeout(() => {
        setStartApplicationsAnimation(false);
      }, cardFlashDuration);
    }, delayToStartRecognitionCardFlash);
  }, []);

  return (
    <div className="z-0 -mt-[20px] w-screen overflow-x-hidden">
      <div
        className={`ml-[-25%] h-[150px] w-[150%] rounded-t-[40%] md:rounded-t-[100%] transition-colors duration-${cardFlashDuration} ${
          startApplicationsAnimation ? flashApplicationColor : applicationColor
        }`}
      >
        <div className="text-center">
          <div className="text-xl md:text-2xl pt-[40px] font-mono text-white">
            Applications
          </div>
        </div>
      </div>
      <div
        className={`w-full transition-colors duration-500 ${
          startApplicationsAnimation ? flashApplicationColor : applicationColor
        }`}
      >
        <div className="flex justify-center ">
          <div className="max-w-6xl w-full h-full mt-[-90px]">
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
            colors="bg-inherit text-lg text-white border-2 border-white hover:bg-applications-300"
            sizes="w-48 p-1.5 rounded-md"
          >
            see all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Applications;
