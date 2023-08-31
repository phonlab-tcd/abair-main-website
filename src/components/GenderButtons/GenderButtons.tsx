"use client";

import { useEffect, useState } from "react";
import { themeColors } from "@/theme";
import { MaleIcon, FemaleIcon } from "@/components/Icons";
import { Dispatch, SetStateAction } from "react";

interface GenderButtonsProps {
  height: number;
  availableGenders: (string | undefined)[] | undefined;
  gender: string | undefined;
  setGender: Dispatch<SetStateAction<string | undefined>>;
}

const GenderButtons = ({
  height,
  availableGenders,
  gender,
  setGender,
}: GenderButtonsProps) => {
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
      {availableGenders && availableGenders.includes("male") ? (
        <div className="px-2">
          <button
            className="p-1 rounded-xl opacity-80 hover:opacity-100"
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
      ) : null}
      {availableGenders && availableGenders.includes("female") ? (
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
      ) : null}
    </div>
  );
};

export default GenderButtons;
