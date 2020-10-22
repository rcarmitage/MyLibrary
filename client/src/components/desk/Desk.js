import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Desk = () => {
  const libraryContext = useContext(LibraryContext);
  const {
    shelfBooks,
    deskBook,
    clearDeskBook,
    addBook,
    deleteBook,
  } = libraryContext;

  if (deskBook !== null) {
    const {
      _id,
      id,
      volumeInfo: {
        title,
        authors,
        publishedDate,
        description,
        imageLinks: { smallThumbnail },
      },
    } = deskBook;

    let isOnShelf = shelfBooks.find(
      (shelfBook) => shelfBook.id === deskBook.id
    );

    // Check shelfBooks.length = < 10 to allow Add to shelf button
    // let shelfSpace = () => {
    // }

    const onAdd = () => {
      addBook(deskBook);
    };

    const onDelete = () => {
      deleteBook(_id);
    };

    return (
      <div className="desk">
        <button onClick={clearDeskBook} className="clear-desk">
          Clear
        </button>
        <div>
          <a
            href={`https://books.google.co.uk/books?id=${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View this title on Google Books</button>
          </a>
          {isOnShelf ? (
            <button onClick={onDelete}>Remove from shelf</button>
          ) : (
            <button onClick={onAdd}>Add to shelf</button>
          )}
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
          To view book details, please select a title from the shelf or the
          search results
        </h4>
      </div>
    );
  }
};

export default Desk;
