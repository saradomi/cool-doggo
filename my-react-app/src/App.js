import logo from './images/cool-doggo_square-paper-04.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A cool doggo is coming to you soon.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/guidasmoranes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet the creator
        </a>
      </header>
    </div>
  );
}

export default App;
