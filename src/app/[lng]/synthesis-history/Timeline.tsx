"use client";

import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import { PlaybackCardSmall } from "@/components/PlaybackCard";
import { getBreakpoint } from "@/utils";
import { useState } from "react";

interface TimelineProps {
  lng: string;
}

const Timeline = ({ lng }: TimelineProps) => {
  const { t } = useTranslation(lng);
  const [breakpoint, setBreakpoint] = useState<string>("");

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="-my-6">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-blue-600 mb-1 sm:mb-0">
            {t("pages.synthesis-history.origins")}
          </div>

          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {t("months.Jan")}, 2013
            </time>

            <div className="text-xl font-bold text-slate-900">
              {t("pages.synthesis-history.origins-sub")}
            </div>
          </div>

          <div className="text-slate-500">
            {t("pages.synthesis-history.origins-detail")}
          </div>
          <div className="px-4 pt-2">
            <Image
              src={
                "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/misc/400x600_fallbackAbairImage.jpg"
              }
              width={200}
              height={400}
              alt="COGG Logo"
            />
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-blue-600 mb-1 sm:mb-0">
            {t("pages.synthesis-history.first-voice")}
          </div>

          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {t("months.Feb")}, 2015
            </time>
            <div className="text-xl font-bold text-slate-900">
              {t("pages.synthesis-history.first-voice-sub")}
            </div>
          </div>

          <div className="text-slate-500">
            {t("pages.synthesis-history.first-voice-detail")}
          </div>
          <div className="mt-4">
            <PlaybackCardSmall
              text="cad é mar atá tú"
              dialect="Ulster"
              src="https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/audio/aine-hts.wav"
            />
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-blue-600 mb-1 sm:mb-0">
            {t("pages.synthesis-history.deep-learning")}
          </div>

          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {t("months.Mar")}, 2019
            </time>
            <div className="text-xl font-bold text-slate-900">
              {t("pages.synthesis-history.deep-learning-sub")}
            </div>
          </div>

          <div className="text-slate-500">
            {t("pages.synthesis-history.deep-learning-detail")}
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-blue-600 mb-1 sm:mb-0">
            The IPO
          </div>

          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2023
            </time>
            <div className="text-xl font-bold text-slate-900">
              Acme went public at the New York Stock Exchange
            </div>
          </div>

          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
