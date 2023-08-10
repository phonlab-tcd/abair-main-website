/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Map, GenderButtons, PopupBackground } from "@/components";
import {
  SpeakIcon,
  Button,
  PlaybackCard,
  Slider,
  SpeedometerIcon,
  PitchIcon,
  ModelIcon,
  SpeakerIcon,
} from "abair-web-components";
import { getVoicesMetadata, getSynthesis } from "@/services/abair/synthesis";
import { synthesisVoiceModel } from "@/models";

import { getBreakpoint } from "@/utils";

const Page = () => {
  const [availableGenders, setAvailableGenders] = useState<
    (string | undefined)[] | undefined
  >(undefined);
  const [dialect, setDialect] = useState<string | undefined>(undefined);
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [synthesisVoices, setSynthesisVoices] = useState<
    synthesisVoiceModel[] | undefined
  >(undefined);
  const [selectedVoice, setSelectedVoice] = useState<synthesisVoiceModel>();
  const [selectedModel, setSelectedModel] = useState("NEMO");
  const [voiceOptions, setVoiceOptions] = useState<synthesisVoiceModel[]>();

  const [synthesisedTextShowing, setSynthesisedTextShowing] = useState(false);
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const [synthesisAudioPlaying, setSynthesisAudioPlaying] = useState(false);
  const [synthesisText, setSynthesisText] = useState("");
  const [synthesisAudio, setSynthesisAudio] = useState("");
  const [awaitingSynthesis, setAwaitingSynthesis] = useState(false);
  const [breakpoint, setBreakpoint] = useState<string>("");
  const [synthesisPitch, setSynthesisPitch] = useState(100);
  const [synthesisSpeed, setSynthesisSpeed] = useState(100);

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
    if (synthesisVoices) {
      const availableGenders = synthesisVoices
        .filter((v) => v.locale === dialect)
        .map((v) => v.gender);
      console.log("availableGenders:", availableGenders);
      setAvailableGenders(Array.from(new Set(availableGenders)));
    }
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
        setVoiceOptions(selectedVoices);
      }
    }
  }, [gender, dialect]);

  useEffect(() => {
    if (voiceOptions) {
      setSelectedVoice(voiceOptions[0]);
    }
  }, [voiceOptions]);

  useEffect(() => {
    if (selectedVoice && !selectedVoice.voices?.includes(selectedModel)) {
      if (selectedVoice.voices) {
        setSelectedModel(selectedVoice.voices[0]);
      }
    }
    console.log("selectedVoice:", selectedVoice);
  }, [selectedVoice]);

  useEffect(() => {
    console.log("selectedModel:", selectedModel);
  }, [selectedModel]);

  useEffect(() => {
    console.log("pitch:", synthesisPitch);
    console.log("speed:", synthesisSpeed);
  }, [synthesisPitch, synthesisSpeed]);

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
        getSynthesis(
          synthesisText,
          selectedVoice,
          selectedModel,
          synthesisPitch / 100,
          synthesisSpeed / 100
        ).then((res: any) => {
          setSynthesisAudio("data:audio/wav;base64," + res.audioContent);
          setAwaitingSynthesis(false);
          setSynthesisedTextShowing(true);
          setSynthesisText(synthesisText);
          setTimeout(playSynthesisAudio, 100); // allow
        });
      } else {
        alert("select a voice");
      }
    } else {
      alert("type something");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full mt-8 max-w-2xl">
        <div className="w-full text-center text-grey-800 text-2xl sm:text-3xl font-mono">
          Synthesis
        </div>

        <div className="w-full my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
            <div className="w-full flex flex-col">
              <div className="w-full justify-center flex">
                <Map height={300} setDialect={setDialect} dialect={dialect} />
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-xs flex flex-col sm:pr-14 px-1">
                <div className="w-full h-14  flex items-center">
                  <div className="px-1">
                    <PitchIcon height={32} width={32} />
                  </div>
                  <div className="w-full px-1">
                    <Slider
                      min={50}
                      value={synthesisPitch}
                      max={150}
                      handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSynthesisPitch(parseInt(e.target.value));
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-14  flex items-center">
                  <div className="px-1">
                    <SpeedometerIcon height={32} width={32} />
                  </div>
                  <div className="w-full px-1">
                    <Slider
                      min={50}
                      value={synthesisSpeed}
                      max={150}
                      handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSynthesisSpeed(parseInt(e.target.value));
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-14  flex items-center">
                  <div className="px-1">
                    <SpeakerIcon height={32} width={32} />
                  </div>
                  <div className="w-full px-1 flex flex-wrap justify-around">
                    {voiceOptions?.map((v, i) => (
                      <Button
                        key={i}
                        onClick={() => {
                          setSelectedVoice(v);
                        }}
                        sizes="font-mono py-1 px-2 flex justify-center rounded-xl text-white"
                        colors={`${
                          v === selectedVoice
                            ? "bg-synthesis-500 hover:bg-synthesis-600 text-white border border-synthesis-500 "
                            : "bg-inherit hover:bg-synthesis-100 border border-synthesis-500 text-synthesis-500"
                        }`}
                      >
                        {v.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="w-full h-14  flex items-center">
                  <div className="px-1">
                    <ModelIcon height={32} width={32} />
                  </div>
                  <div className="w-full px-1 flex flex-wrap justify-around">
                    {selectedVoice &&
                      selectedVoice.voices?.map((v, i) => (
                        <Button
                          key={i}
                          onClick={() => {
                            setSelectedModel(v);
                          }}
                          sizes="font-mono py-1 px-2 flex justify-center rounded-xl"
                          colors={`${
                            v === selectedModel
                              ? "bg-synthesis-500 hover:bg-synthesis-600 text-white border border-synthesis-500 "
                              : "bg-inherit hover:bg-synthesis-100 border border-synthesis-500 text-synthesis-500"
                          }`}
                        >
                          {v}
                        </Button>
                      ))}
                  </div>
                </div>
                <div className="w-full h-14 flex">
                  <div className="w-12 h-full"></div>
                  <GenderButtons
                    height={40}
                    availableGenders={availableGenders}
                    setGender={setGender}
                    gender={gender}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="p-3 w-full max-w-xl">
              <textarea
                onChange={(e) => setSynthesisText(e.target.value)}
                value={synthesisText}
                className="p-1 bg-white text-sm lg:text-base w-full h-28 focus:outline-0 resize-none ring-1 focus:ring-2 "
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center h-12 lg:h-14 relative">
            {awaitingSynthesis ? (
              <div className="w-full absolute top-5 left-0 flex justify-center items-center">
                <div className="w-6 h-6 border-t-2 border-r-2 border-synthesis-400 border-solid rounded-full animate-spin"></div>
              </div>
            ) : (
              <Button
                sizes="w-28 sm:w-40 p-1 sm:p-0.5 flex justify-center rounded-sm"
                colors="bg-synthesis-500 hover:bg-synthesis-600"
                onClick={initTTS}
              >
                <SpeakIcon
                  height={["xs"].includes(breakpoint) ? 22 : 32}
                  width={["xs"].includes(breakpoint) ? 22 : 32}
                  color="white"
                />
              </Button>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center">
          {synthesisedTextShowing && (
            <div className="w-full px-2 transition-all duration-600 relative max-w-xl">
              <PlaybackCard
                text={synthesisText}
                version="synthesis"
                recentlyCopied={recentlyCopied}
                sidebar={["xs"].includes(breakpoint) ? false : true}
                handleCopy={() => {
                  setRecentlyCopied(true);
                  setTimeout(() => {
                    setRecentlyCopied(false);
                  }, 2000);
                }}
                dialect={dialect}
                gender={gender}
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
                small={["xs"].includes(breakpoint) ? true : false}
              >
                <audio
                  src={synthesisAudio}
                  ref={audioRef}
                  onEnded={stopSynthesisAudio}
                />
                <a href={""} ref={anchorRef} download={"tester.wav"} />
              </PlaybackCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
