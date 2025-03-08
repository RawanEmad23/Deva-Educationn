"use client";
import Image from "next/image";
import cover from "../../Public/images/man.jpg";
import ManNahno from "../_components/ManNahno";
import hadf from "../../Public/images/WhatsApp Image 2024-12-31 at 12.40.13 AM.jpeg";
import massega from "../../Public/images/massage.jpg";
import serch from "../../Public/images/موقع6.jpg";
import logo from "../../Public/images/logo-png.png";
import { motion } from "framer-motion";
import trk from "../../Public/images/lmaza.jpg";
import {
  FaHandHoldingHand,
  FaHandshakeSimple,
  FaHandsPraying,
} from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { SiPrefect } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";

import { FaHeart } from "react-icons/fa";
import Contact from "../_components/Contact";
import coveren from "../../Public/images/mannahno-en.jpg";
import coverfa from "../../Public/images/mannahno-fa.jpg";
import coverfr from "../../Public/images/mannahno-fr.jpg";
import covertr from "../../Public/images/mannahno-tr.jpg";
import coverru from "../../Public/images/mannahno-ru.jpg";
const images = {
  ar: {
    cover: cover,
  },
  en: {
    cover: coveren,
  },
  fr: {
    cover: coverfr,
  },
  fa: {
    cover: coverfa,
  },
  tr: {
    cover: covertr,
  },
  ru: {
    cover: coverru,
  },
};
const getImage = (lang, type) => {
  return images[lang]?.[type] || defaultImages[type];
};
import { useTranslation } from "react-i18next";
const mannahno = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar";
  return (
    <>
      <Image
        src={getImage(currentLang, "cover")}
        className=" h-[80vh]  md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem]  max-sm:object-cover"
      />
      <div className="grid rounded-3xl mx-auto mt-2 mb-9 max-sm:w-[60rem] max-sm:mr-[20%] max-lg:min-w-[70rem] max-lg:mr-20">
        {/* <Image src={logo} className="mx-auto w-64" /> */}
       
          
          <h1 className=" text-3xl font-bold mx-auto tracking-wide rounded-tl-2xl mt-28 border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2">
          {t(" من هم Deva Education؟")}
      </h1>
        
        <div className="text-[#7A0066CB] pt-4 text-lg px-8 leading-9 font-bold">
          {t(
            " تأسست Deva Education عام 2018 برؤية حديثة تهدف إلى إحداث نقلة نوعية في مجال الإرشاد الأكاديمي الدولي، من خلال تمكين الطلاب من اتخاذ قراراتواعية ومدروسة بشأن مسارهم التعليمي في تركيا. تؤمن Deva Education بأن التعليم هو مفتاح النجاح، لذا تقدم خدمات متكاملة تبدأ من التوجيه الأكاديمي الشخصي، مرورًا بمساعدة الطلاب في اختيار البرامج والجامعات  التي تتناسب مع تطلعاتهم، وصولًا إلى تسهيل إجراءات التسجيل والإقامة في  تركيا. ما يميز Deva Education هو التزامها بالابتكار والتحديث المستمر،  حيث تقدم برامج إرشادية مصممة خصيصًا لتلبية احتياجات الطلاب، إضافة إلى  تنظيم ورش عمل تدريبية وجلسات توجيه فردية تهدف إلى تطوير مهارات الطلاب  الأكاديمية والشخصية. منذ انطلاقتها، ساعدت الشركة مئات الطلاب الدوليينفي تحقيق أحلامهم الأكاديمية، بفضل شراكاتها القوية مع أبرز الجامعات التركية، وتقديمها فرصًا تعليمية مميزة تشمل منحًا وخصومات حصرية لجميع  المراحل الدراسية."
          )}
        </div>
      </div>
      {/* <div className="flex justify-between max-lg:w-[75rem] max-lg:mr-8  items-center bg-gradient-to-r from-pink-50 to-white rounded-lg p-8 border-t border-dashed border-spacing-16 border-gray-600 max-sm:w-[75rem]">
        <div className="relative w-2/3 flex  items-center mt-12">
          <Image
            src={hadf}
            alt="Student"
            className="w-[35rem] h-68 rounded-l-full object-cover"
          />

        </div>
        <div className="max-w-md mt-12">
          <h1 className="text-5xl font-bold text-gray-900">
            {t("ماهي")}
            <span className="text-yellow-500"> {t("أهدافنا ؟")}</span>
          </h1>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            {t("تمكين الطلاب أكاديميًا وثقافيًا")}
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            {t("تأسيس اكبر هوية تعليمية عالمية")}
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            {t("دعم تطوير المهارات الشخصية والقيادية")}
          </p>
          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            {t("المساهمة في بناء مجتمع معرفي")}
          </p>

          <p className="mt-12 text-white bg-fuchsia-950 font-bold text-2xl leading-relaxed px-4 py-2 rounded-r-full">
            {t("الاستدامة والمسؤولية المجتمعية")}
          </p>
        </div>
    
      </div>
      <div className="flex max-lg:w-[75rem] max-lg:mr-12 justify-between px-10 mt-16 border-x-2 rounded-3xl border-gray-300 border-y-4 rounded-r-full max-sm:w-[70rem] max-sm:mr-36">
        <div className="grid mr-20 ">
          <h1 className="bg-fuchsia-800  font-bold w-fit h-20 mt-5 tracking-wider text-5xl px-12 pt-3 rounded-3xl  ">
            {t("رسالتنا")}
          </h1>
          <p className="text-xl font-bold text-gray-500 pl-5 -mt-20">
            {t(
              "مستشار تعليمي محترف يتمتع بخبرة واسعة، يكرس جهوده لمساندة الطلاب الأجانب الراغبين في الدراسة بتركيا، عبر تقديم فرص تعليمية متميزة وخدمات متكاملة تشمل توجيههم لاختيار التخصص الأمثل، تأمين القبول الجامعي، المساعدة في التسجيل والإقامة، مع توفير دعم مستمر يرافقهم طوال رحلتهم التعليمية وصولاً إلى التخرج، لضمان مستقبل أكاديمي ناجح."
            )}
          </p>
        </div>
        <Image src={massega} className="w-96 ml-20" />
      </div> */}
             <div className=" bg-gray-100 rounded-2xl h-[70vh] mx-9 my-16 max-lg:w-[77rem]">
        <h1
          className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4  px-6 rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#822253] mb-8"
          style={{ fontFamily: "Exo 2, sans-serif" }}
        >
          {" "} {t("ماهي")} {t("أهدافنا ؟")}
        </h1>
        <motion.div
          className="flex justify-center text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid ml-16 max-lg:mr-3">
            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              ✅   {t("تمكين الطلاب أكاديميًا وثقافيًا")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              ✅{" "}
              {t("تأسيس اكبر هوية تعليمية عالمية")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              ✅  {t("دعم تطوير المهارات الشخصية والقيادية")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              ✅{" "}
              {t("المساهمة في بناء مجتمع معرفي")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold max-lg:leading-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              ✅{" "}
              {t("الاستدامة والمسؤولية المجتمعية")}
              <br className="max-lg:hidden" />
            
            </motion.h1>
          </div>

          <Image
            src={trk}
            className="w-[31rem] h-[29rem] -mt-24 max-lg:w-"
            alt="Turkey Image"
          />
        </motion.div>
      </div>
      {/* <div className="flex justify-between px-10 mt-16 max-lg:mr-12 max-lg:w-[70rem]    max-sm:w-[70rem]">
        <Image src={serch} className="w-96 ml-20 " />
        <div className="grid mr-20 max-sm:-mr-3  ">
          <h1 className="bg-fuchsia-800 font-bold w-fit h-20 mt-5 tracking-wider text-5xl px-12 pt-3 mr-80 rounded-3xl max-sm:mr-52 max-lg:mr-52">
            {t("رؤيتنا")}
          </h1>
          <p className="text-xl font-bold text-gray-500 px-5 -mt-20">
            {t(
              "بوابتك الأولى لتحقيق طموحاتك الأكاديمية في تركيا. نقدم خدمات متكاملة للطلاب الدوليين تشمل الاستشارات التعليمية، القبول الجامعي، والإرشاد الأكاديمي، مع التزام تام بالاحترافية والمصداقية"
            )}
          </p>
        </div>
      </div> */}



<div >
<h1 className="bg-fuchsia-800 font-bold w-fit h-20 mt-5 tracking-wider text-5xl px-12 pt-3 mr-80 rounded-3xl max-sm:mr-52 max-lg:mr-52">
            {t("رؤيتنا")}
          </h1>
</div>


       
<h1 className=" text-3xl font-bold mx-auto tracking-wide rounded-tl-2xl mt-28 border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2">
{t("بعض معاير ومبادئ Deva Education")}
      </h1>

      <div className="flex flex-wrap gap-9 max-lg:w-[75rem] max-lg:mr-8  justify-center px-6 my-10 max-sm:w-[70rem] max-sm:mr-20">
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHandshakeSimple className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("الثقة والاحترام المتبادل")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "تبني علاقات قوية مع الطلاب تعتمد على الثقة، الاحترام، والمسؤولية"
            )}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHandsPraying className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("النمو المستمر")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "تشجع على التعلم المستمر وتطوير مهارات الطلاب والمعلمين على حد سواء"
            )}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHandHoldingHand className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("المسؤولية والالتزام")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "تحمل المسؤولية والالتزام بتقديم أفضل ما يمكن لضمان نجاح الطلاب في مسيرتهم التعليمية"
            )}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <GiTeamIdea className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("الابتكار")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "تسعى الشركة إلى تبني أساليب تعليمية حديثة ومبتكرة لضمان تجربة تعليمية متميزة"
            )}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FaHeart className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("النزاهة")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t("تعمل الشركة بصدق وشفافية في جميع تعاملاتها مع الطلاب والشركاء")}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <IoSchoolOutline className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("الاستدامة")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "تسعى الشركة إلى تحقيق الاستدامة في تقديم التعليم والموارد بطريقة تواكب تطورات العصر"
            )}
          </p>
        </div>

        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <SiPrefect className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("الالتزام بالجودة")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "تضمن الشركة تقديم خدمات تعليمية ذات معايير عالية تلبي احتياجات الطلاب"
            )}
          </p>
        </div>
        <div className="grid bg-fuchsia-800 font-bold rounded-xl px-6 w-72 h-72 hover:scale-105">
          <FiTrendingUp className="text-white size-16 mx-auto mt-4" />
          <h1 className="text-2xl mx-auto -mt-9 text-yellow-400">
            {t("الدعم الشامل")}
          </h1>
          <p className="text-lg text-center -mt-10">
            {t(
              "توفر بيئة تعليمية داعمة تساعد الطلاب على التفوق الأكاديمي والنمو الشخص"
            )}
          </p>
        </div>
      </div>
      <hr className="mx-auto w-10/12 pt-8" />
      <div className="grid bg-fuchsia-800 pl-6 mr-[8.25%] max-lg:w-[75rem] max-lg:rounded-lg max-lg:mr-8 max-lg:px-6 overflow-hidden pr-9 mt-20 w-11/12 rounded-r-full max-sm:w-[75rem] max-sm:rounded-lg max-sm:px-5 max-sm:text-center">
        <Image src={logo} className="w-56 mt-5 mx-auto" />
        <h1 className="text-3xl text-yellow-500 font-bold mx-auto mb-5 mt-2">
          {t("لماذا تختار Deva Education")}
        </h1>
        <p className="text-xl pr-20 font-bold py-3 max-sm:p-0 max-sm:-mr-6 max-lg:-mr-24">
          <b className="p-1">✅</b>

          {t(
            "الاحترافية والمصداقية: تقدم Deva Education خدمات استشارية موثوقة تعتمد على الشفافية والمصداقية في جميع مراحل القبول الجامعي."
          )}
        </p>
        <p className="text-xl mx-auto font-bold py-3 max-sm:-mr-3 max-lg:-mr-4">
          <b className="p-1">✅</b>

          {t(
            "تقديم حلول متكاملة: من استشارات اختيار التخصص والجامعة، إلى متابعة طلب القبول والإقامة، نقدم لك حزمة متكاملة من الخدمات التعليمية"
          )}
        </p>
        <p className="text-xl mx-auto font-bold py-3 max-sm:-mr-3 max-lg:-mr-4">
          <b className="p-1">✅</b>

          {t(
            "شراكات مع أفضل الجامعات: شراكاتنا الواسعة مع الجامعات التركية المرموقة تضمن لك الوصول إلى أفضل البرامج التعليمية بخصومات مميزة"
          )}
        </p>
        <p className="text-xl pr-20 font-bold py-3 max-sm:pr-0 max-sm:-mr-32 max-lg:-mr-24">
          {t(
            "دعم مخصص للطلاب: نؤمن بأن كل طالب لديه احتياجات فريدة، لذا نقدم استشارات مخصصة تراعي أهدافك الأكاديمية والمهنية"
          )}
        </p>
        <p className="text-xl pr-20 font-bold py-3 max-sm:pr-0 max-sm:-mr-24 max-lg:-mr-24">
          <b className="p-1">✅</b>

          {t(
            "فريق ذو خبرة: يضم فريقنا نخبة من المستشارين التعليميين ذوي الخبرة في التعامل مع الطلاب الدوليين، لتقديم تجربة سلسة وناجحة"
          )}
        </p>
        <p className="text-xl pr-20 font-bold py-3 max-sm:pr-0 max-sm:-mr-3 max-lg:-mr-[5.8rem]">
          <b className="p-1">✅</b>
          {t(
            "خدمات ما بعد القبول: لا ينتهي دورنا عند حصولك على القبول الجامعي بل نستمر في دعمك من خلال خدمات الإقامة و معادلة الشهادات والتوجيه"
          )}
        </p>
        <p className="text-xl pr-28 font-bold py-3 max-lg:absolute max-lg:mt-[78%] max-lg:-mr-12  max-sm:pr-0">
          {t("الأكاديمي واكتشاف أروع الأماكن الترفيهية والثقافية")}
        </p>
        <p className="text-2xl text-yellow-400 mx-auto font-bold py-6">
          {t("Deva Education – نرسم طريقك نحو مستقبل أكاديمي مشرق")}
        </p>
      </div>
      <Contact />
    </>
  );
};

export default mannahno;
