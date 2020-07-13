import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import MainController from './Controller/maincontroller';

ReactDOM.render(
  <MainController select="cases" />, 
  document.getElementById('root')
);
