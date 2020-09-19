import React, { useReducer } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_SHELFBOOKS,
  GET_DESKBOOK,
  ADD_BOOK,
  DELETE_BOOK,
  // SET_DESKBOOK,
  CLEAR_DESKBOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_BOOKS,
  BOOK_ERROR,
} from "../types";

const LibraryState = (props) => {
  const initialState = {
    shelfBooks: [],
    deskBook: null,
    searchResults: [],
    current: null,
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  // Get a book's info from the API
  const getDeskBook = async (id) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?fields=id,volumeInfo(title,authors,publishedDate,description,imageLinks/smallThumbnail)`
    );

    dispatch({ type: GET_DESKBOOK, payload: res.data });
  };

  // Get all books in the shelfBooks array
  const getShelfBooks = async () => {
    const res = await axios.get("/shelfBookIDs");

    dispatch({ type: GET_SHELFBOOKS, payload: res.data });
  };

  // Add book to a shelf

  // Delete book from a shelf

  // // Set book to be viewed in viewing area
  // const setDeskBook = (google_id) => {
  //   dispatch({ type: SET_DESKBOOK, payload: google_id });
  // };

  // // Clear book to be viewed in viewing area
  const clearDeskBook = () => {
    clearCurrent();
    dispatch({ type: CLEAR_DESKBOOK });
  };

  // Set current book - data to be used for viewing area
  const setCurrent = (google_id) => {
    dispatch({ type: SET_CURRENT, payload: google_id });
  };

  // Clear current book - data to be used for viewing area
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Search Google Books API
  const searchBooks = async (text) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=10&fields=items(id,volumeInfo(title,authors,publishedDate,description,imageLinks/smallThumbnail))`
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
        getShelfBooks,
        getDeskBook,
        // setDeskBook,
        clearDeskBook,
        setCurrent,
        clearCurrent,
        searchBooks,
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryState;
