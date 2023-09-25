import {
  TopImages,
  TopText,
  CoreTechnologies,
  Applications,
  News,
  Publications,
} from "./sections";
import { useTranslation } from "@/app/i18n";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <div className="w-[100%] relative">
      <div className="bg-grey-100">
        <div className="w-full relative">
          <TopImages />
        </div>
        <div className="py-4 md:py-6 flex w-full justify-center relative">
          {/* @ts-expect-error Server Component */}
          <TopText lng={lng} />
        </div>
        <div className="flex w-full justify-center relative">
          <CoreTechnologies lng={lng} />
        </div>
      </div>
      <div className="flex w-full justify-center relative bg-white">
        <Applications lng={lng} />
      </div>
      <div className="flex w-full justify-center relative">
        {/* @ts-expect-error Server Component */}
        <News lng={lng} />
      </div>
      <div className="flex w-full justify-center relative bg-white">
        {/* @ts-expect-error Server Component */}
        <Publications lng={lng} />
      </div>
    </div>
  );
}
