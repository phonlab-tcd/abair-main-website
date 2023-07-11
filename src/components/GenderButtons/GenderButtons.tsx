"use client";

import { useEffect, useState } from "react";

import { MaleIcon, FemaleIcon, Button } from "abair-web-components";

interface GenderButtonsProps {
  height: number;
}

const GenderButtons = ({ height }: GenderButtonsProps) => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [maleIconColor, setMaleIconColor] = useState("#93c5fd");
  const [femaleIconColor, setFemaleIconColor] = useState("#93c5fd");

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
    <div className="flex flex-row justify-center h-full w-full p-2">
      <div className="px-2">
        <button
          className=" p-1 rounded-xl"
          onMouseEnter={() => {
            setMaleIconColor("#1d4ed8");
          }}
          onMouseLeave={() => {
            if (gender !== "male") {
              setMaleIconColor("#93c5fd");
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
            setFemaleIconColor("#1d4ed8");
          }}
          onMouseLeave={() => {
            if (gender !== "female") {
              setFemaleIconColor("#93c5fd");
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
