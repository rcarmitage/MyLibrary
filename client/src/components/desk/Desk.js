import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Desk = () => {
  const libraryContext = useContext(LibraryContext);
  const { deskBook, clearDeskBook, addBook } = libraryContext;

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
        <button onClick={clearDeskBook} className="clear-desk">
          Clear
        </button>
        <div>
          <a href={`https://books.google.co.uk/books?id=${id}`} target="_blank">
            <button>View this title on Google Books</button>
          </a>
          <button onClick={addBook(deskBook)}>Add to/remove from shelf</button>
        </div>
        <div>
          <img
            src={smallThumbnail}
            className="cover-image-desk"
            alt="book cover"
          ></img>
          <div className="deskbook-details">
            <p>
              <b>Title | </b>
              {title}
            </p>
            <p>
              <b>Authors | </b>
              {authors}
            </p>
            <p>
              <b>Published | </b>
              {publishedDate}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="desk">
        <h4>
          To view book details, please select a title from the shelf or search
          results
        </h4>
      </div>
    );
  }
};

export default Desk;
