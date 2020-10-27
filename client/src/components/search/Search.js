import React, { useContext, useState } from "react";
import SearchItem from "./SearchItem";
import LibraryContext from "../../context/library/libraryContext";

const Search = () => {
  const libraryContext = useContext(LibraryContext);

  const { searchResults } = libraryContext;

  const [text, setText] = useState("");
  const [searchFields, setSearchFields] = useState("");
  const [buttonSelected, setButtonSelected] = useState(className="button-selected");

  const onSubmit = (e) => {
    e.preventDefault();
    libraryContext.searchBooks(searchFields, text);
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <button className="clear">Clear</button>
      <h2 className="search-title">Archive</h2>
      <div className="search-fields">
        <button onClick={() => {setSearchFields(""),}} className="search-field">
          All Fields
        </button>
        <button
          onClick={() => setSearchFields("intitle:")}
          className="search-field"
        >
          By Title
        </button>
        <button
          onClick={() => setSearchFields("inauthor:")}
          className="search-field"
        >
          By Author
        </button>
      </div>
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
      <div className="results-items">
        {searchResults.map((searchResult) => (
          <SearchItem key={searchResult.id} searchResult={searchResult} />
        ))}
      </div>
    </div>
  );
};

export default Search;
