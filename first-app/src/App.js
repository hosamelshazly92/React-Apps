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

function Button1() {
  let [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

reactDom.render(
  <Button1 />,
  document.getElementById('ele1')
);

function Button2() {
  let [counter, setCounter] = useState(5);
  return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
}

reactDom.render(
  <Button2 />,
  document.getElementById('ele2')
);

export default App;
