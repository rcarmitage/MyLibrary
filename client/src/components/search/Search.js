import React, { useContext, useState } from "react";
import SearchItem from "./SearchItem";
import LibraryContext from "../../context/library/libraryContext";

const Search = () => {
  const libraryContext = useContext(LibraryContext);

  const { searchResults, clearSearch } = libraryContext;

  const [text, setText] = useState("");
  const [searchFields, setSearchFields] = useState("");
  const [buttonSelected, setButtonSelected] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    libraryContext.searchBooks(searchFields, text);
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <div className="clear-button-container">
        <button onClick={clearSearch} className="clear">
          Clear
        </button>
      </div>
      <h2 className="search-title">Archive</h2>
      <div className="search-fields">
        <button
          onClick={() => {
            setSearchFields("");
            setButtonSelected("");
          }}
          className={
            buttonSelected === ""
              ? "search-field button-selected"
              : "search-field"
          }
        >
          All Fields
        </button>
        <button
          onClick={() => {
            setSearchFields("intitle:");
            setButtonSelected("title");
          }}
          className={
            buttonSelected === "title"
              ? "search-field button-selected"
              : "search-field"
          }
        >
          By Title
        </button>
        <button
          onClick={() => {
            setSearchFields("inauthor:");
            setButtonSelected("author");
          }}
          className={
            buttonSelected === "author"
              ? "search-field button-selected"
              : "search-field"
          }
        >
          By Author
        </button>
      </div>
      <div className="search-form-container">
        <form onSubmit={onSubmit} className="search-form">
          <input
            type="text"
            name="text"
            placeholder="Search for a book..."
            value={text}
            onChange={onChange}
          />
          <input type="submit" value="Submit" className="btn" />
        </form>
        <button
          onClick={() => {
            setText("");
          }}
        >
          Clear text
        </button>
      </div>
      <div className="results-items">
        {searchResults !== null
          ? searchResults.map((searchResult) => (
              <SearchItem key={searchResult.id} searchResult={searchResult} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Search;
