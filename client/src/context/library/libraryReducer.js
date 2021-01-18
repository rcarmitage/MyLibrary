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

export default (state, action) => {
  switch (action.type) {
    case GET_SHELFBOOKS:
      return {
        ...state,
        shelfBooks: action.payload,
        loading: false,
      };
    case ADD_BOOK:
      return {
        ...state,
        shelfBooks: [action.payload, ...state.shelfBooks],
      };
    case DELETE_BOOK:
      return {
        ...state,
        shelfBooks: state.shelfBooks.filter(
          (book) => book._id !== action.payload
        ),
      };
    case SET_DESKBOOK:
      return {
        ...state,
        deskBook: action.payload,
        loading: false,
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
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchResults: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
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
