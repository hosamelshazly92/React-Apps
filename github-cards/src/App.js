import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

// class component
class App extends React.Component {
  // constructor
  // this
  render() {
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
      </div>
    );
  }
}

// function component
// const App = ({title}) => {
//   return (
//     <div className="App">
//       <h1 className="header">{title}</h1>
//     </div>
//   );
// }

reactDom.render(
  <App title="GitHub Cards App"/>,
  document.getElementById('root')
);

export default App;
