import React from 'react'

export const Footer = () => {

    return (
        <footer className="footer__container" id="footer__container">

            <div className="footer__links">


                <div className="footer__link--items">
                    <h2>Mesut Öztürk</h2>
                    <p className='text-white'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ad harum et fugiat dicta quos maiores placeat, atque quae
                        dolore soluta. Accusamus, sequi animi beatae laborum vero ?
                    </p>

                </div>

                <div className="footer__link--items">
                    <h2>About Me</h2>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>

                </div>

                <div className="footer__link--items">
                    <h2>Contact</h2>
                    <a target="_blank" href="https://github.com/Mr-Mesut-OZTURK" rel="noreferrer">Github</a>
                    <a target="_blank" href="https://www.linkedin.com/in/mesut-ozturk/" rel="noreferrer">Linkedin</a>
                    <a target="_blank" href="mailto: mesut8311006@gmail.com" rel="noreferrer">Gmail</a>
                </div>



            </div>

            <section className="social__media">
                <div className="social__media--wrap">

                    <div className="footer__logo">
                        <a href="#" id="footer__logo">LOGO</a>
                    </div>

                    <p className="website__rights">MESUT 2021. All rights reserved</p>

                    <div className="social__icons">

                        <a href="#" className="social__icon--link" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>

                        <a href="#" className="social__icon--link" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="#" className="social__icon--link" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>

                        <a href="#" className="social__icon--link" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="#" className="social__icon--link" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>

                    </div>

                </div>
            </section>

        </footer>

    )

}