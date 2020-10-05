import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBookItem = ({ book }) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook } = libraryContext;

  const {
    volumeInfo: {
      title,
      imageLinks: { smallThumbnail },
    },
  } = book;

  // TODO: Buttons to remove each book and clear shelf

  return (
    <div className="book-info">
      <img
        src={smallThumbnail}
        alt="book cover"
        onClick={() => setDeskBook(book)}
      />
      <div className="details">
        <p className="book-title">{title}</p>
        <div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ShelfBookItem;
