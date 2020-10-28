import React, { useContext, useState } from "react";
import SearchItem from "./SearchItem";
import LibraryContext from "../../context/library/libraryContext";

const Search = () => {
  const libraryContext = useContext(LibraryContext);

  const { searchResults } = libraryContext;

  const [text, setText] = useState("");
  const [searchFields, setSearchFields] = useState("");
  const [buttonSelected, setButtonSelected] = useState("");

  // useEffect(() => {
  //   checkSelectedButton();
  // }, [libraryContext]);

  const onSubmit = (e) => {
    e.preventDefault();
    libraryContext.searchBooks(searchFields, text);
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  // const isButtonSelected = {

  // }

  // const fieldSelected = {
  //   border: "1px solid rgba(181, 166, 66, 0.7)"
  // }

  // const checkSelectedButton = () => {
  //   if (searchFields === "") {
  //     button #all || style="border: 1px solid rgba(181, 166, 66, 0.7)"
  //     // button #title border: 1px solid rgba(181, 166, 66, 0.4);
  //     // button #author border: 1px solid rgba(181, 166, 66, 0.4);
  //   }
  //   if (searchFields === "intitle:") {
  //     // button #all inline CSS = border: 1px solid rgba(181, 166, 66, 0.4);
  //     // button #title border: 1px solid rgba(181, 166, 66, 0.7);
  //     // button #author border: 1px solid rgba(181, 166, 66, 0.4);
  //   }
  //   if (searchFields === "inauthor:") {
  //     // button #all || style={{border: 1px solid rgba(181, 166, 66, 0.4)}}
  //     // button #title border: 1px solid rgba(181, 166, 66, 0.4);
  //     // button #author border: 1px solid rgba(181, 166, 66, 0.7);
  //   }
  // };

  // const fieldSelected = () => {

  // }

  return (
    <div className="search">
      <button className="clear">Clear</button>
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
