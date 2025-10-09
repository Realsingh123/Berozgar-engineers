import React from 'react'
import Technologies from './Pages/Technologies'
import HeroBrand from './Pages/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyChooseUs from './Pages/whyChooseUs'
import OurWork from './Pages/OurWork'
import StartJourney from './Pages/StartJourney'
import TestimonialSection from './pages/TestimonialSection'
import FaqSection from './Pages/Faqsection'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroBrand/>
    <Technologies/>
    <WhyChooseUs/>
    <OurWork/>
    <TestimonialSection />
    <StartJourney/>
    <FaqSection/>
    <Footer />
    </>
  )
}

export default App
