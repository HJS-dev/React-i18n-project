import langImg from "../assets/shared/translate_white_24dp.svg";
import languages from "../i18next/languages.config";
import i18n from '../i18next/i18n'
function LangBtn() {

  return (
    <div className="langBtn">
      <button className="langBtn__drop">
        <img src={langImg} alt="Language Button" />
        <ul className="langBtn__list">
          {languages.map((ln) => (
            <li key={ln.country_code} className="langBtn__items">
              <bottun  onClick={() => {
                i18n.changeLanguage(ln.code);
                window.location.reload();

              }} className="langBtn__btn">{/* <span className={`flag-icon flag-icon-${country_code} mx-2`}></span> */}{ln.name}
              </bottun>

            </li>
          ))}
        </ul>
      </button>
    </div>
  );
}

export default LangBtn;
