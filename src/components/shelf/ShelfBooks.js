import React, { Fragment, useContext, useEffect } from "react";
import ShelfBookItem from "./ShelfBookItem";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBooks = () => {
  const libraryContext = useContext(LibraryContext);

  const { shelfBooks, getShelfBooks } = libraryContext;

  useEffect(() => {
    getShelfBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {/* <div> */}
      {shelfBooks.length === 0 ? (
        <p>Your shelf is empty...</p>
      ) : (
        shelfBooks.map((book) => (
          <ShelfBookItem key={book.shelfId} book={book} />
        ))
      )}
      {/* </div> */}
      {/* <button>Clear shelf</button> */}
    </Fragment>
  );
};

export default ShelfBooks;
