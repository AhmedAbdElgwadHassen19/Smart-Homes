import { HiArrowCircleRight } from "react-icons/hi"
import { FaFacebook,FaInstagram , FaLinkedin , FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot , FaWhatsapp} from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import imag from "../image/4dacd4c0-540d-403d-b953-187a08a624de.jpeg"
import { useTranslation } from "react-i18next"
// eslint-disable-next-line react/prop-types
function Footer({darkMode}){
    const {t}= useTranslation()
    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="footer bg-dark mt-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 d-flex mt-5 justify-content-between mb-3">
                            <div className="info-footer">
                                <h3  style={{fontFamily:"Merienda" , fontWeight:"bold"}} className="text-warning">{t('footer.title')}</h3>
                                <p className="text-light">{t('footer.real_estate_gate')}</p>
                                <ul className="footer-ul">
                                    <li><a href="https://www.facebook.com/newgoldenfuture.re"><FaFacebook  /></a></li>
                                    <li><a href="https://wa.me/971561030458"><FaWhatsapp/></a></li>
                                    <li><a href="https://www.instagram.com/new.goldenfuture?igsh=MWdzdGVzbGl1bHZvcw=="><FaInstagram /></a></li>
                                    <li><a href="https://www.linkedin.com/company/smart-homes-real-estate-fzc-llc"><FaLinkedin /></a></li>
                                    <li><a href="+971561030458"><FaPhoneAlt /></a></li>
                                    <li><a href="https://smarthomesre.com/Sharjah-United%20Arab%20Emirates"><FaLocationDot /></a></li>
                                    <li><a href="https://smarthomesre.com/info@smarthomesre.com"><MdEmail /></a></li>
                                </ul>
                            </div>
                            <div className="Links-footer text-light"  style={{fontFamily:"Merienda" , fontWeight:"bold"}}>
                                <h3 className="text-warning">{t('footer.quick_links')}</h3>
                                <li><HiArrowCircleRight  className="Icon"/> {t('footer.quick_links1')}</li>
                                <li><HiArrowCircleRight className="Icon"/> {t('footer.quick_links2')}</li>
                                <li><HiArrowCircleRight className="Icon"/> {t('footer.quick_links3')}</li>
                                <li><HiArrowCircleRight className="Icon"/> {t('footer.quick_links4')}</li>
                            </div>
                        </div>

                        <div className="footer-input col-md-12 col-lg-6 d-flex justify-content-between pb-5">
                            <div className="img-info  mt-5 "  style={{fontFamily:"Merienda" , fontWeight:"bold"}}>
                                <div className="img-title d-flex" >
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">{t('footer.damac_lagoons')}</h5>
                                </div>
                                
                                <div className="img-title d-flex mt-3 mb-3">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">{t('footer.damac_lagoons')}</h5>
                                </div>

                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">{t('footer.damac_lagoons')}</h5>
                                </div>
                            </div>

                            <div className="from-input mt-5 ">
                                <h3 className="text-warning mb-3">{t('footer.get-in-touch')}</h3>
                                <input type="text" placeholder={t('footer.placeholder1')} />
                                <input type="text " placeholder={t('footer.placeholder2')} />
                                <input type="email" placeholder={t('footer.placeholder3')}/>
                                <button className="bt-input btn btn-warning">{t('footer.placeholder_btn')}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer