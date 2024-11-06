
import { useTranslation } from "react-i18next"
import imag from "../image/4dacd4c0-540d-403d-b953-187a08a624de.jpeg"
import image3 from "../image/IMG-20241030-WA0022.jpg"
import image2 from "../image/IMG-20241104-WA0009.jpg"

function Slider (){
    const {t} = useTranslation()
    return(
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image3} className="d-block w-100" alt="..." />
                        <div className="overlay">
                            <div className="title-overlay  text-md-center ">
                                <h1 className="text-warning mb-3 ">{t('slider.title')}</h1>
                                <h5 className="text-light mb-2">{t('slider.real_estate_gate')}</h5>
                                <h5 className="text-light mt-3">{t('slider.description1')}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={image2} className="d-block w-100" alt="..."/>
                        <div className="overlay">
                            <div className="title-overlay  text-md-center ">
                                <h1 className="text-warning mb-3 ">{t('slider.title')}</h1>
                                <h5 className="text-light mb-2">{t('slider.real_estate_gate')}</h5>
                                <h5 className="text-light mt-3">{t('slider.description1')}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={imag} className="d-block w-100" alt="..."/>
                        <div className="overlay">
                            <div className="title-overlay  text-md-center ">
                                <h1 className="text-warning mb-3 ">{t('slider.title')}</h1>
                                <h5 className="text-light mb-2">{t('slider.real_estate_gate')}</h5>
                                <h5 className="text-light mt-3">{t('slider.description1')}</h5>
                            </div>
                        </div>
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
        </>
    )
}
export default Slider