import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const { imageLink, title, description, id } = props;

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (url) => {
      navigate(`/volumes/${url}`, { replace: true });
    },
    [navigate]
  );

  return (
    <div className="book" onClick={() => handleOnClick(id)}>
      <img
        style={{ height: "200px", width: "150px" }}
        src={imageLink}
        alt={title}
      />
      <br />
      <h1>{title}</h1>
      <hr />
    </div>
  );
}

export default Book;
