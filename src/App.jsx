import "./App.css"
import About from "./Components/About"
import BrowseCity from "./Components/Cites"
import Navbar from "./Components/Navbar"
import Building from "./Components/Building"
import Slider from "./Components/Slider"
import { useTranslation } from "react-i18next"
import Blogs from "./Components/Blogs"
import Footer from "./Components/footer"
import { Routes , Route } from "react-router-dom"
import DetailsBuilding from "./Components/DetailsBuilding"
import Contact from "./Components/ContactUs"
import BlogsDetal from "./Components/BlogsDeta"
import {useEffect, useState } from "react"




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
                    <Building darkMode ={darkMode} language ={language}/>
                    <Blogs darkMode ={darkMode}/>
                    <Footer darkMode ={darkMode}/>
                    </>}/>
                    <Route path="/slider" element={<Slider />}/>
                    <Route path="/about"  element={<About darkMode ={darkMode}/>}/>
                    <Route path="/browsecity"  element={<BrowseCity darkMode ={darkMode}/>}/>
                    <Route path="/building" element={<Building darkMode ={darkMode} language ={language}/>}/>
                    <Route path="/blogs" element={<Blogs darkMode ={darkMode}/>}/>
                    <Route path="/footer" element={<Footer darkMode ={darkMode}/>}/>
                    <Route path="/detailsbuilding/:productId" element={<DetailsBuilding darkMode ={darkMode}/>}/>
                    <Route path="/contact" element={<Contact darkMode ={darkMode}/>}/>
                    <Route path="/blogsdetal" element={<BlogsDetal darkMode ={darkMode}/>}/>
                </Routes>
        </div>
    )
}
export default App