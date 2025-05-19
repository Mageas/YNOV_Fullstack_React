import logo from './logo.svg';
import './App.css';
import { Container } from './components/atoms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container.Base>default</Container.Base>
      <Container.Base bgColor="green">green</Container.Base>
      <Container.Padding>Padding</Container.Padding>
    </div>
  );
}

export default App;
