import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import languages from "../src/i18next/languages.config";
import cookies from "js-cookie";
// import RTL from "./CustomP";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

// import { CustomProvider } from "rsuite";

function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  document.documentElement.lang = currentLanguageCode;
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.documentElement.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div>
        <Hero />
        <Intro />
        <Creations />
        <Footer />
    </div>
  );
}

export default App;
