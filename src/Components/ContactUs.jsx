import imag from "../image/IMG-20241107-WA0022.jpg"
import { FaPhoneAlt  } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import Footer from "./footer"
import { useTranslation } from "react-i18next"
// eslint-disable-next-line react/prop-types
function Contact({darkMode}){
    const {t}= useTranslation()
    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <div className="img-contact mt-5">
                        <img src={imag} alt="" className="img-fluid"/>
                        <div className="overlay-contact">
                        <div className="main-title text-center pt-5 pb-5 position-relative mb-4 mt-5">
                            <h1 className="text-warning mb-1">{t('contacts')}</h1>
                        </div>
                        </div>
                    </div>
                <div className="row mt-5">
                        <div className="phone-contact text-center col-lg-4 ">
                            <FaPhoneAlt className="Icon-contact"/>
                            <h3 className="text-contact"><a href="tel:+971561574757">+971561574757</a></h3>
                        </div>
                        <div className="Location-contact text-center col-lg-4 ">
                            <FaLocationDot className="Icon-contact"/>
                            <h3 className="text-contact"><a href="#">Dubai , Sheikh Zayed Road </a></h3>
                        </div>
                        <div className="Email-contact text-center col-lg-4 ">
                            <MdEmail className="Icon-contact"/>
                            <h3 className="text-contact"><a href="mailto:info@newgoldenfuture.com">info@newgoldenfuture.com</a></h3>
                        </div>
                </div>
            </div>
            

                    {/* <div className="BookNow text-center container mt-5">
                        <div className="name-phone m-3 ">
                            <input type="text" placeholder={t('contacts.description1')} />
                            <input type="text" placeholder={t('contacts.description2')} />
                        </div>
                        <div className="email-subject m-3">
                            <input type="text" placeholder={t('contacts.description3')} />
                            <input type="text" placeholder={t('contacts.description4')} />
                        </div>
                        <div className="Message">
                            <input type="message" placeholder={t('contacts.description5')} />
                        </div>
                            <button className="btn btn-warning mt-5" style={{width:'100%' , padding:'10px' , color:'#f9f9f9', fontSize:'30px'}}>{t('contacts.description6')}</button>
                    </div> */}
            <Footer/>
        </div>
    )
}
export default Contact