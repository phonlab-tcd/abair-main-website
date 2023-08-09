/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Map, GenderButtons, PopupBackground } from "@/components";
import { SpeakIcon, Button, PlaybackCard } from "abair-web-components";
import { getVoicesMetadata, getSynthesis } from "@/services/abair/synthesis";
import { synthesisVoiceModel } from "@/models";

import { getBreakpoint } from "@/utils";

const Page = async () => {
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
  const [breakpoint, setBreakpoint] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

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
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full mt-8 max-w-6xl">
        <div className="w-full border-2 text-center text-grey-800 text-xl lg:text-2xl font-mono">
          Synthesis
        </div>

        <div className="w-full flex justify-center my-4">
          <div className="flex flex-row border border-black w-full">
            <div className="w-1/2 flex flex-col">
              <div className="w-full border-2 justify-center flex">
                <Map
                  height={["md", "lg", "xl"].includes(breakpoint) ? 400 : 180}
                  setDialect={setDialect}
                  dialect={dialect}
                />
              </div>
              <div className="w-[90%] -mt-2 lg:-mt-4 h-24">
                <GenderButtons
                  height={["lg", "xl"].includes(breakpoint) ? 26 : 22}
                  availableGenders={availableGenders}
                  setGender={setGender}
                  gender={gender}
                />
              </div>
            </div>

            <div className="w-1/2 pt-4 lg:pt-6 pr-4 lg:pr-4">
              <textarea
                onChange={(e) => setSynthesisText(e.target.value)}
                value={synthesisText}
                className="p-1 bg-white text-sm lg:text-base w-full h-28 focus:outline-0 resize-none ring-1 focus:ring-2"
              ></textarea>

              <div className="flex justify-center items-center h-12 lg:h-16">
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2 transition-all duration-600 relative">
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
      </div>
    </div>
  );
};
export default Page;
