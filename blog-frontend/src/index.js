import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import App from './Blog'
// import App from './Post'
// import App from './CreateAccount';
// import App from './Login';




ReactDOM.render(
  <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


