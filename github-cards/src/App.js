import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

// card class component
class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img src={profile.avatar_url} style={{ height: '75px' }}></img>
        <div className="info" style={{ display: 'inline-block', textAlign: 'left', marginLeft: '10px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{profile.name}</div>
          <div style={{ fontSize: '12px' }}>{profile.company}</div>
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
      {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
  );
}

// form class component
class Form extends React.Component {
  state = { userName: ''};
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(response => response.json())
      .then(data => {
        this.props.onSubmit(data);
        this.setState({ userName: '' });
        // console.log(data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="Enter GitHub Usermane...."
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add New Card</button>
      </form>
    );
  }
}

// App class component
class App extends React.Component {
  // constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }
  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div className="App">
        <Heading title="GitHub Cards App" />
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
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

// Heading function component
const Heading = ({title}) => {
  return (
      <h1>{title}</h1>
  );
}

reactDom.render(
  <App />,
  document.getElementById('root')
);

export default App;
