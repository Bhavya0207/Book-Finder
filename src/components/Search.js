import React from 'react'
import { Link } from "react-router-dom";


function search(props) {
  return (
    <>
      <div className="searchbar">
        <div>
          <i className="fa-solid fa-book"></i>
          <Link to="/" className="logo">
            Book-Pedia
          </Link>
        </div>
        
        <input
          onChange={(e) => props.setSearch(e.target.value)}
          className="search"
          placeholder="Start searching..."
        />
      </div>
    </>
  );
}


export default search
