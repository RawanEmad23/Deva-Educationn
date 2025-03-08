"use client";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const Dropdown = ({ options, selected, setSelected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* زر القائمة */}
      <button
        onClick={toggleMenu}
        className="flex items-center w-80 py-3 text-center rounded-full bg-white opacity-70 font-bold text-2xl justify-center text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        {selected || <span className="text-sm md:text-xl">{placeholder}</span>}
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className="block px-6 mx-auto py-4 text-[17px] text-gray-700 hover:bg-gray-100 w-full text-right"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Search = () => {
  const { t } = useTranslation();

  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedLang, setSelectedLang] = useState("");

  // الخيارات المتاحة
  const specialties = [
    t("الطب البشري"),
    t("الصيدلة"),
    t("طب الاسنان"),
    t("العلاج الطبيعي"),
    t("التمريض"),
    t("التخدير"),
    t("الاسعافات الاولية"),
    t("التغذية"),
    t("الهندسة الطبية"),
    t("هندسة المعمار"),
    t("هندسة الميكاترونكس"),
    t("هندسة الميكانيكا"),
    t("هندسة التصميم الداخلي"),
    t("الهندسة الصناعية"),
    t("هندسة السيارات"),
    t("هندسة الفضاء"),
    t("الهندسة الكميائية"),
    t("هندسة البرمجيات"),
    t("هندسة الذكاء الاصطناعي"),
    t("هندسة الكهرباء والاكترونيات"),
    t("هندسة المناظر الطبيعية"),
    t("الادارة الهندسية"),
    t("ادارة الاعمال"),
    t("اداره الخدمات اللوجستية"),
    t("امن المعلومات"),
    t("نظم المعلومات الادارية"),
    t("المسرح"),
    t("الموسيقي"),
    t("معلم الرياضيات"),
    t("معلم الكمياء"),
    t("تنمية الطفل"),
    t("الترجمة"),
    t("الصحافة"),
    t("الدعاية والاعلان"),
    t("تصميم الازياء"),
    t("تصميم الجرافيك"),
    t(" الطيران"),
  ];

  const programs = [
    t("برنامج الماجستير"),
    t("برنامج البكالوريوس"),
    t("برنامج الدبلوم"),
    t("برنامج الدكتوراة"),
  ];
  const lang = [t("اللغة التركية"), t("اللغة الإنجليزية")];

  const customStyles = {
    placeholder: (base) => ({
      ...base,
      fontSize: "14px",
    }),
  };

  return (
    <>
      <div className="flex gap-9 items-center rounded-bl-[8rem] rounded-tl-[3rem] max-sm:w-[79rem] max-lg:w-[79rem] mb-16 -mt-6 bg-fuchsia-800 w-10/12 h-28 z-50 rounded-br-[8rem] rounded-tr-[3rem] opacity-95 mx-auto py-2 px-16">
        {/* القائمة الأولى */}
        <Dropdown
          options={programs}
          selected={selectedProgram}
          setSelected={setSelectedProgram}
          placeholder={t("ابحث عن البرنامج الدراسي...🔎")}
          className="placeholder:text-gray-500 placeholder:font-bold"
        />
        {/* القائمة الثانية */}
        <Dropdown
          options={lang}
          selected={selectedLang}
          setSelected={setSelectedLang}
          placeholder={t("ابحث عن لغة الدراسة...🔎")}
          className="placeholder:text-gray-500 placeholder:font-bold"
        />
        {/* القائمة الثالثة */}
        <Dropdown
          options={specialties}
          selected={selectedSpecialty}
          setSelected={setSelectedSpecialty}
          placeholder={t("ابحث عن تخصصك...🔎")}
          className="placeholder:text-gray-500 placeholder:font-bold"
        />
        <a
          href={
            selectedProgram && selectedLang && selectedSpecialty
              ? "../search"
              : "#"
          }
          className={`bg-white rounded-full ${
            selectedProgram && selectedLang && selectedSpecialty
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!selectedProgram || !selectedLang || !selectedSpecialty) {
              e.preventDefault(); // منع الانتقال إلى صفحة البحث
              alert(
                t(
                  "يرجى اختيار البرنامج الدراسي، لغة الدراسة، والتخصص قبل البحث!"
                )
              );
            }
          }}
        >
          <FcSearch className="size-16 px-2 animate-bounce mt-2 hover:cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default Search;
