/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/Media";
import { RecognitionWaveVisual } from "@/components/RecognitionWaveVisual";
import { PopupBackground } from "@/components/PopupBackground";
import { Button } from "@/components/Button";
import { PlaybackCard } from "@/components/PlaybackCard";
import { MicrophoneIcon, StopIcon } from "@/components/Icons";
import { themeWidth } from "@/theme";
import { getBreakpoint } from "@/utils";
import { microphonePermissionAllowed } from "@/components/Media/utils";
import { useTranslation } from "@/app/i18n/client";

const Recognition = ({ lng }: any) => {
  const [microphonePermission, setMicrophonePermission] = useState(false);
  const [askPermission, setAskPermission] = useState(false);
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
    microphonePermissionAllowed().then((res: any) => {
      if (res.state === "granted") {
        setMicrophonePermission(true);
      }
    });

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

  useEffect(() => {
    console.log("microphonePermission:", microphonePermission);
  }, [microphonePermission]);

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge bg-white`}
    >
      <div className="w-full h-[40px] lg:h-[48px] bg-recognition-400 flex justify-center">
        <div className="flex items-center text-lg lg:text-xl font-mono text-white">
          {t("pages.home.listen")}
        </div>
      </div>
      <div className="w-full  relative h-synthRecCardInner lg:h-synthRecCardLargeInner">
        <div className="h-[24px] lg:h-[32px] w-full flex justify-center items-end">
          <div className="text-xs lg:text-base font-light text-recognition-700">
            {t("pages.home.listenInstructions")}
          </div>
        </div>
        <div className="lg:-mt-2 flex flex-row h-full">
          <div className="w-full pt-6">
            <div className=" bg-inherit w-full h-28 px-8">
              <div className="relative h-full">
                <div className="absolute h-full w-full">
                  {voiceRecording ? (
                    <div className="w-full h-20 lg:h-28 absolute left-2 right-2 top-0">
                      <RecognitionWaveVisual
                        stream={stream}
                        height={["lg", "xl"].includes(breakpoint) ? 112 : 80}
                        width={
                          ["xl", "lg"].includes(breakpoint)
                            ? themeWidth.synthRecCardLarge - 64 - 8
                            : themeWidth.synthRecCard - 64 - 8
                        }
                      />
                    </div>
                  ) : (
                    <>
                      <div className="w-full h-10 lg:h-14 border-b-2 border-recognition-200"></div>
                      <div className="w-full h-10 lg:h-14 border-t-2 border-recognition-200"></div>
                    </>
                  )}
                  <div
                    className={`w-4 h-4 ${
                      voiceRecording
                        ? "bg-recognition-500"
                        : "bg-recognition-200"
                    } rounded-full absolute top-8 lg:top-12 -left-2`}
                  ></div>

                  <div
                    className={`w-4 h-4 ${
                      voiceRecording
                        ? "bg-recognition-500"
                        : "bg-recognition-200"
                    } rounded-full absolute top-8 lg:top-12 -right-2`}
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
            </div>

            <div className="absolute bottom-1 right-2 lg:right-4">
              <Link href={`/${lng}/recognition`}>
                <Button
                  colors="bg-inherit text-recognition-500 text-sm hover:text-recognition-600 hover:underline"
                  sizes="py-0.5 px-1 rounded-sm"
                >
                  {t("pages.home.advancedRecognitionOptions")}
                  <span className="text-3xl">&#8594;</span>
                </Button>
              </Link>
            </div>
          </div>
          {recognisedTextShowing && (
            <>
              <PopupBackground>
                <div className="w-full px-2 transition-all duration-600 relative">
                  {/* <div className="absolute -top-3 right-1 border-2 border-recognition-500 font-bold rounded-full px-2 bg-white text-recognition-500"> */}
                  <Button
                    colors="border-2 border-recognition-400 bg-white text-recognition-400 hover:bg-recognition-50"
                    sizes="absolute -top-3 -right-1 font-bold rounded-full px-2"
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
                    small={["lg", "xl"].includes(breakpoint) ? false : true}
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
          {askPermission && (
            <>
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
            </>
          )}
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

export default Recognition;
