import React, { FC } from 'react'
import { BookItemType } from 'types'

interface BookItemProps {
    book: BookItemType,
    number: number
}


export const BookItem: FC<BookItemProps> = ({ book, number }) => {


    return (
        <div className="book_card">

            <div id="card__img" className="card__img">
                {/* <img className="" src={`https://picsum.photos/id/${number}/300/300`} alt="Card" /> */}
                <img className="" src={`./${book.imageLink}`} alt="Card" width="100%" />
            </div>

            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p>{book.language} / {book.country}</p>
                <p className="card-text">{book.author}</p>
                <a href={book.link} className="btn btn-primary">Visit</a>
            </div>

        </div>

    )

}