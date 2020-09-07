import React, { Fragment, useContext, useEffect } from "react";
import BookItem from "./BookItem";
import LibraryContext from "../../context/library/libraryContext";

const Books = () => {
  const libraryContext = useContext(LibraryContext);

  const { books } = libraryContext;

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </Fragment>
  );
};

export default Books;
