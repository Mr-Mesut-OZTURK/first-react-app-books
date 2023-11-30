import React from 'react'


const ContactPage = () => {

    return (
        <div className="main" id="sign-up">
            <div className="main__container">

                <div className="main__content">
                    <h1>You can ask to me</h1>
                    {/* <!-- <h2>Don't give up</h2> --> */}

                    <a href="#footer__container">
                        <button className="main__btn">
                            Contact with me
                        </button>
                    </a>

                </div>

                <div className="main__img--container">
                    <div className="main__img--card" id="card-2">
                        <i className="fas fa-users"></i>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ContactPage;