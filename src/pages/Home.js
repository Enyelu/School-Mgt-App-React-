import React from 'react'

import Carousel from '../components/homepage/Carousel';
import FeaturedNews from '../components/homepage/FeaturedNews';
import AboutUs from '../components/homepage/AboutUs';
import ClientSlider from '../components/homepage/ClientSlider';
import Admission from '../components/homepage/Admission';
import ContactUs from '../components/homepage/ContactUs';
import MainContent from '../components/homepage/MainContent';
import PreLoader from '../components/homepage/PreLoader';

const Home = () => {
    return (
        <>
            <Carousel />
            <ClientSlider />
            <main id="main">
                <FeaturedNews />
                <Admission />
                <MainContent />
                <AboutUs />
                <ContactUs />
            </main>
        </>
    );
};

export default Home
