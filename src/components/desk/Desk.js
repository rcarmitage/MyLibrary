import React, { Fragment, useState, useContext, useEffect } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Desk = () => {
  const libraryContext = useContext(LibraryContext);
  const { getDeskBook, deskBook, current, clearDeskBook } = libraryContext;

  useEffect(() => {
    getDeskBook(current);
    // eslint-disable-next-line
  }, [libraryContext, current]);

  if (deskBook !== null) {
    const {
      id,
      volumeInfo: {
        title,
        authors,
        publishedDate,
        description,
        imageLinks: { smallThumbnail },
      },
    } = deskBook;

    return (
      <div className="desk">
        <img src={smallThumbnail}></img>
        <p>Title: {title}</p>
        <p>Authors: {authors}</p>
        <p>Published: {publishedDate}</p>
        <p>{description}</p>
        <div>
          <a href={`https://books.google.co.uk/books?id=${id}`} target="_blank">
            <button>View this title on Google Books</button>
          </a>
          <button>Add to/remove from shelf</button>
        </div>
        <button onClick={clearDeskBook}>Clear desk</button>
      </div>
    );
  }

  // TODO: Use google_id in current to make a request for the Google Books API entry, display the cover image/title/author/year

  if (current === null) {
    return (
      <div className="desk">
        <h4>
          To view book details, please select a title from the shelf or search
          results
        </h4>
      </div>
    );
  }

  // TODO: Button to open Google Books entry in another window
  // TODO: Button with ternary operator - "Add to shelf" if the book is not already on the shelf (the google_id is not in local storage), "Remove from shelf" if it is
  // TODO: Button to clear desk

  return (
    <Fragment>
      <div className="desk">
        <h3>Desk</h3>
        <p>{current}</p>
        {/* <button onClick={getBook(current)}>Book Details</button> */}
      </div>
    </Fragment>
  );
};

export default Desk;
