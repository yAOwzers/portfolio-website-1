import React from 'react';
import '../App.css';
import './HeroSection.css';
import banner from './spongebob.jpg';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src={banner} alt='banner' />
            YOURNAME
        </div>
    );
}
 
export default HeroSection;
