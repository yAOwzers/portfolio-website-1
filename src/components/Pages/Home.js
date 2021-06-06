import React from 'react';
import { Router } from 'react-router';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Features from './Features';

function Home() {
    return (
        <>
            <HeroSection />
            <Features />
        </>
    );
}

export default Home;
