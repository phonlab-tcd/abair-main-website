import { MicrophoneIcon, StopIcon, Button } from "abair-web-components";
import { Dispatch, SetStateAction } from "react";

// import { useShowTempConsent, useTempConsent } from "@/store/consent";
interface RecognitionRecordStopButtonsProps {
  mediaRecorder: MediaRecorder | undefined;
  awaitingTranscription: boolean;
  voiceRecording: boolean;
  setVoiceRecording: Dispatch<SetStateAction<boolean>>;
}

const RecognitionRecordStopButtons = ({
  mediaRecorder,
  awaitingTranscription,
  voiceRecording,
  setVoiceRecording,
}: RecognitionRecordStopButtonsProps) => {
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

  return (
    <>
      {awaitingTranscription ? (
        <p>loading</p>
      ) : !voiceRecording ? (
        <Button
          sizes="w-32 p-1 flex justify-center rounded-sm"
          colors="bg-recognition-400 hover:bg-recognition-500"
          onClick={handleClick}
        >
          <MicrophoneIcon height={26} width={26} color="white" />
        </Button>
      ) : (
        <Button
          sizes="w-32 p-1 flex justify-center rounded-sm"
          colors="bg-recognition-400 hover:bg-recognition-500"
          onClick={() => {
            setVoiceRecording(false);
          }}
        >
          <MicrophoneIcon height={26} width={26} color="white" />
        </Button>
      )}
    </>
  );
};

export default RecognitionRecordStopButtons;
