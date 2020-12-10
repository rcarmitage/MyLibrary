import React from "react";
import ShelfBooks from "../shelf/ShelfBooks";
import Desk from "../desk/Desk";
import Search from "../search/Search";

const Home = () => {
  return (
    <div>
      <div>
        <div className="shelf-container">
          <div className="shelf">
            <ShelfBooks />
          </div>
        </div>
        <h4 className="intro">
          Search the{" "}
          <a
            id="google-books-api-link"
            href="https://books.google.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Books API
          </a>{" "}
          Archive below to add up to 10 books to the shelf
        </h4>
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
