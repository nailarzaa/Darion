// src/context/LanguageContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { languages } from "../data/data";
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get language from localStorage or default to "en"
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "az" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, texts: languages[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
