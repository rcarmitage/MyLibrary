import React, { Fragment, useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Books = () => {
  const libraryContext = useContext(LibraryContext);

  const { books } = libraryContext;

  return (
    <Fragment>
      {books.map((book) => (
        <p>{book.title}</p>
      ))}
    </Fragment>
  );
};

export default Books;
