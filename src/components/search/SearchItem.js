import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const SearchItem = ({
  searchResult: {
    id,
    volumeInfo: { title, authors, publishedDate },
  },
}) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook } = libraryContext;

  return (
    <div>
      <p>
        {title} | {authors} | {publishedDate}
      </p>
      <button onClick={() => setDeskBook(id)}>View Details</button>
    </div>
  );
};

export default SearchItem;
