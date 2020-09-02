import React from "react";
import Shelf from "../shelves/Shelf";
import Search from "../search/Search";

const Home = () => (
  <div>
    <h4>Home</h4>
    <div className="grid-2">
      <div>
        <Shelf />
        <Shelf />
      </div>
      <div>
        <Search />
      </div>
    </div>
  </div>
);

export default Home;
