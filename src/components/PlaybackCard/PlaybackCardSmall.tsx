import { MaleIcon, FemaleIcon, PlayIcon, StopIcon } from "@/components/Icons";
import { MapMini } from "@/components/Map";
import { Button } from "@/components/Button";
import { ReactNode, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { themeColors } from "@/theme";

export interface PlaybackCardSmallProps {
  dialect?: string;
  text?: string;
  src?: string;
}

const PlaybackCardSmall = ({
  dialect = "Ulster",
  text = "Cad é mar atá tú",
  src = "",
}: PlaybackCardSmallProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.play();
        setAudioPlaying(true);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const handleStop = () => {
    console.log("in stop");
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  return (
    <div
      className={`w-96 h-16 rounded-xl border-2 bg-white border-synthesis-500`}
    >
      <div className="flex flex-row h-full">
        <div className="flex flex-col items-center w-16">
          <MapMini selectedCounty={dialect} height={60} />
        </div>

        <div className="grow px-1">
          <div
            className={`text-synthesis-600 text-base text-left h-full p-1 overflow-y-auto flex items-center`}
          >
            {text}
          </div>
        </div>
        <div
          className={`px-2 flex flex-col justify-around h-full w-16
items-center rounded-r-lg bg-synthesis-500`}
        >
          {audioPlaying ? (
            <Button onClick={handleStop}>
              <StopIcon height={24} color="white" />
            </Button>
          ) : (
            <Button onClick={handlePlay}>
              <PlayIcon height={24} color="white" />
            </Button>
          )}
        </div>
      </div>
      <audio src={src} ref={audioRef} onEnded={handleStop} />
    </div>
  );
};

export default PlaybackCardSmall;
