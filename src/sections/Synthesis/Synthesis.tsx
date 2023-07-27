/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Map, GenderButtons, PopupBackground } from "@/components";
import { SpeakIcon, Button, PlaybackCard } from "abair-web-components";
import { getVoicesMetadata } from "@/services/abair/synthesis";

interface SynthesisProps {
  flashSynthesisTitleColor?: string;
  delayToStartFlash: number;
  flashDuration: number;
}

const Synthesis = ({
  flashSynthesisTitleColor = "bg-synthesis-600",
  delayToStartFlash,
  flashDuration,
}: SynthesisProps) => {
  const [startSynthesisBorderAnimation, setStartSynthesisBorderAnimation] =
    useState(false);
  // const [gender, setGender] = useState<"male" | "female">("male");
  // const [maleIconColor, setMaleIconColor] = useState("#93c5fd");
  // const [femaleIconColor, setFemaleIconColor] = useState("#93c5fd");
  const [synthesisVoices, setSynthesisVoices] = useState([]);
  const [synthesisedTextShowing, setSynthesisedTextShowing] = useState(false);
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const [synthesisAudioPlaying, setSynthesisAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setStartSynthesisBorderAnimation(true);
      setTimeout(() => {
        setStartSynthesisBorderAnimation(false);
      }, flashDuration);
    }, delayToStartFlash);

    if (synthesisVoices.length === 0) {
      getVoicesMetadata().then((res) => {
        setSynthesisVoices(res);
        console.log("res:", res);
      });
    } else {
      null;
    }
  }, []);

  const playSynthesisAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.play();
        setSynthesisAudioPlaying(true);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const stopSynthesisAudio = () => {
    console.log("in stop");
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        setSynthesisAudioPlaying(false);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const downloadSynthesisAudio = () => {
    if (anchorRef.current !== undefined) {
      if (anchorRef.current !== null) {
        // anchorRef.current.href = synthesisAudio as string;
        // anchorRef.current.download = `${new Date()}.wav`;
        anchorRef.current.click();
      }
    }
  };

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge  relative h-synthRecCard lg:h-synthRecCardLarge mb-[40px] md:mb-0 bg-white`}
    >
      <div
        className={`w-full h-[48px] transition-all duration-${flashDuration} ${
          startSynthesisBorderAnimation
            ? flashSynthesisTitleColor
            : "bg-synthesis-500"
        }`}
      >
        <div className="flex h-full justify-center">
          <div className="flex items-center text-xl md:text-2xl font-mono text-white">
            Synthesis
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-row relative h-synthRecCardLargeInner">
          <div className="w-[40%] ml-2 flex flex-col justify-center">
            <Map height={220} />
            <div className="w-[90%] -mt-4">
              <GenderButtons height={26} />
            </div>
          </div>

          <div className="w-[60%] pt-8 pr-6">
            <textarea className="p-1 bg-inherit w-full h-28 focus:outline-0 resize-none ring-1 focus:ring-2"></textarea>

            <div className="flex justify-center items-center p-4">
              <Button
                sizes="w-32 p-1 flex justify-center rounded-sm"
                colors="bg-synthesis-500 hover:bg-synthesis-600"
              >
                <SpeakIcon height={26} width={26} color="white" />
              </Button>
            </div>
            <div className="absolute bottom-2 right-4">
              <Button
                colors="bg-inherit text-synthesis-500 text-sm hover:text-synthesis-600"
                sizes="py-0.5 px-1 rounded-sm"
              >
                more options &#9656;
              </Button>
            </div>
          </div>
          {synthesisedTextShowing && (
            <PopupBackground>
              <div className="w-full px-4 transition-all duration-600 relative">
                <Button
                  colors="border-2 border-synthesis-500 bg-white text-synthesis-500 hover:bg-synthesis-50"
                  sizes="absolute -top-3 right-1 font-bold rounded-full px-2"
                  onClick={() => {
                    setSynthesisedTextShowing(false);
                  }}
                >
                  x
                </Button>

                <PlaybackCard
                  text={"cad é sin"}
                  version="synthesis"
                  recentlyCopied={recentlyCopied}
                  sidebar={false}
                  handleCopy={() => {
                    setRecentlyCopied(true);
                    setTimeout(() => {
                      setRecentlyCopied(false);
                    }, 2000);
                  }}
                  handlePlay={() => {
                    playSynthesisAudio();
                  }}
                  handleStop={() => {
                    stopSynthesisAudio();
                  }}
                  handleDownload={() => {
                    downloadSynthesisAudio();
                  }}
                  audioPlaying={synthesisAudioPlaying}
                >
                  {/* <audio
                    src={synthesisAudio}
                    ref={audioRef}
                    onEnded={stopSynthesisAudio}
                  /> */}
                  <a href={""} ref={anchorRef} download={"tester.wav"} />
                </PlaybackCard>
              </div>
            </PopupBackground>
          )}
        </div>
      </div>
    </div>
  );
};

export default Synthesis;
