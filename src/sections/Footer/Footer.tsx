/* eslint-disable @next/next/no-img-element */
"use client";
import img from "next/image";

// import { useTranslation } from 'react-i18next';

function Footer() {
  // const { i18n } = useTranslation();
  return (
    <div className="py-2 relative bg-grey-100">
      <div>
        <div className="flex flex-row spacing-2 justify-center items-center">
          <div>
            <a href="https://www.chg.gov.ie/">
              <img
                src={"/funders/DCHG_logo_small.png"}
                width={200}
                height={400}
                alt="COGG Logo"
              />
            </a>
          </div>
          <div>
            <a href="https://www.chg.gov.ie/gaeltacht/20-year-strategy-for-the-irish-language-2010-2030/">
              <img
                src={"/funders/COGG_logo_red.png"}
                width={200}
                height={400}
                alt="COGG Logo"
              />
            </a>
          </div>
          <div>
            <a href="https://www.cogg.ie/en/">
              <img
                src={"/funders/S20.png"}
                width={200}
                height={600}
                alt="COGG Logo"
              />
            </a>
          </div>
        </div>
        {/* {i18n.language === 'en' ? ( */}
        <div className="items-center">
          Copyright © 2008&ndash;2022{" "}
          <a href="http://www.tcd.ie/slscs/clcs/psl/">
            Phonetics and Speech Laboratory
          </a>
          , Trinity College, Dublin, Ireland
        </div>
        {/* ) : (
          <Typography color="text.main" align="center">
            Cóipcheart © 2008&ndash;2022{' '}
            <a href="http://www.tcd.ie/slscs/clcs/psl/">
              An tSaotharlann Foghraíochta agus Urlabhra
            </a>
            , Coláiste na Tríonóide, Baile Átha Cliath, Éire
          </Typography>
        )} */}
      </div>
    </div>
  );
}

export default Footer;
