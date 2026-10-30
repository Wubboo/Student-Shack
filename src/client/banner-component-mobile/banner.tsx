"use client";
import styles from "./banner.module.css";
import Link from "next/link";
import BurgerIcon from "../burger";
import HouseIcon from "../house";
import { useState } from "react";

function Banner() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className={styles.bannerBar}>
                <div className={styles.burgerButtonContainer}>
                    <button
                        className={styles.burgerButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                    >
                        <BurgerIcon />
                    </button>
                </div>
                <Link
                    className={styles.logoAndName}
                    href="/"
                    aria-label="Student Shack home"
                >
                    <HouseIcon />
                    <p>Student Shack</p>
                </Link>
            </div>

            {menuOpen && (
                <div className={styles.burgerMenu}>
                    <a href="./" id="home">
                        Home
                    </a>
                    <a href="./zoeken">zoeken</a>
                    <a href="./over-ons">over ons</a>
                    <a href="./faq">FAQ</a>
                    <a href="./contact">contact</a>
                    <div className={styles.loginButtons}>
                        <a href="./login" className={styles.loginButton}>
                            Login
                        </a>
                        <a href="./register" className={styles.registerButton}>
                            Registreren
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Banner;
