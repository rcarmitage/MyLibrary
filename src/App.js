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
    <div className="App">
      <LibraryState>
        <Router>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={ErrorPage} />
            </Switch>
          </Fragment>
        </Router>
      </LibraryState>
    </div>
  );
};

export default App;
