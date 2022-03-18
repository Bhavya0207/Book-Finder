import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const { imageLink, title, id } = props;

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (url) => {
      navigate(`/volumes/${url}`, { replace: true });
    },
    [navigate]
  );

  return (
    <div className="book" onClick={() => handleOnClick(id)}>
      <div className="book-image-container">
      <img
        className="book-image"
        src={imageLink}
        alt={title}
      /></div>
      <br />
      <h1 className="book-title">{title}</h1>
      {/* <hr /> */}
    </div>
  );
}

export default Book;
