"use client";

import { useForm } from "@formspree/react";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import doneAnimation from "../../Public/Animation/done.json";
import emailAnimation from "../../Public/images/contactus.jpeg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaPaperPlane } from "react-icons/fa";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f8f9fa",
    border: "2px solid #7A0066",
    boxShadow: "none",
    padding: "8px",
    borderRadius: "25px",
    "&:hover": {
      borderColor: "#9a007f",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#7A0066",
    fontWeight: "bold",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f0f0f0" : "white",
    color: "black",
    cursor: "pointer",
  }),
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwadaeg");
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryData = response.data.map((country) => ({
        value: country.cca2,
        label: country.name.common,
      }));
      setCountries(countryData);
    };
    fetchCountries();
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r  text-white rounded-lg shadow-xl">
      <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-6">
        {t("تواصل معنا")}
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
        <motion.form initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" required placeholder={t("الاسم الأول")}
              className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="text" required placeholder={t("الاسم الأخير")}
              className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mt-4">
            <PhoneInput country="eg" value={phone} onChange={setPhone}
              inputClass="!w-full !border !rounded-lg !h-12 !p-3" containerClass="w-full" />
          </div>
          <div className="mt-4">
            <Select options={countries} value={selectedCountry} styles={customStyles} onChange={setSelectedCountry}
              className="w-full" placeholder={t("الدولة")} />
          </div>
          <div className="mt-4">
            <input type="email" required placeholder={t("البريد الإلكتروني")}
              className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mt-4">
            <textarea required placeholder={t("اكتب رسالتك")}
              className="w-full p-3 border border-gray-300 rounded-lg h-28"></textarea>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            type="submit" disabled={state.submitting}
            className="w-full bg-purple-700 text-white py-3 mt-6 rounded-lg text-lg flex items-center justify-center">
            <FaPaperPlane className="mr-2" /> {t("ارسال")}
          </motion.button>
          {state.succeeded && (
            <p className="flex items-center mt-4 text-green-600">
              <Lottie className="w-10 mr-2" loop={false} animationData={doneAnimation} />
              {t("تم الإرسال بنجاح! 🤗")}
            </p>
          )}
        </motion.form>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-center">
          <Image src={emailAnimation} alt="Contact Illustration" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
