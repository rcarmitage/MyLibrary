import React from "react";

const BookItem = ({ book }) => {
  const { id, title, author, year, fiction } = book;

  return (
    <div className="book-info">
      <h5>{title}</h5>
      <p>
        {author} | {year} | {fiction === true ? "Fiction" : "Non-fiction"}
      </p>
    </div>
  );
};

export default BookItem;
