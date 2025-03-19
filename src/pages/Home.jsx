import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Expertise from '../components/Expertise'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import React from "react";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <WhyUs />
      <Expertise />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home 