import { BookItem } from 'components';
import { demoBooksData } from 'dummy';
import React from 'react'


const ProjectsPage = () => {

  return (
    <div className="product">

      <div className="product__list">
        {
          demoBooksData?.slice(0, 14).map(
            (book, index) => (
              <BookItem book={book} key={index} number={index} />
            )
          )
        }
      </div>

    </div>
  )

}

export default ProjectsPage;
/* {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  }, */