import imag from "../image/4dacd4c0-540d-403d-b953-187a08a624de.jpeg"
import { useState , useEffect } from "react"
import Footer from "./footer"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import AOS from "aos"
// eslint-disable-next-line react/prop-types
function Blogs ({darkMode}){
    const {t} = useTranslation()
    const [showSpecialSection , setShowSpecialSection] = useState(false)
    const location =  useLocation ()
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
        <div data-aos ="zoom-in-up" className= "">
            {!window.location.pathname.includes('/blogs') && (
                <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                <h1 className="text-warning">{t('blog.title')}</h1>
                <h6>{t('blog.real_estate_gate')}</h6>
                </div>
            )}
            

            {showSpecialSection &&(
                <>
                    <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                    <h1 className="text-warning">Check Out Our Blogs</h1>
                    <h6>Everything you want you will find here.</h6>
                    </div>
                </>
            )}

            <div className="container ">
                <div className="Blogs row">
                {showSpecialSection && (
                    <>
                        <div className="AllBuilding col-lg-4 pb-3 ">
                            <h3 className="pt-2">You may also like</h3>
                            <div className="img-info  mt-5 ">
                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">Damac lagoons</h5>
                                </div>
                                
                            </div>
                            <div className="img-info  mt-5 ">
                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">Damac lagoons</h5>
                                </div>
                                
                            </div>
                            <div className="img-info  mt-5 ">
                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">Damac lagoons</h5>
                                </div>
                                
                            </div>
                        </div>
                    </>
                )}
                    <Link to={'/blogsdetal'} className="col-lg-4">
                        <div className="card">
                            <img src= {imag} alt="" />
                            <div className="card-body mt-3">
                                <p className="card-text ">{t('blog.description1')}</p>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/blogsdetal'} className="col-lg-4 mt-5">
                        <div className="card">
                            <img src= {imag} alt="" />
                            <div className="card-body mt-3">
                                <p className="card-text pb-4">{t('blog.description2')}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {showSpecialSection && (<Footer/>)}
            </div>

        </div>
    )
}
export default Blogs