"use client";

import { CanvasDrawLine } from "@/components";
import { useEffect, useState } from "react";

interface AnimatedLinesProps {
  coords: [number, number][];
  width: number;
  seconds: number;
  color: string;
}

const AnimatedLines = ({
  width,
  coords,
  seconds,
  color,
}: AnimatedLinesProps) => {
  const [animateLineState, setAnimateLineState] = useState(0);

  return (
    <div className="">
      <CanvasDrawLine
        canvasWidth={width}
        canvasHeight={1000}
        seconds={seconds}
        coords={coords}
        color={color}
      />
    </div>
  );
};

export default AnimatedLines;
