import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const SearchItem = ({ searchResult }) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook } = libraryContext;
  const {
    volumeInfo: { title, authors, publishedDate },
  } = searchResult;

  return (
    <div className="results-item grid-search-item">
      <div>
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
      </div>
      <div>
        <button onClick={() => setDeskBook(searchResult)}>View Details</button>
      </div>
    </div>
  );
};

export default SearchItem;
