import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en/translation.json";
import ja from "../locales/ja/translation.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    }
  });