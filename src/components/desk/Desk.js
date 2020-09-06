import React from "react";

const Desk = () => {
  return (
    <div className="desk">
      <h3>Desk</h3>
      <p>[Current book goes here]</p>
      <h4 className="cover-image-desk">[Cover Image]</h4>
      <h4>Title</h4>
      <h5>Author | Year</h5>
      <h5>About: [About paragraph]</h5>
      <button>Link to Google Books entry</button>
      <button>Add to/remove from shelf</button>
    </div>
  );
};

export default Desk;
