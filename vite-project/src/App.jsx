import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages / Sections
import HeroBrand from "./Pages/Hero";
import ServicesSection from "./Pages/Services";
import AboutSection from "./Pages/Aboutus";
import Technologies from "./Pages/Technologies";
import WhyChooseUs from "./Pages/whyChooseUs";
import OurWork from "./Pages/OurWork";
import StartJourney from "./Pages/StartJourney";
import TestimonialSection from "./Pages/TestimonialSection";
import FaqSection from "./Pages/Faqsection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroBrand />
              <ServicesSection />
              <Technologies />
              <WhyChooseUs />
              <OurWork />
              <TestimonialSection />
              <StartJourney />
              <FaqSection />
            </>
          }
        />

        {/* ✅ About Page */}
        <Route path="/about" element={<AboutSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
