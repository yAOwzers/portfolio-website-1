import React from 'react';
import '../App.css';
import './HeroSection.css';
import banner from './spongebob.jpg';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src={banner} alt='banner' />
            <h1>YOUR NAME</h1>
        </div>
    );
}
 
export default HeroSection;
