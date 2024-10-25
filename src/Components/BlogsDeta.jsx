import { useTranslation } from "react-i18next"
import imag from "../image/4dacd4c0-540d-403d-b953-187a08a624de.jpeg"
import Footer from "./footer"

// eslint-disable-next-line react/prop-types
function BlogsDetal({darkMode}){
    const {t}=useTranslation()
    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="main-title text-center pt-5 pb-5 position-relative mb-4">
                <h1 className="text-warning">{t('BlogsDetal.title')}</h1>
                <h6>{t('BlogsDetal.real_estate_gate')}</h6>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="AllBuilding col-lg-4 pb-3">
                            <h3>{t('BlogsDetal.description1')}</h3>
                            <div className="img-info  mt-5 ">
                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">{t('BlogsDetal.description2')}</h5>
                                </div>
                                
                            </div>
                            <div className="img-info  mt-5 ">
                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">{t('BlogsDetal.description2')}</h5>
                                </div>
                                
                            </div>
                            <div className="img-info  mt-5 ">
                                <div className="img-title d-flex">
                                    <div className="img-footer">
                                        <img src={imag} alt="" /> 
                                    </div>
                                    <h5 className="text-warning mx-3">{t('BlogsDetal.description2')}</h5>
                                </div>
                                
                            </div>
                    </div>
                    <div className="blogs-detal col-lg-8">
                        <div className="img-blogs-detal">
                            <img src={imag} alt="" className="img-fluid"/>
                        </div>
                        <div className="title-blogs-detal p-2">
                            <h3 className="text-warning mt-2">{t('BlogsDetal.description3')}</h3>
                            <hr />
                            <p>{t('BlogsDetal.description4')}</p>
                            <h3>{t('BlogsDetal.description5')}</h3>
                            <p>{t('BlogsDetal.description6')}</p>
                            <h3>{t('BlogsDetal.description7')}</h3>
                            <p>{t('BlogsDetal.description8')}</p>
                            <h2>{t('BlogsDetal.description9')}</h2>
                            <p>{t('BlogsDetal.description10')}</p>
                            <h3>{t('BlogsDetal.description11')}</h3>
                            <p>{t('BlogsDetal.description12')}</p>
                            <h3>{t('BlogsDetal.description13')}</h3>
                            <p>{t('BlogsDetal.description14')}</p>
                            <h3>{t('BlogsDetal.description15')}</h3>
                            <p>{t('BlogsDetal.description16')}</p>
                            <h3>{t('BlogsDetal.description17')}</h3>
                            <p>{t('BlogsDetal.description18')}</p>
                            <h3>{t('BlogsDetal.description19')}</h3>
                            <p>{t('BlogsDetal.description20')}</p>
                            <h3>{t('BlogsDetal.description21')}</h3>
                            <p>{t('BlogsDetal.description22')}</p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <Footer/>
        </div>
    )
}
export default BlogsDetal