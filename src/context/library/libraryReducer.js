import {
  GET_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
  // SET_DESKBOOK,
  CLEAR_DESKBOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_BOOKS,
  BOOK_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        deskBook: action.payload,
      };
    // case SET_DESKBOOK:
    //   return {
    //     ...state,
    //     deskBook: action.payload,
    //   };
    case CLEAR_DESKBOOK:
      return {
        ...state,
        current: null,
        deskBook: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
