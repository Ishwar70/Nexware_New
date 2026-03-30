import React from 'react'
import Headers from './navbar/Header';
import HeroSection from './heroSection/HeroSection';
import Clients from './partnerClients/Clients';
import About from './aboutUs/About';
import Services from './services/Services';
import Roadmap from './roadmap/Roadmap';
import { Road } from 'lucide-react';
import Testimonials from './testimonial/Testimonials';
import Portfolio from './portfolio/Portfolio';
import FAQ from './faq/FAQ';
import Footer from './footer/Footer';
export default function App() {
  return (
    <>
    <Headers />
    <HeroSection />
    <Clients />
    <About />
    <Services />
    <Roadmap />
    <Testimonials />
    <Portfolio  />
    <FAQ />
    <Footer />
    </>
  )
}
