import { technologiesData } from 'dummy'
import React from 'react'



const BooksPage = () => {

    return (
        <div className="about">
            <h2 className="about__title">What I Know</h2>
            <div className="about__cards__container" >

                {
                    technologiesData.map((item) => {

                        return (
                            <div className="about__card" key={item.cardTitle}>
                                <div
                                    style={{
                                        backgroundImage: `url('${item.cardImg}')`
                                    }}
                                    className="about__card__img__container"
                                />

                                <div className="about__card__info">
                                    <h3>${item.cardTitle}</h3>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default BooksPage;