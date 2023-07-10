/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

import { Button } from "abair-web-components";

interface RecognitionProps {
  flashRecognitionColor?: string;
  flashRecognitionTitleColor?: string;
}

const Recognition = ({
  flashRecognitionColor = "bg-recognition-50",
  flashRecognitionTitleColor = "bg-recognition-500",
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
          className={`w-full bg-recognition-400 rounded-t-lg h-[48px] transition-all duration-500  ${
            startRecognitionBorderAnimation
              ? flashRecognitionTitleColor
              : "bg-recognition-400"
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
            <img
              src="/microphone-svgrepo-com.svg"
              width={60}
              height={60}
              alt="Microphone Icon"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div
          className={`w-full bg-recognition-400 rounded-b-lg h-[48px] transition-all duration-500  ${
            startRecognitionBorderAnimation
              ? flashRecognitionTitleColor
              : "bg-recognition-400"
          }`}
        >
          <div className="flex justify-center h-full items-center">
            <div>
              <Button
                colors="bg-inherit text-white border border-white hover:bg-recognition-100"
                sizes="py-1 px-2 rounded-md"
              >
                advanced options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
