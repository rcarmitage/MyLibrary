import React from "react";
import Shelf from "../shelves/Shelf";
import Search from "../search/Search";

const Home = () => (
  <div>
    <h2>Home</h2>
    <div className="grid-2">
      <div className="shelves-container">
        <h3>My Books</h3>
        <h4>Fiction</h4>
        <Shelf />
        <h4>Non-fiction</h4>
        <Shelf />
      </div>
      <div className="search-container">
        <Search />
      </div>
    </div>
  </div>
);

export default Home;
