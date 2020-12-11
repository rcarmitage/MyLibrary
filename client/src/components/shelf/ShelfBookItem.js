import React, { useContext } from "react";
import noCoverImage from "../../assets/no_cover_image.jpg";
import LibraryContext from "../../context/library/libraryContext";

const ShelfBookItem = ({ book }) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook, deleteBook } = libraryContext;

  const {
    _id,
    volumeInfo: {
      title,
      imageLinks: { smallThumbnail },
    },
  } = book;

  const onDelete = () => {
    deleteBook(_id);
  };

  return (
    <div className="book-info">
      {smallThumbnail === "No cover image available" ? (
        <img
          src={noCoverImage}
          alt="book cover"
          onClick={() => setDeskBook(book)}
        ></img>
      ) : (
        <img
          src={smallThumbnail}
          alt="book cover"
          onClick={() => setDeskBook(book)}
        ></img>
      )}
      <button onClick={onDelete}>Remove</button>
      <div className="details" onClick={() => setDeskBook(book)}>
        <p className="book-title">{title}</p>
      </div>
    </div>
  );
};

export default ShelfBookItem;
