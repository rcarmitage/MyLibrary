import React, { useReducer } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_SHELFBOOKS,
  // ADD_BOOK,
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

  // Get all books in the shelfBooks array
  const getShelfBooks = async () => {
    const res = await axios.get("http://localhost:5001/api/shelfBooks");

    dispatch({ type: GET_SHELFBOOKS, payload: res.data });
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

    console.log(res);
    // dispatch({ type: ADD_BOOK, payload: res.data });
  };

  // Delete book from a shelf

  // Set book to be displayed in viewing area
  const setDeskBook = (searchResult) => {
    dispatch({ type: SET_DESKBOOK, payload: searchResult });
  };

  // Clear book displayed in viewing area
  const clearDeskBook = () => {
    dispatch({ type: CLEAR_DESKBOOK });
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
        getShelfBooks,
        setDeskBook,
        addBook,
        clearDeskBook,
        searchBooks,
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryState;
