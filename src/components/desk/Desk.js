import React, { Fragment, useContext, useEffect } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Desk = ({ book }) => {
  const libraryContext = useContext(LibraryContext);
  const { getBook, current, setCurrent, clearCurrent } = libraryContext;

  // const { id, title, author, year, google_id } = book;

  // TODO: Use google_id in current to make a request for the Google Books API entry, display the cover image/title/author/year
  // useEffect(() => {
  //   getBook(current);
  //   console.log(current);
  //   // eslint-disable-next-line
  // }, []);

  // TODO: Button to open Google Books entry in another window
  // TODO: Button with ternary operator - "Add to shelf" if the book is not already on the shelf (the google_id is not in local storage), "Remove from shelf" if it is
  // TODO: Button to clear desk

  // if (current === null) {
  //   return (
  //     <h4>Please select a book, either from the shelf or search results</h4>
  //   );
  // }

  return (
    <Fragment>
      <div className="desk">
        <h3>Desk</h3>
        {/* <h4 className="cover-image-desk">[Cover Image]</h4>
        <h4>Title</h4>
        <h5>Author | Year</h5>
        <h5>About: [About paragraph]</h5> */}
        <button onClick={() => getBook(current)}>Get book</button>
        <div>
          <button>Link to Google Books entry</button>
          <button>Add to/remove from shelf</button>
        </div>
        <button>Clear desk</button>
      </div>
    </Fragment>
  );
};

export default Desk;
