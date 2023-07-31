"use client";

import { TypingText } from "@/components";

interface FadeInTextProps {
  startAnimation: boolean;
  typingState: string;
}

const FadeInText = ({ startAnimation, typingState }: FadeInTextProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex text-3xl md:text-4xl font-light text-black">
        <div
          className={`transition-opacity duration-100 delay-500 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          STATE
        </div>
        <div
          className={`transition-opacity duration-2000 delay-500 mx-1 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          &#8226;
        </div>
        <div
          className={`transition-opacity duration-100 delay-1000 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          OF
        </div>
        <div
          className={`transition-opacity duration-2000 delay-1000 mx-1 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          &#8226;
        </div>
        <div
          className={`transition-opacity duration-100 delay-1500 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          THE
        </div>
        <div
          className={`transition-opacity duration-2000 delay-1500 mx-1 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          &#8226;
        </div>
        <div
          className={`transition-opacity duration-100 delay-2000 ${
            startAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          ART
        </div>
      </div>
      <div
        className={`text-2xl md:text-3xl my-2 md:my-4 font-light transition-opacity duration-1000 delay-2800 ${
          startAnimation ? "opacity-100" : "opacity-0"
        }`}
      >
        Irish Language
      </div>

      <div className=" w-70 flex relative font-mono">
        <div className="text-2xl md:text-3xl h-8 md:h-10">
          {typingState === "synthesis" && (
            <TypingText
              text=" Speech Synthesis"
              delayToStart={1200}
              color="text-synthesis-700"
            />
          )}
          {typingState === "recognition" && (
            <TypingText
              text="Speech Recognition"
              color="text-recognition-700"
            />
          )}
          {typingState === "applications" && (
            <TypingText text="Speech Applications" color="text-primary-700" />
          )}
          {/* {typingState === "technologies" && (
            // <TypingText text="Speech Technologies" color="text-black" /> */}

          {/* )} */}
        </div>
      </div>
      <div
        className={`text-3xl absolute bottom-0 transition-opacity duration-1000 delay-12000 ${
          startAnimation ? "opacity-100" : "opacity-0"
        } `}
      >
        Speech Technologies
      </div>
    </div>
  );
};

export default FadeInText;
