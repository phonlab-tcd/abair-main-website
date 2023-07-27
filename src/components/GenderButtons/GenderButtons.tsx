"use client";

import { useEffect, useState } from "react";
import { themeColors } from "@/theme";
import { MaleIcon, FemaleIcon, Button } from "abair-web-components";

interface GenderButtonsProps {
  height: number;
}

const GenderButtons = ({ height }: GenderButtonsProps) => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [maleIconColor, setMaleIconColor] = useState<string>(
    themeColors.synthesis[200]
  );
  const [femaleIconColor, setFemaleIconColor] = useState<string>(
    themeColors.synthesis[200]
  );

  useEffect(() => {
    if (gender === "male") {
      setMaleIconColor(themeColors.synthesis[600]);
      setFemaleIconColor(themeColors.synthesis[200]);
    } else {
      setFemaleIconColor(themeColors.synthesis[600]);
      setMaleIconColor(themeColors.synthesis[200]);
    }
  }, [gender]);

  return (
    <div className="flex flex-row justify-center h-full w-full p-1">
      <div className="px-2">
        <button
          className=" p-1 rounded-xl"
          onMouseEnter={() => {
            setMaleIconColor(themeColors.synthesis[600]);
          }}
          onMouseLeave={() => {
            if (gender !== "male") {
              setMaleIconColor(themeColors.synthesis[200]);
            }
          }}
          onClick={() => {
            setGender("male");
          }}
        >
          <MaleIcon color={maleIconColor} height={height} />
        </button>
      </div>
      <div className="px-2">
        <button
          className=" p-1 rounded-xl"
          onMouseEnter={() => {
            setFemaleIconColor(themeColors.synthesis[600]);
          }}
          onMouseLeave={() => {
            if (gender !== "female") {
              setFemaleIconColor(themeColors.synthesis[200]);
            }
          }}
          onClick={() => {
            setGender("female");
          }}
        >
          <FemaleIcon color={femaleIconColor} height={height} />
        </button>
      </div>
    </div>
  );
};

export default GenderButtons;
