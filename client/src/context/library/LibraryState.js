import React, { useReducer, useState } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import libraryReducer from "./libraryReducer";
import {
  GET_SHELFBOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  SET_DESKBOOK,
  CLEAR_DESKBOOK,
  SEARCH_BOOKS,
  CLEAR_SEARCH,
  SET_LOADING,
  BOOK_ERROR,
} from "../types";

const LibraryState = (props) => {
  const initialState = {
    shelfBooks: [],
    deskBook: null,
    searchResults: [],
    loading: false,
    deskClassState: "desk",
  };

  const [state, dispatch] = useReducer(libraryReducer, initialState);

  // Get all books in the shelfBooks array
  const getShelfBooks = async () => {
    setLoading();

    const res = await axios.get(
      "https://mylibrary-express-server.herokuapp.com/api/shelfBooks"
    );

    dispatch({ type: GET_SHELFBOOKS, payload: res.data });
  };

  // Add book to shelf
  const addBook = async (deskBook) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (state.shelfBooks.length < 10) {
      try {
        const res = await axios.post(
          "https://mylibrary-express-server.herokuapp.com/api/shelfBooks",
          deskBook,
          config
        );

        dispatch({ type: ADD_BOOK, payload: res.data });
      } catch (err) {
        dispatch({ type: BOOK_ERROR, payload: err.response.msg });
      }
    }
  };

  // Delete book from a shelf
  const deleteBook = async (id) => {
    try {
      await axios.delete(
        `https://mylibrary-express-server.herokuapp.com/api/shelfBooks/${id}`
      );

      dispatch({ type: DELETE_BOOK, payload: id });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response });
    }
  };

  // Set book to be displayed in viewing area
  const setDeskBook = (book) => {
    setLoading();

    dispatch({ type: SET_DESKBOOK, payload: book });
    // setTimeout(() => {
    //   deskClassState({ deskClass });
    //   setDeskClass("desk active");
    // }, 2000);
  };

  // Clear book displayed in viewing area
  const clearDeskBook = () => {
    dispatch({ type: CLEAR_DESKBOOK });
  };

  // Search Google Books API
  const searchBooks = async (searchFields, text) => {
    setLoading();

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchFields}${text}&maxResults=10&fields=items(id,volumeInfo(title,authors,publishedDate,description,imageLinks/smallThumbnail))`
    );

    res.data.items.forEach((item) => {
      if (!item.volumeInfo.publishedDate) {
        item.volumeInfo.publishedDate = "No publishing information available";
      }
      if (!item.volumeInfo.authors) {
        item.volumeInfo.authors = ["No author information available"];
      }
      if (!item.volumeInfo.description) {
        item.volumeInfo.description = "No description available";
      }
      if (!item.volumeInfo.imageLinks) {
        item.volumeInfo.imageLinks = {
          smallThumbnail: "No cover image available",
        };
      }
    });

    dispatch({
      type: SEARCH_BOOKS,
      payload: res.data.items,
    });
  };

  // Clear search results
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <LibraryContext.Provider
      value={{
        shelfBooks: state.shelfBooks,
        deskBook: state.deskBook,
        searchResults: state.searchResults,
        deskClassState: state.deskClassState,
        loading: state.loading,
        getShelfBooks,
        setDeskBook,
        addBook,
        deleteBook,
        clearDeskBook,
        searchBooks,
        clearSearch,
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryState;
