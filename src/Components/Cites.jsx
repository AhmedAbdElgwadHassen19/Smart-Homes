import { Link } from "react-router-dom"
import imag1 from "../image/IMG-20241107-WA0047.jpg"
import imag2 from "../image/IMG-20241107-WA0046.jpg"
import imag3 from "../image/IMG-20241107-WA0045.jpg"
import {  useEffect  } from "react"
import { useTranslation } from "react-i18next"
import AOS from "aos"
// eslint-disable-next-line react/prop-types
function BrowseCity({darkMode}){
    const {t} = useTranslation()

    // Animation on Products
    useEffect(()=>{
        AOS.init({
            duration: 2000,
            offset : 400,
            easing : "ease-in-out",
            mirror : true
        })
    },[])

    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div data-aos ="zoom-in-up" className= "" >
            <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                <h1 className="text-warning">{t('cites.title')}</h1>
                <h6>{t('cites.real_estate_gate')}</h6>
            </div>

            <div className= "Cites container">
                <div className="row">
                        <Link to={'/dubai'} className="city col-lg-4 mb-5">
                            <img src={imag1} alt="" className="img-fluid"/>
                            <div className="overlay-city-one"><h1>{t('cites.description1')}</h1></div>
                            <h4> {t('cites.description2')}</h4>
                        </Link>
                        <Link to={'/abudubai'} className="city col-lg-4 mb-5">
                        <img src={imag3} alt=""/>
                            <div className="overlay-city-one"><h1>{t('cites.description3')}</h1></div>
                            <h4> {t('cites.description4')}</h4>
                        </Link>

                        <Link to={'/sharjah'} className="city col-lg-4 mb-5">
                        <img src={imag2} alt=""/>
                            <div className="overlay-city-one"><h1>{t('cites.description5')}</h1></div>
                            <h4> {t('cites.description6')}</h4>
                        </Link>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default BrowseCity