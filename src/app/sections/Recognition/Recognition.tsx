/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Media,
  RecognitionRecordStopButtons,
  RecognitionWaveVisual,
  PopupBackground,
} from "@/components";
import { Button, PlaybackCard } from "abair-web-components";
import { themeWidth } from "@/theme";
import { getBreakpoint } from "@/utils";
import {
  delayToStartRecognitionCardFlash,
  cardFlashDuration,
} from "../animationTimings/animationTimings";

interface RecognitionProps {
  flashRecognitionTitleColor?: string;
}

const Recognition = ({
  flashRecognitionTitleColor = "bg-recognition-500",
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
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const [recognitionAudioPlaying, setRecognitionAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const playRecognitionAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.play();
        setRecognitionAudioPlaying(true);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const stopRecognitionAudio = () => {
    console.log("in stop");
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        setRecognitionAudioPlaying(false);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const downloadRecognitionAudio = () => {
    if (anchorRef.current !== undefined) {
      if (anchorRef.current !== null) {
        anchorRef.current.href = recognitionAudio as string;
        anchorRef.current.download = `${new Date()}.wav`;
        anchorRef.current.click();
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setStartRecognitionBorderAnimation(true);
      setTimeout(() => {
        setStartRecognitionBorderAnimation(false);
      }, cardFlashDuration);
    }, delayToStartRecognitionCardFlash);
  }, []);

  useEffect(() => {
    if (!awaitingTranscription && recognitionAudio) {
      setRecognisedTextShowing(true);
    }
  }, [awaitingTranscription]);

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge bg-white`}
    >
      <div className="flex justify-center">
        <div
          className={`w-full h-[48px] transition-all duration-${cardFlashDuration}  ${
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
            <>
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
                  <PlaybackCard
                    text={transcription}
                    version="recognition"
                    recentlyCopied={recentlyCopied}
                    sidebar={false}
                    handleCopy={() => {
                      setRecentlyCopied(true);
                      setTimeout(() => {
                        setRecentlyCopied(false);
                      }, 2000);
                    }}
                    handlePlay={() => {
                      playRecognitionAudio();
                    }}
                    handleStop={() => {
                      stopRecognitionAudio();
                    }}
                    handleDownload={() => {
                      downloadRecognitionAudio();
                    }}
                    audioPlaying={recognitionAudioPlaying}
                  >
                    <audio
                      src={recognitionAudio}
                      ref={audioRef}
                      onEnded={stopRecognitionAudio}
                    />
                    <a href={""} ref={anchorRef} download={"tester.wav"} />
                  </PlaybackCard>
                </div>
              </PopupBackground>
            </>
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
