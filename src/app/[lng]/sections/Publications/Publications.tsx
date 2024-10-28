import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { Button } from "@/components/Button";

const Publications = async ({ lng }: any) => {
  const { t } = await useTranslation(lng);

  const publications2023 = [
    {
      authors:
        "Murphy A., Lonergan L., Qian M., Berthelsen H., Wendler C., Ní Chiaráin N., Ní Chasaide A., and Gobl C.",
      title: "ABAIR & ÉIST: A demonstration of speech technologies for Irish.",
      info: "In SIGUL Workshop at INTERSPEECH 2023, Dublin, Ireland.",
    },
    {
      authors:
        "Ní Chasaide, A., Ní Chiaráin, N., Berthelsen, H., Murphy, A., Lonergan, L., Sloan, J., Wendler, C., McCabe, C., Barnes, E., and Gobl, C.",
      title:
        "The language communities as active partners in technology provisions: the Irish ABAIR experience.",
      info: "In Proc. 2nd Annual Meeting of the ELRA/ISCA SIG on Under-resourced Languages (SIGUL 2023), Dublin, Ireland, pp. 116-120.",
    },
    {
      authors:
        "Lonergan, L., Qian, M., Ní Chiaráin, N., Gobl, C., Ní Chasaide, A.",
      title: "Towards spoken dialect identification of Irish.",
      info: "Paper delivered to 2nd Annual Meeting of the Special Interest Group on Under-resourced Languages (SIGUL), a satellite workshop of Interspeech 2023.",
    },
  ];

  return (
    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-5xl pb-8">
      <div className="w-full flex justify-center mt-8 ">
        <div className="flex items-center text-grey-600 text-xl lg:text-2xl font-mono">
          {t("infoHeader.home.publications.title")}
        </div>
      </div>
      <div className="w-full flex justify-center items-end p-4">
        <div className="text-base text-center lg:text-lg font-light text-grey-600 max-w-lg md:max-w-2xl lg:max-w-5xl">
          {t("infoHeader.home.publications.description")}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="space-y-6">
          {publications2023.map((publication, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <p className="text-gray-700 font-semibold">
                {publication.authors} (2023).
              </p>
              <p className="italic text-gray-900">{publication.title}</p>
              <p className="text-gray-600">{publication.info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center my-2">
        <Link href={`/${lng}/publications`}>
          <Button
            colors="bg-inherit text-grey-600 text-lg lg:text-xl hover:text-grey-700 hover:underline"
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

export default Publications;
