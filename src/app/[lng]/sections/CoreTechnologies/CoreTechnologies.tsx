"use client";

import { Button } from "@/components/Button";
import { Recognition, Synthesis } from "../index";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

interface CoreTechnologiesProps {
  lng: string;
}

const CoreTechnologies = ({ lng }: CoreTechnologiesProps) => {
  const { t } = useTranslation(lng);

  return (
    <div className="justify-center w-full max-w-6xl">
      <div className="grid md:grid-cols-2 gap-[24px] lg:gap-[48px] mt-2">
        <div className="flex justify-center md:justify-end">
          <Synthesis lng={lng} />
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Recognition lng={lng} />
        </div>
      </div>
      <div className="w-full flex justify-center my-8">
        <div className="flex flex-col">
          <Image
            width={340}
            height={340}
            alt="Mile Glór logo"
            src="/images/míleglorUnited.png"
          />
          <div className="w-full flex justify-center -mt-8">
            <a href={`https://abair.ie/studio/ga/recorder/`}>
              <Button
                colors="bg-inherit text-[#9030ba] text-lg lg:text-xl hover:text-[#6d1495] hover:underline"
                sizes="py-0.5 px-1 rounded-sm"
              >
                {t("pages.home.go")}{" "}
                <span className="text-3xl lg:text-4xl">&#8594;</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologies;
