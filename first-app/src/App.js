import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 id="ele1">Welcome sir Hosam</h1>
        <h1 id="ele2">Access granted</h1>

      </header>
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
}

function Reset(props) {
  return (
    <button onClick={props.resetValue}>
      Reset
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function Application() {
  const [counter, setCounter] = useState(2021);
  const incrementCounter = () => setCounter(counter+1);
  const origin = () => setCounter(2021);
  
  return (
    <div>
      <Button onClickFunction={incrementCounter}/>
      <Reset resetValue={origin}/>
      <Display message={counter}/>
    </div>
  );
}

reactDom.render(
  <Application />,
  document.getElementById('ele1')
);

export default App;
