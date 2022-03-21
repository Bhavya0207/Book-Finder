import React from "react";
import { Link } from "react-router-dom";


function AboutItem(props) {
  const { title, description, authors, publishedDate, image } = props;
  return (
    <>
      <div className="about-bar">
        <Link to="/" className="logo">
          <i className="fa-solid fa-arrow-left-long"></i>
          Book-Pedia
        </Link>
      </div>
      <div className="about-main">
        <img src={image} alt={title} />
        <div className="main-details">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
      {publishedDate}
      {authors.map((author, index) => {
        return <p key={index}>{author}</p>;
      })}
    </>
  );
}

export default AboutItem;
