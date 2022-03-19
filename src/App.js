import "./App.css";
import { useEffect, useState } from "react";
import Books from './components/Books'
import Search from "./components/Search";
import About from "./components/About";
import { BrowserRouter as Router,
   Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("harry+potter");
  // const [order, setOrder] = useState("relevance")
  const [progress, setProgress] = useState(0);

  const getBooksRequest = async (searchValue) => {
    let searchVal= searchValue ? searchValue:"Harry=Potter"
    setProgress(10)
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}&orderBy=relevance&maxResults=40&key=${process.env.REACT_APP_API_KEY}`; 
    const response = await fetch(url);
    setProgress(50)
    const responseJson = await response.json();
    setProgress(70)
    if (responseJson.items) {
      setBooks(responseJson.items);
      setProgress(100)
    } 
    //console.log(responseJson.items);
  };
  useEffect(() => {
    getBooksRequest(search);
  }, [search]);

  return (
    <Router>
      <Routes>
        <Route exact path="/volumes/:id" element={<About />} />
        <Route
          exact
          path="/"
          element={
            <>
              <Search search={search} setSearch={setSearch} />
              <LoadingBar
                color="white"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
              <Books booksArray={books} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
