import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <CreateNewElement />
        </div>
      </header>
    </div>
  );
}

function CreateNewElement() {
  return(
    React.createElement(
      "div",
      null,
      "Display Timestamp",
      React.createElement('h2', null, "Time"),
      React.createElement('pre', null, (new Date).toLocaleTimeString())
    )
  );
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

setInterval(render, 1000);

export default App;
