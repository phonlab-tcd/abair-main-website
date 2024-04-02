/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useTranslation } from "@/app/i18n/client";
import Timeline from "./Timeline";

const Page = ({ lng }: any) => {
  const { t } = useTranslation(lng);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex justify-center items-center text-grey-800 text-2xl sm:text-3xl h-[112px] lg:h-[160px] font-mono">
        {t("pages.synthesis-history.history")}
      </div>

      <div className="w-full flex bg-white justify-center min-h-screen ">
        <div className="w-full mt-8 max-w-2xl">
          <Timeline lng={lng} />
        </div>
      </div>
    </div>
  );
};
export default Page;
