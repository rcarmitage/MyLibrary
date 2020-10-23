import React, { useContext, useState } from "react";
import SearchItem from "./SearchItem";
import LibraryContext from "../../context/library/libraryContext";

const Search = () => {
  const libraryContext = useContext(LibraryContext);

  const { searchResults } = libraryContext;

  const [text, setText] = useState("");
  const [searchType, setSearchType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    libraryContext.searchBooks(searchType, text);
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <button>Clear</button>
      <h2 className="search-title">Archive</h2>
      <div className="search-type">
        <button onClick={() => setSearchType("")}>All fields</button>
        <button onClick={() => setSearchType("intitle:")}>By title</button>
        <button onClick={() => setSearchType("inauthor:")}>By author</button>
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
