import React, { useReducer, useEffect } from "react";
import axios from "axios";
import LibraryContext from "./libraryContext";
import LibraryReducer from "./libraryReducer";
import {} from "../types";

const LibraryState = (props) => {
  const initialState = {
    fictionBooks: [],
    nonFictionBooks: [],
  };

  const [state, dispatch] = useReducer(LibraryReducer, initialState);

  return <div></div>;
};
import LibraryContext from "./libraryContext";

export default LibraryState;
