// import { MediaRecorder, register } from "extendable-media-recorder";
// import { connect } from "extendable-media-recorder-wav-encoder";

const initStream = async () => {
  // await register(await connect());
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return stream;
};

const initMediaRecorder = async (stream: MediaStream) => {
  const mediaRecorder = new MediaRecorder(stream);
  return mediaRecorder;
};

const microphonePermissionAllowed = async () => {
  return await navigator.permissions.query({
    name: "microphone" as PermissionName,
  });
};

export { initStream, initMediaRecorder, microphonePermissionAllowed };
