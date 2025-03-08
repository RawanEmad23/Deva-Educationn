"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-png.png";
import ar_lang from "../../Public/images/ksa.png";
import en_lang from "../../Public/images/amr.png";
import tr_lang from "../../Public/images/tur.png";
import fr_lang from "../../Public/images/fran.png";
import ru_lang from "../../Public/images/rus.png";
import fa_lang from "../../Public/images/eran.png";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const isRussian = i18n.language === "ru";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const currentPath = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = useMemo(() => {
    const links = [
      { href: "/", label: "الصفحة الرئيسية" },
      { href: "/universitys", label: "جامعتنا" },
      { href: "/khadamat", label: "خدامتنا" },
      { href: "/takass", label: "جميع التخصصات" },
      { href: "/mannahno", label: "من نحن" },
      { href: "/KonWakelna", label: "كن وكيلنا" },
      { href: "/madonatna", label: "مدونتنا" },
    ];

    return i18n.language === "ar" || i18n.language === "fa"
      ? links
      : [...links].reverse();
  }, [i18n.language]);

  const [openMenuLang, SetOpenMenuLang] = useState(false);
  const [toggleOption, setToggleOption] = useState(1);
  const [selectedLang, setSelectedLang] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    SetOpenMenuLang(!openMenuLang);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      SetOpenMenuLang(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "ar";
    const savedLangImage =
      localStorage.getItem("selectedLangImage") || ar_lang.src;

    const validLangImage = savedLangImage.startsWith("/")
      ? savedLangImage
      : ar_lang.src;

    setSelectedLang(validLangImage);

    i18n.changeLanguage(savedLanguage);

    if (savedLanguage === "en") {
      setToggleOption(2);
    } else if (savedLanguage === "tr") {
      setToggleOption(3);
    } else if (savedLanguage === "fr") {
      setToggleOption(4);
    } else if (savedLanguage === "ru") {
      setToggleOption(5);
    } else if (savedLanguage === "fa") {
      setToggleOption(6);
    } else {
      setToggleOption(1);
    }
  }, []);

  const handleToggleOption = (option, langImage, langCode) => {
    setToggleOption(option);
    setSelectedLang(langImage);
    i18n.changeLanguage(langCode);
    localStorage.setItem("selectedLanguage", langCode);
    localStorage.setItem("selectedLangImage", langImage.src);
    SetOpenMenuLang(false);
  };

  return (
    <header className="bg-[#7a0066] shadow-md    fixed w-full z-50 max-sm:min-w-[80rem] max-sm:w-[80rem] max-lg:w-[80rem] max-sm:absolute max-lg:absolute">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex  items-center gap-4">
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>

          <nav
            className={`hidden lg:flex items-center gap-6 text-[18px] font-semibold text-white relative ${
              isRussian ? "text-[15px]" : ""
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  currentPath === link.href
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                } px-2 py-1`}
              >
                {t(link.label)}
              </Link>
            ))}
            <a
              href="/search"
              className="px-4 py-2 bg-yellow-500 text-fuchsia-800 rounded-2xl mr-6 font-bold hover:bg-yellow-600 transition-colors duration-200"
            >
              {t("تسجيل")}
            </a>
          </nav>

          <div className="cursor-pointer" onClick={toggleDropdown}>
            {selectedLang ? (
              <Image
                className="rounded-[5px]"
                src={selectedLang}
                alt="selected language"
                width={30}
                height={30}
              />
            ) : (
              <></>
            )}
          </div>
          {openMenuLang && (
            <div
              className="absolute top-[65px] left-2 w-[170px] bg-fuchsia-950 p-[5px_0px] rounded-[5px] transition-all duration-300 shadow-lg z-50"
              ref={dropdownRef}
            >
              <div
                className={`flex items-center gap-2.5 p-[12px_20px] mt-0.5 cursor-pointer hover:bg-[#71298e] ${
                  toggleOption === 1 ? "bg-[#71298e]" : ""
                }`}
                onClick={() => handleToggleOption(1, ar_lang, "ar")}
              >
                <Image className="w-[18px] h-[18px]" src={ar_lang} alt="AR" />
                <p className="text-[18px]">{t("عربي")}</p>
              </div>
              <div
                className={`flex items-center gap-2.5 p-[12px_20px] mt-0.5 cursor-pointer hover:bg-[#71298e] ${
                  toggleOption === 2 ? "bg-[#71298e]" : ""
                }`}
                onClick={() => handleToggleOption(2, en_lang, "en")}
              >
                <Image className="w-[18px] h-[18px]" src={en_lang} alt="EN" />
                <p className="text-[18px]">{t("إنجليزي")}</p>
              </div>
              <div
                className={`flex items-center gap-2.5 p-[12px_20px] mt-0.5 cursor-pointer hover:bg-[#71298e] ${
                  toggleOption === 3 ? "bg-[#71298e]" : ""
                }`}
                onClick={() => handleToggleOption(3, tr_lang, "tr")}
              >
                <Image className="w-[18px] h-[18px]" src={tr_lang} alt="TR" />
                <p className="text-[18px]">{t("تركي")}</p>
              </div>
              <div
                className={`flex items-center gap-2.5 p-[12px_20px] mt-0.5 cursor-pointer hover:bg-[#71298e] ${
                  toggleOption === 4 ? "bg-[#71298e]" : ""
                }`}
                onClick={() => handleToggleOption(4, fr_lang, "fr")}
              >
                <Image className="w-[18px] h-[18px]" src={fr_lang} alt="FR" />
                <p className="text-[18px]">{t("فرنساوي")}</p>
              </div>
              <div
                className={`flex items-center gap-2.5 p-[12px_20px] mt-0.5 cursor-pointer hover:bg-[#71298e] ${
                  toggleOption === 5 ? "bg-[#71298e]" : ""
                }`}
                onClick={() => handleToggleOption(5, ru_lang, "ru")}
              >
                <Image className="w-[18px] h-[18px]" src={ru_lang} alt="RU" />
                <p className="text-[18px]">{t("روسي")}</p>
              </div>
              <div
                className={`flex items-center gap-2.5 p-[12px_20px] mt-0.5 cursor-pointer hover:bg-[#71298e] ${
                  toggleOption === 6 ? "bg-[#71298e]" : ""
                }`}
                onClick={() => handleToggleOption(6, fa_lang, "fa")}
              >
                <Image className="w-[18px] h-[18px]" src={fa_lang} alt="FA" />
                <p className="text-[18px]">{t("فارسي")}</p>
              </div>
            </div>
          )}

          {/* Mobile Menu Button (Visible on medium and small screens) */}
          <div className="lg:hidden flex items-center relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-gray-100 rounded text-gray-600"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-14 left-0 w-[15rem] bg-fuchsia-800 text-white font-bold shadow-lg z-50 "
              >
                <nav className="flex flex-col gap-4 text-center text-xl p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`p-2 rounded transition-colors duration-200 no-underline ${
                        currentPath === link.href
                          ? "text-yellow-500"
                          : "hover:text-yellow-500 hover:bg-fuchsia-700"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <a
                    href="/search"
                    className="w-full p-2 rounded bg-yellow-500 text-fuchsia-800 font-bold hover:bg-yellow-600 transition-colors duration-200"
                  >
                    {t("تسجيل")}
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
