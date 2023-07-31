/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import { Map, GenderButtons, PopupBackground } from "@/components";
import { SpeakIcon, Button, PlaybackCard } from "abair-web-components";
import { getVoicesMetadata, getSynthesis } from "@/services/abair/synthesis";
import { synthesisVoiceModel } from "@/models";
import {
  delayToStartSynthesisCardFlash,
  cardFlashDuration,
} from "../animationTimings/animationTimings";

interface SynthesisProps {
  flashSynthesisTitleColor?: string;
}

const Synthesis = ({
  flashSynthesisTitleColor = "bg-synthesis-600",
}: SynthesisProps) => {
  const [startSynthesisBorderAnimation, setStartSynthesisBorderAnimation] =
    useState(false);
  const [availableGenders, setAvailableGenders] = useState<
    Set<string> | undefined
  >();
  const [dialect, setDialect] = useState<string | undefined>(undefined);
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [synthesisVoices, setSynthesisVoices] = useState<
    synthesisVoiceModel[] | undefined
  >(undefined);
  const [selectedVoice, setSelectedVoice] = useState<synthesisVoiceModel>();

  const [synthesisedTextShowing, setSynthesisedTextShowing] = useState(false);
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const [synthesisAudioPlaying, setSynthesisAudioPlaying] = useState(false);
  const [synthesisText, setSynthesisText] = useState("");
  const [synthesisAudio, setSynthesisAudio] = useState("");
  const [awaitingSynthesis, setAwaitingSynthesis] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setStartSynthesisBorderAnimation(true);
      setTimeout(() => {
        setStartSynthesisBorderAnimation(false);
      }, cardFlashDuration);
    }, delayToStartSynthesisCardFlash);

    if (!synthesisVoices) {
      getVoicesMetadata().then((res) => {
        setSynthesisVoices(res);
      });
    } else {
      null;
    }
  }, []);

  useEffect(() => {
    synthesisVoices && setDialect(synthesisVoices[0].locale);
  }, [synthesisVoices]);

  useEffect(() => {
    synthesisVoices &&
      setAvailableGenders(
        new Set(
          synthesisVoices
            .filter((v) => v.locale === dialect)
            .map((v) => v.gender)
        )
      );
  }, [dialect]);

  useEffect(() => {
    availableGenders
      ? availableGenders.size === 1
        ? setGender(Array.from(availableGenders)[0])
        : availableGenders.size === 2 && !gender
        ? setGender(Array.from(availableGenders)[0])
        : null
      : null;
  }, [availableGenders]);

  useEffect(() => {
    if (gender && dialect && synthesisVoices) {
      const selectedVoices = synthesisVoices.filter(
        (v) => v.locale === dialect && v.gender === gender
      );
      if (selectedVoices.length > 0) {
        setSelectedVoice(selectedVoices[0]);
      }
    }
  }, [gender, dialect]);

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
        anchorRef.current.href = synthesisAudio as string;
        anchorRef.current.download = `${new Date()}.wav`;
        anchorRef.current.click();
      }
    }
  };

  const initTTS = () => {
    console.log("selectedVoice:", selectedVoice);
    console.log("synthesisText:", synthesisText);
    setAwaitingSynthesis(true);
    if (synthesisText !== "") {
      if (selectedVoice) {
        getSynthesis(synthesisText, selectedVoice, "NEMO", 1, 1).then(
          (res: any) => {
            setSynthesisAudio("data:audio/wav;base64," + res.audioContent);
            setAwaitingSynthesis(false);
            setSynthesisedTextShowing(true);
            setSynthesisText(synthesisText);
            setTimeout(playSynthesisAudio, 100); // allow
          }
        );
      } else {
        alert("select a voice");
      }
    } else {
      alert("type something");
    }
  };

  return (
    <div
      className={`z-10 w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge bg-white`}
    >
      <div
        className={`w-full h-[48px] transition-all ease-out duration-${cardFlashDuration} ${
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
            <Map height={220} setDialect={setDialect} dialect={dialect} />
            <div className="w-[90%] -mt-4 h-24">
              <GenderButtons
                height={26}
                availableGenders={availableGenders}
                setGender={setGender}
                gender={gender}
              />
            </div>
          </div>

          <div className="w-[60%] pt-8 pr-6">
            <textarea
              onChange={(e) => setSynthesisText(e.target.value)}
              value={synthesisText}
              className="p-1 bg-inherit w-full h-28 focus:outline-0 resize-none ring-1 focus:ring-2"
            ></textarea>

            <div className="flex justify-center items-center p-4">
              <Button
                sizes="w-32 p-1 flex justify-center rounded-sm"
                colors="bg-synthesis-500 hover:bg-synthesis-600"
                onClick={initTTS}
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
                  text={synthesisText}
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
                  <audio
                    src={synthesisAudio}
                    ref={audioRef}
                    onEnded={stopSynthesisAudio}
                  />
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
