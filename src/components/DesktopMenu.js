
import LangBtn from './LngBtn'

function DesktopMenu() {

    
    return (
        <nav className="desktop-menu__nav" dir="rtl">
            <ul className="desktop-menu__links">
                <li className="desktop-menu__link"><a href=".">About</a></li>
                <li className="desktop-menu__link"><a href=".">Careers</a></li>
                <li className="desktop-menu__link"><a href=".">Events</a></li>
                <li className="desktop-menu__link"><a href=".">Products</a></li>
                <li className="desktop-menu__link"><a href=".">Support</a></li>
            </ul>
             <LangBtn />
        </nav>
    )
}

export default DesktopMenu
