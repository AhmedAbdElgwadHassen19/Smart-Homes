// import imag from "../image/4dacd4c0-540d-403d-b953-187a08a624de.jpeg"
import { FaHome ,FaQuestion , FaBed , FaBath , FaRulerCombined , FaWhatsapp} from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"
import { CgArrowTopLeftR , CgCheckO } from "react-icons/cg"
import { AiFillFileText } from "react-icons/ai"
import { GiHomeGarage } from "react-icons/gi"
import { HiCheck } from "react-icons/hi"
import { RiMailSendFill } from "react-icons/ri"
import { useState , useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import Footer from "./footer"
import { useTranslation } from "react-i18next"
import AllProducts from "./AllProducts"
import emailjs from "@emailjs/browser"
// eslint-disable-next-line react/prop-types
const DetailsBuilding =({darkMode , language}) =>{
    const {productId} = useParams()
    const [product , setProduct] = useState(null)
    const [loading , setLoading] = useState(true)
    const {t} = useTranslation ()
    const [showSpecialSection , setShowSpecialSection] = useState(false)
    const location =  useLocation ()
    const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(false)

    // Email js
    const [formData , setFormData] = useState({
        name: '' , 
        phone : "", 
        email:"",
        product_Name: ''
    })
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('product Name' , formData.product_Name);
        
        const templateParams = {
            from_name: formData.name,
            phone: formData.phone,
            from_email : formData.email,
            product_Name: formData.product_Name
        }
        emailjs.send('service_sqs1mpz','template_3lplotd',templateParams,'7Hut365rVi7i5Ibnj')
        .then((response)=>{
            console.log("Email sent" , response.status, response.text);
            alert('تم ارسال بنجاح')
        })
        setFormData({name:'' , phone:"" , email:"" })
        .catch((err)=> console.error('Failed to send' , err));
    }

    useEffect(()=>{
        const FetchProduct = AllProducts.find((item)=> item.id.toString() === productId )
            setProduct(FetchProduct)
            setLoading(false)
            setShowWhatsAppIcon(true)
            // Name product in emailjs
            if(FetchProduct){
                setFormData((prevFormData) =>({
                    ...prevFormData,
                    product_Name : FetchProduct.name.en
                }))
            }
    },[productId])

    const WhatsAppIcon = ()=>{
        if(product){
            const message = `Hello! Iam interested in the product : ${JSON.stringify(language == 'ar' ? product.name.ar : product.name.en)}`
            console.log(message);
            const URLWhats = `https://wa.me/971561030458?text=${encodeURIComponent(message)}`
            window.open( URLWhats, '_blank')
        }
    }

    useEffect(()=>{
        if(location.pathname === '/'){
            setShowSpecialSection(false)
        } else {
            setShowSpecialSection(true)
        }
    },[location.pathname])

    if(loading){
        return <h2 className ="text-center text-warning mt-5"> Loading Products....</h2>
    }
    
    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
        
            <div className="container ">
                <div className="row ">
                    <div className={`Details-Building-img col-md-8 mt-3  ${darkMode ? 'dark-mode' : ""}`}>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="Details carousel-inner" >
                                <div className="carousel-item active">
                                <img src={product.image} className="d-block w-100" alt={`product Image`}  />
                                </div>
                                <div className="carousel-item">
                                <img src={product.image}className="d-block w-100" alt={`product Image`}   />
                                </div>
                                <div className="carousel-item">
                                <img src={product.image} className="d-block w-100" alt={`product Image`}   />
                                </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                        <div className="info-details mt-5 mb-5">
                            <div className="tile-price-details d-flex justify-content-between p-3">
                                <h4 className="text-wring pb-2"><FaHome color="darkgoldenrod"/> {t('details_building.title')} </h4>
                                <h4 >{t('details_building.real_estate_gate')}<span className="text-warning"> {product.price}</span></h4>
                            </div>
                            <div className="Burgrif-Details p-3">
                                <p>{t('details_building.description1')}</p>
                                <h4>{t('details_building.description2')}</h4>
                                <p>{t('details_building.description3')}</p>
                                <p>{t('details_building.description4')}</p>
                                <p>{t('details_building.description5')}</p>

                                <h4>{t('details_building.description6')}</h4>
                                <p>{t('details_building.description7')}</p>

                                <h4>{t('details_building.description8')}</h4>
                                <p>{t('details_building.description9')}</p>
                            </div>
                        </div>

                        <div className="Address-Details p-3">
                            <h4 className="pb-2"><CiLocationOn/>{t('details_building.address.description1')}</h4>
                            <div className="d-flex justify-content-between p-3">
                            <div className="Country">
                                <h6 className="mb-5">{t('details_building.address.description2')} <span>{language == 'ar' ? product.location.ar : product.location.en}</span></h6>
                                <h6>{t('details_building.address.description4')} <span>{t('details_building.address.description5')}</span></h6>
                            </div>
                            <div className="Gps">
                                <h6 className="mb-5">{t('details_building.address.description6')} <span>{t('details_building.address.description7')}</span></h6>
                                <h6 ><a className="text-warning" href="https://www.google.com/maps/search/%D8%B4%D9%82%D9%82+%D8%A8%D9%86+%D8%BA%D8%A7%D8%B7%D9%89+%D8%AF%D8%A8%D9%89%E2%80%AD/@25.1371542,55.1557422,10.51z?hl=en&entry=ttu"><CgArrowTopLeftR/>{t('details_building.address.description8')}</a> </h6>
                            </div>
                            </div>
                        </div>

                        <div className="Features-details ps-3 mt-5 pb-5 px-3">
                            <h4 className="pt-3 pb-2"><CiLocationOn/> {t('details_building.features.title')}</h4>
                            <h6><CgCheckO color="green"/> {t('details_building.features.description1')}</h6>
                            <h6><CgCheckO color="green"/> {t('details_building.features.description2')} </h6>
                            <h6><CgCheckO color="green"/>  {t('details_building.features.description3')}</h6>
                            <h6><CgCheckO color="green"/> {t('details_building.features.description4')}</h6>
                            <h6><CgCheckO color="green"/>{t('details_building.features.description5')} </h6>
                            <h6><CgCheckO color="green"/> {t('details_building.features.description5')}</h6>
                            <h6><CgCheckO color="green"/>  {t('details_building.features.description6')}</h6>
                        </div>
                    </div>

                    <div className={`col-md-4 mt-3    ${darkMode ? 'dark-mode' : ""}`}>
                        <div className="Data-details ps-3 px-3">
                            <h4 className="p-2 mb-4"> <AiFillFileText/>{t('details_building.data_details.title')}</h4>
                            <p className=" mb-4">{t('details_building.data_details.description1')}<span> {t('details_building.data_details.description2')}</span></p>
                            <p className=" mb-4">{t('details_building.data_details.description3')}<span> {t('details_building.data_details.description4')}</span></p>
                            <p className=" pb-4">{t('details_building.data_details.description5')}<span>{t('details_building.data_details.description6')}</span></p>
                        </div>

                        <div className="service-building ps-3 px-3">
                            <h4 className="p-2 mb-4"><FaQuestion/> {t('details_building.service_building.title')}</h4>
                            <p className=" mb-4"><FaBed/> {language == 'ar' ? product.studio.ar : product.studio.en}<span></span></p>
                            <p className=" mb-4"><FaBath/>  {t('details_building.service_building.description2')}<span> 1</span></p>
                            <p className=" mb-4"><GiHomeGarage/>  {t('details_building.service_building.description3')}<span> 1</span></p>
                            <p className=" mb-4"><FaRulerCombined/>  {t('details_building.service_building.description4')}<span> 950</span></p>
                            <p className=" mb-4 text-success"><HiCheck color="green"fontSize={'20px'}/>  {t('details_building.service_building.description5')} </p>
                            <p className=" pb-4 text-success"><HiCheck color="green" fontSize={'20px'}/>  {t('details_building.service_building.description6')} </p>
                        </div>

                        <div className="Register-User p-2 px-3">
                            <h4 className="p-2 mb-4"><FaQuestion/>   {t('details_building.register_user.title')}</h4>
                            <form onSubmit={handleSubmit}>
                                    <h3 className="text-warning mb-3">{t('footer.get-in-touch')}</h3>
                                    <input type="text" name="product_Name" value={formData.product_Name} onChange={handleChange} className="mb-3" readOnly/>
                                    <input type="text" name="name" placeholder={t('footer.placeholder1')} value={formData.name} onChange={handleChange} className="mb-3" />
                                    <input type="text " name="phone" placeholder={t('footer.placeholder2')} value={formData.phone} onChange={handleChange} className="mb-3"/>
                                    <input type="email" name="email" placeholder={t('footer.placeholder3')} value={formData.email} onChange={handleChange} className="mb-3"/>
                                    <button className="btn btn-warning mt-3 text-center" style={{width:'100%'}} type="submit"> <RiMailSendFill/>{t('details_building.register_user.description4')}</button>
                                </form>
                                
                        </div>
                    </div>
                </div>
            </div>
            {showSpecialSection && (<Footer/>)}
            
            {showWhatsAppIcon && (
                <div className="whatsApp-icon" onClick={()=> WhatsAppIcon(product.image)}>
                    <FaWhatsapp size={60} color="green"/>
                </div>
            )}
        </div>
        
    )
}
export default DetailsBuilding