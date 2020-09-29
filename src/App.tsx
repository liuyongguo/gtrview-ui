import React, { useState } from 'react';
import './App.css'
import './style/index.scss'
import Icon from './components/Icon/Icon'

function App() {
  return (
    <div className="App">
      <Icon icon="arrow-left" size="lg" theme="primary"></Icon>
      {/* <Icon icon="battery-three-quarters" size="sm" theme="danger"></Icon> */}
      <Icon icon="arrow-left" size="lg" theme="warning"></Icon>
      <Icon icon="arrow-left" size="lg" theme="dark"></Icon>
      <Icon icon="arrow-left" size="lg" theme="info"></Icon>
    </div>
  );
}

export default App;
