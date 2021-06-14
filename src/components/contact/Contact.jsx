import "./contact.scss"
import { ReactComponent as Pin } from "../../assets/pinsvg.svg";
import { ReactComponent as In } from "../../assets/linkedin.svg";
import { ReactComponent as Insta } from "../../assets/insta.svg"
import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import axios from 'axios';

export default function Contact() {

    const [result, setResult] = useState(null);

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Please try again later'
                });
            });
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };


    return (

        <div className="contact" id="contact">
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <div className="left">
                <FadeIn delay="100" transitionDuration="500">
                    <div className="title">
                        GET IN TOUCH
                </div>
                    <div className="wrapper">
                        <div className="location">
                            <div className="pinImg">
                                <Pin height="40px" />
                            </div>
                        10 Kent Ridge Dr, Singapore 119242
                    </div>
                        <div className="linkedin">
                            <div className="linkedinImg">
                                <In height="40px" />
                            </div>
                            <a href="https://www.linkedin.com/in/thngyuxuan/" rel="noreferrer" target="_blank">in/thngyuxuan</a>
                        </div>
                        <div className="insta">
                            <div className="instaImg">
                                <Insta height="40px" />
                            </div>
                            <a href="https://www.instagram.com/yuxuanthng/" rel="noreferrer" target="_blank">@yuxuanthng</a>
                        </div>
                    </div>
                </FadeIn>
            </div>
            <div className="right">
                <FadeIn delay="100" transitionDuration="500">
                    <h2>Drop me a message!</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" onChange={onInputChange} />
                        <input type = "email" placeholder="Email" onChange={onInputChange} />
                        <textarea placeholder="Message" onChange={onInputChange} />
                        <button type="submit">Send</button>
                    </form>
                </FadeIn>
            </div>
        </div>

    )

}
