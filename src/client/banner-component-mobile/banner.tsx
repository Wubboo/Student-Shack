"use client";
import "./main.css";
import BurgerIcon from "../burger";
import HouseIcon from "../house";
import { useState } from "react";

function Banner() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="container">
            <div className="banner-bar">
                <div className="burgur-button-container">
                    <button
                        className="burger-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                    >
                        <BurgerIcon />
                    </button>
                </div>
                <div className="logo-and-name">
                    <HouseIcon />
                    <p>Student Shack</p>
                </div>
            </div>

            {menuOpen && (
                <div className="burger-menu">
                    <a href="./home">home</a>
                    <a href="./zoeken">zoeken</a>
                    <a href="./over-ons">over ons</a>
                    <a href="./faq">FAQ</a>
                    <a href="./contact">contact</a>
                </div>
            )}
        </div>
    );
}

export default Banner;
