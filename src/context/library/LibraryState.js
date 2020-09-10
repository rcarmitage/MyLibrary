import React, { useReducer } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
  SET_DESKBOOK,
  CLEAR_DESKBOOK,
  SEARCH_BOOKS,
  BOOK_ERROR,
} from "../types";

const LibraryState = (props) => {
  const initialState = {
    shelfBooks: [],
    deskBook: null,
    searchResults: [],
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
  const setDeskBook = (google_id) => {
    dispatch({ type: SET_DESKBOOK, payload: google_id });
  };

  // Clear current book - clear viewing area
  const clearDeskBook = () => {
    dispatch({ type: CLEAR_DESKBOOK });
  };

  // Search Google Books API
  const searchBooks = async (text) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=10`
    );

    dispatch({
      type: SEARCH_BOOKS,
      payload: res.data.items,
    });
  };

  return (
    <LibraryContext.Provider
      value={{
        shelfBooks: state.shelfBooks,
        deskBook: state.deskBook,
        searchResults: state.searchResults,
        current: state.current,
        getBook,
        setDeskBook,
        clearDeskBook,
        searchBooks,
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryState;
