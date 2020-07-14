import React from "react";
import ReactDOM from 'react-dom';
import View from './router';

export default function update(select) {
    ReactDOM.render(
      <View select={select} />,
      document.getElementById('root')
    );
}
  ////return <Redirect push to="/" />;