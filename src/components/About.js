import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutItem from "./AboutItem";

export default function About() {
  let { id } = useParams();
  const [book, setBook] = useState();
  const getBookRequest = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setBook(responseJson.volumeInfo);
    }
    // console.log(responseJson);
  };
  useEffect(() => {
    getBookRequest();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {book && (
        <AboutItem
          title={book.title}
          authors={book.authors}
          description={
            book.description ? book.description : "no description available"
          }
          publishedDate={book.publishedDate}
          image={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
          }
        />
      )}
    </>
  );
}
