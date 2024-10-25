/* eslint-disable react/prop-types */

import { CiLocationOn } from "react-icons/ci"
import { MdLocationCity , MdRefresh} from "react-icons/md"
import { useState , useEffect  } from "react"
import { Link, useLocation } from "react-router-dom"
import Footer from "./footer"
import { FaFilter , FaSearch } from "react-icons/fa"
import { useTranslation } from "react-i18next"

import AOS from "aos"
import AllProducts from "./AllProducts"

    const  Building = ({darkMode , language})=> {
    const {t} = useTranslation()
    const [product , setProduct] = useState([])
    const [showSpecialSection , setShowSpecialSection] = useState(false)
    const [loading , setLoading] = useState(true)
    const location =  useLocation ()

    const fetchProduct = ()=>{
        setProduct(AllProducts)
    }
    useEffect(()=>{
        fetchProduct()
        setLoading(false)
    } , [language])
    
    

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

    if(loading){
        return <h2 className ="text-center text-warning mt-5"> Loading Products....</h2>
    }

    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div  data-aos ="zoom-in-up" className= "">
            {!window.location.pathname.includes('/building') && (
                <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                <h1 className="text-warning">{t('building.title')}</h1>
                <h6>{t('building.real_estate_gate')}</h6>
            </div>
            )}
            
            {showSpecialSection &&(
                <>
                    <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                    <h1 className="text-warning">{t('buildings.title1')}</h1>
                    <h6>{t('buildings.real_estate_gate')}</h6>
                    </div>
                </>
            )}

{showSpecialSection && (
                    <div className="inputs m-3">
                    <div className="bg-secondary pb-2">
                        <p ><FaFilter/> {t('buildings.inputs.title')}</p>
                    </div>
                    <div className="search">
                        <label htmlFor="search" className="form-label d-block"><FaSearch/> {t('buildings.inputs.description1')} </label>
                        <input type="search" placeholder= {t('buildings.inputs.description2')}/>
                    </div>
                    <div className="Status-input">
                        <label htmlFor="city" className="form-label d-block"> {t('buildings.inputs.description3')}</label>
                        <select name="form-select" id="Status">
                            <option selected > {t('buildings.inputs.description4')}</option>
                            <option value="1">{t('buildings.inputs.description5')}</option>
                            <option value="2">{t('buildings.inputs.description6')}</option>
                        </select>
                    </div>
                    <div className="City-input">
                        <label htmlFor="city" className="form-label d-block"> {t('buildings.inputs.description7')}</label>
                        <select name="form-select" id="city">
                            <option selected > {t('buildings.inputs.description8')}</option>
                            <option value="1">{t('buildings.inputs.description9')}</option>
                            <option value="1">{t('buildings.inputs.description9')}</option>
                            <option value="1">{t('buildings.inputs.description9')}</option>
                        </select>
                    </div>
                    <div className="Type-input">
                        <label htmlFor="city" className="form-label d-block"> {t('buildings.inputs.description10')}</label>
                        <select name="form-select" id="Type">
                            <option selected > {t('buildings.inputs.description11')}</option>
                            <option value="1">{t('buildings.inputs.description12')}</option>
                            <option value="2">{t('buildings.inputs.description13')}</option>
                            <option value="3">{t('buildings.inputs.description14')}</option>
                            <option value="4">{t('buildings.inputs.description15')}</option>
                            <option value="5">{t('buildings.inputs.description16')}</option>
                            <option value="6">{t('buildings.inputs.description17')}</option>
                            <option value="7">{t('buildings.inputs.description18')}</option>
                            <option value="8">{t('buildings.inputs.description19')}</option>
                        </select>
                    </div>
                    <div className="button-from">
                        <button className="btn btn-warning " style={{width:'80%'}}>{t('buildings.inputs.description1')}</button>
                        <button className="btn btn-dark"  style={{width:'20%'}}><MdRefresh/></button>
                    </div>
                </div>
                )}
            
            <div className="container">
            
            <div className="row" key={language}>
                    {product.map((item)=>(
                        <div className="col-md-4 mb-4 " key={item.id}>
                        <div className="card">
                            <img src={item.image} alt={item.name} className="card-img"/>
                            <div className="card-body">
                                <h5 className="card-title ps-3 px-3 mt-3">{language === 'ar' ? item.name.ar : item.name.en}</h5>
                                <p className="card-text ps-3 px-3 ">{t('building.description2')} <span className="text-warning">{item.price}</span></p>
                                <p className="card-text ps-3 px-3"><MdLocationCity/> {language == 'ar' ? item.location.ar : item.location.en} </p>
                                <p className="card-text ps-3 px-3"><CiLocationOn/> {language == 'ar' ? item.location.ar : item.location.en} </p>
                                <Link to={`/detailsbuilding/${item.id}`} className="btn btn-warning ps-3 px-3">{t('building.description_btn')}</Link>
                                
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
                <div className="text-center mt-5">
                    {!window.location.pathname.includes('/building') && (
                        <Link to={'/building'} className="btn btn-outline-info" style={{width:"15rem" , height : "3rem" , borderRadius:"20px"}}>{t('building.description5')}</Link>
                    )}
                </div>
                </div>
                {showSpecialSection && (
                    <>
                    <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                    <h1 className="text-warning">{t('buildings.title2')}</h1>
                    </div>

                    <div className="BookNow text-center container mt-5">
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
                    </div>
                    </>
                )}
                {showSpecialSection && <Footer/>}
                </div>
        </div>
    )
}
export default Building