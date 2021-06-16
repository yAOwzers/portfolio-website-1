import React from 'react';
import './about.scss';
import portfolio from '../../assets/portfolio.jpg';
import FadeIn from 'react-fade-in';
import ImageFadeIn from 'react-image-fade-in';

export default function About() {
    return (
        <div className="about" id="about">
            <FadeIn delay='300' transitionDuration='900'>
            <div className="top">  
                <div className="title">
                    <h1>ABOUT ME</h1>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="wrapper" id="wrapper">
                        <h3>I am a computer engineering student at National University of Singapore. I love hands-on learning and making things work.
                            Currently interested in F1. Experience in computer hardware languages such as Verilog,
                            Arm Assembly, real time operating systems, as well as coding languages like C/C++, Java,
                            Javascript.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt. Id venenatis a condimentum vitae sapien pellentesque. Arcu dictum varius duis at consectetur lorem donec massa sapien. Egestas diam in arcu cursus euismod quis viverra. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Nunc sed id semper risus in. Eget magna fermentum iaculis eu non diam phasellus. Diam quis enim lobortis scelerisque fermentum dui. Neque sodales ut etiam sit amet nisl. Amet aliquam id diam maecenas.</h3>
                    </div>       
                </div>
                <div className="right">
                    <div className="imgContainer">
                        <ImageFadeIn src={portfolio} alt="portfolio" style={{ maxWidth: "40vh", maxHeight: "60vh" }}/>
                    </div> 
                </div>      
            </div>   
            </FadeIn>               
        </div>
        
       
    )
}
