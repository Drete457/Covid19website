import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import Router from './Controller/router';
import * as serviceWorker from './serviceWorker';
import { YellowBox } from 'react';
import _ from 'lodash';

YellowBox.ignoreWarnings(['componentWillReceiveProps']);
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('componentWillReceiveProps') <= -1) {
 _console.warn(message);
} 
};

ReactDOM.render(
  <Router select="cases" />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
