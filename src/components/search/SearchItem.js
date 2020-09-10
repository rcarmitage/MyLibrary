import React, { Fragment } from "react";

const SearchItem = ({ searchResult: { id } }) => {
  return (
    <Fragment>
      <div>
        {/* <p>{title}</p> */}
        <p>{id}</p>
        {/* <p>{title}</p>
      <p>{authors}</p>
      <p>{publishedDate}</p> */}
        <button>View Details</button>
      </div>
    </Fragment>
  );
};

export default SearchItem;
