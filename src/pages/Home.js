import React from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Clients />
            <Portfolio />
            <Footer />
        </>

    )
}

export default Home;

