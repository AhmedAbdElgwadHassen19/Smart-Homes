import { useEffect } from "react";
import AllProducts from "./AllProducts";
import { CiLocationOn } from "react-icons/ci"

import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import AOS from "aos"
import Footer from "./footer";

    const selectedIds = [16,17,18,19,20,21]
    const SelectedProducts = AllProducts.filter(product=> selectedIds.includes(product.id) )

// eslint-disable-next-line react/prop-types
const Sharjah = ({darkMode , language}) => {
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
        <div className={darkMode ? "dark-mode" : "light-mode" }>
            <div data-aos ="zoom-in-up">
            <div className="container">
            <div className="row" key={language}>
                    {SelectedProducts.map((item)=>(
                        <div className="col-md-4 mb-4 " key={item.id}>
                        <div className="card">
                            <img src={item.image} alt={item.name} className="card-img"/>
                            <div className="card-body">
                                <h5 className="card-title ps-3 px-3 mt-3">{language === 'ar' ? item.name.ar : item.name.en}</h5>
                                <p className="card-text ps-3 px-3 ">{t('building.description2')} <span className="text-warning">{item.price}</span></p>
                                
                                <p className="card-text ps-3 px-3">{language == 'ar' ? item.studio.ar : item.studio.en}</p>
                                <p className="card-text ps-3 px-3"><CiLocationOn/> {language == 'ar' ? item.location.ar : item.location.en} </p>
                                <p className="card-text ps-3 px-3"> {language == 'ar' ? item.payment_plan.ar : item.payment_plan.en} </p>
                                <p className="card-text ps-3 px-3"> {language == 'ar' ? item.down_payment.ar : item.down_payment.en} </p>
                                <Link to={`/detailsbuilding/${item.id}`} className="btn btn-warning ps-3 px-3">{t('building.description_btn')}</Link>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
            </div>
            <Footer/>
            </div>
        </div>
    )
}
export default Sharjah