const delayToFirstTyping = 3800;
const delayBetweenTyping = 2100;
const delayToStartSynthesisCardFlash = delayToFirstTyping + 2800;
const delayToStartRecognitionCardFlash =
  delayToStartSynthesisCardFlash + delayBetweenTyping;
const cardFlashDuration = 1000;
const delayForLineToStartAfterTyping = 200;
const delayToStartApplicationsFlash =
  delayToStartRecognitionCardFlash + delayBetweenTyping;

export {
  delayToFirstTyping,
  delayToStartSynthesisCardFlash,
  delayToStartRecognitionCardFlash,
  cardFlashDuration,
  delayForLineToStartAfterTyping,
  delayToStartApplicationsFlash,
  delayBetweenTyping,
};
