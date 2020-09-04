import React from "react";

const BookItem = ({ book }) => {
  const { id, title, author, year, fiction } = book;

  return (
    <div>
      <h5>{title}</h5>
      <p>
        {author}, {year} - Fiction: {fiction}
      </p>
    </div>
  );
};

export default BookItem;
