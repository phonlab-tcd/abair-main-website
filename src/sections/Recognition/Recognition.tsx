/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import {
  Media,
  RecognitionRecordStopButtons,
  RecognitionWaveVisual,
  PopupBackground,
} from "@/components";
import { Button, RecognitionPlaybackCard } from "abair-web-components";
import { themeWidth } from "@/theme";
import { getBreakpoint } from "@/utils";

interface RecognitionProps {
  flashRecognitionColor?: string;
  flashRecognitionTitleColor?: string;
  delayToStartFlash: number;
  flashDuration: number;
}

const Recognition = ({
  flashRecognitionColor = "bg-recognition-50",
  flashRecognitionTitleColor = "bg-recognition-500",
  delayToStartFlash,
  flashDuration,
}: RecognitionProps) => {
  const [startRecognitionBorderAnimation, setStartRecognitionBorderAnimation] =
    useState(false);
  const [recognisedTextShowing, setRecognisedTextShowing] = useState(false);

  const [mediaRecorder, setMediaRecorder] = useState<
    MediaRecorder | undefined
  >();
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [awaitingTranscription, setAwaitingTranscription] = useState(false);
  const [transcription, setTranscription] = useState<string | undefined>();
  const [recognitionAudio, setRecognitionAudio] = useState<string | undefined>(
    undefined
  );
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  // const [breakpoint, setBreakpoint] = useState<string>();

  // const handleResize = () => {
  //   const breakpointNow = getBreakpoint();

  //   setBreakpoint(breakpointNow);
  //   console.log("breakpointNow:", breakpointNow);
  // };

  useEffect(() => {
    setTimeout(() => {
      setStartRecognitionBorderAnimation(true);
      setTimeout(() => {
        setStartRecognitionBorderAnimation(false);
      }, flashDuration);
    }, delayToStartFlash);
  }, []);

  useEffect(() => {
    if (!awaitingTranscription && recognitionAudio) {
      setRecognisedTextShowing(true);
    }
  }, [awaitingTranscription]);

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 transition-all duration-${flashDuration} ${
        startRecognitionBorderAnimation ? flashRecognitionColor : "bg-white"
      }`}
    >
      <div className="flex justify-center">
        <div
          className={`w-full h-[48px] transition-all duration-${flashDuration}  ${
            startRecognitionBorderAnimation
              ? flashRecognitionTitleColor
              : "bg-recognition-400"
          }`}
        >
          <div className="grid grid-cols-3 h-full">
            <div></div>
            <div className="flex h-full justify-center">
              <div className="flex items-center text-xl md:text-2xl font-mono text-white">
                Recognition
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-row relative h-synthRecCardLargeInner">
          <div className="w-full pt-8">
            <div className=" bg-inherit w-full h-28 px-8">
              <div className="relative h-full">
                <div className="absolute h-full w-full">
                  {voiceRecording ? (
                    <div className="w-full h-28 absolute left-2 right-2 top-0">
                      <RecognitionWaveVisual
                        stream={stream}
                        height={112}
                        width={
                          getBreakpoint() === "xl"
                            ? themeWidth.synthRecCardLarge - 64 - 8
                            : themeWidth.synthRecCard - 64 - 8
                        }
                      />
                    </div>
                  ) : (
                    <>
                      <div className="w-full h-14 border-b-2 border-recognition-200"></div>
                      <div className="w-full h-14 border-t-2 border-recognition-200"></div>
                    </>
                  )}
                  <div
                    className={`w-4 h-4 ${
                      voiceRecording
                        ? "bg-recognition-500"
                        : "bg-recognition-200"
                    } rounded-full absolute top-12 -left-2`}
                  ></div>

                  <div
                    className={`w-4 h-4 ${
                      voiceRecording
                        ? "bg-recognition-500"
                        : "bg-recognition-200"
                    } rounded-full absolute top-12 -right-2`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center p-6 relative h-16">
              {awaitingTranscription ? (
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-recognition-400 border-solid rounded-full animate-spin"></div>
                </div>
              ) : (
                <RecognitionRecordStopButtons
                  mediaRecorder={mediaRecorder}
                  awaitingTranscription={awaitingTranscription}
                  voiceRecording={voiceRecording}
                  setVoiceRecording={setVoiceRecording}
                />
              )}
            </div>

            <div className="absolute bottom-2 right-4">
              <Button
                colors="bg-inherit text-recognition-500 text-sm hover:text-recognition-600"
                sizes="py-0.5 px-1 rounded-sm"
              >
                more options &#9656;
              </Button>
            </div>
          </div>
          {recognisedTextShowing && (
            <PopupBackground>
              <div className="w-full px-4 transition-all duration-600 relative">
                {/* <div className="absolute -top-3 right-1 border-2 border-recognition-500 font-bold rounded-full px-2 bg-white text-recognition-500"> */}
                <Button
                  colors="border-2 border-recognition-400 bg-white text-recognition-400 hover:bg-recognition-50"
                  sizes="absolute -top-3 right-1 font-bold rounded-full px-2"
                  onClick={() => {
                    setRecognisedTextShowing(false);
                  }}
                >
                  x
                </Button>
                <RecognitionPlaybackCard text={transcription} />
              </div>
            </PopupBackground>
          )}
        </div>
      </div>
      <Media
        stream={stream}
        setStream={setStream}
        mediaRecorder={mediaRecorder}
        setMediaRecorder={setMediaRecorder}
        setRecognitionAudio={setRecognitionAudio}
        setTranscription={setTranscription}
        voiceRecording={voiceRecording}
        setAwaitingTranscription={setAwaitingTranscription}
      />
    </div>
  );
};

export default Recognition;
