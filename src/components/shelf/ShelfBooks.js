import React, { Fragment, useContext, useEffect } from "react";
import ShelfBookItem from "./ShelfBookItem";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBooks = () => {
  const libraryContext = useContext(LibraryContext);

  const { shelfBooks, getShelfBooks } = libraryContext;

  // useEffect(() => {
  //   getBooks();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Fragment>
      {shelfBooks.map((book) => (
        <ShelfBookItem key={book.id} book={book} />
      ))}
    </Fragment>
  );
};

export default ShelfBooks;
