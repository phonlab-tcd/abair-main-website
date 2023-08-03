import {
  TopImages,
  TopText,
  CoreTechnologies,
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
        <CoreTechnologies />
      </div>

      <div className="flex w-full justify-center relative bg-white">
        <Applications />
      </div>
      <div className="flex w-full justify-center relative">
        {/* @ts-expect-error Server Component */}
        <News />
      </div>
      <div className="flex w-full justify-center relative bg-white">
        {/* @ts-expect-error Server Component */}
        <Publications />
      </div>
    </div>
  );
}
