import React, { Fragment, useContext, useEffect } from "react";
import ShelfBookItem from "./ShelfBookItem";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBooks = () => {
  const libraryContext = useContext(LibraryContext);

  const { shelfBooks, getShelfBooks } = libraryContext;

  useEffect(() => {
    getShelfBooks();
    // eslint-disable-next-line
  }, [libraryContext]);

  return (
    <Fragment>
      {shelfBooks === null ? (
        <p>Your shelf is empty...</p>
      ) : (
        shelfBooks.map((book) => <ShelfBookItem key={book._id} book={book} />)
      )}
    </Fragment>
  );
};

export default ShelfBooks;
