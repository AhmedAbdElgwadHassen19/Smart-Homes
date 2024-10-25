import imag from "../image/4dacd4c0-540d-403d-b953-187a08a624de.jpeg"

import { useState , useEffect  } from "react"
import Footer from "./footer"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import AOS from "aos"
// eslint-disable-next-line react/prop-types
function About ({darkMode}){
    const {t} = useTranslation()
    
// ///////////////
    const location =  useLocation ()
    const [showSpecialSection , setShowSpecialSection] = useState(false)
    useEffect(()=>{
        if(location.pathname === '/'){
            setShowSpecialSection(false)
        } else {
            setShowSpecialSection(true)
        }
    },[location.pathname])
    
    
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
            
                <div className="container">
                    <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                        <h1 className="text-warning">{t('abouts.title')}</h1>
                    </div>

                    
                        <div data-aos = "fade-right" className="row">
                            <div className= {`title-about col-lg-6 text-md-start mb-5`}>
                                <div className="text-about px-5">
                                    <h2 style={{fontFamily:"Merienda" , fontWeight:"bold"}}>{t('abouts.real_estate_gate')}</h2>
                                    <h5 className="mb-4 mt-4">{t('abouts.description1')}</h5>
                                    <h5 className="mb-4">{t('abouts.description2')}</h5>
                                    <h5 className="mb-4">{t('abouts.description3')}</h5>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5">
                                <div className="image-About position-relative">
                                    <img className="img-fluid" src={imag} alt="" />
                                </div>
                            </div>
                        </div>

                        <div data-aos = "fade-left" className="row">
                        <div className="col-lg-6 mb-5">
                                <div className="image-About2 position-relative">
                                    <img className="img-fluid" src={imag} alt="" />
                                </div>
                            </div>

                            <div className= {`title-about col-lg-6 text-md-start mb-5`}>
                                <div className="text-about px-5">
                                    <h2 style={{fontFamily:"Merienda" , fontWeight:"bold"}}>{t('abouts.real_estate_gate')}</h2>
                                    <h5 className="mb-4 mt-4">{t('abouts.description1')}</h5>
                                    <h5 className="mb-4">{t('abouts.description2')}</h5>
                                    <h5 className="mb-4">{t('abouts.description3')}</h5>
                                </div>
                            </div>
                            
                        </div>
                    
                </div>
            
                {showSpecialSection && (
                    <Footer/>
                )}
            
        </div>
    )
}
export default About 