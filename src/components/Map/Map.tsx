"use client";

import { useState } from "react";
import irelandMapData from "./irelandMapData";
import { themeColors } from "@/theme";
interface mapDataModel {
  name: string;
  coordinates: string;
}

interface MapProps {
  height?: number;
  mapData?: mapDataModel[];
  gaeltachts?: string[];
  selectedCounty?: string;
  setSelectedCounty?: (name: string) => void;
}

const Map = ({
  height = 400,
  mapData = irelandMapData,
  gaeltachts = ["Ulster", "Connemara", "Munster"],
  selectedCounty = "Ulster",
  setSelectedCounty = () => {
    console.log("setSelectedCounty complete");
  },
}: MapProps) => {
  const [hoverCounty, setHoverCounty] = useState("");
  const [selectCounty, setSelectCounty] = useState(selectedCounty);

  const getMapColor = (c: mapDataModel) => {
    return gaeltachts.includes(c.name)
      ? c.name === hoverCounty
        ? [themeColors.synthesis[500], themeColors.synthesis[500]]
        : c.name === selectCounty
        ? [themeColors.synthesis[500], themeColors.synthesis[500]]
        : [themeColors.synthesis[200], themeColors.synthesis[500]]
      : [themeColors.primary[200], themeColors.primary[200]];
  };

  const handleMouseEnter = (county: string) => {
    gaeltachts.includes(county) ? setHoverCounty(county) : setHoverCounty("");
  };

  const handleMouseLeave = () => {
    setHoverCounty("");
  };

  const handleClick = (county: string) => {
    if (county !== selectCounty) {
      if (gaeltachts.includes(county)) {
        setSelectCounty(county);
        setSelectedCounty(county);
      }
    }
  };

  return (
    <div className="relative">
      <svg viewBox="0 520 450 600" height={height}>
        <g transform="scale(1.1)" onMouseLeave={() => handleMouseLeave()}>
          {mapData.map((c: mapDataModel, i: number) => (
            <g
              key={i}
              fill={getMapColor(c)[0]}
              stroke={getMapColor(c)[1]}
              opacity={gaeltachts.includes(c.name) ? 0.8 : 1}
              onMouseEnter={() => handleMouseEnter(c.name)}
              onClick={() => {
                handleClick(c.name);
              }}
              style={{ cursor: "pointer" }}
            >
              <path
                d={c.coordinates}
                strokeWidth={gaeltachts.includes(c.name) ? "4" : "0.5"}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Map;
export type { MapProps };
