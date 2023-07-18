import { ImageCarousel, IntroAnimation } from "@/components";
import { CoreTechnologies, Applications, News, Footer } from "@/sections";
import imageCarouselData from "./imageCarouselData";

export default function Page() {
  return (
    <div className="w-screen relative">
      <div className="relative h-[210px]">
        <ImageCarousel images={imageCarouselData} />
      </div>

      <div className="flex w-full justify-center relative">
        <IntroAnimation />
      </div>
      <div className="flex w-full justify-center relative">
        <CoreTechnologies />
      </div>
      <div className="flex w-full justify-center relative">
        <Applications />
      </div>
      <div className="flex w-full justify-center relative">
        <News />
      </div>
      <div className="flex w-full justify-center relative">
        <Footer />
      </div>
    </div>
  );
}
