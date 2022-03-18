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
                  : "https://media.istockphoto.com/vectors/book-flat-icon-vector-id901558740?k=20&m=901558740&s=612x612&w=0&h=LtS2bYY-PwHfx7fyL9sfVX3uQjVym8_z8ZCFJ0euLtY="
              }
              title={element.volumeInfo.title}
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