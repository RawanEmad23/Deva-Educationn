"use client";
import cover from "../../Public/images/cover.jpg";
import Image from "next/image";
import altnbash from "../../Public/images/Altinbas-University.jpg";
import altnbashlogo from "../../Public/images/Altinbas-Universitylogo.jpg";
import ankracover from "../../Public/images/Ankara-Medipol-University.jpg";
import ankralogo from "../../Public/images/ankara-medipol.jpg";
import altmcover from "../../Public/images/Atilim-University-2.jpg";
import altmlogo from "../../Public/images/Atilim-Universitylogo.jpg";
import bashlogo from "../../Public/images/University-logo-BAU.jpg";
import bashcover from "../../Public/images/Bahcesehir-Istanbul.jpg";
import bakntcover from "../../Public/images/Beykent-University-2.jpg";
import bakntlogo from "../../Public/images/Beykent-University.jpg";
import bakozlogo from "../../Public/images/Beykoz-University.jpg";
import bakozcover from "../../Public/images/Beykoz-University-1.jpg";
import baronlogo from "../../Public/images/Biruni-University.jpg";
import baroncover from "../../Public/images/Biruni-University-1.jpg";
import fathcover from "../../Public/images/Fatih-Sultan-Mehmet-University-1.jpg";
import fathlogo from "../../Public/images/Fatih-Sultan-Mehmet-University.jpg";
import franlogo from "../../Public/images/Fenerbahce-University.jpg";
import francover from "../../Public/images/Fenerbahce-University-1.jpg";
import gleshcover from "../../Public/images/Halic-University.jpg";
import gleshlogo from "../../Public/images/Halic-University-1.jpg";
import eshakcover from "../../Public/images/Isik-University.jpg";
import eshaklogo from "../../Public/images/Isik-University-1.jpg";
import blagicover from "../../Public/images/Istanbul-Bilgi-University-1.jpg";
import blagilogo from "../../Public/images/Istanbul-Bilgi-University.jpg";
import ynilogo from "../../Public/images/Istanbul-Yeni-Yuzyil.jpg";
import ynicover from "../../Public/images/Istanbul-Yeni-Yuzyil 1.jpg";
import arilcover from "../../Public/images/Istanbul-Arel-University 1.jpg";
import arillogo from "../../Public/images/Istanbul-Arel-University.jpg";
import atlscover from "../../Public/images/Istanbul-Atlas.jpg";
import atlslogo from "../../Public/images/Istanbul-Atlas-1.jpg";
import aidncover from "../../Public/images/Istanbul-Aydin.jpg";
import aidnlogo from "../../Public/images/University-logo.jpg";
import astnicover from "../../Public/images/Istinye-University.jpg";
import astnilogo from "../../Public/images/Istinye-University-1.jpg";
import targtcover from "../../Public/images/Ticaret-1.jpg";
import targtlogo from "../../Public/images/Ticaret.jpg";
import tobkicover from "../../Public/images/Topkapi-cover.jpg";
import tobkilogo from "../../Public/images/Topkapi.jpg";
import kentcover from "../../Public/images/Istanbul-Kent-.jpg";
import kentlogo from "../../Public/images/Istanbul-Kent-2 (1).jpg";
import koltrcover from "../../Public/images/Istanbul-Kultur.jpg";
import koltrlogo from "../../Public/images/Istanbul-Kultur-2.jpg";
import nishcover from "../../Public/images/Nisantasi-1.jpg";
import nishlogo from "../../Public/images/Nisantasi.jpg";
import okancover from "../../Public/images/Okan-1.jpg";
import okanlogo from "../../Public/images/Okan.jpg";
import sabahcover from "../../Public/images/Sabahattin-Zaim.jpg";
import sabahlogo from "../../Public/images/Sabahattin-Zaim-University.jpg";
import galtacover from "../../Public/images/Galata.jpg";
import galtalogo from "../../Public/images/Galata-1.jpg";
import gedkcover from "../../Public/images/Gedik-1.jpg";
import gedklogo from "../../Public/images/Gedik.jpg";
import glshcover from "../../Public/images/Gelisim-1.jpg";
import glshlogo from "../../Public/images/Gelisim.jpg";
import kadrcover from "../../Public/images/Kadir-Has-University-1.jpg";
import kadrlogo from "../../Public/images/Kadir-Has-University.jpg";
import lokcover from "../../Public/images/Lokman-Hekim-1.jpg";
import loklogo from "../../Public/images/Lokman-Hekim.jpg";
import osmcover from "../../Public/images/OSTIM-Technical-2.jpg";
import osmlogo from "../../Public/images/OSTIM-Technical.jpg";
import uskcover from "../../Public/images/Uskudar-University.jpg";
import usklogo from "../../Public/images/Uskudar-University-1.jpg";
import { useTranslation } from "react-i18next";

