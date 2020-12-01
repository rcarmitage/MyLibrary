import React from "react";
import ShelfBooks from "../shelf/ShelfBooks";
import Desk from "../desk/Desk";
import Search from "../search/Search";

const Home = () => {
  return (
    <div>
      <div>
        <h4 className="intro">
          Search the Google Books API Archive to add books to the shelf
        </h4>
        <div className="shelf-container">
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
