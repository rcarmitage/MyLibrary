import React, { useReducer } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  BOOK_ERROR,
} from "../types";

const LibraryState = (props) => {
  const initialState = {
    books: [
      {
        id: 1,
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        year: 1939,
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
      },
      {
        id: 3,
        title: "Meditations",
        author: "Marcus Aurelius, translated by Gregory Hayes",
        year: 2002,
        google_id: "24a_o-VJvGsC",
      },
      {
        id: 4,
        title: "Natives: Race & Class in the Ruins of Empire",
        author: "Akala",
        year: 2018,
      },
      {
        id: 5,
        title: "The Daily Stoic",
        author: "Ryan Holiday",
        year: 2016,
      },
    ],
    current: "24a_o-VJvGsC",
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  // Get a book's info from the API
  const getBook = async (google_id) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${google_id}`
      );

      dispatch({ type: GET_BOOK, payload: res.data });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response });
    }
  };

  // Add book to a shelf

  // Delete book from a shelf

  // Set current book - to be viewed in viewing area
  const setCurrent = (google_id) => {
    dispatch({ type: SET_CURRENT, payload: google_id });
  };

  // Clear current book - clear viewing area
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <LibraryContext.Provider
      value={{
        books: state.books,
        getBook,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryState;
