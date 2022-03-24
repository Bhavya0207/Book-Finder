import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AboutItem from "./AboutItem";
import LoadingBar from "react-top-loading-bar";

export default function About() {
  let { id } = useParams();
  let navigate = useNavigate();
  function redirct() {
    navigate("/");
  }

  const [book, setBook] = useState();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  const getBookRequest = async () => {
    setProgress(10);
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
    try {
      const response = await fetch(url);
      setProgress(50);
      if (!response.ok) {
        // means the book wasn't found/ wrong id
        // in such case redirct to home
        setError(true);
        return null;
      }
      const responseJson = await response.json();
      if (responseJson) {
        setBook(responseJson.volumeInfo);
        setProgress(100);
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    //call function on load
    getBookRequest();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // if error then redirect

    if (error) {
      setTimeout(() => {
        redirct();
      }, 2000);
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <>
      {/* No need to show loading bar when error */}
      {!error && (
        <LoadingBar
          color="white"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          shadow={true}
        />
      )}
      {/* Show message if error */}
      {error && (
        <>
          <h1>No such Book exists</h1>
          <p>Redirecting back</p>
        </>
      )}

      {/* main page only when no error and book in not null */}
      {!error && book && (
        <AboutItem
          title={book.title}
          authors={book.authors ? book.authors : ["unknown"]}
          description={
            book.description ? book.description : "No Description Available"
          }
          publishedDate={book.publishedDate ? book.publishedDate : "unknown"}
          image={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "https://media.istockphoto.com/vectors/book-flat-icon-vector-id901558740?k=20&m=901558740&s=612x612&w=0&h=LtS2bYY-PwHfx7fyL9sfVX3uQjVym8_z8ZCFJ0euLtY="
          }
          rating={book.averageRating ? book.averageRating : "0"}
          raters={book.ratingsCount ? book.ratingsCount : "0"}
          link={book.previewLink ? book.previewLink : false}
        />
      )}
    </>
  );
}
