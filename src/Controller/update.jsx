import React from "react";
import ReactDOM from 'react-dom';
import Router from './router';

export default function Update(select) {
    ReactDOM.render(
      <Router select={select} />, 
      document.getElementById('root')
    );
  }