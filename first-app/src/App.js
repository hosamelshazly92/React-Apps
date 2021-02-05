import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 id="ele">Counter</h1>

      </header>
    </div>
  );
}

function Plus(props) {
  return (
    <button onClick={props.onClickFunctionPlus}>
      +1
    </button>
  );
}

function Minus(props) {
  return (
    <button onClick={props.onClickFunctionMinus}>
      -1
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
  const decrementCounter = () => setCounter(counter-1);
  const origin = () => setCounter(2021);
  
  return (
    <div>
      <Plus onClickFunctionPlus={incrementCounter}/>
      <Minus onClickFunctionMinus={decrementCounter}/>
      <Reset resetValue={origin}/>
      <Display message={counter}/>
    </div>
  );
}

reactDom.render(
  <Application />,
  document.getElementById('ele')
);

export default App;
