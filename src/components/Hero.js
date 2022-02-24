import Header from './Header';
import { withNamespaces } from 'react-i18next'
import { Trans } from 'react-i18next'

function Hero({ t }) {
   
    return (
        <div className="header-hero-container">
            <Header />
            <section className="hero">
                <div className="content-wrapper hero__content-wrapper">
                             
                    <h1 className="hero__heading">
                        <Trans>
                            Immersive Experiences That <span>Deliver</span>

                        </Trans>
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default withNamespaces()(Hero)