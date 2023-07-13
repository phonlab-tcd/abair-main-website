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
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-500 ${
        startRecognitionBorderAnimation ? flashRecognitionColor : "bg-white"
      }`}
    >
      <div className="flex justify-center">
        <div
          className={`w-full bg-recognition-400 h-[48px] transition-all duration-500  ${
            startRecognitionBorderAnimation
              ? flashRecognitionTitleColor
              : "bg-recognition-400"
          }`}
        >
          <div className="grid grid-cols-3 h-full">
            <div></div>
            <div className="flex h-full justify-center">
              <div className="flex items-center text-xl md:text-2xl font-mono text-white">
                Recognition
              </div>
            </div>
            <div className="flex w-full h-full justify-end pr-2 items-center">
              <div>
                <Button
                  colors="bg-inherit text-white text-sm hover:bg-recognition-600"
                  sizes="py-0.5 px-1 rounded-sm"
                >
                  more options &#9656;
                </Button>
              </div>
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
    </div>
  );
};

export default Recognition;
