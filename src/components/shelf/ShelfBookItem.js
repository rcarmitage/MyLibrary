import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBookItem = ({ book }) => {
  const libraryContext = useContext(LibraryContext);
  const { setCurrent, clearCurrent } = libraryContext;

  const { google_id } = book;

  // TODO: Use google_id in local storage to make a request for the Google Books API entry, display the cover image/title/author/year, cover image is clickable and sets the book as current (which then displays on the Desk)
  // TODO: Buttons to remove each book and clear shelf

  getShelfBook(google_id);
  useEffect(() => {
    getShelfBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="book-info">
      {/* <img src="" alt="book cover image" onClick={() => setCurrent(book)} /> */}
      {/* <h4>{title}</h4>
      <h5>
        {author} | {year}
      </h5> */}
      {google_id === null ? (
        <p>Placeholder</p>
      ) : (
        <p>getShelfBook({google_id})</p>
      )}
    </div>
  );
};

export default ShelfBookItem;
