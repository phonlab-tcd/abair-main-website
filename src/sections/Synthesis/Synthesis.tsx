"use client";

import { useEffect, useState } from "react";
import { Map, GenderButtons, PopupBackground } from "@/components";
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
  const [synthesisedTextShowing, setSynthesisedTextShowing] = useState(false);

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
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge  relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-600 delay-0 ${
        startSynthesisBorderAnimation ? flashSynthesisColor : "bg-white"
      }`}
    >
      <div
        className={`w-full h-[48px] transition-all duration-1000 ${
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
        <div className="flex flex-row">
          <div className="w-[40%] ml-2 flex flex-col justify-center">
            <Map height={220} />
            <div className="w-[90%] border -mt-4">
              <GenderButtons height={26} />
            </div>
          </div>

          <div className="w-[60%] pt-8 pr-6">
            {/* <div className="w-full h-24"></div> */}
            <textarea className="p-1 bg-inherit w-full h-24 resize-none border  border-synthesis-600 focus:border-synthesis-700"></textarea>
            {/* <div className="w-[100%] "> */}

            <div className="flex justify-center items-center p-2">
              <Button>
                <div className="bg-synthesis-500 p-2 rounded-[100%] hover:bg-synthesis-600">
                  <SpeakIcon height={36} width={36} color="white" />
                </div>
              </Button>
            </div>
            <div className="absolute bottom-2 right-4">
              <Button
                colors="bg-inherit text-synthesis-500 text-sm hover:text-synthesis-600"
                sizes="py-0.5 px-1 rounded-sm"
              >
                more options &#9656;
              </Button>
            </div>
          </div>
          {synthesisedTextShowing && (
            <PopupBackground
              onClick={() => {
                setSynthesisedTextShowing(false);
              }}
            >
              <div className="w-full px-4 transition-all duration-600">
                <SynthesisPlaybackCard />
              </div>
            </PopupBackground>
          )}
        </div>
      </div>
    </div>
  );
};

export default Synthesis;
