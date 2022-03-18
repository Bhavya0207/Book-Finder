import React from "react";

function AboutItem(props) {
  const { title, description, authors, publishedDate, image } = props;
  // console.log(title, description, authors, publishedDate, image);
  return (
    <>
      <h1>{title}</h1>
      <img
        src={image}
        alt={title}
        style={{ height: "200px", width: "150px" }}
      />
      <br />
      {publishedDate}
      {/* there can be html tags in the description */}
      <p dangerouslySetInnerHTML={{ __html: description }}></p>

      {authors.map((author, index) => {
        return <p key={index}>{author}</p>;
      })}
    </>
  );
}

export default AboutItem;
