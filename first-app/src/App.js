import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React, { useEffect, useState } from "react";

function Plus(props) {
  const handleClick = () => props.onClickFunctionPlus(props.increment);

  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Minus(props) {
  const handleClick = () => props.onClickFunctionMinus(props.decrement);

  return (
    <button onClick={handleClick}>
      -{props.decrement}
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
    <div>{props.result}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(2021);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  const decrementCounter = (decrementValue) => setCounter(counter-decrementValue);
  const origin = () => setCounter(2021);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Counter</h1>
        <div>
          <Plus onClickFunctionPlus={incrementCounter} increment={1}/>
          <Plus onClickFunctionPlus={incrementCounter} increment={10}/>
          <Minus onClickFunctionMinus={decrementCounter} decrement={1}/>
          <Minus onClickFunctionMinus={decrementCounter} decrement={10}/>
          <Reset resetValue={origin}/>
          <hr></hr>
          <div>
            <Display result={counter}/>
          </div>
        </div>

      </header>
    </div>
  );
}

reactDom.render(
  <App />,
  document.getElementById("root")
);

export default App;
