import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const SearchItem = ({ searchResult }) => {
  const libraryContext = useContext(LibraryContext);
  const { setCurrent } = libraryContext;
  const {
    id,
    volumeInfo: {
      title,
      authors,
      publishedDate,
      description,
      imageLinks: { smallThumbnail },
    },
  } = searchResult;

  return (
    <div>
      <p>
        {title} | {authors} | {publishedDate}
      </p>
      <button onClick={() => setCurrent(searchResult)}>View Details</button>
    </div>
  );
};

export default SearchItem;
