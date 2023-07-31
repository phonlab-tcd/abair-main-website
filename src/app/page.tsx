import {
  TopImages,
  IntroDescription,
  Synthesis,
  Recognition,
  Applications,
  News,
} from "./sections";

export default function Page() {
  return (
    <div className="w-screen relative">
      <div className="w-full relative ">
        <TopImages />
      </div>
      <div className="my-6 md:my-8 flex w-full justify-center relative text-8xl drop-shadow-xl">
        ABAIR
      </div>
      <div className="my-6 md:my-8 flex w-full justify-center relative">
        <IntroDescription />
      </div>
      <div className="flex w-full justify-center relative">
        <div className="grid md:grid-cols-2 justify-center w-full max-w-6xl md:gap-[24px] lg:gap-[48px] mt-6 mb-12">
          <div className="flex justify-center md:justify-end">
            <Synthesis />
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <Recognition />
          </div>
        </div>
      </div>

      <div className="z-0 flex w-full justify-center relative">
        <Applications />
      </div>
      <div className="flex w-full justify-center relative">
        <News />
      </div>
    </div>
  );
}
