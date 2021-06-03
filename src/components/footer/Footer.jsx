import './footer.scss';
import { ReactComponent as Logo } from "../../assets/copyright.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="left">
                    <Logo height="25px"/>
                    <h3>Copyright</h3>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
