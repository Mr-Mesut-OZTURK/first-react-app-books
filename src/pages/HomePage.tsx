import React from 'react'
import { categoriesData } from 'dummy';


const HomePage = () => {

    return (

        <div className="main home">

            <section className="home__section">

                <div className="icon__container">
                    <span className="fas fa-user"></span>
                </div>

                <div className="section__info">
                    <h2>Welcome!</h2>
                    <p>lorem ipsum, lorem</p>
                    <button className="btn btn-danger">Start</button>
                </div>

            </section>

            <section className="card_container">
                {
                    categoriesData.map((card, index) => (
                        <article className="home__card" key={index}>

                            <div className="home_card__img">
                                <img src={card.image} alt="" />
                            </div>

                            <div className="card__info">
                                <h2>{card.title}</h2>
                                <p>{card.description?.slice(0, 100)}</p>
                            </div>

                        </article>
                    ))
                }


            </section>
        </div>
    )

}

export default HomePage;