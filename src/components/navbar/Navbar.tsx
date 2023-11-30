import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const openMenu = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
    }

    return (
        //  < !--Navbar Section-- >
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" id="navbar__logo">MESUT</Link>

                <div className={`navbar__toggle ${isMobileNavOpen ? "is-active" : ""}`} id="mobile-menu" onClick={openMenu} >
                    <span className="bar"> </span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`navbar__menu ${isMobileNavOpen ? "active" : ""}`}>

                    <li className="navber__item">
                        <Link to="/" className="navbar__links" id="home-page">Home</Link>
                    </li>

                    <li className="navber__item">
                        <Link to="/product" className="navbar__links" id="product-page">Books</Link>
                    </li>

                    <li className="navber__item">
                        <Link to="/about" className="navbar__links" id="about-page">About</Link>
                    </li>

                    <li className="navber__item">
                        <Link to="/contact" className="navbar__links" id="contact-page">Contact</Link>
                    </li>

                    <li className="navber__btn">
                        <Link to="/signup" className="button" id="signup">Sign up</Link>
                    </li>

                </ul>
            </div>
        </nav >
    )

}