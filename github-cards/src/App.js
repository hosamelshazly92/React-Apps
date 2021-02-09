import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

// card class component
class Card extends React.Component {
  render() {
    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img src="https://placehold.it/75"></img>
        <div className="info" style={{ display: 'inline-block', marginLeft: '10px' }}>
          <div className="name" style={{ fontSize: "125%" }}>Name</div>
          <div className="company" style={{marginLeft: '10px'}}>Company</div>
        </div>
      </div>
    );
  }
}

// car list class component
const CardList = (props) => {
  return (
    <div>
      <Card />
    </div>
  );
}

// App class component
class App extends React.Component {
  // constructor
  // this
  render() {
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <CardList />
      </div>
    );
  }
}

// App function component
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
