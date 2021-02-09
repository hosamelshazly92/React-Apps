import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

// test data
const testData = [
  {
    name: "Hosam Elshazly",
    bio: "UX/UI Designer",
    location: "Egypt",
    avatar_url: "https://avatars.githubusercontent.com/u/59311235?v=4"
  },
  {
    name: "Dan Abramov",
    bio: "Developer",
    location: null,
    avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4"
  }
];

// card class component
class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img src={profile.avatar_url} style={{ height: '75px' }}></img>
        <div className="info" style={{ display: 'inline-block', textAlign: 'left', marginLeft: '10px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{profile.name}</div>
          <div style={{ fontSize: '12px' }}>{profile.bio}</div>
          <div style={{ fontSize: '12px' }}>{profile.location}</div>
        </div>
      </div>
    );
  }
}

// card list class component
const CardList = (props) => {
  return (
    <div>
      {testData.map(profile => <Card {...profile}/>)}
    </div>
  );
}

// form class component
class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter GitHub Usermane...." />
        <button>Add New Card</button>
      </form>
    );
  }
}

// App class component
class App extends React.Component {
  // constructor
  // this
  render() {
    return (
      <div className="App">
        <h1 className="header">{this.props.title}</h1>
        <Form />
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
