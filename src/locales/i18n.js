import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationEN, translationKO } from "./index.js";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
