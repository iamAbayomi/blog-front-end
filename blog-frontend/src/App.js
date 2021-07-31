/* eslint-disable jsx-a11y/alt-text */
import './App.css';

import React from 'react'
import Blog from './component/Blog'
import Main from './component/Main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

export default class App extends React.Component{

  

render() {
  return (
    <Router>
      <div className="App">
      <div>

      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/blog" component={Blog} />
      </Switch>

      </div>
    </Router>

  );
}

}

