import Header from './Header';
import { useTranslation } from 'react-i18next'


function Hero() {
    const { t } = useTranslation()
    return (
        <div className="header-hero-container">
            <Header />
            <section className="hero">
                <div className="content-wrapper hero__content-wrapper">    
                    <h1 className="hero__heading">     
                           {t("hero_heading")}
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Hero