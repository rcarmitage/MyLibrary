import React from "react";

const Desk = () => {
  // TODO: Use google_id in current to make a request for the Google Books API entry, display the cover image/title/author/year
  // TODO: Button to open Google Books entry in another window
  // TODO: Button with ternary operator - "Add to shelf" if the book is not already on the shelf (the google_id is not in local storage), "Remove from shelf" if it is
  // TODO: Button to clear desk

  return (
    <div className="desk">
      <h3>Desk</h3>
      <p>[Current book goes here]</p>
      <h4 className="cover-image-desk">[Cover Image]</h4>
      <h4>Title</h4>
      <h5>Author | Year</h5>
      <h5>About: [About paragraph]</h5>
      <div>
        <button>Link to Google Books entry</button>
        <button>Add to/remove from shelf</button>
      </div>
      <button>Clear desk</button>
    </div>
  );
};

export default Desk;
