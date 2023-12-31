/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Map } from "@/components/Map";
import { GenderButtons } from "@/components/GenderButtons";
import { PopupBackground } from "@/components/PopupBackground";
import { SpeakIcon } from "@/components/Icons";
import { Button } from "@/components/Button";
import { PlaybackCard } from "@/components/PlaybackCard";
import { getVoicesMetadata, getSynthesis } from "@/services/abair/synthesis";
import { synthesisVoiceModel } from "@/types/abair";
import { getBreakpoint } from "@/utils";
import { useTranslation } from "@/app/i18n/client";

const Synthesis = ({ lng }: any) => {
  const [availableGenders, setAvailableGenders] = useState<
    (string | undefined)[] | undefined
  >(undefined);
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
  const [breakpoint, setBreakpoint] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { t } = useTranslation(lng);

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    if (!synthesisVoices) {
      getVoicesMetadata().then((res) => {
        setSynthesisVoices(res);
      });
    } else {
      null;
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    synthesisVoices && setDialect(synthesisVoices[0].locale);
  }, [synthesisVoices]);

  useEffect(() => {
    synthesisVoices &&
      setAvailableGenders(
        Array.from(
          new Set(
            synthesisVoices
              .filter((v) => v.locale === dialect)
              .map((v) => v.gender)
          )
        )
      );
  }, [dialect]);

  useEffect(() => {
    availableGenders
      ? availableGenders.length === 1
        ? setGender(Array.from(availableGenders)[0])
        : availableGenders.length === 2 && !gender
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
    if (synthesisText !== "") {
      setAwaitingSynthesis(true);
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
      className={`w-synthRecCard shadow-lg lg:w-synthRecCardLarge relative h-synthRecCard lg:h-synthRecCardLarge bg-white`}
    >
      <div className="w-full h-[40px] lg:h-[48px] bg-synthesis-500 flex justify-center">
        <div className="flex items-center text-lg lg:text-xl font-mono text-white">
          {t("pages.home.speak")}
        </div>
      </div>

      <div className="w-full relative h-synthRecCardInner lg:h-synthRecCardLargeInner ">
        <div className="h-[24px] lg:h-[32px] w-full flex justify-center items-end">
          <div className="text-xs lg:text-base font-light text-synthesis-700">
            {t("pages.home.speakInstructions")}
          </div>
        </div>
        <div className="flex flex-row lg:-mt-2">
          <div className="w-[40%] lg:w-[37%] ml-1 lg:ml-2 flex flex-col justify-center">
            <Map
              height={["lg", "xl"].includes(breakpoint) ? 220 : 180}
              setDialect={setDialect}
              dialect={dialect}
            />
            <div className="w-[90%] -mt-2 lg:-mt-4 h-24">
              <GenderButtons
                height={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                availableGenders={availableGenders}
                setGender={setGender}
                gender={gender}
              />
            </div>
          </div>

          <div className="w-[60%] lg:w-[63%] pt-4 lg:pt-6 pr-4 lg:pr-4">
            <textarea
              onChange={(e) => setSynthesisText(e.target.value)}
              value={synthesisText}
              className="p-1 bg-inherit text-sm lg:text-base w-full h-28 focus:outline-0 resize-none ring-1 focus:ring-2"
            ></textarea>

            <div className="flex justify-center items-center h-12 lg:h-16 relative">
              {awaitingSynthesis ? (
                <div className="w-full absolute top-5 left-0 flex justify-center items-center">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-synthesis-400 border-solid rounded-full animate-spin"></div>
                </div>
              ) : (
                <Button
                  sizes="w-28 lg:w-36 p-1 flex justify-center rounded-sm"
                  colors="bg-synthesis-500 hover:bg-synthesis-600"
                  onClick={initTTS}
                >
                  <SpeakIcon
                    height={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                    width={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                    color="white"
                  />
                </Button>
              )}
            </div>
            <div className="absolute bottom-1 right-2 lg:right-4">
              <Link href={`/${lng}/synthesis`}>
                <Button
                  colors="bg-inherit text-synthesis-500 text-sm hover:text-synthesis-600 hover:underline"
                  sizes="py-0.5 px-1 rounded-sm"
                >
                  {t("pages.home.advancedSynthesisOptions")}
                  <span className="text-3xl">&#8594;</span>
                </Button>
              </Link>
            </div>
          </div>
          {synthesisedTextShowing && (
            <PopupBackground>
              <div className="w-full px-2 transition-all duration-600 relative">
                <Button
                  colors="border-2 border-synthesis-500 bg-white text-synthesis-500 hover:bg-synthesis-50"
                  sizes="absolute -top-3 right-0 font-bold rounded-full px-2"
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
                  small={["lg", "xl"].includes(breakpoint) ? false : true}
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
