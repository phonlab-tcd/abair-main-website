import {
  TopImages,
  TopText,
  Synthesis,
  Recognition,
  Applications,
  News,
  Publications,
} from "./sections";

export default function Page() {
  return (
    <div className="w-[100%] relative">
      <div className="w-full relative">
        <TopImages />
      </div>

      <div className="py-4 md:py-6 flex w-full justify-center relative">
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

      <div className="flex w-full justify-center relative bg-white">
        <Applications />
      </div>
      <div className="flex w-full justify-center relative">
        {/* @ts-expect-error Server Component */}
        <News />
      </div>
      <div className="flex w-full justify-center relative bg-white">
        <Publications />
      </div>
    </div>
  );
}
