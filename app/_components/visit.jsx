import Image from "next/image";
import React from "react";
import lolo from "../../Public/images/r1.jpg";
import lolo2 from "../../Public/images/r2.jpg";
import lolo3 from "../../Public/images/r3.jpg";
import lolo4 from "../../Public/images/r4.jpg";
import { useTranslation } from "react-i18next";

const Visit = () => {
  const { t } = useTranslation();
  const images = [lolo, lolo2, lolo3, lolo4];

  return (
    <section className=" mb-11">

      <h1 className=" text-3xl font-bold mx-auto tracking-wide rounded-tl-2xl mt-28 border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2">
      {t("بعض رحلتنا الترفهية لطلبنا داخل تركيا")}
      </h1>
      <div className="flex mt-9 flex-wrap justify-center gap-12 px-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-80 h-56 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-2 group"
          >
            {/* خلفية ملونة بتأثير ثلاثي الأبعاد */}
            <div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-fuchsia-700 to-fuchsia-900 rounded-lg shadow-2xl transition-all duration-300 ease-in-out group-hover:blur-md"></div>

            {/* الصورة */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Visit ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Visit;
