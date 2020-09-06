import React from "react";

const Search = () => {
  return (
    <div>
      <h3>Search</h3>
      <form>
        <input type="text" placeholder="Search for title, author..." />
      </form>
      <div>
        <div className="results-headers">
          <p>Title</p>
          <p>Author</p>
          <p>Published</p>
        </div>
        <div className="results-items">
          <p>[Results listed here]</p>
          <button>
            View book details (sets book as current, displays it on desk)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
