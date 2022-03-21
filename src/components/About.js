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
            book.description ? book.description : "No Description Available"
          }
          publishedDate={book.publishedDate}
          image={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "https://media.istockphoto.com/vectors/book-flat-icon-vector-id901558740?k=20&m=901558740&s=612x612&w=0&h=LtS2bYY-PwHfx7fyL9sfVX3uQjVym8_z8ZCFJ0euLtY="
          }
        />
      )}
    </>
  );
}
