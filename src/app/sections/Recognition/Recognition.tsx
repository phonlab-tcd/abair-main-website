/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Media,
  RecognitionRecordStopButtons,
  RecognitionWaveVisual,
  PopupBackground,
} from "@/components";
import {
  Button,
  PlaybackCard,
  MicrophoneIcon,
  StopIcon,
} from "abair-web-components";
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

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  const handleClick = () => {
    // if (mediaRecorderExists) {
    if (mediaRecorder !== undefined) {
      // if (tempConsent) {
      if (true) {
        setVoiceRecording(true);
      } else {
        // setShowTempConsent(true);
      }
    } else {
      alert(
        "To use this feature, you must give permission for this site to use your microphone, and then refresh."
      );
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
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge bg-white`}
    >
      <div className="w-full h-[40px] lg:h-[48px] bg-recognition-400 flex justify-center">
        <div className="flex items-center text-xl lg:text-2xl font-mono text-white">
          Recognition
        </div>
      </div>
      <div className="w-full  relative h-synthRecCardInner lg:h-synthRecCardLargeInner">
        <div className="h-[24px] lg:h-[32px] w-full flex justify-center items-end">
          <div className="text-sm lg:text-base font-light text-recognition-700">
            go to a quiet space &#8680; tap microphone &#8680; speak
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
              <Link href={`/recognition`}>
                <Button
                  colors="bg-inherit text-recognition-500 text-sm hover:text-recognition-600 hover:underline"
                  sizes="py-0.5 px-1 rounded-sm"
                >
                  more options <span className="text-3xl">&#8594;</span>
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
