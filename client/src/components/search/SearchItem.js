import React, { useContext } from "react";
import LibraryContext from "../../context/library/libraryContext";

const SearchItem = ({ searchResult }) => {
  const libraryContext = useContext(LibraryContext);
  const { setDeskBook } = libraryContext;

  const {
    volumeInfo: { title, authors, publishedDate },
  } = searchResult;

  const [deskClassUpdate, setDeskClassUpdate] = useState("desk ");

  return (
    <div className="results-item grid-search-item">
      <div>
        <p>
          <b>Title | </b>
          {title}
        </p>
        <p>
          <b>Authors | </b>
          {authors.map(function (author, index) {
            return <span key={index}>{(index ? ", " : "") + author}</span>;
          })}
        </p>
        <p>
          <b>Published | </b>
          {publishedDate === "No publishing information available"
            ? publishedDate
            : publishedDate.slice(0, 4)}
        </p>
      </div>
      <div className="view-details-container">
        <button onClick={() => setDeskBook(searchResult)}>View Details</button>
      </div>
    </div>
  );
};

export default SearchItem;
