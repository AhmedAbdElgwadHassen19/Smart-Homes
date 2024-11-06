import "./App.css"
import About from "./Components/About"
import BrowseCity from "./Components/Cites"
import Navbar from "./Components/Navbar"
import Building from "./Components/Building"
import Slider from "./Components/Slider"
import { useTranslation } from "react-i18next"
import Footer from "./Components/footer"
import { Routes , Route } from "react-router-dom"
import DetailsBuilding from "./Components/DetailsBuilding"
import Contact from "./Components/ContactUs"
import {useEffect, useState } from "react"
import MinBuilding from "./Components/minBuilding"
import Dubai from "./Components/Dubai"
import AbuDubai from "./Components/AduDubai"
import Sharjah from "./Components/Sharjah"





function App(){
    const [language , setLanguage] = useState(localStorage.getItem('language') || 'ar')
    const {i18n } = useTranslation()

    useEffect(()=>{
        const StoredLanguage = localStorage.getItem('language')
        if(StoredLanguage){setLanguage(StoredLanguage)}
    i18n.changeLanguage(StoredLanguage)
    document.dir = StoredLanguage === "ar" ? "rtl" : "ltr"
    },[])
    
    const toggleLanguage = ()=>{
        const newLang = i18n.language === "en" ? "ar" :"en"
        i18n.changeLanguage(newLang)
        localStorage.setItem('language' , newLang)
        document.dir = newLang === "ar" ? "rtl" : "ltr"
    }

    // DarkMode and light
    const [darkMode , setDarkMode] = useState(
        ()=> localStorage.getItem('darkMode') === 'true' || false
    )
    const toogleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
        localStorage.setItem('darkMode' , darkMode)
    },[darkMode])

    return(
        <div className= {darkMode ? "dark-mode" : "light-mode"}>
            <Navbar darkMode ={darkMode}  toogleDarkMode = {toogleDarkMode} toggleLanguage = {toggleLanguage}/>
                <Routes>
                    <Route path="/" element ={<>
                    <Slider darkMode ={darkMode}/>
                    <About darkMode ={darkMode}/>
                    <BrowseCity darkMode ={darkMode}/>
                    <MinBuilding darkMode ={darkMode} language ={language}/>
                    <Footer darkMode ={darkMode}/>
                    </>}/>
                    <Route path="/slider" element={<Slider />}/>
                    <Route path="/about"  element={<About darkMode ={darkMode}/>}/>
                    <Route path="/browsecity"  element={<BrowseCity darkMode ={darkMode}/>}/>
                    <Route path="/building" element={<Building darkMode ={darkMode} language ={language}/>}/>
                    <Route path="/footer" element={<Footer darkMode ={darkMode}/>}/>
                    <Route path="/detailsbuilding/:productId" element={<DetailsBuilding darkMode ={darkMode} language ={language}/>}/>
                    <Route path="/contact" element={<Contact darkMode ={darkMode}/>}/>
                    <Route path="/dubai" element={<Dubai darkMode ={darkMode} language ={language}/>}/>
                    <Route path="/abudubai" element={<AbuDubai darkMode ={darkMode} language ={language}/>}/>
                    <Route path="/sharjah" element={<Sharjah darkMode ={darkMode} language ={language}/>}/>
                </Routes>
        </div>
    )
}
export default App