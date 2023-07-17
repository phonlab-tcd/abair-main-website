import { ImageCarousel, IntroAnimation } from "@/components";
import { CoreTechnologies, Applications, News, Footer } from "@/sections";
import imageCarouselData from "./imageCarouselData";

export default function Page() {
  return (
    <div className="w-screen">
      <div className="relative h-[154px]">
        <ImageCarousel images={imageCarouselData} />
        <div className="absolute top-[60px] w-full flex justify-center">
          {/* <div className="absolute w-80 background bg-black h-full bg-gradient-to-r from-opacity-100 to-opacity-0"></div> */}
          {/* <div className="text-6xl md:text-9xl text-white text-center drop-shadow-ABAIR">
            ABAIR
          </div> */}
        </div>
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
