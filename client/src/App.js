import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";

import LibraryState from "./context/library/LibraryState";

import "./App.css";

const App = () => {
  return (
    <LibraryState>
      <Router>
        <Fragment>
          <NavBar />
          <p className="intro">
            Search the Google Books API to add books to the shelf
          </p>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    </LibraryState>
  );
};

export default App;
