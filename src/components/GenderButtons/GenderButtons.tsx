"use client";

import { useEffect, useState } from "react";

import { MaleIcon, FemaleIcon } from "abair-web-components";

const GenderButtons = () => {
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
    <div className="flex justify-center w-full">
      <button
        className="mx-2"
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
        <MaleIcon color={maleIconColor} />
      </button>
      <button
        className="mx-2"
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
        <FemaleIcon color={femaleIconColor} />
      </button>
    </div>
  );
};

export default GenderButtons;
