"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Button } from "abair-web-components";

interface RecognitionProps {
  flashRecognitionColor?: string;
  flashRecognitionTitleColor?: string;
}

const Recognition = ({
  flashRecognitionColor = "bg-warning-50",
  flashRecognitionTitleColor = "bg-warning-500",
}: RecognitionProps) => {
  const [startRecognitionBorderAnimation, setStartRecognitionBorderAnimation] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartRecognitionBorderAnimation(true);
      setTimeout(() => {
        setStartRecognitionBorderAnimation(false);
      }, 1800);
    }, 8600);
  }, []);

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge rounded-lg relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-500 ${
        startRecognitionBorderAnimation ? flashRecognitionColor : "bg-white"
      }`}
    >
      <div className="flex justify-center">
        <div
          className={`w-full bg-warning-400 rounded-t-lg h-[48px] transition-all duration-500  ${
            startRecognitionBorderAnimation
              ? flashRecognitionTitleColor
              : "bg-warning-400"
          }`}
        >
          <div className="flex h-full justify-center">
            <div className="flex items-center text-xl md:text-2xl font-mono text-white">
              Recognition
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-[270px] w-full flex justify-center items-center">
          <div>
            <Image
              src="/microphone-svgrepo-com.svg"
              width={60}
              height={60}
              alt="Microphone Icon"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-4 justify-center items-center">
        <div>
          <Button
            label="advanced options"
            colors="bg-inherit text-warning-400 border border-warning-400 hover:bg-warning-100"
            sizes="py-1 px-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Recognition;
