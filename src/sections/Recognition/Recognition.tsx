/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

import { MicrophoneIcon, Button } from "abair-web-components";

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
  const [synthesisedTextShowing, setSynthesisedTextShowing] = useState(false);

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
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-row">
          <div className="w-full pt-8">
            <div className=" bg-inherit w-full h-28 px-8">
              <div className="relative h-full">
                <div className="absolute h-full w-full">
                  <div className="w-4 h-4 bg-recognition-200 rounded-full absolute top-12 -left-2"></div>
                  <div className="w-full h-14 border-b-2 border-recognition-200"></div>
                  <div className="w-full h-14 border-t-2 border-recognition-200"></div>

                  <div className="w-4 h-4 bg-recognition-200 rounded-full absolute top-12 -right-2"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center p-6">
              <Button
                sizes="w-32 p-1 flex justify-center rounded-sm"
                colors="bg-recognition-400 hover:bg-recognition-500"
              >
                <MicrophoneIcon height={26} width={26} color="white" />
              </Button>
            </div>

            <div className="absolute bottom-2 right-4">
              <Button
                colors="bg-inherit text-recognition-500 text-sm hover:text-recognition-600"
                sizes="py-0.5 px-1 rounded-sm"
              >
                more options &#9656;
              </Button>
            </div>
          </div>
          {/* {recognitizedTextShowing && (
            <PopupBackground
              onClick={() => {
                setRecognitizedTextShowing(false);
              }}
            >
              <div className="w-full px-4 transition-all duration-600">
                <RecognitionPlaybackCard />
              </div>
            </PopupBackground>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Recognition;
