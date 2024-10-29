export default async function Page({
  params: { lng },
}: {
  params: { lng: any };
}) {
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
    {
      authors:
        "Lonergan, L., Qian, M., Ní Chiaráin, N., Gobl, C., Ní Chasaide, A.",
      title:
        "Towards dialect-inclusive recognition in a low-resource language: are balanced corpora the answer?",
      info: "In Proc. INTERSPEECH 2023, Dublin, Ireland, pp. 5082-5086",
      doi: "10.21437/Interspeech.2023-2528",
    },
    {
      authors: "Ní Chiaráin, N., Nolan, O., Gunning, N. R., and Comtois, M.",
      title:
        "Filling the SLaTE: examining the contribution LLMs can make in Irish story content generation.",
      info: "In Proc. 9th Workshop on Speech and Language Technology in Education (SLaTE), pp. 176-181.",
    },
    {
      authors: "Comtois, M. and Ní Chiaráin, N.",
      title:
        "The teacher-in-the-loop: collaboration with the teaching community in the development of an iCALL platform for Irish.",
      info: "In B. Bédi, Y. Choubsaz, K. Friðriksdóttir, A. Gimeno-Sanz, S. Björg Vilhjálmsdóttir & S. Zahova (Eds.), CALL for all Languages - EUROCALL 2023 Short Papers.",
      doi: "https://doi.org/10.4995/EUROCALL2023",
    },
    {
      authors: "Sloan, J., and Ní Chiaráin, N.",
      title: "An Bat Mírialta",
      info: "Proc. 9th Workshop on Speech and Language Technology in Education (SLaTE).",
    },
    {
      authors: "Barnes, E., Ní Chiaráin, N., and Chasaide, A.",
      title:
        "Bilingual (Irish-English) phonemic awareness: language-specific and universal contributions.",
      info: "Reading and Writing.",
      doi: "10.1007/s11145-023-10498-0",
    },
    {
      authors:
        "Ní Chasaide, A., Ní Chiaráin, N., Errity, R., Mroz, O., Ní hAonghusa, O., Ní Chasaide, S., Giovannini, A., and Barnes, E.",
      title:
        "Mol an Óige: a phonological awareness and early literacy platform for Irish.",
      info: "Proc. 9th Workshop on Speech and Language Technology in Education (SLaTE), Dublin, Ireland, pp. 182-186.",
    },
    {
      authors:
        "Barnes, E., Cummins, J., Errity, R., Mroz, O., Morrin, O., Berthelsen, H., Wendler, C., Ní Chiaráin, N., and Ní Chasaide, A.",
      title:
        "Geabaire, the First Irish AAC System: Voice as a Vehicle for Change.",
      info: "In Proc. 2nd Annual Meeting of the ELRA/ISCA SIG on Under-resourced Languages (SIGUL 2023), Dublin, Ireland, pp. 129-133.",
    },
    {
      authors: "Wang, Z., and Gobl, C.",
      title:
        "The perceptual effects of aliasing distortion in glottal flow modelling.",
      info: "Proceedings of the 20th International Congress of Phonetic Sciences (ICPhS), pp. 1801-1805, Guarant International.",
    },
    {
      authors: "Wang, Z., and Gobl, C.",
      title:
        "A system for generating voice source signals that implements the transformed LF-model parameter control.",
      info: "In Proc. INTERSPEECH 2023, Dublin, Ireland, pp. 4738-4742",
      doi: "10.21437/Interspeech.2023-2204",
    },
    {
      authors: "Pulman-Slater, J., and McCabe, C.",
      title:
        "The utility of turning-point analysis methods for Welsh and Irish intonation.",
      info: "Proceedings of the 20th International Congress of Phonetic Sciences (ICPhS), pp. 327-3275, Guarant International.",
    },
    {
      authors: "Tallon, Kate.",
      title:
        "Investigating the Irish English PEN-PIN merger: patterns and origins.",
      info: "Proceedings of the 20th International Congress of Phonetic Sciences (ICPhS), pp. 3021-3025, Guarant International.",
    },
  ];

  const publications2022 = [
    {
      authors:
        "Barnes, E., Morrin, O., Ní Chasaide, A., Cummins, J., Berthelsen, H., Murphy, A., Nic Corcráin, M., O' Neill, C., Gobl, C., Ní Chiaráin, N.",
      title:
        "AAC don Ghaeilge: the Prototype Development of Speech-Generating Assistive Technology for Irish",
      info: "Proceedings of the Fourth Celtic Language Technology Workshop: CLTW 4 @ LREC2022, European Language Resources Association (ELRA), Marseille, France, pp127 - 132",
    },
    {
      authors:
        "Lonergan, L., Qian, M., Ní Chiaráin, N., Gobl, C., Ní Chasaide, A.",
      title:
        "Cross-dialect lexicon optimisation for an endangered language ASR system: the case of Irish",
      info: "Proceedings of the Special Session on Low-Resource ASR Development, INTERSPEECH, Korea",
    },
    {
      authors:
        "Ni Chasaide, A., Barnes, E., Ní Chiaráin, N., McGuirk, R., Morrin, O., Nic Corcráin, M., Cummins, J.",
      title:
        "Challenges in assistive technology development for an endangered language: an Irish (Gaelic) perspective",
      info: "Ninth Workshop on Speech and Language Processing for Assistive Technologies (SLPAT-2022), ACL 2022, Ireland, pp80 – 87",
    },
    {
      authors:
        "Elham Akhlaghi, Ingibjörg Iða Auðunardóttir, Anna Baczkowska, Branislav Bédi, Hakeem Beedar, Harald Berthelsen, Cathy Chua, Catia Cucchiarini, Hanieh Habibi, Ivana Horváthová, Junta Ikeda, Christèle Maizonniaux, Neasa Ní Chiaráin, Chadi Raheb, Manny Rayner, John Sloan, Nikos Tsourakis, Chunlin Yao",
      title:
        "Using the LARA Little Prince to compare human and TTS audio quality",
      info: "Proceedings of the 13th Conference on Language Resources and Evaluation (LREC 2022), Marseille, France, European Language Resources Association (ELRA), pp2967 – 2975",
    },
    {
      authors:
        "Ní Chiaráin, N., Comtois, M., Nolan, O., Robinson Gunning, N., Sloan, J., Berthelsen, H., Ní Chasaide, A.",
      title:
        "Celtic CALL: strengthening the vital role of education for language transmission",
      info: "Proceedings of the CLTW 4 @ LREC2022, European Language Resources Association (ELRA), Marseille, France pp71 - 76",
    },
    {
      authors:
        "Branislav Bédi, Hakeem Beedar, Belinda Chiera, Nedelina Ivanova, Christèle Maizonniaux, Neasa Ní Chiaráin, Manny Rayner, John Sloan, Ghil'ad Zuckermann",
      title:
        "Using LARA to create image-based and phonetically annotated multimodal texts for endangered languages",
      info: "Proceedings of the Fifth Workshop on the Use of Computational Methods in the Study of Endangered Languages, ACL 2022, Dublin, Ireland, 26/27 May 2022, Association for Computational Linguistics, pp68 – 77",
    },
    {
      authors:
        "Lonergan, L., Qian, M., Berthelsen, H., Murphy, A., Wendler, C., Ní Chiaráin, N., Gobl, C., Ní Chasaide, A.",
      title: "Automatic Speech Recognition for Irish: the ABAIR-ÉIST System",
      info: "Proceedings of the Fourth Celtic Language Technology Workshop, CLTW 4 @ LREC2022, European Language Resources Association (ELRA), Marseille, France, pp 47 - 51",
    },
    {
      authors: "Ní Chiaráin, N.",
      title: "An Scéalaí: Foghlaim (Ríomhchuidithe) na Gaeilge",
      info: "Irish in Outlook: A Hundred Years of Irish Education, Trinity College, Dublin, Oral Presentation",
    },
    {
      authors:
        "Nic Corcráin, M., Ní Chiaráin, N., Ní Chasaide, A., Barnes, E., O'Neill, C.",
      title:
        "Irish language Augmentative Alternative Communication (AAC) - developing augmentative communication systems to assist with creating inclusive opportunities for Irish language users and L2 learners of Irish",
      info: "Education Studies Association of Ireland (ESAI) conference 2022, online. Oral Presentation",
    },
    {
      authors: "Barnes, E., Ní Chasaide, A., Ní Chiaráin, N.",
      title:
        "Predictors of literacy attainment in Irish-English bilinguals: implications for bilingual literacy assessment",
      info: "22nd European Conference on Literacy 46th Annual Conference, Literacy Association of Ireland, Dublin, Ireland",
    },
    {
      authors: "Ní Chiaráin, N.",
      title:
        "The bridge between speech technology development and its real-world use",
      info: "IRAAL Conference 2022, Munster Technological University, Published Abstract",
    },
    {
      authors:
        "Qian, M., Berthelsen, H., Lonergan, L., Ní Chasaide, A., Murphy, A., O'Neill, C., Ní Chiaráin, N., Gobl, C.",
      title:
        "Automatic Speech Recognition for Irish: testing lexicons and language models",
      info: "33rd Irish Signals & Systems Conference (ISSC) 2022, Munster Technological University, Cork, Ireland. IEEE, pp1-6",
    },
    {
      authors: "Ní Chiaráin, N.",
      title:
        "An Corpas Cliste: creating a learner corpus for Irish from a new, purpose-built iCALL platform",
      info: "Intelligent CALL, granular systems and learner data: short papers from EUROCALL 2022, editor(s) Birna Arnbjörnsdóttir, Branislav Bédi, Linda Bradley, Kolbrún Friðriksdóttir, Hólmfríður Garðarsdóttir, Sylvie Thouësny, Matthew James Whelpton, Research-publishing.net, pp297-301, [Book Chapter]",
    },
    {
      authors:
        "Elham Akhlaghi-Baghoojari, Branislav Bédi, Cathy Chua, Ivana Horváthová, Nedelina Ivanova, Christèle Maizonniaux, Marta Mykhats, Neasa Ní Chiaráin, Manny Rayner, Catherine Orian Weiss, Rina Zviel-Girshin",
      title: "Easy as ABC: using LARA to build multimedia alphabet books",
      info: "Intelligent CALL, granular systems and learner data: short papers from EUROCALL 2022, editor(s) Birna Arnbjörnsdóttir, Branislav Bédi, Linda Bradley, Kolbrún Friðriksdóttir, Hólmfríður Garðarsdóttir, Sylvie Thouësny, Matthew James Whelpton, Research-publishing.net, pp1-6, [Book Chapter]",
    },
    {
      authors:
        "Elham Akhlaghi, Ingibjörg Iða Auðunardóttir, Branislav Bédi, Hakeem Beedar, Harald Berthelsen, Cathy Chua, Catia Cucchiarini, Brynjarr Eyjólfsson, Nedelina Ivanova, Christèle Maizonniaux, Neasa Ní Chiaráin, Manny Rayner, John Sloan, Sigurður Vigfússon, Ghil`ad Zuckermann",
      title:
        "Reading Assistance through LARA, the Learning And Reading Assistant",
      info: "Proceedings of the 2nd Workshop on Tools and Resources for People with REAding DIfficulties (READI) @ LREC2022, European Language Resources Association (ELRA), Marseille, France, pp1-8",
    },
    {
      authors:
        "Ní Chiaráin, N., Nolan, N., Comtois, M., Robinson Gunning, N., Berthelsen, H., Ní Chasaide, A.",
      title:
        "Using Speech and NLP Resources to build an iCALL platform for a minority language: the story of An Scéalaí, the Irish experience to date",
      info: "Proceedings of the Fifth Workshop on the Use of Computational Methods in the Study of Endangered Languages, ACL 2022, Association for Computational Linguistics, Dublin, Ireland, pp109 – 118",
    },
  ];

  const publications2021 = [
    {
      authors:
        "Elham Akhlaghi, Anna Bączkowska, Branislav Bédi, Harald Berthelsen, Cathy Chua, Catia Cucchiarini, Hanieh Habibi, Ivana Horváthová, Christèle Maisonniaux, Neasa Ní Chiaráin, Manny Rayner",
      title:
        "Assessing the Quality of TTS Audio in the LARA Learning-by-Reading Platform",
      info: "EuroCALL 2021, Paris, France, 25 - 27 August 2021",
    },
    {
      authors:
        "Ghil'Ad Zuckermann, Sigurður Vigfússon, Manny Rayner, Neasa Ní Chiaráin, Nedelina Ivanova, Hanieh Habibi, Branislav Bédi",
      title:
        "LARA in the Service of Revivalistics and Documentary Linguistics: Community Engagement and Endangered Languages",
      info: "Proceedings of the 4th Workshop on Computational Methods for Endangered Languages, ComputEL-4 - 4th Workshop on Computational Methods for Endangered Languages, Online, 02-03 March 2021, ACL, pp13 – 23",
    },
    {
      authors: "Barnes, E.",
      title:
        "Bilingual phonological awareness: when interdependence becomes interference",
      info: "Proceedings of the Conference of the International Association for the Study of Child Language, 2021",
    },
    {
      authors: "Murphy, A., Yanushevskaya, I., Ní Chasaide, A., and Gobl, C.",
      title:
        "Affect Expression: Global and Local Control of Voice Source Parameters",
      info: "Presented at Speech Prosody, Lisbon, 2022",
    },
    {
      authors: "Murphy, A., Yanushevskaya, I., Ní Chasaide, A., and Gobl, C.",
      title:
        "Integrating a Voice Analysis-Synthesis System with a TTS Framework for Controlling Affect and Speaker Identity",
      info: "In 2021 32nd Irish Signals and Systems Conference (ISSC), IEEE, June 2021, pp. 1-6",
    },
    {
      authors: "Triantafyllidou, C., Ní Chiaráin, N., and Barnes, E.",
      title:
        "PunkBuddy: Interdisciplinary Research in Computer-Assisted Language Learning (CALL) for Dyslexia",
      info: "2021 Irish Association for Applied Linguistics Annual Conference, 24 November 2021",
    },
  ];

  const theses2023 = [
    {
      author: "McCabe, C. P. M.",
      title: "Prosodic Structure in Munster Irish",
      degree: "Tráchtas PhD",
      institution:
        "Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, Baile Átha Cliath",
      year: 2023,
    },
    {
      author: "Rodgers, A.E.",
      title:
        "UpRising: A Phonological and Phonetic Study of Intonation in Derry City English",
      degree: "Tráchtas PhD",
      institution:
        "Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, Baile Átha Cliath",
      year: 2023,
    },
    {
      author: "Rock, L.",
      title:
        "An analysis of the most common errors made by second-level students of Irish and proposed pedagogic intervention",
      degree: "Tráchtas MPhil",
      institution:
        "Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, Baile Átha Cliath",
      year: 2023,
    },
    {
      author: "Zhang, W.",
      title:
        "Research on Irish Speech Recognition Based on Whisper's Pre-training Model",
      degree: "Tráchtas MPhil",
      institution:
        "Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, Baile Átha Cliath",
      year: 2023,
    },
    {
      author: "Zhang, X.",
      title:
        "Tolg: A classical and neural hybrid LF glottal vocoder for generative source-filter speech synthesis and modification",
      degree: "Tráchtas MPhil",
      institution:
        "Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, Baile Átha Cliath",
      year: 2023,
    },
    {
      author: "Guyot, A.",
      title:
        "An analysis of the effect of the GlórCáil VTL warp factor on formant frequencies",
      degree: "Tráchtas MPhil",
      institution:
        "Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide, Coláiste na Tríonóide, Baile Átha Cliath",
      year: 2023,
    },
  ];

  const theses2021 = [
    {
      author: "Barnes, Emily",
      title:
        "Predicting dual-language literacy attainment in Irish-English bilinguals: language-specific and language-universal contributions",
      degree: "Tráchtas PhD",
      institution: "Ollscoil na Tríonóide",
      year: 2021,
    },
    {
      author: "Comtois, Madeline",
      title: "Intent Recognition and Keyword Spotting in Irish and English",
      degree: "Tráchtas Fochéime",
      institution: "Ollscoil na Tríonóide",
      year: 2021,
    },
    {
      author: "Nic Corcráin, Muireann",
      title:
        "'AAC don Ghaeilge': A needs analysis survey for the development of Irish language augmentative communication devices for people with speech difficulties",
      degree: "Tráchtas Máistreachta",
      institution: "Ollscoil na Tríonóide",
      year: 2021,
    },
    {
      author: "Nolan, Oisín",
      title: "Extracting ASR training data from conversational speech",
      degree: "Tráchtas Fochéime",
      institution: "Ollscoil na Tríonóide",
      year: 2021,
    },
    {
      author: "Dunne, Fergus",
      title:
        "An examination of the role of speech and language technology in the revitalization of endangered languages",
      degree: "Tráchtas Máistreachta",
      institution: "Ollscoil na Tríonóide",
      year: 2021,
    },
  ];

  const keynoteSpeeches2023 = [
    {
      speaker: "Neasa Ní Chiaráin",
      event: "UK Speech 2023",
      title: "Speech Technology for Irish: the ABAIR initiative",
      date: "Meitheamh, 2023",
      link: "https://ukspeech2023.sheffield.ac.uk/programme/keynotes",
    },
    {
      speaker: "Neasa Ní Chiaráin",
      event: "Sheffield Inaugural Speech Synthesis Workshop",
      title: "Developing the Irish synthetic voices",
      date: "Meitheamh, 2023",
    },
    {
      speaker: "Neasa Ní Chiaráin",
      event: "EuroCALL 2023",
      title:
        "Endangered Languages from an Irish perspective: Tír gan Teanga, Tír gan Anam",
      date: "Lúnasa, 2023",
      link: "https://vigdis.hi.is/en/eurocall-2023",
    },
    {
      speaker: "Ailbhe Ní Chasaide",
      event:
        "European Network to Promote Linguistic Diversity: Equality of Services for Speakers of Regional or Minority Language who are Disabled",
      title: "The Minority within the Minority: ABAIR applications for Irish",
      location: "EPIC Museum, Dublin",
      date: "Deireadh Fómhair 2023",
    },
  ];

  const speeches2021 = [
    {
      speaker: "Ní Chiaráin, Neasa",
      title: "Digital Plan for Irish",
      event:
        "18th European Federation of National Institutions for Language (EFNIL)",
      year: 2021,
    },
    {
      speaker: "Ní Chasaide, Ailbhe",
      title:
        "Voice-Prosody & Technologies to Give Voice to Endangered Languages: an Irish Perspective",
      event: "Cambridge Linguistics Forum",
      year: 2021,
    },
    {
      speaker: "Barnes, Emily",
      title:
        "Ag tacú le scoláirí a bhfuil riachtanais speisialta oideachais acu le linn na paindéime, le fócas ar an gcianfhoghlaim",
      event:
        "Comhdháil Cheannaireachta 2021 (do bhanaisteoirí Ghaelscoileanna)",
      year: 2021,
    },
    {
      speaker: "Barnes, Emily",
      title:
        "Assessment and support for dyslexia in Irish-medium education: challenges of provision in a minority language",
      event:
        "The Canadian Centre for Studies and Research on Bilingualism and Language Planning Conference",
      year: 2021,
    },
    {
      speaker: "McCabe, Connor",
      title:
        "Shifting the blame? Re-evaluating assumptions about, and phonetic evidence for stress-shift in an Irish macrodialect",
      year: 2021,
    },
    {
      speaker: "McCabe, Connor",
      title:
        "Revisiting assumptions about stress and 'stress-shift' in Munster Irish",
      event: "Phonetics & Phonology in Europe (PaPE) IV",
      year: 2021,
    },
    {
      speaker: "McCabe, Connor",
      title:
        "P-centres and nuclear vowel duration in the context of Irish (Gaelic) initial mutation",
      event:
        "8th International Congress of Experimental Phonetics (Congreso Internacional de Fonética Experimental) Girona",
      note: "curtha siar de bharr Covid ó Mheitheamh 2020 go Meitheamh 2021",
      year: 2021,
    },
    {
      speaker: "McCabe, Connor",
      title: "Wug-testing phonetic prominence in Munster Irish",
      event:
        "12th International Conference of Experimental Linguistics (ExLing) in Athens",
      year: 2021,
    },
    {
      speaker: "Barnes, Emily",
      title:
        "Nascanna idir fóineolaíocht agus ortagrafaíocht na Gaeilge: dúshláin faoi cheilt i múineadh na teanga ar an tríú leibhéal",
      event: "Ceardlann do Lárionad na Gaeilge, Ollscoil Mhá Nuad",
      year: 2021,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex bg-white justify-center min-h-screen ">
        <div className="w-full mt-8 max-w-4xl">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              2023 Foilseacháin
            </h1>
            <div className="space-y-6">
              {publications2023.map((publication, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {publication.authors} (2023).
                  </p>
                  <p className="italic text-gray-900">{publication.title}</p>
                  <p className="text-gray-600">
                    {publication.info}
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline ml-1"
                      >
                        DOI: {publication.doi}
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              2023 Tráchtais
            </h1>
            <div className="space-y-6">
              {theses2023.map((thesis, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {thesis.author} ({thesis.year}).
                  </p>
                  <p className="italic text-gray-900">{thesis.title}</p>
                  <p className="text-gray-600">
                    <span className="font-semibold">{thesis.degree}, </span>
                    {thesis.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              2023 Cuirí: Eochairléachtanna
            </h1>
            <div className="space-y-6">
              {keynoteSpeeches2023.map((speech, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {speech.speaker}
                  </p>
                  <p className="text-gray-900">
                    <span className="font-semibold">{speech.event}: </span>
                    <span className="italic">{speech.title}</span>
                  </p>
                  <p className="text-gray-600">{speech.date}</p>
                  {speech.location && (
                    <p className="text-gray-600">{speech.location}</p>
                  )}
                  {speech.link && (
                    <a
                      href={speech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {speech.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              2022 Foilseacháin
            </h1>
            <div className="space-y-6">
              {publications2022.map((publication, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {publication.authors} (2022).
                  </p>
                  <p className="italic text-gray-900">{publication.title}</p>
                  <p className="text-gray-600">{publication.info}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              2021 Foilseacháin
            </h1>
            <div className="space-y-6">
              {publications2021.map((publication, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {publication.authors} (2021).
                  </p>
                  <p className="italic text-gray-900">{publication.title}</p>
                  <p className="text-gray-600">{publication.info}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              2021 Tráchtais
            </h1>
            <div className="space-y-6">
              {theses2021.map((thesis, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {thesis.author} ({thesis.year}).
                  </p>
                  <p className="italic text-gray-900">{thesis.title}</p>
                  <p className="text-gray-600">
                    <span className="font-semibold">{thesis.degree}, </span>
                    {thesis.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              2021 Cainteanna
            </h1>
            <div className="space-y-6">
              {speeches2021.map((speech, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p className="text-gray-700 font-semibold">
                    {speech.speaker} ({speech.year})
                  </p>
                  <p className="italic text-gray-900">{speech.title}</p>
                  {speech.event && (
                    <p className="text-gray-600">{speech.event}</p>
                  )}
                  {speech.note && (
                    <p className="text-gray-500">{speech.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
