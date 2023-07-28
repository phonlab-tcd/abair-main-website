"use client";

import { useState } from "react";
import irelandMapData from "./irelandMapData";
import { themeColors } from "@/theme";
interface mapDataModel {
  name: string;
  coordinates: string;
}
import { Dispatch, SetStateAction } from "react";

interface MapProps {
  height?: number;
  dialect: string | undefined;
  setDialect: Dispatch<SetStateAction<string | undefined>>;
}

const Map = ({ height = 400, dialect, setDialect }: MapProps) => {
  const [hoverCounty, setHoverCounty] = useState("");

  const mapData = irelandMapData;
  const gaeltachts = ["Ulster", "Connemara", "Munster"];

  const getMapColor = (c: mapDataModel) => {
    return gaeltachts.includes(c.name)
      ? c.name === hoverCounty
        ? [themeColors.synthesis[500], themeColors.synthesis[500]]
        : c.name === dialect
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
    if (county !== dialect) {
      if (gaeltachts.includes(county)) {
        setDialect(county);
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
