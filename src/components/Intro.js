import mobileImg from '../assets/mobile/image-interactive.jpg';
import desktopImg from '../assets/desktop/image-interactive.jpg';
import { useTranslation } from 'react-i18next'
function Intro() {
    const { t } = useTranslation() 
    return (
        <section className="intro">
            <div className="content-wrapper intro__content-wrapper">
                <picture>
                    <source media="(max-width: 799px)" srcSet={mobileImg}/>
                    <img className="intro__img" src={desktopImg} alt="man wearing VR headset"/>
                </picture>
                <div className="intro__text">
                    <h2 className="intro__heading">{t('intro_heading')}</h2>
                    <p className="intro__body-copy">{t('intro_paragraph')}</p>
                </div>
            </div>
        </section>
    )
}

export default Intro;