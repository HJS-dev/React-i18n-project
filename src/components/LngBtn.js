import i18n from "i18next"

const languages = [
    {
        code: 'ar',
        name: 'العربية',
        country_code: 'sa',
        direction: 'rtl'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'us',
        direction: 'ltr'
    },
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
        direction: 'ltr'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es',
        direction: 'ltr'
    },
    {
        code: 'du',
        name: 'Duitsland',
        country_code: 'du',
        direction: 'ltr'
    },
    {
        code: 'Jp',
        name: '日本の',
        country_code: 'Jp',
        direction: 'ltr'
    },
    {
        code: 'ru',
        name: 'российский',
        country_code: 'ru',
        direction: 'ltr'
    },
]
       
function LangBtn() {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
    
      return (
        <div className="container">
            <button>
                <ul>
                    {languages.map(({ code, name, country_code, direction }) => (
                    <li key={country_code}>
                            <button onClick={() => changeLanguage(`${code}`)}>
                                {/* {document.querySelector('body').dir = `${direction}`} */}
                                <span className={`flag-icon flag-icon-${country_code}`}></span>
                            {name}
                        </button>
                    </li>
                    ))}
                </ul>
            </button>
        </div>
    )
}

export default LangBtn