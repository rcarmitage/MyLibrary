import React from "react";
import ShelfBooks from "../shelf/ShelfBooks";
import Desk from "../desk/Desk";
import Search from "../search/Search";

const Home = () => (
  <div>
    <h2>Home</h2>
    <div>
      <div className="shelf">
        <ShelfBooks />
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
