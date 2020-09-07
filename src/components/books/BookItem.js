import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const BookItem = ({ book }) => {
  const libraryContext = useContext(LibraryContext);
  const { setCurrent, clearCurrent } = libraryContext;

  const { id, title, author, year } = book;

  // TODO: Use google_id in local storage to make a request for the Google Books API entry, display the cover image/title/author/year, cover image is clickable and sets the book as current (which then displays on the Desk)
  // TODO: Buttons to remove each book and clear shelf

  return (
    <div className="book-info">
      {/* <img src="" alt="book cover image" onClick={() => setCurrent(book)} /> */}
      <h4>{title}</h4>
      <h5>
        {author} | {year}
      </h5>
    </div>
  );
};

export default BookItem;
