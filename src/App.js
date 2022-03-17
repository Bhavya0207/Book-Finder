import "./App.css";
import { useEffect, useState } from "react";
import Books from './components/Books'
import Search from "./components/Search";
import About from "./components/About";
import { BrowserRouter as Router,
   Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("harry+potter");
  // const [order, setOrder] = useState("relevance")

  const getBooksRequest = async (searchValue) => {
    let searchVal= searchValue ? searchValue:"Harry=Potter"
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}&orderBy=relevance&maxResults=40&key=${process.env.REACT_APP_API_KEY}`; 
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.items) {
      setBooks(responseJson.items);
    } 
    //console.log(responseJson.items);
  };
  useEffect(() => {
    getBooksRequest(search);
  }, [search]);

  return (
    <Router>
      <Search search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/volumes/:id" element={<About />} />
        <Route exact path="/" element={<Books booksArray={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
