import React, { Fragment, useContext, useEffect } from "react";
import ShelfBookItem from "./ShelfBookItem";
import Spinner from "../layout/Spinner";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBooks = () => {
  const libraryContext = useContext(LibraryContext);

  const { shelfBooks, getShelfBooks, loading } = libraryContext;

  useEffect(() => {
    getShelfBooks();
    // eslint-disable-next-line
  }, [libraryContext]);

  // return (
  //   <Fragment>
  //     {shelfBooks === null ? (
  //       <p>Your shelf is empty...</p>
  //     ) : loading ? (
  //       <Spinner />
  //     ) : (
  //       shelfBooks.map((book) => (
  //         <ShelfBookItem key={book._id} book={book} className="shelfbookitem" />
  //       ))
  //     )}
  //   </Fragment>
  // );

  if (shelfBooks === null) {
    return <p>Your shelf is empty...</p>;
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {shelfBooks.map((book) => (
          <ShelfBookItem key={book._id} book={book} className="shelfbookitem" />
        ))}
      </Fragment>
    );
  }
};

export default ShelfBooks;
