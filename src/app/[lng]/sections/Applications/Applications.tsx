"use client";
import { getBreakpoint } from "@/utils";
/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";

import { Button } from "abair-web-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

const Applications = ({ lng }: any) => {
  const [breakpoint, setBreakpoint] = useState<string>("");
  const { t } = useTranslation(lng);

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mt-8">
        <div className="text-xl lg:text-2xl font-mono text-applications-700">
          {t("infoHeader.home.applications.title")}
        </div>
      </div>
      <div className="w-full flex justify-center items-end p-4">
        <div className="text-base text-center lg:text-lg font-light text-recognition-700 max-w-lg md:max-w-2xl lg:max-w-5xl">
          {t("infoHeader.home.applications.description")}
        </div>
      </div>
      <div className="flex justify-center w-full py-4 px-2">
        <Link href={`/${lng}/applications`}>
          <Image
            src={"/images/frontPageImages/applications.png"}
            width={800}
            height={400}
            alt="ABAIR applications image"
            className="transition-all duration-300 drop-shadow-applications hover:drop-shadow-applicationsHover hover:scale-102"
          />
        </Link>
      </div>
      <div className="flex justify-center py-8">
        <Link href={`/${lng}/applications`}>
          <Button
            colors="bg-inherit text-applications-600 text-lg lg:text-xl hover:text-applications-700 hover:underline"
            sizes="py-0.5 px-1 rounded-sm"
          >
            {t("pages.home.seeAll")}{" "}
            <span className="text-3xl lg:text-4xl">&#8594;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Applications;
