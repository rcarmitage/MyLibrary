import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const SearchItem = ({ searchResult }) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook } = libraryContext;
  const {
    volumeInfo: { title, authors, publishedDate },
  } = searchResult;

  return (
    <div>
      <p>
        {title} | {authors} | {publishedDate}
      </p>
      <button onClick={() => setDeskBook(searchResult)}>View Details</button>
    </div>
  );
};

export default SearchItem;
