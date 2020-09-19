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

export default (state, action) => {
  switch (action.type) {
    case GET_SHELFBOOKS:
      return {
        ...state,
        shelfBooks: action.payload,
      };
    case GET_DESKBOOK:
      return {
        ...state,
        deskBook: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        shelfBooks: [action.payload, ...state.shelfBooks],
      };
    case CLEAR_DESKBOOK:
      return {
        ...state,
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
