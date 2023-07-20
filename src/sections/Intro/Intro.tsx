"use client";
import { ImageCarousel, IntroDescriptionAnimation } from "@/components";
import imageCarouselData from "./imageCarouselData";
import { Synthesis, Recognition, Applications } from "@/sections";

const Intro = () => {
  const fadeInMainLogo = 1000;
  const delayToFirstTyping = 3800;
  const delayToStartSynthesisCardFlash = delayToFirstTyping + 3000;
  const delayToStartRecognitionCardFlash =
    delayToStartSynthesisCardFlash + 2800;
  const cardFlashDuration = 1800;
  const delayForLineToStartAfterTyping = 200;
  const delayToStartApplicationsFlash = delayToStartRecognitionCardFlash + 3050;

  return (
    <>
      <div className="relative h-[210px]">
        <ImageCarousel
          fadeInDuration={fadeInMainLogo}
          images={imageCarouselData}
        />
      </div>

      <div className="flex w-full justify-center relative">
        <IntroDescriptionAnimation
          initialDelay={delayToFirstTyping}
          delayForLineToStartAfterTyping={delayForLineToStartAfterTyping}
        />
      </div>
      <div className="flex w-full justify-center relative">
        <div className="grid md:grid-cols-2 justify-center w-full max-w-6xl md:gap-[24px] lg:gap-[48px] mt-8">
          <div className="flex justify-center md:justify-end">
            <Synthesis
              delayToStartFlash={delayToStartSynthesisCardFlash}
              flashDuration={cardFlashDuration}
            />
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <Recognition
              delayToStartFlash={delayToStartRecognitionCardFlash}
              flashDuration={cardFlashDuration}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center relative">
        <Applications
          delayToStartFlash={delayToStartApplicationsFlash}
          flashDuration={cardFlashDuration}
        />
      </div>
    </>
  );
};

export default Intro;
