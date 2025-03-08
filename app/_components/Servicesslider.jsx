import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import Lottie from 'lottie-react'; 
import { useTranslation } from 'react-i18next'; 
import car from "../../Public/Animation/car.json";
import call2 from "../../Public/Animation/call2.json";
import t4 from "../../Public/images/saydala.jpg";
import t5 from "../../Public/images/basry.jpg";
import t6 from "../../Public/images/asnan.jpg";
import ticekt from "../../Public/Animation/ticket.json";
import mony from '../../Public/Animation/mony.json';
import mos from '../../Public/Animation/mos.json';
import bank from '../../Public/Animation/bank.json';
import phone from '../../Public/Animation/phone.json';

const SliderComponent = () => {
  const { t, i18n } = useTranslation();


  const items = [
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out  font-bold rounded-3xl p-6 bg-[#eed1e8] text-[#7a0066c6]  h-full">
      <Lottie className="w-40 mx-auto" animationData={car} />
      <h1 className={`font-bold mx-auto text-center py-4 ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("تيسير تنقلاتك داخل المدينة")}
      </h1>
      <p className={`font-semibold text-center ${i18n.language !== "ar" ? "text-lg" : "text-xl"}`}>
        {t("✨نقدّم لك كارت مواصلات عامة فور وصولك إلى تركيا لتسهيل تنقلاتك اليومية داخل المدينة براحة وسهولة وتسليم الكارت وتفعيله عند وصولك مباشرةوشرح آلية استخدام الكارت والاستفادة منه")}
      </p>
    </div>,
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out  font-bold rounded-3xl p-6 text-[#eed1e8] bg-fuchsia-800 h-full">
      <Lottie className="w-32 mx-auto" animationData={call2} />
      <h1 className={`font-bold mx-auto text-center py-4 ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("مرشد تعليمي وخط ساخن لخدمتك")}
      </h1>
      <p className={`font-semibold text-center ${i18n.language !== "ar" ? "text-lg" : "text-xl"}`}>
        {t("✨نقدّم لك دعمًا تعليميًا متواصلاً طوال العام لمساعدتك في كل خطوة من رحلتك الأكاديمية في تركيا ونصائح مستمرة حول الأداء الدراسي واختيار المواد والاستعداد للامتحانات")}
      </p>
    </div>,
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out  font-bold rounded-3xl  p-6 bg-[#eed1e8] text-[#7a0066c6] h-full">
      <div className="flex gap-12 mx-auto">
        <img src={t4} alt="t4" className="w-24 rounded-full" />
        <img src={t5} alt="t5" className="w-24 rounded-full" />
        <img src={t6} alt="t6" className="w-24 rounded-full" />
      </div>
      <h1 className={`font-bold mx-auto text-center py-4 ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("هدايا Deva Education")}
      </h1>
      <p className={`font-semibold text-center ${i18n.language !== "ar" ? "text-lg" : "text-xl"}`}>
        {t("✨طلاب التخصصات الطبية (طب بشري، طب أسنان، صيدلة) سيحصلون على تذكرة طيران مجانية")}
      </p>
    </div>,
    <div className="grid   hover:shadow-xl transition-all duration-300 ease-in-out font-bold rounded-3xl p-6 text-[#eed1e8] bg-fuchsia-800 h-full">
      <Lottie className="w-44 mx-auto" animationData={ticekt} />
      <h1 className={`font-bold mx-auto py-4 text-center ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("إصدار الإقامة الطلابية في تركيا")}
      </h1>
      <p className={`font-bold text-center ${i18n.language !== "ar" ? "text-lg font-semibold" : "text-xl"}`}>
        {t("✨نقدّم لك خدمة مساعدة في إصدار الإقامة الطلابية في تركيا، لنوفر عليك عناء الإجراءات المعقدة، حيث يتولى فريقنا المؤهل كل التفاصيل")}
      </p>
    </div>,
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out font-bold rounded-3xl  p-6 bg-[#eed1e8] text-[#7a0066c6]  h-full">
      <Lottie className="w-32 mx-auto" animationData={mony} />
      <h1 className={`font-bold mx-auto text-center py-4 ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("ضمان إكمال الإجراءات بسلاسة")}
      </h1>
      <p className={`font-bold text-center ${i18n.language !== "ar" ? "text-lg font-semibold" : "text-xl"}`}>
        {t("✨نحن نقدم لك دعمًا شاملاً في دفع رسوم الإقامة الطلابية وترجمة الأوراق الرسمية، للتأكد من إتمام كافة إجراءات الإقامة بشكل دقيق")}
      </p>
    </div>,
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out  font-bold rounded-3xl p-6 text-[#eed1e8] bg-fuchsia-800  h-full">
      <Lottie className="w-32 mx-auto" animationData={mos} />
      <h1 className={`font-bold mx-auto text-center py-4 text-[#eed1e8] ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("تجربة تسجيل ميسّرة")}
      </h1>
      <p className={`font-bold text-center ${i18n.language !== "ar" ? "text-lg font-semibold" : "text-xl"}`}>
        {t("✨نقدّم لك خدمة المرافقة الشخصية أثناء التسجيل الجامعي لضمان إتمام جميع الإجراءات بسهولة ووضوح وحل أي مشكلات قد تواجهك أثناء التسجيل")}
      </p>
    </div>,
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out  font-bold rounded-3xl p-6 bg-[#eed1e8] text-[#7a0066c6]  h-full">
      <Lottie className="w-36 mx-auto" animationData={bank} />
      <h1 className={`font-bold mx-auto text-center py-4 ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("فتح حساب بنكي للطلاب")}
      </h1>
      <p className={`font-bold text-center ${i18n.language !== "ar" ? "text-lg font-semibold" : "text-xl"}`}>
        {t("✨نقدّم لك خدمة فتح حساب بنكي في تركيا لضمان تسهيل معاملاتك المالية بأمان وراحة وتفعيل الخدمات المصرفية مثل تفعيل البطاقة البنكية والخدمات الإلكترونية")}
      </p>
    </div>,
    <div className="grid  hover:shadow-xl transition-all duration-300 ease-in-out  font-bold rounded-3xl p-6 text-[#eed1e8] bg-fuchsia-800  h-full">
      <Lottie className="w-32 mx-auto" animationData={phone} />
      <h1 className={`font-bold mx-auto text-center py-4 text-[#eed1e8] ${i18n.language !== "ar" ? "text-2xl max-lg:text-xl max-sm:text-lg" : "text-3xl max-lg:text-2xl max-sm:text-2xl"}`}>
        {t("تبقى على اتصال منذ يومك الأول")}
      </h1>
      <p className={`font-bold text-center ${i18n.language !== "ar" ? "text-lg font-semibold" : "text-xl"}`}>
        {t("✨نقدّم لك خط جوال مجاني لمدة شهر كامل عند وصولك إلى تركيا، لتبقى متصلاً بأحبائك وتدير شؤونك بسهولة منذ اللحظة الأولى و مساعدتك في تفعيل الخط وضبط الإعدادات عند الحاجة")}
      </p>
    </div>,
  ];

  return (
    <div className="flex justify-center mx-16 mb-8 my-10 gap-4 max-sm:w-[75rem] max-lg:w-[75rem] max-sm:mr-10 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={40} 
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10, 
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
{/* 
     
      <div className="pt-10 flex justify-between">
        <div className="swiper-button-next ml-16 text-fuchsia-800 "></div>
        <div className="swiper-button-prev pr-10 text-fuchsia-800 "></div>
      </div> */}
    </div>
  );
};

export default SliderComponent;