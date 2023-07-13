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
  flashSynthesisTitleColor = "bg-synthesis-600",
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
    <div>
      <div
        className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge rounded-lg relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-600 delay-0 ${
          startSynthesisBorderAnimation ? flashSynthesisColor : "bg-white"
        }`}
      >
        <div
          className={`w-full rounded-t-lg h-[48px] transition-all duration-1000 ${
            startSynthesisBorderAnimation
              ? flashSynthesisTitleColor
              : "bg-synthesis-500"
          }`}
        >
          <div className="flex h-full justify-center">
            <div className="flex items-center text-xl md:text-2xl font-mono text-white">
              Synthesis
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row h-60">
            <div className="w-[40%] ml-2 flex flex-col justify-center">
              <Map height={240} />
            </div>

            <div className="w-[60%] pt-6 pr-6">
              <textarea className="p-1 bg-inherit w-full h-24 resize-none border rounded-sm border-synthesis-600 focus:border-synthesis-700"></textarea>
              <div className="w-[100%] ">
                <div className="w-full h-full">
                  <GenderButtons height={30} />
                </div>
              </div>
              <div className="flex justify-center m-1 items-center">
                <Button
                  colors="bg-synthesis-500 w-44 hover:bg-synthesis-600 text-white "
                  sizes="rounded-md p-1"
                >
                  Synthesise
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute w-full">
            <SynthesisPlaybackCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synthesis;
