import {
  TopImages,
  TopText,
  Synthesis,
  Recognition,
  Applications,
  News,
} from "./sections";

export default function Page() {
  return (
    <div className="w-screen relative">
      <div className="w-full relative h-[144px]">
        <TopImages />
      </div>

      <div className="my-4 md:my-6 flex w-full justify-center relative">
        <TopText />
      </div>
      <div className="flex w-full justify-center relative">
        <div className="grid md:grid-cols-2 justify-center w-full max-w-6xl gap-[24px] lg:gap-[48px] mt-2 mb-12">
          <div className="flex justify-center md:justify-end">
            <Synthesis />
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <Recognition />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center relative">
        <Applications />
      </div>
      <div className="flex w-full justify-center relative">
        <News />
      </div>
    </div>
  );
}
