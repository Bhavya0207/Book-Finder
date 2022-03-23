import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutItem(props) {
  const {
    title,
    description,
    authors,
    publishedDate,
    image,
    rating,
    raters,
    link,
  } = props;
  // console.log(link)
  const [stars, setStars] = useState([]);
  const getStars = () => {
    let starArray = [];
    for (let index = 1; index <= rating; index++) {
      starArray.push(index);
    }
    if (rating % 1 === 0.5) {
      starArray.push(0.5);
    }
    setStars(starArray);
  };
  useEffect(() => {
    getStars();
    // eslint-disable-next-line
  }, []);

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

      <div className="details">
        <div className="authors">
          <i className="fa-solid fa-pen-to-square"></i>
          {authors.map((author, index) => {
            return <p key={index}>{author}</p>;
          })}
        </div>

        <div className="date">
          <i className="fa-regular fa-calendar"></i>
          <p>{publishedDate}</p>
        </div>
      </div>

      <div className="ratings">
        <div className="rating">
          {rating}
          {stars.map((element, index) => {
            return (
              <i
                key={index}
                className={
                  element === 0.5
                    ? "fa-solid fa-star-half-stroke"
                    : "fa-solid fa-star"
                }
              ></i>
            );
          })}
          {" Stars"}
        </div>
        <p>*rated by {raters} readers</p>
      </div>

      <div className="link-button">
        {link && (
          <button onClick={() => window.open(link, "blank")}>Get Book</button>
        )}
      </div>
    </>
  );
}

export default AboutItem;
