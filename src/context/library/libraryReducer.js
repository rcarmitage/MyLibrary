import {
  GET_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
  SET_DESKBOOK,
  CLEAR_DESKBOOK,
  SEARCH_BOOKS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        shelfBooks: action.payload,
      };
    case SET_DESKBOOK:
      return {
        ...state,
        deskBook: action.payload,
      };
    case CLEAR_DESKBOOK:
      return {
        ...state,
        deskBook: null,
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
