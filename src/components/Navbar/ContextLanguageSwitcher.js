import React, { useContext } from "react";
import { LanguageContext } from "../../context/language";

export default function ContextLanguageSwitcher() {
  const { langContext, setLangContext } = useContext(LanguageContext);
  return (
    <div>
      
      <button
        className="btn"
        onClick={() => setLangContext(langContext === "ar" ? "en" : "ar")}
      >
        {langContext}
      </button>
    </div>
  );
}
