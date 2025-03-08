"use client";
import Image from "next/image";
import cover from "../../Public/images/كافر-7.jpg";
import lang from "../../Public/images/lang,png.jpg";
import tkl from "../../Public/images/tkl.png";
import mnah from "../../Public/images/موقع11-.jpg";
import lef from "../../Public/images/موقع9.jpg";
import plan from "../../Public/images/plan,png.jpg";
import mgal from "../../Public/images/mgal.png";
import tak from "../../Public/images/موقع-14.jpg";
import wrak from "../../Public/images/wark.jpg";
import trk from "../../Public/images/lmaza.jpg";
import fakr from "../../Public/images/fakr.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import broad from "../../Public/images/broad.jpg";
const Dalil = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar";

  const steps = [
    {
      number: "1",
      title: t("جودة التعليم"),
      description: t(
        "تتميز الجامعات التركية بتوفير كافة التخصصات فيها، الأمر الذي يلبي كافة اهتمامات الطلاب الذين ينوون إكمال مسيرتهم التعليمية في تركيا."
      ),
    },

    {
      number: "2",
      title: t("البيئة الثقافية والتاريخية"),
      description: t(
        "تركيا تجمع بين الشرق والغرب، مما يوفر بيئة ثقافية مميزة ومتنوعة والعديد من المواقع التاريخية والسياحية"
      ),
    },

    {
      number: "3",
      title: t("سهولة القبول"),
      description: t(
        "إجراءات القبول في بعض الجامعات تكون أسهل من بعض الدول الغربية"
      ),
    },

    {
      number: "4",
      title: t("تكاليف دراسية معقولة"),
      description: t(
        "الرسوم الدراسية أقل مقارنة بدول أوروبا وأمريكا وتكاليف المعيشة أيضًا منخفضة نسبيًا مقارنة بالعديد من الدول الأوروبية"
      ),
    },

    {
      number: "5",
      title: t("الاعترافات"),
      description: t(
        "تركيا تضم العديد من الجامعات المرموقة والمعترف بها عالميًا وتقدم بعض الجامعات برامج باللغة الإنجليزية."
      ),
    },
  ];
  const stepss = [
    {
      number: "1",
      title: t("اختلاف النظام التعليمي"),
      description: t(
        "النظام التعليمي قد يختلف عن بعض الدول العربية أو الأوروبية، مما يستدعي بعض التكيف"
      ),
    },

    {
      number: "2",
      title: t("تفاوت جودة التعليم"),
      description: t(
        "جودة التعليم تختلف بشكل كبير بين الجامعات الحكومية والخاصة"
      ),
    },

    {
      number: "4",
      title: t("لغة الدراسة"),
      description: t(
        "تعتبر الدراسة باللغة التركية في الجامعات التركية من السلبيات التي قد يواجهها الطالب أثناء الدراسة في تركيا"
      ),
    },
    {
      number: "3",
      title: t("تكاليف المعيشة والدراسة"),
      description: t(
        "ربما يواجه الطالب رسومًا دراسية مرتفعة في بعض الجامعات التركية سواءً الحكومية أو الخاصة، لكن من الميزات المتوفرة في تركيا هو تنوع الاختيارات وتوفر رسوم دراسية مناسبة لكل طالب مما يساهم في تلافي هذه الصعوبة."
      ),
    },
    {
      number: "5",
      title: t("الاكتظاظ السكاني"),
      description: t(
        "إذا كنت من الأشخاص الذين اعتادوا الإقامة في مناطق غير مكتظة سكانياً، فقد تواجهك مشكلة الاكتظاظ السكاني في المدن الكبرى داخل تركيا كاسطنبول"
      ),
    },
  ];
  return (
    <>
      <Image
        src={cover}
        className=" max-sm:h-[60vh] max-sm:min-w-[80rem] pt-12  max-lg:min-w-[80rem] max-lg:pt-10"
      />
      <h1 className=" text-3xl font-bold mx-auto tracking-wide rounded-tl-2xl mt-28 border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2">
        {t("بعض أسئلة الطلاب وأولياء الأمور")}
      </h1>
      <div className="flex justify-between mx-10 mt-24 max-lg:w-[75rem] bg-[#fff] py-5">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-col bg-[#e8b2c3] rounded-2xl text-[#2f152bcb] p-2 w-[35rem]"
        >
          <div className="flex justify-center text-center">
            <div className="text-2xl font-bold bg-[#7a0066e0] text-white w-12 h-16 flex items-center mt-2 -ml-4 justify-center rounded-tr-full rounded-b-full"></div>
            <h1
              className={`font-bold ml-3 bg-[#7a0066c6] rounded-l-full px-5 w-fit flex items-center text-center h-12 mt-2 text-white ${
                i18n.language === "ar" && "fa" ? "text-2xl" : "text-[16px]"
              }`}
            >
              {t("أسئلة الطلاب ؟")}
            </h1>
          </div>
          <p className="text-2xl font-semibold mt-9">
            ● {t("تكاليف المعيشة ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("ماهي التخصصات المتاحة ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("ماهي لغة الدراسة في تركيا ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("هل يوجد منح دراسة ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("ماهي الخطوات الازمة للقبول بلجماعات التركية ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9 pb-5">
            ● {t("كيفية التكيف مع المجتمع التركي ؟")}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src={fakr} className="w-[22rem] h-96 mt-24" />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-col bg-[#e8b2c3] rounded-2xl text-[#2f152bcb] p-2 w-[35rem]"
        >
          <div className="flex justify-center text-center">
            <div className="text-2xl font-bold bg-[#7a0066e0] text-white w-12 h-16 flex items-center mt-2 -ml-4 justify-center rounded-tr-full rounded-b-full"></div>
            <h1
              className={`font-bold ml-3 bg-[#7a0066c6] rounded-l-full px-5 w-fit flex items-center text-center h-12 mt-2 text-white ${
                i18n.language === "ar" && "fa" ? "text-2xl" : "text-[16px]"
              }`}
            >
              {t("أسئلة أولياء الأمور ؟")}
            </h1>
          </div>
          <p className="text-2xl font-semibold mt-9">
            ● {t("تكاليف المعيشة لأولياء الامور مع اولادهم ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("ما هي تكلفة الدراسة السنوية في الجامعات التركية ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("ما طرق دفع الرسوم الدراسية ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("هل يوجد منح دراسة ؟")}
          </p>
          <p className="text-2xl font-semibold mt-9">
            ● {t("هل يحتاج الطالب إلى تأشيرة دراسة ؟")}
          </p>
          <p className="text-2xl  font-semibold mt-9 pb-5">
            ● {t("ما أفضل المدن للدراسة من حيث الأمان والتكاليف ؟")}
          </p>
        </motion.div>
      </div>
      <hr className="w-10/12 mt-32 mx-auto " />
      <div className="flex mx-4 mt-40 max-lg:w-[77rem] ">
        <Image src={tkl} className="w-44 h-36 rounded-full px-1 mt-5" />
        <div className="bg-[#7a0066cb] rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit px-4 text-center text-2xl font-bold rounded-2xl">
            {" "}
            {t("تكاليف المعيشة ؟")}
          </h1>
          <div className=" mt-5">
            <p
              className={`leading-8 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              <b className="text-2xl bg-yellow-600 rounded-full px-5 py-1 my-6">
                {t("للطلاب")}
              </b>{" "}
              {t(
                "في تركيا مرنة وتناسب مختلف الميزانيات. الجامعات تقدم منحًا دراسية وخيارات سكن مناسبة للطلاب الدوليين. المصاريف اليومية مثل الطعام والمواصلات منخفضة مقارنة بدول أخرى"
              )}
            </p>
            <p
              className={`leading-8 mt-5 mb-3 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              <b className="text-2xl bg-red-500 rounded-full px-5 py-1 my-6">
                {t("لأولياء الأمور")}
              </b>{" "}
              {t(
                "المعيشة في تركية رخيصة مقارنة بدول كثيرة وتوفر فرص عمل ايضا للشباب وكبار السن في تركيا دولة نامية من حيث العمل والوظائف"
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <div className="bg-[#7a0066cb] rounded-r-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit px-4 text-center text-2xl font-bold rounded-2xl">
            {" "}
            {t("لغة الدراسة؟")}
          </h1>
          <div className=" mt-5 text-center">
            <p
              className={`leading-8 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              {t(
                "تركيا تقدم لك الخيارين ببرامج دراسية عالية الجودة ولكن الدراسة باللغة التركية يكون الاندماج اسرع وافضل وتكايف دراسية أقل"
              )}
              <br />
              {t(
                "اما عن الدراسة باللغة الانجليزية فهي تعني فرص عالمية اكبر وسهولة في التواصل مع الطلاب الدولين"
              )}
            </p>
          </div>
        </div>
        <Image src={lang} className="w-40 h-36 rounded-full px-2 mt-3" />
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <Image src={mnah} className="w-36 h-36 rounded-full px-2" />
        <div className="bg-[#7a0066cb] rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit px-4 text-center text-2xl font-bold rounded-2xl">
            {" "}
            {t("هل يوجد منح دراسة ؟")}{" "}
          </h1>
          <div className=" mt-5 text-center">
            <p
              className={`leading-8 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              {t(
                "تُقدم بعض الجامعات منحًا دراسية في تخصصات محددة. على سبيل المثال: منحة جامعة أيدن : تُقدم منحة مسبقة الدفع بقيمة 14,950 دولارًا لجميع سنوات الدراسة، تُدفع على دفعة واحدة"
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <div className="bg-[#7a0066cb] rounded-r-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit text-center text-2xl font-bold rounded-2xl">
            {" "}
            {t("ما أفضل المدن للدراسة من حيث الأمان والتكاليف ؟")}{" "}
          </h1>
          <div className=" mt-5 pr-4">
            <p
              className={`leading-8 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              <b className="text-2xl bg-yellow-500 rounded-full px-5 py-1 my-6">
                {t("إسطنبول")}
              </b>
              {t(
                "تُعتبر إسطنبول مدينة آمنة نسبيًا، مع وجود بعض المناطق التي يُنصح بتجنبها ليلًا وتكاليف المعيشة غالية الي حدا ما من المدن الاخري نظرا لحجمها الكبير وتنوع خدمتها"
              )}
            </p>
            <p
              className={`leading-8 mt-5 mb-3 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              <b className="text-2xl bg-red-500 rounded-full px-5 py-1 my-6">
                {t("أنقرة")}
              </b>{" "}
              {t(
                "تُعتبر أنقرة من المدن الآمنة والمستقرة، بفضل كونها العاصمة السياسية لتركيا اما عن كاليف المعيشة أقل تكلفةً مقارنةً بإسطنبول، مما يجعلها خيارًا مناسبًا للطلاب"
              )}
            </p>
          </div>
        </div>
        <Image src={lef} className="w-44 h-36 rounded-full px-1 mt-12" />
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <Image src={plan} className="w-36 h-36 rounded-full px-2" />
        <div className="bg-[#7a0066cb] rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit px-4 text-center text-2xl font-bold rounded-2xl">
            {" "}
            {t("هل يحتاج الطالب إلى تأشيرة دراسة ؟")}
          </h1>
          <div className=" mt-5 text-center">
            <p
              className={`leading-8 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              {t(
                "نعم، يحتاج الطالب الدولي الراغب في الدراسة في تركيا إلى الحصول على تأشيرة دراسة قبل دخول البلاد كل اللي عليك تجهز ورقك Deva بتقولك تاشيرتك هتستلمها في اسرع وقت"
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem]">
        <div className="bg-[#7a0066cb] rounded-r-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit px-4 text-center text-2xl font-bold rounded-2xl">
            {t("ماهي التخصصات المتاحة ؟")}
          </h1>
          <div className=" mt-5 pr-4 text-center">
            <p
              className={`leading-8 pr-5 text-center ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              {t(
                " تُقدِّم الجامعات التركية مجموعة واسعة من التخصصات الأكاديمية التي تُلبي احتياجات الطلاب في مختلف المجالات. تتنوع التخصصات ما بين العلوم الطبية والهندسية والعلوم الإنسانية والفنون"
              )}
              <hr className="my-9" />
              {t(
                "ملاحظة: تختلف التخصصات المتاحة من جامعة لأخرى، لذا يُفضَّل التحقق من الموقع الرسمي للجامعة التي ترغب في الالتحاق بها."
              )}
            </p>
          </div>
        </div>
        <Image src={mgal} className="w-44 h-44 rounded-full px-1 mt-12" />
      </div>
      <div className="flex mx-4 mt-12 max-lg:w-[77rem] mb-12">
        <Image src={tak} className="w-36 h-36 rounded-full px-2 mt-9" />
        <div className="bg-[#7a0066cb] rounded-l-full py-7 w-full px-5 text-white text-xl font-bold">
          <h1 className="rounded-tl-2xl border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mx-auto w-fit px-4 text-center text-2xl font-bold rounded-2xl">
            {" "}
            {t("كيفية التكيف مع المجتمع التركي ؟")}
          </h1>
          <div className=" mt-5 mr-16">
            <p
              className={`leading-8 w-11/12 ${
                ["ru", "fr"].includes(i18n.language) ? "text-lg" : "text-xl"
              }`}
            >
              {" "}
              {t(
                "اولا يجب عليك احترام العادات والتقاليد كل مجتمع له عاداته وتقاليده احترم تلك العادات لتجنب اي مواقف غير مريحة"
              )}
              <br />
              {t(
                "ثانيا تعلم عن التاريخ والثقافة لتركيا واقراء عنهم وهذا ايضا يساعدك في فهم السياق العام والتاريخي للمجتمع التركي"
              )}
              <br className="" />
              {t(
                "ثالثا استكشف الطعام المحلي جرب الأطعمة المحلية قد تكون وسيلة ممتعة للتعرف علي الثقافة التركية اذهب الي المطاعم المحلية وجرب الأطباق التركية التقليدية"
              )}
            </p>
          </div>
        </div>
      </div>
      <hr className="h-5 mx-auto w-11/12" />
      <h1
        className={`text-3xl mb-16 font-bold px-2 w-fit mx-auto tracking-wide rounded-tl-2xl mt-28 border border-dashed border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 ${
          ["ru", "fr"].includes(i18n.language) ? "text-2xl" : "text-3xl"
        } text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2`}
      >
        {" "}
        {t("ماهي الخطوات الازمة للقبول في الجامعات التركية ؟")}
      </h1>
      <div
        className="h-[95vh]"
        style={{ backgroundImage: "url('/images/broad.jpg')" }}
      >
        <div className="grid pt-40 text-center text-gray-700 w-[50rem] mr-[30rem]">
          {[
            t(
              "اعداد جميع الوثائق المطلوبة مثل الصور وجواز السفر وخطابات التوصية وشاهدة اللغة اذا كانت مطلوبة"
            ),
            t(
              " التقديم المبكر عادةّّ مايتم فتح باب التقديم بعد العام الدراسي  بفترة قصيرة لذا حاول تقديم طلبك مبكراّ"
            ),
            t(
              " التحقق من متطلبات اللغة بعض الجامعات التركية تتطلب مستوي معين من اللغة الانجليزية او التركية تأكد من استيفاء هذه الطلبات"
            ),
            t(
              "البحث عن الجامعة والتخصص قم بتحديد التخصص الذي ترغب في دراسته وتحقق من متطلبات القبول لكل جامعة"
            ),
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`pt-10 text-xl ml-9 font-semibold ${
                i18n.language === "ru" ? "text-base pt-5" : ""
              }`}
            >
              🔘 {text}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="bg-cover bg-center min-h-screen bg-slate-50 my-56">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#7a0066c6] w-fit py-4  px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#eed1e8] mx-auto">
          {t("ماهي مميزات وعيوب الدراسة في تركيا ؟")}
        </h1>
        <h1 className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4  px-6 rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] mr-24">
          {t("المميزات")}
        </h1>
        <div className="grid md:grid-cols-3 py-12 mx-16 gap-6 px-4 overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-[#e8b2c3] bg-opacity-90 rounded-2xl shadow-lg cursor-pointer ${
                index === 4 ? "col-span-2 mx-auto" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ amount: 0.2, once: false }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-center mb-4 justify-center">
                <div className="text-2xl font-bold bg-[#7a0066e0] text-white w-12 h-16 flex items-center mt-2 -ml-4 justify-center rounded-tr-full rounded-b-full"></div>
                <h2
                  className={`font-bold ml-3 bg-[#7a0066c6] rounded-l-full px-4 py-3 text-white ${
                    i18n.language === "ar" && "fa" ? "text-2xl" : "text-[17px]"
                  }`}
                >
                  {" "}
                  {step.title}
                </h2>
              </div>
              <p className="text-gray-700 font-semibold text-center text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        <h1
          className="text-3xl font-semibold text-center mt-48 text-[#fff] w-fit py-4  px-6 rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#822253] mr-[80%]"
          style={{ fontFamily: "Exo 2, sans-serif" }}
        >
          {t("العيوب")}
        </h1>
        <div className="grid md:grid-cols-3 py-12 mx-16 gap-6 px-4 overflow-hidden">
          {stepss.map((step, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-[#e8b2c3] bg-opacity-90 rounded-2xl shadow-lg cursor-pointer ${
                index === steps.length - 2 ? "col-span-2 mx-auto" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ amount: 0.2, once: false }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-center mb-4 justify-center">
                <div className="text-2xl font-bold bg-[#7a0066e0] text-white w-12 h-16 flex items-center mt-2 -ml-4 justify-center rounded-tr-full rounded-b-full"></div>
                <h2
                  className={`font-bold ml-3 bg-[#7a0066c6] rounded-l-full px-4 py-3 text-white ${
                    i18n.language === "ar" && "fa" ? "text-2xl" : "text-[16px]"
                  }`}
                >
                  {" "}
                  {step.title}
                </h2>
              </div>
              <p className="text-gray-700 font-semibold text-center text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" bg-gray-100 rounded-2xl h-[70vh] mx-9 my-16 max-lg:w-[77rem]">
        <h1
          className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4  px-6 rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#822253] mb-8"
          style={{ fontFamily: "Exo 2, sans-serif" }}
        >
          {" "}
          {t("لماذا تركيا؟")}
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
              ✅ {t("نظام تعليمي متقدم ومرموق على المستوى الدولي")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              ✅{" "}
              {t("بيئة متعددة الثقافات، مما يمنحك تجربة تعليمية وحياتية غنية")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              ✅ {t("فرص واسعة لتعلم اللغة التركية بجانب الدراسة الأكاديمية")}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              ✅{" "}
              {t(
                "تركيا تجمع بين الحداثة والتراث، مما يوفر تجربة فريدة للطلاب الدوليين."
              )}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold max-lg:leading-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              ✅{" "}
              {t(
                "في النهاية، الاختيار الصحيح للجامعة والبرنامج الدراسي يمكن أن يساعدك في تحقيق أحلامك دون الحاجة"
              )}
              <br className="max-lg:hidden" />
              {t(
                "إلى تكاليف باهظة و التركيز على جودة التعليم وفرص المنح هو المفتاح لتحقيق أهدافك الدراسية في تركيا"
              )}
            </motion.h1>
          </div>

          <Image
            src={trk}
            className="w-[31rem] h-[29rem] -mt-24 max-lg:w-"
            alt="Turkey Image"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Dalil;
