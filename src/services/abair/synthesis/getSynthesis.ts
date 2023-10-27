import { synthesisVoiceModel } from "@/types/abair";

const returnDialectCode = (dialect: string) => {
  if (dialect === "Connemara") {
    return "ga_CO";
  } else if (dialect === "Ulster") {
    return "ga_UL";
  } else {
    return "ga_MU";
  }
};

const getVoiceType = (model: string) => {
  if (model === "NEMO") {
    return "nemo";
  } else if (model === "DNN") {
    return "nnmnkwii";
  } else if (model === "HTS") {
    return "exthts";
  } else if (model === "HTS-WORLD") {
    return "exthts-WORLD";
  } else if (model === "PIPER") {
    return "piper";
  } else {
    return "";
  }
};

const getSynthesis = async (
  text: string,
  currentVoice: synthesisVoiceModel,
  model: string,
  pitch: number,
  speed: number
) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      synthinput: {
        text: text,
        ssml: "string",
      },
      voiceparams: {
        languageCode: "ga-IE",
        name:
          returnDialectCode(currentVoice.locale as string) +
          "_" +
          currentVoice.shortCode +
          "_" +
          getVoiceType(model),
        ssmlGender: "UNSPECIFIED",
      },
      audioconfig: {
        audioEncoding: "LINEAR16",
        speakingRate: speed,
        pitch: pitch,
        volumeGainDb: 1,
        htsParams: "string",
        sampleRateHertz: 0,
        effectsProfileId: [],
      },
      outputType: "JSON",
    }),
    timeout: 10000,
  };

  try {
    const response = await fetch(
      "https://phoneticsrv3.lcs.tcd.ie/api2/synthesise",
      requestOptions
    );
    const data = await response.json();

    return data;
  } catch (error) {
    alert("error:" + error);
    return false;
  }
};

export default getSynthesis;
