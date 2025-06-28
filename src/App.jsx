import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/navbar"
import Contact from "./Pages/contact"
import Home from "./Pages/home"
import AboutKhareef from "./Pages/khareef"
import PlaceDetails from "./Pages/placeDetails"
import Places from "./Pages/places"
import SafetyTips from "./Pages/safetyTips"
import Footer from "./Components/footer"
import AdArea from "./Components/AdArea"


function App() {
  return (
    <>
      
      <Navbar />
      <AdArea />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-khareef" element={<AboutKhareef />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        
        <Route path="/safety-tips" element={<SafetyTips />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
