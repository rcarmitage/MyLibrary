import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Desk = () => {
  const libraryContext = useContext(LibraryContext);
  const { deskBook, clearDeskBook } = libraryContext;

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
