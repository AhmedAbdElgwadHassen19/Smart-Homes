/* eslint-disable react/prop-types */

import { CiLocationOn } from "react-icons/ci"
import { useState , useEffect  } from "react"
import { Link, useLocation } from "react-router-dom"
import Footer from "./footer"

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


            <div className="container">
            <div className="row" key={language}>
                    {product.map((item)=>(
                        <div className="col-md-4 mb-4 " key={item.id}>
                        <div className="card">
                            <img src={item.image} alt={item.name} className="card-img"/>
                            <div className="card-body">
                                <h5 className="card-title ps-3 px-1 mt-2">{language === 'ar' ? item.name.ar : item.name.en}</h5>
                                <p className="card-text ps-3 px-1 ">{t('building.description2')} <span className="text-warning">{item.price}</span></p>
                                <p className="card-text ps-3 px-1">{language == 'ar' ? item.studio.ar : item.studio.en}</p>
                                <p className="card-text ps-3 px-1"><CiLocationOn/> {language == 'ar' ? item.location.ar : item.location.en} </p>
                                <p className="card-text ps-3 px-1"> {language == 'ar' ? item.payment_plan.ar : item.payment_plan.en} </p>
                                <p className="card-text ps-3 px-1"> {language == 'ar' ? item.down_payment.ar : item.down_payment.en} </p>
                                <Link to={`/detailsbuilding/${item.id}`} className="btn btn-warning ps-3 px-1">{t('building.description_btn')}</Link>
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
                {showSpecialSection && <Footer/>}
                </div>
        </div>
    )
}
export default Building