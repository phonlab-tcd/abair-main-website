/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { themeColors } from "@/theme";

interface RecognitionWaveVisualisationProps {
  width: number;
  height: number;
  stream: MediaStream | undefined;
}

const RecognitionWaveVisual = ({
  width,
  height,
  stream,
}: RecognitionWaveVisualisationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [audioContext, setAudioContext] = useState<AudioContext | undefined>();

  useEffect(() => {
    if (stream) {
      if (!audioContext) {
        setAudioContext(new AudioContext());
      }
    }
  }, [stream]);

  useEffect(() => {
    if (audioContext) {
      visualize(stream, "rgb(255, 255, 255)");
    }
  }, [audioContext]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const visualize = (stream: MediaStream | undefined, fillColor: string) => {
    if (stream && audioContext && canvasRef.current !== null) {
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvasCtx = canvasRef.current.getContext("2d");
      source.connect(analyser);
      //analyser.connect(audioCtx.destination);
      console.log("bufferLength:", bufferLength);
      const draw = () => {
        if (canvasCtx !== null) {
          analyser.getByteTimeDomainData(dataArray);

          canvasCtx.fillStyle = fillColor;
          canvasCtx.fillRect(0, 0, width, height);

          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = themeColors.recognition[500];

          canvasCtx.beginPath();

          const sliceWidth = (width * 0.96) / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * height) / 2;

            if (i < 15) {
              canvasCtx.moveTo(0, height / 2);
            } else {
              canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
          }
          if (canvasRef.current !== null) {
            canvasCtx.lineTo(width, height / 2);
            canvasCtx.stroke();
          }
        }

        animationRef.current = requestAnimationFrame(draw);
      };
      draw();
    } else {
      console.log("not visualising");
    }
  };

  return (
    <div>
      <canvas width={width} height={height} ref={canvasRef}></canvas>
    </div>
  );
};

export default RecognitionWaveVisual;
