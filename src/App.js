import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ErrorPage from './components/pages/ErrorPage';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Header />
          <NavBar id='nav' />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
