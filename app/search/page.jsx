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
import coveren from "../../Public/images/mannahno-en.jpg";
import coverfa from "../../Public/images/cover-gamat-fa.jpg";
import coverfr from "../../Public/images/cover-gamat-fr.jpg";
import covertr from "../../Public/images/cover-gamat-tr.jpg";
import coverru from "../../Public/images/cover_ru.jpg";
import React, { useState } from "react";
import Modal from "../_components/Model";
import { FaMapLocation } from "react-icons/fa6";
import Search from "../_components/Search";
import { useTranslation } from "react-i18next";

const images = {
  ar: {
    cover: cover,
    altnbash: "/images/Altinbas-University.jpg",
    ankracover: "/images/Ankara-Medipol-University.jpg",
    altmcover: "/images/Atilim-University-2.jpg",
    bashcover: "/Public/images/Bahcesehir-Istanbul.jpg",
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
    cover: coveren,
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
    cover: coverfa,
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
    cover: coverfr,
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
    cover: covertr,
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
    cover: coverru,
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

const Search2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "ar";
  const currentLang = i18n.language || "ar";
  const getImage = (lang, type) => {
    return images[lang]?.[type] || defaultImages[type];
  };
  return (
    <>
      <div className="relative">
        <Image
          src={getImage(currentLang, "cover")}
          className=" h-[80vh]  md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem] pt-16  max-sm:object-cover"
          alt="cover"
        />
        <h1 className="mb-9 mt-12 text-3xl text-yellow-500 max-sm:mr-[17rem] font-bold bg-fuchsia-800 w-fit px-10 py-5 mx-auto max-lg:w-[50rem] max-lg:mr-[35%] max-lg:text-center rounded-full">
          {t("التخصص الذي تبحث عنه موجود في الجامعات التالية")}
        </h1>
        <div className="absolute top-44"></div>
      </div>
      <div>
        <div className="flex flex-wrap cursor-pointer max-lg:mr-20 max-lg:w-[75rem]">
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="/altnbash"
              src={images[lang].altnbash}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={altnbashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة ألتن باش")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../ankraMedipol"
              src={images[lang].ankracover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={ankralogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("أنقرة ميديبول")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أنقرة")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../atilim"
              src={images[lang].altmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={altmlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعةأتيليم")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أنقرة")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../bahcesehir"
              src={images[lang].bashcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={bashlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة بهشة شهير")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../beykent"
              src={images[lang].bakntcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={bakntlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة بيكنت")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            href="../beykoz"
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../beykoz"
              src={images[lang].bakozcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={bakozlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة بيكوز")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../biruni"
              src={images[lang].baroncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={baronlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة بيروني")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../fatih-sultan"
              src={images[lang].fathcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={fathlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة فاتح سلطان محمد")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].francover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              href="../fenerbahce"
              src={franlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة فنربهتشه")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../halic"
              src={images[lang].gleshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={gleshlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة الخليج")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../isik"
              src={images[lang].eshakcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={eshaklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة إيشيك")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../bilgi"
              src={images[lang].blagicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={blagilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />{" "}
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("إسطنبول بيلجي")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../yeni-yuzyil"
              src={images[lang].ynicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={ynilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة يني يوزل")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../arel"
              src={images[lang].arilcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={arillogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة أسطنبول اّريل")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../atls"
              src={images[lang].atlscover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={atlslogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة أسطنبول أطلس")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../aydin"
              src={images[lang].aidncover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={aidnlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة إسطنبول آيدن")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../istinye"
              src={images[lang].astnicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={astnilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة إستينيا")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../ticaret"
              src={images[lang].targtcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={targtlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة إسطنبول تيجاريت")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            href="../topkapi"
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../topkapi"
              src={images[lang].tobkicover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={tobkilogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة توباكي")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            href="../kent"
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../kent"
              src={images[lang].kentcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={kentlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة كينت")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>

          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../kultur"
              src={images[lang].koltrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={koltrlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة كولتور")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../nisnantasi"
              src={images[lang].nishcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={nishlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة نيشانتاشي")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../okan"
              src={images[lang].okancover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={okanlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة اوكان")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../sabahelden"
              src={images[lang].sabahcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={sabahlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة صباح الدين زعيم")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../galta"
              src={images[lang].galtacover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={galtalogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة جالاتا")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../gedik"
              src={images[lang].gedkcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={gedklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة جيديك")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../gelisim"
              src={images[lang].glshcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={glshlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة جيليشيم")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../kadr"
              src={images[lang].kadrcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={kadrlogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة قادر هاس")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../lokman"
              src={images[lang].lokcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={loklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة لقمان الحكيم")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أنقرة")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              src={images[lang].osmcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={osmlogo}
              href="../ostim"
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة أوستيم")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أنقرة")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
          <a
            className="grid bg-[#fff] w-80 h-[25rem] rounded-lg shadow-sm mb-10 ml-4 mr-10 "
            style={{ border: "1px solid #ddd" }}
          >
            <Image
              href="../uskudir"
              src={images[lang].uskcover}
              alt="altnbash"
              className="h-52 rounded-t-lg relative"
              width={1200}
              height={600}
            />
            <Image
              src={usklogo}
              className="w-12 h-12 rounded-full mr-[8.2rem] mt-44 absolute"
            />
            <h1 className="text-center text-3xl  text-yellow-500 font-bold px-2">
              {t("جامعة اسكوادر")}
            </h1>
            <p className="text-xl flex text-gray-600 -mt-3 text-center justify-center px-4">
              <FaMapLocation className="ml-3 mt-1" />

              {t("تركيا -أسطنبول")}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-fuchsia-800 transition-colors px-8 my-2 w-fit font-semibold text-2xl rounded-2xl mx-auto hover:opacity-50"
            >
              {t("سجل الاّن")}
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Search2;
