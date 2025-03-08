"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";

import bashlogo from "../../Public/images/University-logo-BAU.jpg";
import bashcover from "../../Public/images/Bahcesehir-Istanbul.jpg";

import altcover from "../../Public/images/Altinbas-University.jpg";
import altlogo from "../../Public/images/Altinbas-Universitylogo.jpg";

import kentcover from "../../Public/images/Istanbul-Kent-.jpg";
import kentlogo from "../../Public/images/Istanbul-Kent-2 (1).jpg";

import uskcover from "../../Public/images/Uskudar-University.jpg";
import usklogo from "../../Public/images/Uskudar-University-1.jpg";

import glshcover from "../../Public/images/Gelisim-1.jpg";
import glshlogo from "../../Public/images/Gelisim.jpg";

import okancover from "../../Public/images/Okan-1.jpg";
import okanlogo from "../../Public/images/Okan.jpg";
import koltrcover from "../../Public/images/Istanbul-Kultur.jpg";
import koltrlogo from "../../Public/images/Istanbul-Kultur-2.jpg";

import loklogo from "../../Public/images/Lokman-Hekim.jpg";
import lokcover from "../../Public/images/Lokman-Hekim-1.jpg";

import aidncover from "../../Public/images/Istanbul-Aydin.jpg";
import aidnlogo from "../../Public/images/University-logo.jpg";
import atlscover from "../../Public/images/Istanbul-Atlas.jpg";
import atlslogo from "../../Public/images/Istanbul-Atlas-1.jpg";
// بيانات الجامعات مع دعم تعدد اللغات
const universities = {
  ar: [
    {
      id: 1,
      name: "جامعة ألتن باش",
      location: "اسطنبول، تركيا",
      cover: altcover,
      logo: altlogo,
    },
    {
      id: 2,
      name: "جامعة بهشة شهير",
      location: "اسطنبول، تركيا",
      cover: bashcover,
      logo: bashlogo,
    },
    {
      id: 3,
      name: "  جامعه كينت",
      location: "اسطنبول، تركيا",
      cover: kentcover,
      logo: kentlogo,
    },
    {
      id: 4,
      name: "جامعة  كولتور ",
      location: "اسطنبول، تركيا",
      cover: koltrcover,
      logo: koltrlogo,
    },
    {
      id: 5,
      name: "جامعة  لقمان الحكيم",
      location: "اسطنبول، تركيا",
      cover: lokcover,
      logo: loklogo,
    },
    {
      id: 6,
      name: "جامعة اوكان",
      location: "اسطنبول، تركيا",
      cover: okancover,
      logo: okanlogo,
    },
    {
      id: 7,
      name: "جامعة جليشيم",
      location: "اسطنبول، تركيا",
      cover: glshcover,
      logo: glshlogo,
    },
    {
      id: 8,
      name: "جامعة اسكوادر",
      location: "اسطنبول، تركيا",
      cover: uskcover,
      logo: usklogo,
    },
    {
      id: 9,
      name: "جامعة  اسطنبول اّيدن",
      location: "اسطنبول، تركيا",
      cover: aidncover,
      logo: aidnlogo,
    },
    {
      id: 10,
      name: "جامعة اسطنبول أطلس",
      location: "اسطنبول، تركيا",
      cover: atlscover,
      logo: atlslogo,
    },
  ],
  en: [
    {
      id: 1,
      name: "Altınbaş University",
      location: "Istanbul, Turkey",
      cover: altcover,
      logo: altlogo,
    },
    {
      id: 2,
      name: "Bahçeşehir University",
      location: "Istanbul, Turkey",
      cover: bashcover,
      logo: bashlogo,
    },
    {
      id: 3,
      name: "Kent University",
      location: "Istanbul, Turkey",
      cover: kentcover,
      logo: kentlogo,
    },
    {
      id: 4,
      name: "Kültür University",
      location: "Istanbul, Turkey",
      cover: koltrcover,
      logo: koltrlogo,
    },
    {
      id: 5,
      name: "Lokman Hekim University",
      location: "Istanbul, Turkey",
      cover: lokcover,
      logo: loklogo,
    },
    {
      id: 6,
      name: "Okan University",
      location: "Istanbul, Turkey",
      cover: okancover,
      logo: okanlogo,
    },
    {
      id: 7,
      name: "Gelişim University",
      location: "Istanbul, Turkey",
      cover: glshcover,
      logo: glshlogo,
    },
    {
      id: 8,
      name: "Üsküdar University",
      location: "Istanbul, Turkey",
      cover: uskcover,
      logo: usklogo,
    },
    {
      id: 9,
      name: "Istanbul Aydın University",
      location: "Istanbul, Turkey",
      cover: aidncover,
      logo: aidnlogo,
    },
    {
      id: 10,
      name: "Istanbul Atlas University",
      location: "Istanbul, Turkey",
      cover: atlscover,
      logo: atlslogo,
    },
  ],
  fr: [
    {
      id: 1,
      name: "Université Altınbaş",
      location: "Istanbul, Turquie",
      cover: altcover,
      logo: altlogo,
    },
    {
      id: 2,
      name: "Université Bahçeşehir",
      location: "Istanbul, Turquie",
      cover: bashcover,
      logo: bashlogo,
    },
    {
      id: 3,
      name: "Université Kent",
      location: "Istanbul, Turquie",
      cover: kentcover,
      logo: kentlogo,
    },
    {
      id: 4,
      name: "Université Kültür",
      location: "Istanbul, Turquie",
      cover: koltrcover,
      logo: koltrlogo,
    },
    {
      id: 5,
      name: "Université Lokman Hekim",
      location: "Istanbul, Turquie",
      cover: lokcover,
      logo: loklogo,
    },
    {
      id: 6,
      name: "Université Okan",
      location: "Istanbul, Turquie",
      cover: okancover,
      logo: okanlogo,
    },
    {
      id: 7,
      name: "Université Gelişim",
      location: "Istanbul, Turquie",
      cover: glshcover,
      logo: glshlogo,
    },
    {
      id: 8,
      name: "Université Üsküdar",
      location: "Istanbul, Turquie",
      cover: uskcover,
      logo: usklogo,
    },
    {
      id: 9,
      name: "Université Istanbul Aydın",
      location: "Istanbul, Turquie",
      cover: aidncover,
      logo: aidnlogo,
    },
    {
      id: 10,
      name: "Université Istanbul Atlas",
      location: "Istanbul, Turquie",
      cover: atlscover,
      logo: atlslogo,
    },
  ],
  fa: [
    {
      id: 1,
      name: "دانشگاه آلتینباش",
      location: "استانبول، ترکیه",
      cover: altcover,
      logo: altlogo,
    },
    {
      id: 2,
      name: "دانشگاه باغچه‌شهیر",
      location: "استانبول، ترکیه",
      cover: bashcover,
      logo: bashlogo,
    },
    {
      id: 3,
      name: "دانشگاه کِنت",
      location: "استانبول، ترکیه",
      cover: kentcover,
      logo: kentlogo,
    },
    {
      id: 4,
      name: "دانشگاه کولتور",
      location: "استانبول، ترکیه",
      cover: koltrcover,
      logo: koltrlogo,
    },
    {
      id: 5,
      name: "دانشگاه لقمان حکیم",
      location: "استانبول، ترکیه",
      cover: lokcover,
      logo: loklogo,
    },
    {
      id: 6,
      name: "دانشگاه اوکان",
      location: "استانبول، ترکیه",
      cover: okancover,
      logo: okanlogo,
    },
    {
      id: 7,
      name: "دانشگاه گلیشیم",
      location: "استانبول، ترکیه",
      cover: glshcover,
      logo: glshlogo,
    },
    {
      id: 8,
      name: "دانشگاه اوسکودار",
      location: "استانبول، ترکیه",
      cover: uskcover,
      logo: usklogo,
    },
    {
      id: 9,
      name: "دانشگاه استانبول آیدین",
      location: "استانبول، ترکیه",
      cover: aidncover,
      logo: aidnlogo,
    },
    {
      id: 10,
      name: "دانشگاه استانبول اطلس",
      location: "استانبول، ترکیه",
      cover: atlscover,
      logo: atlslogo,
    },
  ],
  tr: [
    {
      id: 1,
      name: "Altınbaş Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: altcover,
      logo: altlogo,
    },
    {
      id: 2,
      name: "Bahçeşehir Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: bashcover,
      logo: bashlogo,
    },
    {
      id: 3,
      name: "Kent Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: kentcover,
      logo: kentlogo,
    },
    {
      id: 4,
      name: "Kültür Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: koltrcover,
      logo: koltrlogo,
    },
    {
      id: 5,
      name: "Lokman Hekim Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: lokcover,
      logo: loklogo,
    },
    {
      id: 6,
      name: "Okan Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: okancover,
      logo: okanlogo,
    },
    {
      id: 7,
      name: "Gelişim Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: glshcover,
      logo: glshlogo,
    },
    {
      id: 8,
      name: "Üsküdar Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: uskcover,
      logo: usklogo,
    },
    {
      id: 9,
      name: "İstanbul Aydın Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: aidncover,
      logo: aidnlogo,
    },
    {
      id: 10,
      name: "İstanbul Atlas Üniversitesi",
      location: "İstanbul, Türkiye",
      cover: atlscover,
      logo: atlslogo,
    },
  ],
  ru: [
    {
      id: 1,
      name: "Университет Алтынбаш",
      location: "Стамбул, Турция",
      cover: altcover,
      logo: altlogo,
    },
    {
      id: 2,
      name: "Университет Бахчешехир",
      location: "Стамбул, Турция",
      cover: bashcover,
      logo: bashlogo,
    },
    {
      id: 3,
      name: "Университет Кент",
      location: "Стамбул, Турция",
      cover: kentcover,
      logo: kentlogo,
    },
    {
      id: 4,
      name: "Университет Кюльтюр",
      location: "Стамбул, Турция",
      cover: koltrcover,
      logo: koltrlogo,
    },
    {
      id: 5,
      name: "Университет Локман Хеким",
      location: "Стамбул, Турция",
      cover: lokcover,
      logo: loklogo,
    },
    {
      id: 6,
      name: "Университет Окан",
      location: "Стамбул, Турция",
      cover: okancover,
      logo: okanlogo,
    },
    {
      id: 7,
      name: "Университет Гелишим",
      location: "Стамбул, Турция",
      cover: glshcover,
      logo: glshlogo,
    },
    {
      id: 8,
      name: "Университет Ускюдар",
      location: "Стамбул, Турция",
      cover: uskcover,
      logo: usklogo,
    },
    {
      id: 9,
      name: "Стамбульский университет Айдын",
      location: "Стамбул, Турция",
      cover: aidncover,
      logo: aidnlogo,
    },
    {
      id: 10,
      name: "Стамбульский университет Атлас",
      location: "Стамбул, Турция",
      cover: atlscover,
      logo: atlslogo,
    },
  ],
};

