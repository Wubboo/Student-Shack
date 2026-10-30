import styles from "./footer.module.css";
import YoutubeIcon from "../youtube-logo";
import HouseIcon from "../house";
import InstagramIcon from "../instagram-icon";
import LinkedInIcon from "../linked-in-icon";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoAndName}>
                <HouseIcon />
                <p>Student Shack</p>
            </div>
            <div className={styles.footerText}>
                <p>
                    Het veiligste en meest transparante platform om studentenhuisvesting in
                    Nederland te vinden en aan te bieden.
                </p>
            </div>
            <div className={styles.socialIcons}>
                <a href="youtube.com">
                    <YoutubeIcon />
                </a>
                <a href="instagram.com">
                    <InstagramIcon />
                </a>
                <a href="linkedin.com">
                    <LinkedInIcon />
                </a>
            </div>
            <div className={styles.policies}>
                {/* these need to be modal popups, this is just placeholder */}
                <a href="">policy 1 pop up modal</a>
                <a href="">policy 2 pop up modal</a>
                <a href="">policy 3 pop up modal</a>
            </div>
            <div className={styles.cookieSettings}>
                <a href="">Cookie Instellingen</a>
            </div>
            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} Student Shack. Alle rechten voorbehouden.</p>
            </div>
        </footer>
    );
}

export default Footer;
