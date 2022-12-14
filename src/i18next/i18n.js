import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const Options = {
  supportedLngs: ["en", "ar", "fr", "es", "du", "jp", "ru"],
  fallbackLng: false,
  fallbackNS: false,
  debug: true,
  detection: {
    // order and from where user language should be detected
    order: [
      // "navigator",
      "cookie",
      "querystring",
      "localStorage",
      "sessionStorage",
      "htmlTag",
      "path",
      "subdomain",
    ],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"],
  },
  backend: {
    loadPath: "/locales/{{lng}}/translation.json",
  },
};

function clbck() {
  i18n.changeLanguage();
  // i18n.dir();
  document.documentElement.dir = i18n.dir();
  i18n.on("loaded", function (lng) {
    if (i18n.dir() === "ltr") {
      import("../styles/App.scss");
    } else {
      import("../styles/App.rtl.css");
    }
  });
  console.log(i18n.dir());
}
i18n

  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(Options, clbck);

export default i18n;
