import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import az from '../locales/az.json';
import en from '../locales/en.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az },
    },
    fallbackLng: 'en', 
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
