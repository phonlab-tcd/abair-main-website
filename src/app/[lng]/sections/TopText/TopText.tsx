import { useTranslation } from "@/app/i18n";

const TopText = async ({ lng }: any) => {
  const { t } = await useTranslation(lng);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-4 md:mb-6 flex w-full justify-center relative text-6xl md:text-8xl">
        ABAIR
      </div>
      <div className="text-2xl md:text-3xl text-center">
        {t("pages.home.SOTA")}
      </div>

      <div
        className={`text-xl md:text-2xl font-light my-2 md:my-2 text-center`}
      >
        {t("pages.home.speechAndLangTech")}
      </div>
      {/* <div className={`text-xl md:text-2xl font-light`}></div> */}
    </div>
  );
};

export default TopText;
