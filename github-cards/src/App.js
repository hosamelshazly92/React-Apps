import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

const App = ({title}) => {
  return (
    <div className="App">
      <h1 className="header">{title}</h1>
    </div>
  );
}

reactDom.render(
  <App title="GitHub Cards App"/>,
  document.getElementById('root')
);

export default App;
