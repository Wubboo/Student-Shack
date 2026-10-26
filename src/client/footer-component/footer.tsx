import "./main.css";
import YoutubeIcon from "../youtube-logo";
import HouseIcon from "../house";
import InstagramIcon from "../instagram-icon";
import LinkedInIcon from "../linked-in-icon";

function Footer() {
    return (
        <div className="footer-container">
            <div className="logo-and-name-footer">
                <HouseIcon />
                <p>Student Shack</p>
            </div>
            <div className="footer-text">
                <p>
                    Het veiligste en meest transparante platform om studentenhuisvesting in
                    Nederland te vinden en aan te bieden.
                </p>
            </div>
            <div className="social-icons-footer">
                <a href="">
                    <YoutubeIcon />
                </a>
                <a href="">
                    <InstagramIcon />
                </a>
                <a href="">
                    <LinkedInIcon />
                </a>
            </div>
            <div className="policies-footer">
                {/* these need to be modal popups, this is just placeholder */}
                <a href="">policy 1 pop up modal</a>
                <a href="">policy 2 pop up modal</a>
                <a href="">policy 3 pop up modal</a>
            </div>
            <div className="cookie-settings-footer">
                <a href="">Cookie Instellingen</a>
            </div>
            <div className="copyright-footer">
                <p>copyright</p>
            </div>
        </div>
    );
}

export default Footer;