const images = {
  ar: {
    cover: cover,
    altnbash: "/images/Altinbas-University.jpg",
    ankracover: "/images/Ankara-Medipol-University.jpg",
    altmcover: "/images/Atilim-University-2.jpg",
    bashcover: "/images/Bahcesehir-Istanbul.jpg",
    bakntcover: "/Public/images/Beykent-University-2.jpg",
    bakozcover: bakozcover,
    baroncover: baroncover,
    fathcover: fathcover,
    francover: francover,
    gleshcover: gleshcover,
    eshakcover: eshakcover,
    blagicover: blagicover,
    ynicover: ynicover,
    arilcover: arilcover,
    atlscover: atlscover,
    aidncover: aidncover,
    astnicover: astnicover,
    targtcover: targtcover,
    tobkicover: tobkicover,
    kentcover: kentcover,
    koltrcover: koltrcover,
    nishcover: nishcover,
    okancover: okancover,
    sabahcover: sabahcover,
    galtacover: galtacover,
    gedkcover: gedkcover,
    glshcover: glshcover,
    kadrcover: kadrcover,
    lokcover: lokcover,
    osmcover: osmcover,
    uskcover: uskcover,
  },
  en: {
    cover: "/images/cover.jpg",
    altnbash: "/images/altin_en.png",
    ankracover: "/images/medpol_en.png",
    altmcover: "/images/altin_en.png",
    bashcover: "/images/bah_en.png",
    bakntcover: "/images/bekyent_en.png",
    bakozcover: "/images/bekoz_en.png",
    baroncover: "/images/burini_en.png",
    fathcover: "/images/fatih_en.png",
    francover: "/images/franb_en.png",
    gleshcover: "/images/halich_en.png",
    eshakcover: "/images/isik_en.png",
    blagicover: "/images/bilgi_en.png",
    ynicover: "/images/yani_en.png",
    arilcover: "/images/arel_en.png",
    atlscover: "/images/atls_en.png",
    aidncover: "/images/aydin_en.png",
    astnicover: "/images/isatinya_en.png",
    targtcover: "/images/ticret_en.png",
    tobkicover: "/images/topiki_en.png",
    kentcover: "/images/kent_en.png",
    koltrcover: "/images/kult_en.ong.jfif",
    nishcover: "/images/nish_en.png",
    okancover: "/images/okan_en.png",
    sabahcover: "/images/zaaim_en.png",
    galtacover: "/images/galata_en.png",
    gedkcover: "/images/gedik_en.png",
    glshcover: "/images/glesh_en.png",
    kadrcover: "/images/kad_en.png",
    lokcover: "/images/lok_en.jpg",
    osmcover: "/images/ositim_en.png",
    uskcover: "/images/uskider_en.png",
  },
  fa: {
    cover: "/images/cover-gamat-fa.jpg",
    altnbash: "/images/altin_fa.jpg",
    ankracover: "/images/ankra_fa.png",
    altmcover: "/images/atilem_fa.png",
    bashcover: "/images/bah_fa.jpg",
    bakntcover: "/images/bek_fa.jpg",
    bakozcover: "/images/bekoz_fa.jpg",
    baroncover: "/images/burini_fa.png",
    fathcover: "/images/fat_fa.jpg",
    francover: "/images/franb_fa.png",
    gleshcover: "/images/halich_fa.png",
    eshakcover: "/images/eshik_fa.png",
    blagicover: "/images/bilgu_fa.png",
    ynicover: "/images/yni_fa.png",
    arilcover: "/images/arel_fa.png",
    atlscover: "/images/atlas_fa.png",
    aidncover: "/images/aidn_fa.jpg",
    astnicover: "/images/istanya_fa.png",
    targtcover: "/images/ticret_fa.png",
    tobkicover: "/images/topiky_fa.png",
    kentcover: "/images/kent_fa.png",
    koltrcover: "/images/kuluter_fa.png",
    nishcover: "/images/naish_fa.png",
    okancover: "/images/okan_fa.png",
    sabahcover: "/images/istanzam_fa.png",
    galtacover: "/images/galat_fa.png",
    gedkcover: "/images/gedek_fa.png",
    glshcover: "/images/glash_fa.png",
    kadrcover: "/images/kader_fa.png",
    lokcover: "/images/lokman_fa.png",
    osmcover: "/images/ostim_fa.png",
    uskcover: "/images/usk_fa.jpg",
  },
  fr: {
    cover: "/images/cover-gamat-fr.jpg",
    altnbash: "/images/altin_fr.png",
    ankracover: "/images/medpo_fr.png",
    altmcover: "/images/atilim_fr.png",
    bashcover: "/images/bah_fr.png",
    bakntcover: "/images/bekent_fr.png",
    bakozcover: "/images/bekoz_fr.png",
    baroncover: "/images/burini_fr.png",
    fathcover: "/images/fatih_fr.png",
    francover: "/images/franba_fr.png",
    gleshcover: "/images/halich_fr.png",
    eshakcover: "/images/isik_fr.png",
    blagicover: "/images/bilgi_fr.png",
    ynicover: "/images/yini_fr.png",
    arilcover: "/images/arel_fr.png",
    atlscover: "/images/atls_fr.png",
    aidncover: "/images/aidn_fa.jpg",
    astnicover: "/images/isituni_fr.png",
    targtcover: "/images/ticret_fr.png",
    tobkicover: "/images/topki_fr.png",
    kentcover: "/images/kenet_fr.png",
    koltrcover: "/images/kulutr_fr.png",
    nishcover: "/images/nais_fr.png",
    okancover: "/images/okan_fr.png",
    sabahcover: "/images/sabahzaam_fr.png",
    galtacover: "/images/galata_fr.png",
    gedkcover: "/images/gedek_fr.png",
    glshcover: "/images/gleshim_fr.png",
    kadrcover: "/images/kadir_fr.png",
    lokcover: "/images/lokamen_fr.png",
    osmcover: "/images/ositem_fr.png",
    uskcover: "/images/uskuder_fr.png",
  },
  tr: {
    cover: "/images/cover-gamat-tr.jpg",
    altnbash: "/images/altinbash_tr.jpg",
    ankracover: "/images/medpol_tr.png",
    altmcover: "/images/atilim_tr.png",
    bashcover: "/images/bahsh_tr.png",
    bakntcover: "/images/bekyent_tr.png",
    bakozcover: "/images/bekoz_tr.png",
    baroncover: "/images/burini_tr.png",
    fathcover: "/images/fatih_tr.png",
    francover: "/images/franbash_tr.png",
    gleshcover: "/images/halich_tr.png",
    eshakcover: "/images/isik_tr.png",
    blagicover: "/images/bilgi_tr.png",
    ynicover: "/images/yni_tr.png",
    arilcover: "/images/arel_tr.png",
    atlscover: "/images/atls_tr.png",
    aidncover: "/images/aydin_tr.png",
    astnicover: "/images/istinya_tr.png",
    targtcover: "/images/ticret_tr.png",
    tobkicover: "/images/topki_tr.png",
    kentcover: "/images/kent_tr.png",
    koltrcover: "/images/kultur_tr.png",
    nishcover: "/images/nish_tr.png",
    okancover: "/images/okan_tr.png",
    sabahcover: "/images/istanzaam_tr.png",
    galtacover: "/images/galta_tr.png",
    gedkcover: "/images/gedek_tr.png",
    glshcover: "/images/glishem_tr.png",
    kadrcover: "/images/kadir_tr.png",
    lokcover: "/images/lokman_tr.png",
    osmcover: "/images/ostim_tr.png",
    uskcover: "/images/uskuder_tr.png",
  },
  ru: {
    cover: "/images/cover_ru.jpg",
    altnbash: "/images/altinbach_ru.png",
    ankracover: "/images/medpoil_ru.png",
    altmcover: "/images/atilim_ru.png",
    bashcover: "/images/bach_ru.png",
    bakntcover: "/images/bekent_ru.png",
    bakozcover: "/images/bekoz_ru.png",
    baroncover: "/images/burini_ru.png",
    fathcover: "/images/fatih_ru.png",
    francover: "/images/fran_ru.png",
    gleshcover: "/images/halich_ru.png",
    eshakcover: "/images/isik_ru.png",
    blagicover: "/images/bilgi_ru.png",
    ynicover: "/images/yini_ru.png",
    arilcover: "/images/arel_ru.png",
    atlscover: "/images/atls_ru.png",
    aidncover: "/images/aydin_ru.png",
    astnicover: "/images/istini_ru.png",
    targtcover: "/images/ticret_ru.png",
    tobkicover: "/images/tobki_ru.png",
    kentcover: "/images/kent_ru.png",
    koltrcover: "/images/kuluter_ru.png",
    nishcover: "/images/nish_ru.png",
    okancover: "/images/okan_ru.png",
    sabahcover: "/images/zaim_ru.png",
    galtacover: "/images/galata_ru.png",
    gedkcover: "/images/gedik_ru.png",
    glshcover: "/images/glishim_ru.png",
    kadrcover: "/images/kader_ru.png",
    lokcover: "/images/lokman_ru.png",
    osmcover: "/images/ostim_ru.png",
    uskcover: "/images/uskuder_ru.png",
  },
};

