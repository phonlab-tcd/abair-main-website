/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Map, GenderButtons, PopupBackground } from "@/components";
import { SpeakIcon, Button, SynthesisPlaybackCard } from "abair-web-components";

interface SynthesisProps {
  flashSynthesisColor?: string;
  flashSynthesisTitleColor?: string;
  delayToStartFlash: number;
  flashDuration: number;
}

const Synthesis = ({
  flashSynthesisColor = "bg-synthesis-50",
  flashSynthesisTitleColor = "bg-synthesis-600",
  delayToStartFlash,
  flashDuration,
}: SynthesisProps) => {
  const [startSynthesisBorderAnimation, setStartSynthesisBorderAnimation] =
    useState(false);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [maleIconColor, setMaleIconColor] = useState("#93c5fd");
  const [femaleIconColor, setFemaleIconColor] = useState("#93c5fd");
  const [synthesisedTextShowing, setSynthesisedTextShowing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartSynthesisBorderAnimation(true);
      setTimeout(() => {
        setStartSynthesisBorderAnimation(false);
      }, flashDuration);
    }, delayToStartFlash);
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
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge  relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-${flashDuration} delay-0 ${
        startSynthesisBorderAnimation ? flashSynthesisColor : "bg-white"
      }`}
    >
      <div
        className={`w-full h-[48px] transition-all duration-${flashDuration} ${
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
        <div className="flex flex-row relative h-synthRecCardLargeInner">
          <div className="w-[40%] ml-2 flex flex-col justify-center">
            <Map height={220} />
            <div className="w-[90%] -mt-4">
              <GenderButtons height={26} />
            </div>
          </div>

          <div className="w-[60%] pt-8 pr-6">
            <textarea className="p-1 bg-inherit w-full h-28 focus:outline-0 resize-none ring-1 focus:ring-2"></textarea>

            <div className="flex justify-center items-center p-4">
              <Button
                sizes="w-32 p-1 flex justify-center rounded-sm"
                colors="bg-synthesis-500 hover:bg-synthesis-600"
              >
                <SpeakIcon height={26} width={26} color="white" />
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
            <PopupBackground>
              <div className="w-full px-4 transition-all duration-600 relative">
                <Button
                  colors="border-2 border-synthesis-500 bg-white text-synthesis-500 hover:bg-synthesis-50"
                  sizes="absolute -top-3 right-1 font-bold rounded-full px-2"
                  onClick={() => {
                    setSynthesisedTextShowing(false);
                  }}
                >
                  x
                </Button>

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
