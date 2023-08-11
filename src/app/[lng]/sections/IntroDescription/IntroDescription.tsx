/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FadeInText, AnimatedLines } from "@/components";
import { useEffect, useState } from "react";
import { getBreakpoint } from "@/utils";
import {
  delayToFirstTyping,
  delayForLineToStartAfterTyping,
  delayBetweenTyping,
} from "../animationTimings/animationTimings";

const IntroDescription = () => {
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
    if (["xl", "lg"].includes(breakpoint)) {
      setSynthesisCoords([
        [windowWidth / 2 - 2, 0],
        [windowWidth / 2 - 2, 60],
        [windowWidth / 2 - 30, 60],
      ]);
      setRecognitionCoords([
        [2, 0],
        [2, 60],
        [30, 60],
      ]);
      setApplicationsCoords([
        [2, 0],
        [2, 400],
      ]);
    } else if (["md"].includes(breakpoint)) {
      setSynthesisCoords([
        [windowWidth / 2 - 1, 0],
        [windowWidth / 2 - 1, 60],
        [windowWidth / 2 - 176 - 12, 60],
        [windowWidth / 2 - 176 - 12, 140],
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

    setTimeout(() => {
      setStartAnimation(true);

      setTimeout(() => {
        setTypingState("synthesis");
        setTimeout(() => {
          setAnimatedLineState("synthesis");
        }, 1100 + delayForLineToStartAfterTyping);
      }, delayToFirstTyping);
      setTimeout(() => {
        setTypingState("recognition");
        setTimeout(() => {
          setAnimatedLineState("recognition");
        }, delayForLineToStartAfterTyping);
      }, delayToFirstTyping + delayBetweenTyping + 1100);
      setTimeout(() => {
        setTypingState("applications");
        setTimeout(() => {
          setAnimatedLineState("applications");
        }, delayForLineToStartAfterTyping);
      }, delayToFirstTyping + 2 * delayBetweenTyping + 1100);
      setTimeout(() => {
        setTypingState("technologies");
      }, delayToFirstTyping + 3 * delayBetweenTyping + 1100);
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-screen justify-center relative">
      <div className="w-1/2 absolute top-[164px] left-0 h-[1000px]">
        {["synthesis"].includes(animatedLineState) &&
          !["recognition"].includes(typingState) && (
            <AnimatedLines
              width={windowWidth / 2}
              coords={synthesisCoords}
              seconds={0.7}
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
              seconds={0.7}
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
        <FadeInText startAnimation={startAnimation} typingState={typingState} />
      </div>
    </div>
  );
};

export default IntroDescription;
