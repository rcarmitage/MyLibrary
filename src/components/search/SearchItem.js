import React from "react";

const SearchItem = ({
  searchResult: {
    id,
    volumeInfo: { title, authors, publishedDate },
  },
}) => {
  return (
    <div>
      <p>
        {title} | {authors} | {publishedDate}
      </p>
      <button>View Details</button>
    </div>
  );
};

export default SearchItem;
