/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import convertBlobToBase64 from "./convertBlobToBase64";
import postAudio from "@/services/abair/recognition";

import { initMediaRecorder, initStream } from "./utils";

interface MediaProps {
  stream: MediaStream | undefined;
  setStream: Dispatch<SetStateAction<MediaStream | undefined>>;
  mediaRecorder: MediaRecorder | undefined;
  setMediaRecorder: Dispatch<SetStateAction<MediaRecorder | undefined>>;
  setRecognitionAudio: Dispatch<SetStateAction<string | undefined>>;
  setTranscription: Dispatch<SetStateAction<string | undefined>>;
  voiceRecording: boolean;
  setAwaitingTranscription: Dispatch<SetStateAction<boolean>>;
}

const Media = ({
  stream,
  setStream,
  mediaRecorder,
  setMediaRecorder,
  setRecognitionAudio,
  setTranscription,
  voiceRecording,
  setAwaitingTranscription,
}: MediaProps) => {
  const [micAllowed, setMicAllowed] = useState(false);

  const resetRecognitionTranscriptionStates = () => {
    setRecognitionAudio("");
    setTranscription(undefined);
  };

  useEffect(() => {
    if (mediaRecorder !== undefined) {
      if (voiceRecording) {
        resetRecognitionTranscriptionStates();
        mediaRecorder.start();
        console.log("starting recording");
      } else {
        console.log("stopping recording");
        mediaRecorder.stop();
      }
    }
  }, [voiceRecording]);

  useEffect(() => {
    if (stream === undefined) {
      initStream().then((res: any) => {
        setStream(res);
      });
    }
  }, []);

  useEffect(() => {
    if (stream !== undefined) {
      initMediaRecorder(stream).then((res: any) => {
        setMediaRecorder(res);
        // setMediaRecorderExists(true);
      });
    }
  }, [stream]);

  let chunks: any[] = [];
  useEffect(() => {
    if (mediaRecorder !== undefined) {
      mediaRecorder.onstop = (e: any) => {
        console.log("data available after MediaRecorder.stop() called.");
        const blob = new Blob(chunks, { type: "audio/wav" });
        if (blob.size !== 0) {
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
          setRecognitionAudio(audioURL);

          setAwaitingTranscription(true);
          convertBlobToBase64(blob).then((result: any) => {
            postAudio(result.slice(22)).then((data: any) => {
              setAwaitingTranscription(false);
              setTranscription(data.transcriptions[0].utterance);
            });
          });
        } else {
          alert(
            "Something went wrong with the microphone. Check your sound, refresh, and make sure you gave permission for this site to use the microphone"
          );
        }
      };

      mediaRecorder.ondataavailable = (e: any) => {
        chunks.push(e.data);
      };
    }
  }, [mediaRecorder]);

  return null;
};

export default Media;
