import './footer.scss';
import { ReactComponent as Logo } from "../../assets/copyright.svg";
import React, { useState } from 'react';
import FadeIn from 'react-fade-in';

export default function Footer() {
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    return (
        <div className="footer">
            <div className="wrapper">
                <div className="left">
                    <Logo height="25px"/>
                    <h3
                    onMouseEnter={() => setIsShown1(true)}
                    onMouseLeave={() => setIsShown1(false)}>
                        Copyright
                    </h3>
                    {isShown1 && (
                        <FadeIn className="name">
                            2021 Your Name
                        </FadeIn>
                    )}
                </div>
                <div className="right">
                    <div className="wrapper"
                    onMouseEnter={() => setIsShown2(true)}
                    onMouseLeave={() => setIsShown2(false)}>
                        <h3>Connect</h3>
                        {isShown2 && (
                        <FadeIn>
                            <a href="https://www.linkedin.com/in/thngyuxuan/" rel="noreferrer" target="_blank" >LinkedIn</a>
                            <a href="https://www.instagram.com/yuxuanthng/" rel="noreferrer" target="_blank" >Instagram</a>
                        </FadeIn>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}