const universitys = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "ar"; // إذا لم يتم تحديد لغة، اجعل الافتراضية العربية

  return (
    <>
      <div className="flex">
        <Image
          src={images[lang].cover}
          className=" max-sm:h-[60vh] pt-9 max-sm:min-w-[80rem] max-sm:mt-16 max-lg:h-[60vh] max-lg:min-w-[80rem] max-lg:mt-16"
          alt="cover"
          width={1800} // حدد الحجم المطلوب
          height={800}
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center max-sm:mr-[26rem] max-lg:w-[25rem] mt-12 mb-16 max-lg:mr-[30rem] max-sm:px-12 max-sm:my-12 max-sm:w-[30rem] text-white bg-fuchsia-700 px-6 py-2 w-fit mx-auto rounded-full">
          {t("جامعتنا")}
        </h1>
        <div className="flex flex-wrap cursor-pointer max-sm:w-[70rem] max-lg:w-[80rem] max-lg:gap-10 max-sm:text-xl max-sm:gap-24 max-sm:justify-center">
          <a
            href="/altnbash"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].altnbash}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={altnbashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
              alt=""
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    (i18n.language === "ar",
    "en" ? "mr-[6%]" : i18n.language === "ru" ? "mr-[3%]" : "")
  }`}
            >
              {" "}
              {t("جامعة ألتن باش")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تعتمد الجامعة اللغتين الإنجليزية والتركية في التعليم، مما يتيح الفرصة للطلاب الدوليين للاندماج بسهولة..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-6 max-sm:absolute "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../ankraMedipol"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].ankracover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={ankralogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
              alt=""
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[5%]"
      : i18n.language === "ru"
      ? "mr-2"
      : "mr-[4%]"
  }`}
            >
              {" "}
              {t("أنقرة ميديبول")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "هي جامعة تركية خاصة تأسست في عام 2018 في العاصمة أنقرة. تُعد من الجامعات الحديثة التي تقدم تعليمًا متميزًا..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[26rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-6 max-sm:absolute  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("انقرة، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../atilim"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].altmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={altmlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
              alt=""
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    (i18n.language === "ar",
    "en" ? "mr-[6%]" : i18n.language === "ru" ? "mr-[5%]" : "")
  }`}
            >
              {" "}
              {t("جامعةأتيليم")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة تركية خاصة تأسست عام 1997 في العاصمة أنقرة. بفضل برامجها الأكاديمية المتميزة وموقعها الاستراتيجي..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[26.5rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("انقرة، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../bahcesehir"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].bashcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={bashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
              alt=""
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[4%]" : " mr-[7%]"}`}
            >
              {" "}
              {t("بهشة شهير")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "هي واحدة من الجامعات التركية الخاصة الرائدة، تأسست عام 1998 في قلب مدينة إسطنبول..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../beykent"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].bakntcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={bakntlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
              alt=""
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    (i18n.language === "ar",
    "en" ? "mr-[6%]" : i18n.language === "ru" ? "mr-[5%]" : "")
  }`}
            >
              {" "}
              {t("جامعة بيكنت")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "هي جامعة تركية خاصة تأسست عام 1997 في مدينة إسطنبول. تُعرف الجامعة بجودة برامجها الأكاديمية وتنوع تخصصاتها"
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26.5rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../beykoz"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].bakozcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={bakozlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
              alt=""
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    (i18n.language === "ar",
    "en" ? "mr-[6%]" : i18n.language === "ru" ? "mr-[5%]" : "")
  }`}
            >
              {" "}
              {t("جامعة بيكوز")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة تركية خاصة تأسست عام 2008 في مدينة إسطنبول تُعد من الجامعات المتميزةالتي تركز على التميز..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../biruni"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].baroncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={baronlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    (i18n.language === "ar",
    "en" ? "mr-[6%]" : i18n.language === "ru" ? "mr-[5%]" : "")
  }`}
            >
              {" "}
              {t("جامعة بيروني")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "هي جامعة تركية خاصة تأسست عام 2014 في مدينة إسطنبول. تُعد من الجامعات المتميزة في تركيا..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../fatih-sultan"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].fathcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={fathlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[5%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : i18n.language === "en"
      ? "mr-[3%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("فاتح سلطان محمد")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة وقفية تركية تأسست عام 2010 في مدينة إسطنبول تهدف الجامعة إلى تقديم تعليم عالي الجودة..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../fenerbahce"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].francover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={franlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[5%]"
      : i18n.language === "ru"
      ? "mr-[4%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("جامعة فنربهتشه")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة تركية خاصة حديثة التأسيس، تقع في مدينة إسطنبول. تُقدم الجامعة برامج تعليمية عاليةالجودة..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26.5rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../halic"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].gleshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={gleshlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[6%]"
      : i18n.language === "ru"
      ? "mr-[5%]"
      : "mr-[6%]"
  }`}
            >
              {" "}
              {t("جامعة الخليج")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة تركية خاصة تأسست عام 1998 في إسطنبول. تُعد واحدة من الجامعات الرائدة التي تركز على الابتكار..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../isik"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].eshakcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={eshaklogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[6%]"
      : i18n.language === "ru"
      ? "mr-[5%]"
      : "mr-[6%]"
  }`}
            >
              {" "}
              {t("جامعة إيشيك")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة خاصة تأسست عام 1996 في مدينة إسطنبول. تُعد واحدة من الجامعات الرائدة التي تقدم تعليمًا عالي الجودة"
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../bilgi"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].blagicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={blagilogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[6%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("إسطنبول بيلجي")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "إحدى الجامعات التركية الخاصة المرموقة، تأسست عام 1996. تُعرف الجامعة بتقديمها برامج..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../yeni-yuzyil"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].ynicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={ynilogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[5%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("إسطنبول يني")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "واحدة من الجامعات التركية الخاصة التي تأسست عام 2009. تهدف الجامعة إلى تقديم تعليم عالي الجودة..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../arel"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].arilcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={arillogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[7%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("إسطنبول أريل")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة خاصة تأسست عام 2007 في مدينة إسطنبول. تُعد من الجامعات الحديثة التي تقدم برامج..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../atls"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].atlscover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={atlslogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[7%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("إسطنبول أطلس")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "واحدة من الجامعات التركية الحديثة التي تأسست عام 2018. تتميز الجامعة بتقديم تعليم عالي..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../aydin"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].aidncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={aidnlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[7%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : "mr-[3%]"
  }`}
            >
              {" "}
              {t("إسطنبول آيدن")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "واحدة من الجامعات التركية الخاصة الرائدة، تأسست عام 2003 في مدينة إسطنبول. تتميز الجامعة ببرامجه واعتمادها..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[25rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../istinye"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].astnicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={astnilogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[7%]"
      : i18n.language === "ru"
      ? "mr-[5%]"
      : "mr-[4%]"
  }`}
            >
              {" "}
              {t("جامعة إستينيا")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة تركية خاصة تأسست عام 2015، وهي واحدة من المؤسسات التعليمية الحديثة التي تهدف إلى..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../ticaret"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].targtcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={targtlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[3%]" : "mr-[5%]"}`}
            >
              {" "}
              {t("إسطنبول تيجاريت")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "واحدة من الجامعات التركية الخاصة التي تأسست عام 2001. تتميز الجامعة بتركيزها على تعليم الطلاب المهارات..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[25rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../topkapi"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].tobkicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={tobkilogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[5%]" : "mr-[5%]"}`}
            >
              {" "}
              {t("جامعة توبكابي")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "إحدى الجامعات التركية الخاصة التي تقدم تعليمًا عالي الجودة في مجموعة متنوعة من التخصصات. تأسست الجامعة ..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[25rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../kent"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].kentcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={kentlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-[7%] text-lg max-sm:text-[16px] max-lg:text-[16px] max-lg:mr-5 max-lg:w-[16rem]   absolute font-semibold max-sm:w-full max-sm:mr-5">
              {t("جامعة كينت")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تمتلك جامعة اسطنبول كينت حرمين جامعين ويقع الحرم الجامعي الرئيسي في ..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../kultur"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].koltrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={koltrlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2 className="text-red-700 mt-[14.5rem] mr-[7%] max-lg:mr-5 text-lg max-sm:text-[16px] max-lg:text-[16px] max-lg:w-[19rem] absolute font-semibold  max-sm:w-full max-sm:mr-5">
              {t("جامعة كولتور")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تسعي جامعة اسطنبول كولتور الي ان تصبح بارزة محليا ودوليا في مجالات مختلفة مثل الطب ..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../nisnantasi"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].nishcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={nishlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[5%]" : ""}`}
            >
              {" "}
              {t("جامعة نيشانتاشي")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "جامعة خاصة تركيه تاسست في عام 2009 من قبل موئسسه نيشانتاشي للتعليم والثقافه..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../okan"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].okancover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={okanlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[6%]"
      : i18n.language === "ru"
      ? "mr-[5%]"
      : "mr-[5%]"
  }`}
            >
              {" "}
              {t("جامعة اوكان")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تجمع جامعة اسطنبول اوكان بشكل فعال بين التعليم النظري والتطبيقي وتعد من افضل الجامعات..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
            ${
              i18n.language === "ar"
                ? "mt-[22.8rem]"
                : i18n.language === "ru"
                ? "mt-[26rem]"
                : "mt-[24rem]"
            }`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../sabahelden"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].sabahcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={sabahlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[7%]" : "mr-[7%]"}`}
            >
              {" "}
              {t("صباح الدين")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تهدف الجامعه ان تكون واحده من افضل 5 جامعات في تركيا التي تتميز ببنيتها التحتيه الكبيره..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../galta"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].galtacover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={galtalogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[5%]" : "mr-[7%]"}`}
            >
              {" "}
              {t("جامعة جالاتا")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تسعي جامعة اسطنبول جالاتا الي توفير نظام تعليمي يتبع التطورات العالميه ويواكب..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg max-sm:text-xl max-sm:w[30rem]">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../gedik"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].gedkcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={gedklogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[5%]" : "mr-[7%]"}`}
            >
              {" "}
              {t("جامعة جيديك")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "واحده من اهم الجامعات الخاصه في تركيا التي تهتم بالتدريب المهني وتتميز دوما بالتنظيم ..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[25rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../gelisim"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].glshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={glshlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[5%]" : "mr-[7%]"}`}
            >
              {" "}
              {t("جامعة جيليشيم")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تهدف جامعة جيليشيم الي انت تكون واحده من اهم الجامعات العالميه التي تضيف قيمة الي المجتمع..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../kadr"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].kadrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={kadrlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "mr-[5%]" : "mr-[6%]"}`}
            >
              {" "}
              {t("جامعة قادر هاس")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تهدف جامعه قادر هاس الي خلق بيئه التعليم والبحوث والمناقشة علي مستوي افضل في المجالات المختلفة..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../lokman"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].lokcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={loklogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] mr-[7%] text-center absolute font-semibold text-lg 
              max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
              ${i18n.language !== "ar" ? "right-0" : ""}`}
            >
              {" "}
              {t("جامعة لقمان الحكيم")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تهتم جامعة لقمان الحكيم اهتمام خاص بلتخصصات الطبية بهدف تدريب المتخصصين الذين ..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-lg:w-[16rem]  max-sm:w-56 mr-8 text-lg">
                {t("انقرة، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../ostim"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].osmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={osmlogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[7%]"
      : i18n.language === "ru"
      ? "mr-[1%]"
      : "mr-[4%]"
  }`}
            >
              {" "}
              {t("جامعة اوستيم")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تضم جامعة اوستيم مراكز البحث العلمي والتدريب ومركز حضانه المشروعات الشبابية..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[25rem]"}`}
            >
              {" "}
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("انقرة، تركيا")}
              </h5>
            </strong>
          </a>
          <a
            href="../uskudir"
            className={`flex flex-col bg-[#fff] w-80 ${
              i18n.language === "ar" ? "h-[25rem]" : "h-[28rem]"
            } rounded-lg shadow-sm mb-10 ml-4 mr-10`}
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].uskcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200} // حدد الحجم المطلوب
              height={600}
            />
            <Image
              src={usklogo}
              alt=""
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h2
              className={`text-red-700 mt-[14.5rem] text-center absolute font-semibold text-lg 
  max-lg:w-[16rem] max-lg:text-[16px] max-sm:text-[16px] max-sm:w-full
  ${
    i18n.language === "ar"
      ? "mr-[7%]"
      : i18n.language === "ru"
      ? "mr-[4%]"
      : "mr-[5%]"
  }`}
            >
              {" "}
              {t("جامعة اسكوادر")}
            </h2>
            <p className="text-gray-800 mt-[17rem] w-72 mr-7 absolute ">
              {t(
                "تأسست جامعة اسكوادر في عام 2011 من قبل مجموعه NP صاحبه السبق في مجالات العلاج..."
              )}
              <button className="rounded-md bg-[#ecbb5b] hover:bg-amber-300 px-2 py-1 text-sm font-medium text-white shadow">
                {t("المزيد")}
              </button>
            </p>
            <strong
              className={`text-gray-700 font-semibold text-2xl absolute mr-7 
    ${i18n.language === "ar" ? "mt-[22.8rem]" : "mt-[24rem]"}`}
            >
              <svg
                className="size-5 max-sm:mt-7 max-sm:absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h5 className="-mt-[1.6rem] max-sm:mt-6 max-sm:w-56 mr-8 text-lg">
                {t("اسطنبول، تركيا")}
              </h5>
            </strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default universitys;
