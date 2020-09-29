import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBookItem = ({ book }) => {
  const libraryContext = useContext(LibraryContext);
  const { setCurrent, clearCurrent } = libraryContext;

  const {
    id,
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
        alt="book cover image"
        onClick={() => setCurrent(book)}
      />
      <p>{title}</p>
      <div>
        <button>View Details</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default ShelfBookItem;
