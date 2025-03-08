"use client";
import Image from "next/image";
import cover from "../../Public/images/cover-servises.jpg";
import coverfa from "../../Public/images/cover-fa.jpg";
import coveren from "../../Public/images/cover-E.jpg";
import coverfr from "../../Public/images/cover-f.jpg";
import covertr from "../../Public/images/cover-t.jpg";
import coverru from "../../Public/images/cover-r.jpg";
import logo from "../../Public/images/logo-png.png";
import ani from "../../Public/Animation/ani.json";
import call from "../../Public/Animation/call.json";
import call2 from "../../Public/Animation/call2.json";
import call3 from "../../Public/Animation/call3.json";
import plane2 from "../../Public/Animation/plane2.json";
import ticekt from "../../Public/Animation/ticket.json";
import mony from "../../Public/Animation/mony.json";
import mos from "../../Public/Animation/mos.json";
import bank from "../../Public/Animation/bank.json";
import phone from "../../Public/Animation/phone.json";
import car from "../../Public/Animation/car.json";
import sale from "../../Public/images/sale2.jpg";
import t4 from "../../Public/images/saydala.jpg";
import t5 from "../../Public/images/basry.jpg";
import t6 from "../../Public/images/asnan.jpg";
import Khatamat from "../../Public/images/khadamat (2).jpg"
import Lottie from "lottie-react";
import { TiFlowSwitch } from "react-icons/ti";
import Visit from "../_components/visit";
import Servicesslider from "../_components/Servicesslider";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useInView } from "react-intersection-observer";
const options = {
  triggerOnce: false, // لجعل التأثير يتكرر
  threshold: 0.1, // متى يتم تفعيل الظهور (0.1 = عندما يكون 10% من العنصر مرئيًا)
};
const fadeInLeft = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const fadeInRight = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const images = {
  ar: {
    cover: cover,
    logo: logo,
  },
  en: {
    cover: coveren,
    logo: logo,
  },
  fr: {
    cover: coverfr,
    logo: logo,
  },
  fa: {
    cover: coverfa,
    logo: logo,
  },
  tr: {
    cover: covertr,
    logo: logo,
  },
  ru: {
    cover: coverru,
    logo: logo,
  },
};
const getImage = (lang, type) => {
  return images[lang]?.[type] || defaultImages[type];
};
const khadamat = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const { ref: ref1, inView: inView1 } = useInView(options);
  const { ref: ref2, inView: inView2 } = useInView(options);
  const { ref: ref3, inView: inView3 } = useInView(options);
  const { ref: ref4, inView: inView4 } = useInView(options);

  const { ref: ref6, inView: inView6 } = useInView(options);
  const { ref: ref7, inView: inView7 } = useInView(options);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar"; 

  return (
    <>
      <Image
        src={getImage(currentLang, "cover")}
        className="w-full h-[80vh] max-sm:h-[70vh] max-lg:min-w-[80rem]"
      />

<div className="flex items-center justify-center gap-16 mx-10 mt-28 max-lg:flex-col max-lg:text-center">
      
      
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, x: -50 }}
        animate={inView6 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-[#7A0066] to-[#A34DA0] p-8 rounded-xl shadow-2xl max-lg:w-[90%] w-2/4"
      >
        <h1 className="text-3xl font-bold text-white tracking-wide leading-relaxed">
          {t("اليكم بعض الخدمات التي نقدمها في Deva Education وهي الخدمات الطلابية مثل توجيه النصائح وغيرها من الخدمات")}
          <br />
          {t("وخدمات مابعد القبول مثل التامين الصحي وغيرها من الخدمات التي ستدهشك")}
        </h1>
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#A34DA0] rounded-full blur-xl opacity-50"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#A34DA0] rounded-full blur-xl opacity-50"></div>
      </motion.div>

      
      <motion.div
        ref={ref7}
        initial={{ opacity: 0, x: 50 }}
        animate={inView7 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#7A0066] rounded-full blur-xl opacity-30"></div>
        <Image src={Khatamat} className="w-80 rounded-xl shadow-xl" alt="خاتمات" />
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#7A0066] rounded-full blur-xl opacity-30"></div>
      </motion.div>
      
    </div>
     
        <div className="relative flex flex-col items-center">
  
  <h1 className=" text-3xl font-bold mx-auto tracking-wide mb-8 rounded-tl-2xl mt-28 border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2">
  {t("خدمتنا الطلابية")}
</h1>


  <svg
    className="absolute top-full mt-4 w-14 h-14 mb-6 text-fuchsia-700 animate-bounce"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21c6-3 9-8 9-13 0-2-1-4-3-4s-3 2-3 4 1 4 3 4 2-1 2-1" />
    <path d="M12 19l-3 2 3 2" />
  </svg>
</div>

<div className=" mb-52">
      
      <div className="flex gap-16 justify-center mx-20 max-sm:w-[75rem] max-lg:w-[75rem] max-lg:mr-5 mb-7 max-sm:mr-5">
        <motion.div
          ref={ref1}
          className="bg-[#eed1e8] grid p-4 rounded-3xl w-1/2 hover:opacity-70"
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Lottie className="w-24 mx-auto" animationData={ani} />
          <h1 className="font-bold text-4xl text-center py-4 text-[#7a0066c6] mx-auto">
            {t("القبول الجامعي المجاني")}
          </h1>
          <p className="text-xl font-bold text-center text-[#7a0066c6]">
            {t(
              "نقدّم لك خدمة متكاملة لتحصيل القبولات الجامعية في أفضل الجامعات التركية مجاناّّ وبسهولة واحترافية، من خلال فريقنا المكوّن من أكثر من 60 مستشارًا أكاديميًا مؤهلًا لمساعدتك في كل خطوة"
            )}
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="bg-fuchsia-800 hover:opacity-70 grid p-4 rounded-3xl w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Lottie className="w-24 mx-auto" animationData={call} />
          <h1 className="font-bold text-4xl mx-auto text-center py-4 text-[#eed1e8]">
            {t("استشارة تعليمية مجانية")}
          </h1>
          <p className="text-xl font-bold text-center text-[#eed1e8]">
            {t(
              "نقدّم لك استشارة تعليمية مجانية شاملة تساعدك في التخطيط لمستقبلك الدراسي في تركيا بخطوات واضحة ومدروسة. فريقنا المؤلف من أكثر من 60 مستشارًا أكاديميًا معتمدًا جاهز لتقديم المساعدة في توجيهك لاختيار التخصص الأنسب لمهاراتك وطموحاتك"
            )}
          </p>
        </motion.div>
      </div>

      <div className="flex gap-16 justify-center mx-20 max-sm:w-[75rem] max-sm:mr-5 max-lg:w-[75rem] max-lg:mr-5">
        <motion.div
          ref={ref3}
          className="bg-fuchsia-800 grid p-4 rounded-3xl w-1/2 hover:opacity-70"
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Lottie className="w-24 mx-auto" animationData={call2} />
          <h1 className="font-bold text-4xl text-center py-4 text-[#eed1e8] mx-auto">
            {t("خدمة المتابعة المجانية")}
          </h1>
          <p className="text-xl font-bold text-center text-[#eed1e8]">
            {t(
              " نقدم لك خدمة متابعة مجانية شاملة لمرافقتك خطوة بخطوة خلال رحلتك التعليمية في تركيا، حيث يحرص فريقنا المكوّن من أكثر من 60 مستشارًا أكاديميًا على تقديم الدعم الكامل في تحديث مستمر لملفك الأكاديميوتقديم النصائح الأكاديمية"
            )}
          </p>
        </motion.div>

        <motion.div
          ref={ref4}
          className="bg-[#eed1e8] hover:opacity-70 grid p-4 rounded-3xl w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Lottie className="w-40 mx-auto" animationData={call3} />
          <h1 className="font-bold text-4xl text-center mx-auto -mt-10 py-4 text-[#7a0066c6]">
            {t("نحن معك دائمًا")}
          </h1>
          <p className="text-xl font-bold text-center text-[#7a0066c6]">
            {t(
              " نحن هنا لتقديم المشورة التي تحتاجها لتحقيق أهدافك الأكاديمية بثقة ونجاح ونصائح للتأقلم مع الثقافة التركية، المعيشة وقديم نصائح حول تنظيم الوقت وتحسين الأداء الدراسي والتميز الأكاديمي"
            )}
          </p>
        </motion.div>
      </div>
    </div>

  <Servicesslider></Servicesslider>
    
     
      <p className="text-gray-100 bg-gradient-to-r max-lg:w-[75rem] max-lg:mr-8   from-fuchsia-800 to-[#eed1e8] py-4 font-bold text-xl text-center  w-11/12 rounded-full mx-auto my-4 px-4 max-sm:w-[75rem] max-sm:mr-10">
        {t(
          " سجل الآن واستفد من خصومات تصل إلى 75% على رسوم الجامعة. نحن هنا لدعمك من أول يوم حتى تخرجك. لا تتردد في التواصل معنا لأي استفسار، ونتمنى لك كل النجاح والتوفيق!"
        )}
      </p>
      <Visit />
    </>
  );
};

export default khadamat; 
