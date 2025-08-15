import React from 'react';
import Navbar from '../components/header';
import Hero from '../components/hero';
import Timeline from '../components/homeBody';
import Services from '../components/services';
import WhyChooseUs from '../components/whyUs';
import Footer from '../components/footer';
import Testimonial from '../components/testimonials';
import LocationSection from '../components/map';
// import Contact from './contact';


function Home() {

    return (
        <div>
            
        <Navbar/>
        <Hero/>
        <Timeline/>
       <Services/>
       <WhyChooseUs/>
       <Testimonial/>
       <LocationSection/>
       <Footer/>
    
        </div>
    )
    
}

export default Home;