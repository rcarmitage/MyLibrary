import React from "react";
import ShelfBooks from "../shelf/ShelfBooks";
import Desk from "../desk/Desk";
import Search from "../search/Search";

const Home = () => (
  <div>
    <div>
      <p className="intro">
        Search the Google Books API to add books to the shelf
      </p>
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

export default Home;
