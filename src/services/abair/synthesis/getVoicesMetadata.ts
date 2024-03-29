const getVoicesMetadata = async () => {
  try {
    const response = await fetch("https://api.abair.ie/v3/synthesis/metadata", {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
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

export default getVoicesMetadata;
