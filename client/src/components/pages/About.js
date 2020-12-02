import React from "react";

const About = () => (
  <div className="about">
    <h2>About</h2>
    <p>
      A full-stack app for accessing the Google Books API, created by Rob
      Armitage. The user is able to search for books and view details, and add
      to and remove from the shelf.
    </p>
    <p>Please see the GitHub README for details of the development process.</p>
    <div>
      <button>
        <a
          href="https://github.com/rcarmitage/MyLibrary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repo
        </a>
      </button>
    </div>
    <div>
      <button>
        <a
          href="https://www.linkedin.com/in/rob-armitage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn - Rob Armitage
        </a>
      </button>
    </div>
    <div className="vector-link">
      <button>
        <a
          href="https://www.vecteezy.com/vector-art/165272-warm-libro-vectors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Icon Vector by Vecteezy
        </a>
      </button>
    </div>
  </div>
);

export default About;
