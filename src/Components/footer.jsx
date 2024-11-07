import { HiArrowCircleRight } from "react-icons/hi"
import { FaFacebook,FaInstagram  , FaPhoneAlt } from "react-icons/fa"
import {  FaWhatsapp} from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import emailjs from "@emailjs/browser"
// eslint-disable-next-line react/prop-types
function Footer({darkMode}){
    const {t}= useTranslation()
    // Email js
    const [formData , setFormData] = useState({
        name: '' , 
        phone : "", 
        email:""
    })
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const templateParams = {
            from_name: formData.name,
            phone: formData.phone,
            from_email : formData.email
        }
        emailjs.send('service_sqs1mpz','template_3lplotd',templateParams,'7Hut365rVi7i5Ibnj')
        .then((response)=>{
            console.log("Email sent" , response.status, response.text);
            alert('تم ارسال بنجاح')
        })
        setFormData({name:'' , phone:"" , email:""})
        .catch((err)=> console.error('Failed to send' , err));
    }
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
                                    <li><a href="https://wa.me/971561574757"><FaWhatsapp/></a></li>
                                    <li><a href="https://www.instagram.com/new.goldenfuture?igsh=MWdzdGVzbGl1bHZvcw=="><FaInstagram /></a></li>
                                    <li><a href="tel:+971561574757"><FaPhoneAlt /></a></li>
                                    <li><a href="mailto:info@newgoldenfuture.com"><MdEmail /></a></li>
                                </ul>
                            </div>
                            <div className="Links-footer"  style={{fontFamily:"Merienda" , fontWeight:"bold",}}>
                                <h3 className="text-warning">{t('footer.quick_links')}</h3>
                                <Link to={'/'}><li><HiArrowCircleRight  className="Icon"/> {t('footer.quick_links1')}</li></Link>
                                <Link to={'/about'}><li><HiArrowCircleRight className="Icon"/> {t('footer.quick_links2')}</li></Link>
                                <Link to={'/contact'}><li><HiArrowCircleRight className="Icon"/> {t('footer.quick_links4')}</li></Link>
                            </div>
                        </div>

                        <div className="footer-input col-md-12 col-lg-6 d-flex justify-content-end pb-5">
                            <div className="from-input mt-5 ">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-warning mb-3">{t('footer.get-in-touch')}</h3>
                                    <input type="text" name="name" placeholder={t('footer.placeholder1')} value={formData.name} onChange={handleChange}/>
                                    <input type="text " name="phone" placeholder={t('footer.placeholder2')} value={formData.phone} onChange={handleChange}/>
                                    <input type="email" name="email" placeholder={t('footer.placeholder3')} value={formData.email} onChange={handleChange}/>
                                    <button type="submit" className="bt-input btn btn-warning">{t('footer.placeholder_btn')}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer