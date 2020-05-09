import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Loader } from 'simple-react-loader'

function App() {
  return (
    <div className="App">
      <h1>This is simple react loader...</h1>
      <Loader showLoader={true} />
    </div>
  );
}

export default App;
