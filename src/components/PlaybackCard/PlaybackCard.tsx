import {
  MaleIcon,
  FemaleIcon,
  DownloadIcon,
  PlayIcon,
  StopIcon,
  CopyIcon,
  TickIcon,
} from "@/components/Icons";
import { MapMini } from "@/components/Map";
import { Button } from "@/components/Button";
import { ReactNode } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { themeColors } from "@/theme";

export interface PlaybackCardProps {
  gender?: string;
  dialect?: string;
  text?: string;
  recentlyCopied?: boolean;
  sidebar?: boolean;
  version?: string;
  handlePlay?: () => void;
  audioPlaying?: boolean;
  handleStop?: () => void;
  handleDownload?: () => void;
  handleCopy?: () => void;
  children?: ReactNode;
  small?: boolean;
}

const PlaybackCard = ({
  gender = "male",
  dialect = "Ulster",
  text = "Cad é mar atá tú",
  recentlyCopied = false,
  sidebar = true,
  version = "recognition",
  audioPlaying = false,
  handlePlay,
  handleStop,
  handleDownload,
  handleCopy,
  children,
  small = false,
}: PlaybackCardProps) => {
  return (
    <div
      className={`w-full ${
        small ? "h-40" : "h-36"
      } rounded-xl border-2 bg-white ${
        version === "synthesis"
          ? "border-synthesis-500"
          : "border-recognition-400"
      }`}
    >
      <div className="flex flex-row h-full">
        {sidebar ? (
          <>
            {version === "synthesis" ? (
              <div className="flex flex-col items-center w-16">
                <div className="pt-2">
                  <MapMini selectedCounty={dialect} height={80} />
                </div>
                <div className="pt-1">
                  {gender === "male" ? (
                    <MaleIcon
                      height={22}
                      color={themeColors.synthesis["600"]}
                    />
                  ) : (
                    <FemaleIcon
                      height={22}
                      color={themeColors.synthesis["600"]}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="w-16"></div>
            )}
            <div
              className={`my-2 border ${
                version === "synthesis"
                  ? "border-synthesis-200"
                  : "border-recognition-200"
              }`}
            ></div>
          </>
        ) : null}
        <div className="grow px-1">
          <div
            className={`${
              version === "synthesis"
                ? "text-synthesis-600"
                : "text-recognition-600"
            } ${
              small ? "text-sm" : "text-base"
            } text-left h-full p-1 overflow-y-auto`}
          >
            {text}
          </div>
        </div>
        <div
          className={`px-2 flex flex-col justify-around h-full ${
            small ? "w-12" : "w-16"
          } items-center rounded-r-lg ${
            version === "synthesis" ? "bg-synthesis-500" : "bg-recognition-400"
          }`}
        >
          {recentlyCopied ? (
            <Button>
              <TickIcon height={small ? 20 : 24} color="white" />
            </Button>
          ) : (
            <CopyToClipboard text={text} onCopy={handleCopy}>
              <Button>
                <CopyIcon height={small ? 20 : 24} color="white" />
              </Button>
            </CopyToClipboard>
          )}
          <Button onClick={handleDownload}>
            <DownloadIcon height={small ? 20 : 26} color="white" />
          </Button>
          {audioPlaying ? (
            <Button onClick={handleStop}>
              <StopIcon height={small ? 20 : 24} color="white" />
            </Button>
          ) : (
            <Button onClick={handlePlay}>
              <PlayIcon height={small ? 20 : 24} color="white" />
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default PlaybackCard;
