import React from 'react';
import Navbar from '../components/header';
import Hero from '../components/hero';
import Timeline from '../components/homeBody';
import Services from '../components/services';
import WhyChooseUs from '../components/whyUs';
import Footer from '../components/footer';
// import Contact from './contact';


function Home() {

    return (
        <div>
            
        <Navbar/>
        <Hero/>
        <Timeline/>
       <Services/>
       <WhyChooseUs/>
       <Footer/>
    
        </div>
    )
    
}

export default Home;