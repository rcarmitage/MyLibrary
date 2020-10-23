import React, { useContext, useState } from "react";
import LibraryContext from "../../context/library/libraryContext";

const SearchItem = ({ searchResult }) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook } = libraryContext;

  const {
    volumeInfo: { title, authors, publishedDate },
  } = searchResult;

  const [noAuthors, setNoAuthors] = useState(false);
  const [noPublishedDate, setNoPublishedDate] = useState(false);

  if (authors === "") {
    setNoAuthors(true);
  }

  if (publishedDate === "") {
    setNoPublishedDate(true);
  }

  return (
    <div className="results-item grid-search-item">
      <div>
        <p>
          <b>Title | </b>
          {title}
        </p>
        <p>
          <b>Authors | </b>
          {noAuthors
            ? "No author information available"
            : authors.map(function (author, index) {
                return <span key={index}>{(index ? ", " : "") + author}</span>;
              })}
        </p>
        <p>
          <b>Published | </b>
          {noPublishedDate
            ? "No publish date available"
            : publishedDate.slice(0, 4)}
        </p>
      </div>
      <div>
        <button onClick={() => setDeskBook(searchResult)}>View Details</button>
      </div>
    </div>
  );
};

export default SearchItem;
