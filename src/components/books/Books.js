import React, { Fragment, useContext, useEffect } from "react";
import BookItem from "./BookItem";
import LibraryContext from "../../context/library/libraryContext";

const Books = () => {
  const libraryContext = useContext(LibraryContext);

  const { shelfBooks } = libraryContext;

  // useEffect(() => {
  //   getBooks();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Fragment>
      {shelfBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </Fragment>
  );
};

export default Books;
