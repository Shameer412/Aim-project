import React from 'react'
import Navbar from './../../components/Navbar';
import BrandsCarousel from "./../../components/BrandsCarousel";
import BrandsSwipe from "./../../components/BrandsSwipe";
import Footer from "./../../components/Footer";
import HeroSection from "./../../components/HeroSection";
import MidNavbar from "./../../components/MidNavbar";

import PartnerSubscribeSection from "./../../components/PartnerSubscribeSection";
import ServicesSection from "./../../components/ServicesSection";
import StatisticsSection from "./../../components/StatisticsSection";
import Testimonial from "./../../components/Testimonial";
import VisionSection from "./../../components/VisionSection";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
<BrandsCarousel/>
<VisionSection/>
<StatisticsSection/>
<MidNavbar/>
<Testimonial/>
<BrandsSwipe/>
<ServicesSection/>
<PartnerSubscribeSection/>
<Footer/>
    </div>
  )
}

export default Home
