"use client";

import { useEffect, useState } from "react";
import { Map, GenderButtons } from "@/components";
import { MaleIcon, FemaleIcon, Button } from "abair-web-components";

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
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge rounded-lg relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-500 delay-0 ${
        startSynthesisBorderAnimation ? flashSynthesisColor : "bg-white"
      }`}
    >
      <div
        className={`w-full bg-synthesis-400 rounded-t-lg h-[48px] transition-all duration-500 ${
          startSynthesisBorderAnimation
            ? flashSynthesisTitleColor
            : "bg-synthesis-400"
        }`}
      >
        <div className="flex h-full justify-center">
          <div className="flex items-center text-xl md:text-2xl font-mono text-white">
            Synthesis
          </div>
        </div>
      </div>
      <div className="w-full h-[260px] ">
        <div className="flex flex-row mt-2">
          <div className="w-[40%] flex flex-col justify-center">
            <Map height={280} />
          </div>
          <div className="w-[60%] pt-14 px-4">
            <textarea className="bg-inherit w-full h-24 resize-none border rounded-md border-synthesis-300 focus:border-synthesis-700"></textarea>

            <div className="w-full grid grid-cols-2 pt-4 pr-4">
              <GenderButtons />

              <Button
                label="synthesise"
                colors="bg-inherit hover:bg-synthesis-100 text-synthesis-500 border border-synthesis-500"
                sizes="rounded-md p-1 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div
          className={`w-full bg-synthesis-400 rounded-b-lg h-[48px] transition-all duration-500  ${
            startSynthesisBorderAnimation
              ? flashSynthesisTitleColor
              : "bg-synthesis-400"
          }`}
        >
          <div className="flex justify-center h-full items-center">
            <div>
              <Button
                label="advanced options"
                colors="bg-inherit text-white border border-white hover:bg-synthesis-100"
                sizes="py-1 px-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synthesis;
