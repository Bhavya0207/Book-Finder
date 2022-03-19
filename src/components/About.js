import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutItem from "./AboutItem";
import LoadingBar from "react-top-loading-bar";

export default function About() {
  let { id } = useParams();

  const [book, setBook] = useState();
  const [progress, setProgress] = useState(0);

  const getBookRequest = async () => {
    setProgress(10);
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    setProgress(50);
    const responseJson = await response.json();

    if (responseJson) {
      setBook(responseJson.volumeInfo);
      setProgress(100);
    }
 
  };

  useEffect(() => {
    getBookRequest();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <LoadingBar
        color="white"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        shadow={true}
      />

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
