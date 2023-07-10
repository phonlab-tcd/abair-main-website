"use client";

import { useEffect, useState } from "react";
import { Map, GenderButtons } from "@/components";
import {
  SpeakIcon,
  PlayIcon,
  DownloadIcon,
  SettingsIcon,
  Button,
  SynthesisPlaybackCard,
} from "abair-web-components";

interface SynthesisProps {
  flashSynthesisColor?: string;
  flashSynthesisTitleColor?: string;
}

const Synthesis = ({
  flashSynthesisColor = "bg-synthesis-50",
  flashSynthesisTitleColor = "bg-synthesis-500",
}: SynthesisProps) => {
  const [startSynthesisBorderAnimation, setStartSynthesisBorderAnimation] =
    useState(false);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [maleIconColor, setMaleIconColor] = useState("#93c5fd");
  const [femaleIconColor, setFemaleIconColor] = useState("#93c5fd");

  useEffect(() => {
    setTimeout(() => {
      setStartSynthesisBorderAnimation(true);
      setTimeout(() => {
        setStartSynthesisBorderAnimation(false);
      }, 1800);
    }, 5800);
  }, []);

  useEffect(() => {
    if (gender === "male") {
      setMaleIconColor("#1d4ed8");
      setFemaleIconColor("#93c5fd");
    } else {
      setMaleIconColor("#93c5fd");
      setFemaleIconColor("#1d4ed8");
    }
  }, [gender]);

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge rounded-lg relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-600 delay-0 ${
        startSynthesisBorderAnimation ? flashSynthesisColor : "bg-white"
      }`}
    >
      <div
        className={`w-full rounded-t-lg h-[48px] transition-all duration-1000 ${
          startSynthesisBorderAnimation
            ? flashSynthesisTitleColor
            : "bg-synthesis-600"
        }`}
      >
        <div className="flex h-full justify-center">
          <div className="flex items-center text-xl md:text-2xl font-mono text-white">
            Synthesis
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row h-52">
          <div className="w-[30%] ml-2 flex flex-col justify-center">
            <div>
              <Map height={170} />
            </div>
            <div className="w-full mb-2 -mt-2 -ml-1">
              <GenderButtons height={20} />
            </div>
          </div>
          <div className="w-[70%] pt-5 pr-5">
            <textarea className="p-1bg-inherit w-full h-44 resize-none border rounded-sm border-synthesis-600 focus:border-synthesis-700"></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-1 items-center">
        <Button
          colors="bg-synthesis-600 w-44 hover:bg-synthesis-600 text-white border border-synthesis-600"
          sizes="rounded-md p-1"
        >
          Synthesise
        </Button>
      </div>
      {/* <div className="mt-4">
        <SynthesisPlaybackCard />
      </div> */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div
          className={`w-full rounded-b-lg h-12 transition-all duration-1000  ${
            startSynthesisBorderAnimation
              ? flashSynthesisTitleColor
              : "bg-synthesis-600"
          }`}
        >
          <div className="flex justify-around h-full items-center">
            <Button
              colors="bg-inherit hover:bg-synthesis-300"
              sizes="py-0.5 px-1 rounded-md"
            >
              <DownloadIcon color="white" />
            </Button>
            <Button
              colors="bg-inherit hover:bg-synthesis-300"
              sizes="py-1 px-1 rounded-md"
            >
              <PlayIcon color="white" height={24} />
            </Button>
            <Button
              colors="bg-inherit hover:bg-synthesis-300"
              sizes="py-0.5 px-1 rounded-md"
            >
              <SettingsIcon color="white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synthesis;
