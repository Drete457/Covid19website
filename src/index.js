import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import Router from './Controller/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router select="cases" />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
