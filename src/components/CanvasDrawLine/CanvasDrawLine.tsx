"use client";

import React, { useRef, useEffect } from "react";

interface CanvasDrawLineProps {
  canvasWidth: number;
  canvasHeight: number;
  coords: [number, number][];
  seconds: number;
  color?: string;
  thickness?: number;
}

const CanvasDrawLine = ({
  canvasWidth,
  canvasHeight,
  coords,
  seconds,
  color = "red",
  thickness = 2,
}: CanvasDrawLineProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const distances: number[] = [];
  const timings: number[] = [];
  const frames: number[] = [];
  const totalFrames = seconds * 60;
  const movements: [number, number][] = [];

  coords.map((c: [number, number], i: number) => {
    if (i !== 0) {
      const movementX = c[0] - coords[i - 1][0];
      const movementY = c[1] - coords[i - 1][1];
      movements.push([movementX, movementY]);
      distances.push(Math.sqrt(movementX ** 2 + movementY ** 2));
    }
  });

  const sumDistances = distances.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  distances.map((d) => {
    timings.push(d / sumDistances);
  });

  timings.map((t) => {
    frames.push(Math.round(t * totalFrames));
  });

  const movementsPerFrame: [number, number][] = [];

  movements.map((m, i) => {
    movementsPerFrame.push([
      m[0] / (60 * timings[i] * seconds),
      m[1] / (60 * timings[i] * seconds),
    ]);
  });

  const animatedMovementCoords: [number, number][] = [];

  const determineAnimatedMovements = () => {
    animatedMovementCoords.push(coords[0]);
    frames.map((f, i) => {
      for (let j = 0; j < f; j++) {
        animatedMovementCoords.push([
          animatedMovementCoords[animatedMovementCoords.length - 1][0] +
            movementsPerFrame[i][0],
          animatedMovementCoords[animatedMovementCoords.length - 1][1] +
            movementsPerFrame[i][1],
        ]);
      }
    });
    console.log("animatedMovementCoords: ", animatedMovementCoords);
  };

  determineAnimatedMovements();

  let frameCount = 0;

  let animationFrameId = 0;

  const startAnimation = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }
    const animateLine = () => {
      if (canvas) {
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.strokeStyle = color;
          ctx.lineWidth = thickness;
          if (frameCount === 0) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.beginPath();
            ctx.moveTo(coords[0][0], coords[0][1]);
          }

          ctx.lineTo(
            animatedMovementCoords[frameCount][0],
            animatedMovementCoords[frameCount][1]
          );
          ctx.stroke();

          frameCount += 1;
          if (frameCount < totalFrames) {
            animationFrameId = requestAnimationFrame(animateLine);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        }
      }
    };
    animateLine();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return <canvas ref={canvasRef} className={`w-[${canvasWidth}px]`} />;
};

export default CanvasDrawLine;
export type { CanvasDrawLineProps };
