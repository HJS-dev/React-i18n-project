import langImg from "../assets/shared/translate_white_24dp.svg";
import languages from "../i18next/languages.config";
import i18next from "i18next";


function LangBtn() {
  return (
    <div className="langBtn">
      <button className="langBtn__drop">
        <img src={langImg} alt="Language Button" />
        <ul className="langBtn__list">
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code} className="langBtn__items">
              <button onClick={() => i18next.changeLanguage(code)} className="langBtn__btn">{/* <span className={`flag-icon flag-icon-${country_code} mx-2`}></span> */}{name}
              </button>
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
}

export default LangBtn;
