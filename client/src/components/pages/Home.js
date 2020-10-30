import React, { useContext } from "react";
import ShelfBooks from "../shelf/ShelfBooks";
import Desk from "../desk/Desk";
import Search from "../search/Search";
import LibraryContext from "../../context/library/libraryContext";

const Home = () => {
  const libraryContext = useContext(LibraryContext);

  const { clearShelfBooks } = libraryContext;

  return (
    <div>
      <div>
        <h4 className="intro">
          Search the Google Books API to add books to the shelf
        </h4>
        <div className="shelf-container">
          <button onClick={clearShelfBooks}>Clear shelf</button>
          <div className="shelf">
            <ShelfBooks />
          </div>
        </div>
        <div className="grid-2">
          <div>
            <Desk />
          </div>
          <div className="search-container">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
