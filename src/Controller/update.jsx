import React from "react";
import ReactDOM from 'react-dom';
import Router from './router';

export default function update(select) {
    ReactDOM.render(
      <Router select={select} />, 
      document.getElementById('root')
    );
  }