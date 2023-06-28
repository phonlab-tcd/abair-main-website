"use client";

import { useEffect, useState } from "react";
import { Map } from "@/components";
import Image from "next/image";

interface CoreTechnologiesProps {
  flashSynthesisColor?: string;
  flashSynthesisTitleColor?: string;
  flashRecognitionColor?: string;
  flashRecognitionTitleColor?: string;
}

const CoreTechnologies = ({
  flashSynthesisColor = "bg-secondary-50",
  flashSynthesisTitleColor = "bg-secondary-500",
  flashRecognitionColor = "bg-warning-50",
  flashRecognitionTitleColor = "bg-warning-500",
}: CoreTechnologiesProps) => {
  const [startSynthesisBorderAnimation, setStartSynthesisBorderAnimation] =
    useState(false);
  const [startRecognitionBorderAnimation, setStartRecognitionBorderAnimation] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartSynthesisBorderAnimation(true);
      setTimeout(() => {
        setStartSynthesisBorderAnimation(false);
      }, 1800);
    }, 5900);

    setTimeout(() => {
      setStartRecognitionBorderAnimation(true);
      setTimeout(() => {
        setStartRecognitionBorderAnimation(false);
      }, 1800);
    }, 8700);
  }, []);

  useEffect(() => {
    console.log("startSynthesisBorderAnimation");
  }, [startSynthesisBorderAnimation]);

  return (
    <div className="grid md:grid-cols-2 justify-center w-full max-w-6xl md:gap-[24px] lg:gap-[48px] ">
      <div className="flex justify-center md:justify-end">
        <div
          className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge rounded-lg relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-500 delay-0 ${
            startSynthesisBorderAnimation ? flashSynthesisColor : "bg-white"
          }`}
        >
          <div
            className={`w-full bg-secondary-400 rounded-t-lg h-[48px] transition-all duration-500 ${
              startSynthesisBorderAnimation
                ? flashSynthesisTitleColor
                : "bg-secondary-400"
            }`}
          >
            <div className="flex h-full justify-center">
              <div className="flex items-center text-2xl md:text-3xl font-mono text-white">
                Synthesis
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center">
              <Map height={360} />
            </div>
            <div className="px-4">
              <textarea className="bg-inherit w-full h-24 resize-none border-2 rounded-md"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-start">
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
                <div className="flex items-center text-2xl md:text-3xl font-mono text-white">
                  Recognition
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="h-[324px] w-full flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologies;
