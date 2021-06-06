import "./testimonial.scss";
import React from 'react';
//import elon from '../../assets/elon.jpg';

export default function Testimonial() {
    return (
        <div className="testimonials">
            <div className="inner">
                <h1>Testimonials</h1>
                <div className="border"></div>

                <div className="row">
                    <div className="col">
                        <div className="testimonial">
                            <div className="testimg">test</div>
                            <div className="name">Elon Musk</div>
                            <p>
                                I think this guy is p smart! 10/10 would recommend!
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="testimonial">
                        <div className="testimg">test img</div>
                            <div className="name">Elon Musk</div>
                            <p>
                                I think this guy is p smart! 10/10 would recommend!
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="testimonial">
                        <div className="testimg">test img</div>
                            <div className="name">Elon Musk</div>
                            <p>
                                I think this guy is p smart! 10/10 would recommend!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
