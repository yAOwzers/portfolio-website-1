import "./contact.scss";
import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FadeIn from 'react-fade-in';
import { useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

const useStyles = makeStyles((theme) => ({
    pin: {
        '& svg': {
            fontSize: 60
        }
    },
    insta: {
        '& svg': {
            fontSize: 60
        }
    },
    in: {
        '& svg': {
            fontSize: 60
        }
    },
}));



export default function Contact() {
    let logoItem = useRef(null);

    console.log(logoItem);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleMouseOver = (e) => {
        TweenMax.to("#link", .2, {
          borderWidth: "0px",
          scale: 3,
          backgroundColor: "rgba(127, 127, 127, 1)",
          opacity: .15
        })
      }

      const handleMouseOut = (e) => {
        TweenMax.to("#link", .3, {
          borderWidth: "2px",
          scale: 1,
          backgroundColor: "rgba(127, 127, 127, 0)",
          opacity: 1
        })
      }

    const classes = useStyles();

    return (
        <div className="contact" id="contact">
            <div className="left">
                <FadeIn delay="100" transitionDuration="500">
                <div className="title">
                    GET IN TOUCH
                </div>
                <div className="wrapper">
                    <div className="location">
                        <div className={classes.pin}>
                            <RoomIcon />
                        </div>
                        10 Kent Ridge Dr, Singapore 119242
                    </div>
                    <div className="linkedin">
                        <div className={classes.in}>
                            <LinkedInIcon />
                        </div>
                        <a className="link" 
                        href="https://www.linkedin.com/in/thngyuxuan/" 
                        rel="noreferrer" 
                        target="_blank" 
                        onMouseOver={handleMouseOver()} 
                        onMouseOut={handleMouseOut()}>
                            in/thngyuxuan
                            </a>
                    </div>
                    <div className="insta">
                        <div className={classes.insta}>
                            <InstagramIcon />
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
