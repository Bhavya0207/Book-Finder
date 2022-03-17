import React from "react";
import Book from "./Book";

 function Books (props) {
  const { booksArray } = props;
  return (
    <>
      <div className="books">
        {booksArray.map((element, index) => {
          return (
            <Book
              imageLink={
                element.volumeInfo.imageLinks
                  ? element.volumeInfo.imageLinks.thumbnail
                  : "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
              }
              title={element.volumeInfo.title}
              description={
                element.volumeInfo.description
                  ? element.volumeInfo.description
                  : "no description"
              }
              id={element.id}

              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Books