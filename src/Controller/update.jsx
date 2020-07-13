import React from "react";
import ReactDOM from 'react-dom';
import MainController from './maincontroller';

export default function update(select) {
    ReactDOM.render(
      <MainController select={select} />, 
      document.getElementById('root')
    );
  }