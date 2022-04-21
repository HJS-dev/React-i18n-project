import LangBtn from './LangBtn'
import { useTranslation } from 'react-i18next'
function DesktopMenu() {
    const { t } = useTranslation()
    return (
        <nav className="desktop-menu__nav">
            <ul className="desktop-menu__links">
                <li className="desktop-menu__link"><a href=".">{t('About')}</a></li>
                <li className="desktop-menu__link"><a href=".">{t('Careers')}</a></li>
                <li className="desktop-menu__link"><a href=".">{t('Events')}</a></li>
                <li className="desktop-menu__link"><a href=".">{t('Products')}</a></li>
                <li className="desktop-menu__link"><a href=".">{t('Support')}</a></li>
            </ul>
            <LangBtn />
        </nav>
    )
}

export default DesktopMenu;