export default function UniversitiesSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "ar"; // تحديد اللغة الحالية
  const universitiesList = universities[lang] || universities["ar"]; // في حال لم تكن اللغة مدعومة، يتم عرض العربية كافتراضية

  return (
    <section className="text-center">
      {/* عنوان مع أنميشن */}
      <motion.h1
        className="text-center text-3xl font-bold bg-fuchsia-900 text-white rounded-full tracking-wide max-lg:mr-[45%] py-2 mx-auto w-fit px-8 sm:text-5xl"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {t("أفضل الجامعات")}
      </motion.h1>

      {/* سلايدر الجامعات */}
      <div className="overflow-hidden w-full py-10 h-auto mb-5 mt-3 rounded-lg pl-5 bg-white max-sm:w-[70rem] max-lg:w-[70rem] max-lg:mx-8 max-sm:mx-8">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
            repeatType: "loop",
          }}
        >
          {[...universitiesList].map((uni, index) => (
            <motion.div
              key={index}
              className="bg-white min-w-72 h-auto pb-2 rounded-lg shadow-lg border border-gray-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={uni.cover}
                alt={uni.name}
                width={288}
                height={128}
                className="h-32 w-72 rounded-t-lg"
              />
              <Image
                src={uni.logo}
                alt={uni.name}
                width={32}
                height={32}
                className="w-8 h-8 z-10 -mt-6 rounded-full mx-auto"
              />
              <h2 className="text-red-700 mx-auto font-semibold">{uni.name}</h2>
              <strong className="text-gray-700 mx-auto  font-semibold text-base flex items-center justify-center gap-2">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <span>{uni.location}</span>
              </strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
