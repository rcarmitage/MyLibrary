import React, { Fragment, useState, useContext, useEffect } from "react";
import LibraryContext from "../../context/library/libraryContext";

const Desk = () => {
  const libraryContext = useContext(LibraryContext);
  const { getBook, deskBook, setDeskBook, clearDeskBook } = libraryContext;

  // const { id, title, author, year, google_id } = book;

  // TODO: Use google_id in current to make a request for the Google Books API entry, display the cover image/title/author/year
  // useEffect(() => {
  //   if (deskBook !== null) {
  //     getBook(deskBook);
  //   } else {
  //     setDeskBook({
  //       smallThumbnail: null,
  //       title: "",
  //       authors: "",
  //       publishedDate: "",
  //       description: "",
  //     });
  //   }
  // }, [libraryContext, deskBook]);

  // const [deskBook, setDeskBook] = useState({
  //   smallThumbnail: null,
  //   title: "",
  //   authors: "",
  //   publishedDate: "",
  //   description: "",
  // });

  // const {
  //   smallThumbnail,
  //   title,
  //   authors,
  //   publishedDate,
  //   description,
  // } = deskBook;

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
        <p>{deskBook}</p>
        <h4 className="cover-image-desk">[Cover Image]</h4>
        <h4>Title</h4>
        <h5>Author | Year</h5>
        <h5>About: [About paragraph]</h5>
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
