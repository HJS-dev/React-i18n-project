import   i18n                 from "i18next"                          ;
import   detector             from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"                    ;
import   backend              from "i18next-xhr-backend"
import   translationEN        from './locales/en/translation.json'    ;
import   translationAR        from './locales/ar/translation.json'    ;

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR 
  }
};

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    supportedLangs: ['ar', 'en', 'du', 'fr', 'es' ],
    resources,
    fallbackLang: "en",
    detction: {
        order: ['htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
    },

    // keySeparator: false, // we do not use keys in form messages.welcome

    // interpolation: {
    //   escapeValue: false // react already safes from xss
    // }
  });

export default i18n;