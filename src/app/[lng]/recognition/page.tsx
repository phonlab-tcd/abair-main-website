/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/Media";
import { RecognitionWaveVisual } from "@/components/RecognitionWaveVisual";
import { PopupBackground } from "@/components/PopupBackground";
import { Button } from "@/components/Button";
import { PlaybackCard } from "@/components/PlaybackCard";
import { MicrophoneIcon, StopIcon } from "@/components/Icons";
import { themeColors, themeWidth } from "@/theme";
import { getBreakpoint } from "@/utils";
// import { microphonePermissionAllowed } from "@/components/Media/utils";
import { useTranslation } from "@/app/i18n/client";

const Page = ({ lng }: any) => {
  const [microphonePermission, setMicrophonePermission] = useState(false);
  const [askPermission, setAskPermission] = useState(false);
  const [recognisedTextShowing, setRecognisedTextShowing] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<
    MediaRecorder | undefined
  >();
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [awaitingTranscription, setAwaitingTranscription] = useState(false);
  const [transcription, setTranscription] = useState<string | undefined>("");
  const [recognitionAudio, setRecognitionAudio] = useState<string | undefined>(
    undefined
  );
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const [recognitionAudioPlaying, setRecognitionAudioPlaying] = useState(false);
  const [breakpoint, setBreakpoint] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { t } = useTranslation(lng);

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  const handleClick = () => {
    if (microphonePermission) {
      if (mediaRecorder !== undefined) {
        // if (tempConsent) {
        if (true) {
          setVoiceRecording(true);
        } else {
          // setShowTempConsent(true);
        }
      } else {
        alert("Please allow microphone permission in you browser.");
      }
    } else {
      console.log("give permission");
      setAskPermission(true);
    }
  };

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
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!awaitingTranscription && recognitionAudio) {
      setRecognisedTextShowing(true);
    }
  }, [awaitingTranscription]);

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full mt-8 max-w-2xl">
        <div className="w-full text-center text-grey-800 text-2xl sm:text-3xl font-mono">
          {t("pages.home.listen")}
        </div>
        <div className="h-full w-full ">
          <div className="w-full pt-6">
            <div className=" bg-inherit w-full h-28 px-8">
              <div className="relative h-full flex justify-center">
                <div className="absolute h-full w-[304px] sm:w-[412px]">
                  {voiceRecording ? (
                    <div className="w-full h-20 sm:h-28 absolute left-2 right-2 top-0">
                      <RecognitionWaveVisual
                        backgroundColor={themeColors.grey[100]}
                        stream={stream}
                        height={["xs"].includes(breakpoint) ? 80 : 112}
                        width={
                          ["xs"].includes(breakpoint)
                            ? themeWidth.synthRecCard - 64 - 8
                            : themeWidth.synthRecCardLarge - 64 - 8
                        }
                      />
                    </div>
                  ) : (
                    <>
                      <div className="w-full h-10 sm:h-14 border-b-2 border-recognition-200"></div>
                      <div className="w-full h-10 sm:h-14 border-t-2 border-recognition-200"></div>
                    </>
                  )}
                  <div
                    className={`w-4 h-4 ${
                      voiceRecording
                        ? "bg-recognition-500"
                        : "bg-recognition-200"
                    } rounded-full absolute top-8 sm:top-12 -left-2`}
                  ></div>

                  <div
                    className={`w-4 h-4 ${
                      voiceRecording
                        ? "bg-recognition-500"
                        : "bg-recognition-200"
                    } rounded-full absolute top-8 sm:top-12 -right-2`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center -mt-[2px] lg:mt-[6px] h-12 lg:h-16 relative">
              {awaitingTranscription ? (
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-recognition-400 border-solid rounded-full animate-spin"></div>
                </div>
              ) : !voiceRecording ? (
                <div className="flex justify-center items-center p-2 lg:p-4 h-12 lg:h-16">
                  <Button
                    sizes="w-28 lg:w-32 p-1 flex justify-center rounded-sm"
                    colors="bg-recognition-400 hover:bg-recognition-500"
                    onClick={handleClick}
                  >
                    <MicrophoneIcon
                      height={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                      width={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                      color="white"
                    />
                  </Button>
                </div>
              ) : (
                <Button
                  sizes="w-28 lg:w-32 p-1 flex justify-center rounded-sm"
                  colors="bg-recognition-400 hover:bg-recognition-500"
                  onClick={() => {
                    setVoiceRecording(false);
                  }}
                >
                  <StopIcon
                    height={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                    width={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                    color="white"
                  />
                </Button>
              )}
              {askPermission && (
                <div className="w-full px-2 h-64 transition-all duration-600 absolute max-w-xl">
                  <PopupBackground>
                    <div className="w-full h-full px-2 transition-all duration-600 relative  p-4">
                      {/* <div className="absolute -top-3 right-1 border-2 border-recognition-500 font-bold rounded-full px-2 bg-white text-recognition-500"> */}
                      <Button
                        colors="border-2 border-recognition-400 bg-white text-recognition-400 hover:bg-recognition-50"
                        sizes="absolute top-1 -right-1 font-bold rounded-full px-2"
                        onClick={() => {
                          setAskPermission(false);
                        }}
                      >
                        x
                      </Button>
                      <div className="w-full h-full border-2 bg-white border-recognition-400 rounded-md">
                        <div className="flex flex-col w-full h-full justify-center items-center">
                          <div className="text-lg text-center text-recognition-700">
                            I am over 16 years old and I give permission...
                          </div>
                          <div className="flex w-full justify-center">
                            <div className="p-2">
                              <Button
                                sizes="w-28 lg:w-32 p-1 flex justify-center rounded-sm"
                                colors="bg-recognition-400 hover:bg-recognition-500 text-white"
                                onClick={() => {
                                  setAskPermission(false);
                                }}
                              >
                                No
                              </Button>
                            </div>
                            <div className="p-2">
                              <Button
                                sizes="w-28 lg:w-32 p-1 flex justify-center rounded-sm"
                                colors="bg-applications-500 hover:bg-applications-600 text-white"
                                onClick={() => {
                                  setAskPermission(false);
                                  setMicrophonePermission(true);
                                }}
                              >
                                Yes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopupBackground>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center mt-8">
            {recognisedTextShowing && (
              <div className="w-full px-2 transition-all duration-600 relative max-w-xl">
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
                  small={["xs"].includes(breakpoint) ? true : false}
                >
                  <audio
                    src={recognitionAudio}
                    ref={audioRef}
                    onEnded={stopRecognitionAudio}
                  />
                  <a href={""} ref={anchorRef} download={"tester.wav"} />
                </PlaybackCard>
              </div>
            )}
          </div>
        </div>
      </div>
      {microphonePermission && (
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
      )}
    </div>
  );
};

export default Page;
