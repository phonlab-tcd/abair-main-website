import phonemeMap from "./irish-phoneme-map.json";

// Type definition for the phoneme mapping
interface Phoneme {
  mrpai: string;
  xSampa: string;
  htmlIpa: string;
}

function removeNumbersAndPeriods(inputArray: string[]): string[] {
  console.log("inputArray: ", inputArray);
  return inputArray.map((item) => item.replace(/[\d.]/g, "").trim());
}

function splitWithEmptyStrings(inputArray: string[]): string[] {
  const result: string[] = [];
  inputArray.forEach((item, index) => {
    // Split the current string into individual components
    const splitItems = item.split(" ");
    result.push(...splitItems); // Add the split items to the result
    if (index < inputArray.length - 1) {
      result.push(""); // Add an empty string between items in the original array
    }
  });
  return result;
}

function mapToHtmlIPA(inputArray: string[]): string[] {
  // Convert the JSON data into a Map for fast lookups
  const phonemeLookup = new Map(
    (phonemeMap as Phoneme[]).map((item) => [item.mrpai, item.htmlIpa])
  );

  // Map each item in the input array to its corresponding html-ipa value
  return inputArray.map((item) => phonemeLookup.get(item) || item); // Keep original if no match found
}

const phonemeArrayToHTML = (phonemeArray: string[]) => {
  const numbersAndPeriodsRemoved = removeNumbersAndPeriods(phonemeArray);
  const singlePhonemeArray = splitWithEmptyStrings(numbersAndPeriodsRemoved);
  const HTMLList = mapToHtmlIPA(singlePhonemeArray);
  const combinedString = HTMLList.map((item) =>
    item === "" ? " " : item
  ).join("");
  return combinedString;
};

export default phonemeArrayToHTML;
