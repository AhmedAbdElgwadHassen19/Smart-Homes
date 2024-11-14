import { Link } from "react-router-dom"
import imgLogo from "../image/LOGO.png"
import { useTranslation } from "react-i18next"

// eslint-disable-next-line react/prop-types
function Navbar({darkMode , toogleDarkMode , toggleLanguage}){
    const {t } = useTranslation()
    
    return(
        <>
            <nav className= {`navbar navbar-expand-lg  sticky-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
                <div className ="container">
                    <div className="d-inline-block align-text-top  col-lg-4">
                    <img src={imgLogo} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-lg-6" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <Link to={'/'} className= {`nav-link active p-lg-3 ${darkMode ? 'text-light' : "text-dark"}`} aria-current="page" >{t('home')}</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/about'} className= {`nav-link p-lg-3 ${darkMode ? "text-light" : "text-dark"}`} >{t('about')}</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link to={'/browsecity'} className="nav-link dropdown-toggle p-lg-3"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {t('properties.title_properties')}
                        </Link>
                        <ul className="dropdown-menu">
                            <Link to={'/dubai'}><li><a className="dropdown-item" >{t('properties.dubai')}</a></li></Link>
                            <Link to={'/sharjah'}><li><a className="dropdown-item" >{t('properties.sharjah')}</a></li></Link>
                            <Link to={'/abudubai'}><li><a className="dropdown-item" >{t('properties.abu_dhabi')}</a></li></Link>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <Link to={'/contact'} className= {`nav-link p-lg-3 ${darkMode ? "text-light" : "text-dark"}`} >{t('contact')}</Link>
                        </li>
                        <button className ="btn " onClick={toogleDarkMode}>
                            {darkMode ? t ('switch_light_mode') : t ('switch_dark_mode')} </button>

                            <button className="btn" onClick={toggleLanguage}>{t('switch_language')}</button>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar