import React, { useContext, useState } from "react";
import SearchItem from "./SearchItem";
import LibraryContext from "../../context/library/libraryContext";

const Search = () => {
  const libraryContext = useContext(LibraryContext);

  const { searchResults } = libraryContext;

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    libraryContext.searchBooks(text);
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <h3>Search</h3>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          name="text"
          placeholder="Search for title or author..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" className="btn" />
      </form>
      <div>
        <div className="results-headers">
          <p>Title</p>
          <p>Author</p>
          <p>Published</p>
        </div>
        <div className="results-items">
          {searchResults.map((searchResult) => (
            <SearchItem key={searchResult.id} searchResult={searchResult} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
