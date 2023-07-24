const getAudio = async (audioID: string) => {
  try {
    const response = await fetch(
      `https://phoneticsrv3.lcs.tcd.ie/asr_api/recognise_audio?path=${audioID}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // Handle non-2xx HTTP error status codes
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}. ${errorText}`
      );
    }
  } catch (error: any) {
    alert(error.message);
    return false;
  }
};

export default getAudio;
