import "./contact.scss"
import { ReactComponent as Pin } from "../../assets/pinsvg.svg";
import { ReactComponent as In }from "../../assets/linkedin.svg";
import { ReactComponent as Insta } from "../../assets/insta.svg"
import FadeIn from 'react-fade-in';

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contact" id="contact">
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
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message" />
                    <button type="submit">Send</button>
                </form>
                </FadeIn>
            </div>
        </div>
        
    )
    
}
