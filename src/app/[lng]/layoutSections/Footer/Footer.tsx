import Image from "next/image";

const Footer = async ({ lng }: any) => {
  return (
    <div className="p-1 flex relative w-full justify-center bg-grey-200">
      <div className="w-full justify-center max-w-2xl lg:max-w-5xl">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="m-1 lg:mx-4">
            <a href="https://tcd.ie/">
              <Image
                src={"/images/funders/Trinity_Main_Logo_1.webp"}
                width={200}
                height={400}
                alt="COGG Logo"
              />
            </a>
          </div>
          <div className="m-1 lg:mx-4">
            <a href="https://www.chg.gov.ie/">
              <Image
                src={"/images/funders/DCHG_logo_small.png"}
                width={200}
                height={400}
                alt="COGG Logo"
              />
            </a>
          </div>
          <div className="m-1 lg:mx-4">
            <a href="https://www.chg.gov.ie/gaeltacht/20-year-strategy-for-the-irish-language-2010-2030/">
              <Image
                src={"/images/funders/COGG_logo_red.png"}
                width={200}
                height={400}
                alt="COGG Logo"
              />
            </a>
          </div>
          <div className="m-1 lg:mx-4">
            <a href="https://www.cogg.ie/en/">
              <Image
                src={"/images/funders/S20.png"}
                width={200}
                height={600}
                alt="COGG Logo"
              />
            </a>
          </div>
        </div>
        {lng === "en" ? (
          <div className="text-center m-1 text-sm lg:text-base text-grey-600">
            Copyright © 2008&ndash;2024{" "}
            <a href="http://www.tcd.ie/slscs/clcs/psl/">
              Phonetics and Speech Laboratory
            </a>
            , Trinity College, Dublin, Ireland
          </div>
        ) : (
          <div className="text-center m-1 text-sm lg:text-base text-grey-600">
            Cóipcheart © 2008&ndash;2023{" "}
            <a href="http://www.tcd.ie/slscs/clcs/psl/">
              An tSaotharlann Foghraíochta agus Urlabhra
            </a>
            , Coláiste na Tríonóide, Baile Átha Cliath, Éire
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
