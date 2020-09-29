import React, { useReducer } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_SHELFBOOKS,
  GET_DESKBOOK,
  ADD_BOOK,
  DELETE_BOOK,
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
    current: [],
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  const apiKey = process.env.API_KEY;

  // Get all books in the shelfBooks array
  const getShelfBooks = async () => {
    const res = await axios.get("http://localhost:5001/api/shelfBooks");

    console.log(res);
    dispatch({ type: GET_SHELFBOOKS, payload: res.data });
  };

  // Get a book's info from the API and store it in deskBook
  const getDeskBook = async (id) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?fields=id,volumeInfo(title,authors,publishedDate,description,imageLinks/smallThumbnail)`
    );

    dispatch({ type: GET_DESKBOOK, payload: res.data });
  };

  // Add book to shelf
  const addBook = async (deskBook) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5001/api/shelfBooks",
      deskBook,
      config
    );

    // console.log(res);
    dispatch({ type: ADD_BOOK, payload: res.data });
  };

  // Delete book from a shelf

  // // Clear book to be viewed in viewing area
  const clearDeskBook = () => {
    clearCurrent();
    dispatch({ type: CLEAR_DESKBOOK });
  };

  // Set current book - data to be used for viewing area
  const setCurrent = (searchResult) => {
    dispatch({ type: SET_CURRENT, payload: searchResult });
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
        addBook,
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
