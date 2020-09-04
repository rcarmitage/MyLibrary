import React, { useReducer, useEffect } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

const LibraryState = (props) => {
  const initialState = {
    books: [
      {
        id: 1,
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        year: 1939,
        fiction: true,
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        fiction: true,
      },
      {
        id: 3,
        title: "Meditations",
        author: "Marcus Aurelius, translated by Gregory Hayes",
        year: 2002,
        fiction: false,
      },
      {
        id: 4,
        title: "Natives: Race & Class in the Ruins of Empire",
        author: "Akala",
        year: 2018,
        fiction: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  // Get all books for a shelf

  // Add book to a shelf

  // Delete book from a shelf

  // Set current book - to be viewed in viewing area

  // Clear current book - clear viewing area

  return (
    <LibraryContext.Provider
      value={{
        books: state.books,
      }}
    ></LibraryContext.Provider>
  );
};

export default LibraryState;
