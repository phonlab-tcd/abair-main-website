"use client";

import { FadeInText, AnimatedLines } from "@/components";
import { useEffect, useState } from "react";
import { getBreakpoint } from "@/utils";

const IntroAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [typingState, setTypingState] = useState("");
  const [animatedLineState, setAnimatedLineState] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [breakpoint, setBreakpoint] = useState<string>("");
  const [synthesisCoords, setSynthesisCoords] = useState<[number, number][]>(
    []
  );
  const [recognitionCoords, setRecognitionCoords] = useState<
    [number, number][]
  >([]);
  const [applicationsCoords, setApplicationsCoords] = useState<
    [number, number][]
  >([]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    console.log("breakpoint:", breakpoint);
    if (["xl", "lg"].includes(breakpoint)) {
      setSynthesisCoords([
        [windowWidth / 2 - 2, 0],
        [windowWidth / 2 - 2, 200],
        [windowWidth / 2 - 35, 200],
      ]);
      setRecognitionCoords([
        [2, 0],
        [2, 200],
        [35, 200],
      ]);
      setApplicationsCoords([
        [2, 0],
        [2, 500],
      ]);
    } else if (["md"].includes(breakpoint)) {
      setSynthesisCoords([
        [windowWidth / 2 - 1, 0],
        [windowWidth / 2 - 1, 40],
        [windowWidth / 2 - 176 - 12, 40],
        [windowWidth / 2 - 176 - 12, 80],
      ]);
      setRecognitionCoords([
        [0, 0],
        [0, 55],
        [176 + 12, 55],
        [176 + 12, 110],
      ]);
      setApplicationsCoords([
        [0, 0],
        [0, 800],
      ]);
    }
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    setStartAnimation(true);

    setTimeout(() => {
      setTypingState("synthesis");
      setTimeout(() => {
        setAnimatedLineState("synthesis");
      }, 1300);
    }, 3800);
    setTimeout(() => {
      setTypingState("recognition");
      setTimeout(() => {
        setAnimatedLineState("recognition");
      }, 200);
    }, 7700);
    setTimeout(() => {
      setTypingState("applications");
      setTimeout(() => {
        setAnimatedLineState("applications");
      }, 200);
    }, 10100);
    setTimeout(() => {
      setTypingState("technologies");
    }, 13000);
  }, []);

  return (
    <div className="my-6 md:my-10">
      <div className="flex w-screen justify-center relative">
        <div className="w-1/2 absolute top-[164px] left-0 h-[1000px]">
          {["synthesis"].includes(animatedLineState) &&
            !["recognition"].includes(typingState) && (
              <AnimatedLines
                width={windowWidth / 2}
                coords={synthesisCoords}
                seconds={0.8}
                color="#3b82f6"
              />
            )}
        </div>
        <div className="w-1/2 absolute top-[164px] right-0 h-[1000px]">
          {["recognition"].includes(animatedLineState) &&
            !["applications"].includes(typingState) && (
              <AnimatedLines
                width={windowWidth / 2}
                coords={recognitionCoords}
                seconds={0.8}
                color="#ef4444"
              />
            )}
        </div>
        <div className="w-1/2 absolute top-[164px] right-0 h-[1000px]">
          {["applications"].includes(animatedLineState) &&
            !["technologies"].includes(typingState) && (
              <AnimatedLines
                width={windowWidth / 2}
                coords={applicationsCoords}
                seconds={0.9}
                color="#22c55e"
              />
            )}
        </div>
        <div className="">
          <FadeInText
            startAnimation={startAnimation}
            typingState={typingState}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
