"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

import { Button } from "abair-web-components";
import Image from "next/image";

import { validateEmail } from "@/utils";
import { createInterest } from "@/services/supabase/neartu";

// import screenreader from "/images/AAC/screenreader-min.png";

const Page = ({ lng }: any) => {
  const { t } = useTranslation(lng);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOK, setEmailOK] = useState(false);
  const [interest, setInterest] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [consent, setConsent] = useState(false);
  const [showSubmittedConfirmation, setShowSubmittedConfirmation] =
    useState(false);

  useEffect(() => {
    const _emailOK = validateEmail(email);
    if (_emailOK) {
      setEmailOK(true);
    } else {
      setEmailOK(false);
    }
  }, [email]);

  const submitRequest = () => {
    console.log("request submitted");
    createInterest(name, email, interest, otherInfo, consent).then(
      (response) => {
        setEmail("");
        setName("");
        setInterest("");
        setOtherInfo("");
        setConsent(false);
        setShowSubmittedConfirmation(true);
        console.log("response:", response);
      }
    );
  };

  return (
    <div className="flex w-full justify-center">
      <div className="max-w-6xl px-2">
        <div className="flex justify-center">
          <div className="w-full mt-[-6]">
            <div className="flex justify-center">
              <Image
                width={540}
                height={540}
                alt="Abair Applications"
                src="/images/AAC/neartuTransparent.png"
              />
            </div>
          </div>
        </div>
        <div className=" w-full mt-[-6] mb-2 items-center">
          <div className="w-full py-4 px-2 lg:px-4 bg-gray-200">
            <h6 className="text-center font-bold my-2">
              Líonra NEARTÚ ag obair ar son cearta comhionanna do dhaoine faoi
              mhíchumas
            </h6>
            <p>
              Tá tionscadal ABAIR.ie i gColáiste na Tríonóide ag cur
              Teicneolaíochtaí Urlabhra agus Teanga ar fáil don Ghaeilge. Tá
              rochtain do chách mar bhun-aidhm ag ABAIR agus forbairtí á
              ndéanamh ar áiseanna rochtana agus oideachais. Is léir go bhfuil
              éileamh air seo ó na fiosrúcháin rialta a thagann isteach cheana
              féin. Sa Phlean Digiteach don Ghaeilge, tá béim ar an ngá atá le
              taighde agus le forbairtí teicneolaíochta a chinnteoidh rochtain
              ar an teanga dóibh siúd le míchumas. Moltar líonraí abhcóideachta
              a bhunú a thacóidh leis an bhforbairt ar áiseanna rochtana. Le
              déanaí dhaingnigh Rialtas na hÉireann an Coinbhinsiún maidir le
              Cearta Daoine atá faoi Mhíchumas. Mar fhreagra ar an riachtanas
              seo, díreoidh líonra NEARTÚ:
            </p>
            <ul className="list-disc pl-4">
              <li className="list-item">
                ar chumarsáid le foirne forbartha na mbogearraí, maidir le
                riachtanais, dearadh na n-áiseanna agus tastáil orthu le linn
                forbartha.
              </li>
              <li className="list-item">
                ar fhorleathnú na n-áiseanna i measc an phobail agus chun
                aiseolas a thabhairt d&apos;foirne forbartha maidir le
                cothabháil agus leasú leanúnach.
              </li>
              <li className="list-item">
                ar shaineolas agus ar chomhairle phraiticiúil a chur ar fáil do
                lucht a úsáide, do thuismitheoirí, do mhúinteoirí, do
                theiripeoirí, agus eile, faoi áiseanna rochtana don Ghaeilge,
                agus comhairle i dtaca leis an taighde is déanaí ar shealbhú
                teanga agus ar bhuntaistí an dátheangachais.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div>
            <Image
              alt="Abair Applications"
              height={304}
              width={400}
              src="/images/AAC/ronan_leitheoir_scaileain1-min.jpg"
              className="p-4"
            />
          </div>
          <div>
            <Image
              alt="Abair Applications"
              height={204}
              width={420}
              src="/images/AAC/screenreader-min.png"
              className="p-4"
            />
          </div>
          <div>
            <Image
              alt="Abair Applications"
              width={229}
              height={244}
              src="/images/AAC/AACUse.jpg"
              className="p-4"
            />
          </div>
          <div>
            <Image
              alt="Abair Applications"
              width={400}
              height={205}
              src="/images/AAC/AACScreenshot-min.png"
              className="p-4"
            />
          </div>
          <div>
            <Image
              alt="Abair Applications"
              width={208}
              height={204}
              src="/images/AAC/AACClassroom-min.jpg"
              className="p-4"
            />
          </div>
        </div>
        <div className=" w-full mt-[-6] mb-2 items-center">
          <div className="w-full py-4 px-2 lg:px-4 bg-gray-200">
            <p>
              Ag an ócáid seo roinnfear eolas faoi na háiseanna atá á bhforbairt
              ag ABAIR i réimse na rochtana, go háirithe
            </p>
            <ul className="list-disc pl-4">
              <li className="list-item">
                Léitheoir scáileáin dóibh siúd le míchumas radhairc
              </li>
              <li className="list-item">
                Geabaire, córas AAC dóibh siúd gan cumas urlabhra
              </li>
              <li className="list-item">
                An togra PRINTTS a dhíreoidh orthu siúd le deacrachtaí
                litearthachta
              </li>
              <li className="list-item">
                Mol an Óige - áis d&apos;fheasacht na fóineolaíochta agus bunús
                na litearthachta - a bheidh cabhrach dóibh siúd le disléicse
              </li>
            </ul>
            <p>
              AIs gá go mbeidh na teicneolaíochtaí urlabhra agus teanga seo ar
              fáil ar réimse leathan ardán, saorearraí agus gléasanna eile. Tá
              sé mar aidhm againn go spreagfaidh líonra NEARTÚ rannpháirtíocht
              ghníomhach trí Ghaeilge do chách.
            </p>
            <p>
              Léarscáil: Seomra TRiSS (Trinity Research in Social Sciences),
              C6.002 ar an 6ú urlár i bhFoirgneamh na nEalaíon, Coláiste na
              Tríonóide
            </p>
          </div>
        </div>
        <div className="w-full relative flex justify-center">
          {/* {showSubmittedConfirmation && (
            <div className="z-50 absolute bottom-0 right-0 bg-black bg-opacity-30 w-full h-full p-1"> */}
          {/* <AbPopup
                    title={""}
                    description={t("pages.neartu.requestSubmitted")}
                    condition1=""
                    borderColor="secondary.main"
                    buttons={[{ text: "ok", color: "primary" }]}
                    onClick={() => {
                      setShowSubmittedConfirmation(false);
                    }}
                  /> */}
          {/* </div>
          )} */}
          <div className="w-full max-w-sm ">
            <h6 className="font-bold text-center my-2">
              {t("pages.neartu.expressionInterest")}
            </h6>
            <div className="m-2">
              <input
                required
                className="w-full bg-white p-2"
                id="NeartuName"
                name="name"
                type="text"
                placeholder={t("pages.auth.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name.length < 2 && name !== "" && (
                <p className="text-red-500">{t("pages.neartu.validName")}</p>
              )}
            </div>
            <div className="m-2">
              <input
                required
                className="w-full bg-white p-2"
                id="NeartuEmail"
                name="email"
                type="email"
                placeholder={t("pages.auth.emailAddress")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!emailOK && email !== "" && (
                <p className="text-red-500">{t("pages.auth.validEmail")}</p>
              )}
            </div>
            <div className="m-2">
              <textarea
                className="w-full bg-white p-2 resize-y"
                rows={2}
                id="NeartuInterest"
                name="interest"
                placeholder={t("pages.neartu.interest")}
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              />
            </div>
            <div className="m-2">
              <textarea
                className="w-full bg-white p-2 resize-y"
                rows={2}
                id="NeartuOtherInfo"
                name="otherInfo"
                placeholder={t("pages.neartu.otherInfo")}
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
              />
            </div>
            <div className="m-2">
              <div className="flex items-center">
                <p className="text-sm ml-1">{t("pages.neartu.consent")}</p>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox border rounded text-primary-500 focus:ring-2 focus:ring-primary-500"
                    onChange={(e) => setConsent(e.target.checked)}
                    checked={consent}
                  />
                </label>
              </div>
            </div>
            <div className="m-2">
              <button
                className={`${
                  !consent || !emailOK || name.length < 2
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                } text-white px-4 py-2 w-full rounded`}
                onClick={() => {
                  submitRequest();
                }}
                disabled={!consent || !emailOK || name.length < 2}
              >
                {t("pages.neartu.send")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
