import logo from './assets/logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Em Construção
        </h1>
        <a
          className="App-link"
          href="mailto:customer@brainy.academy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale Conosco
        </a>
      </header>
    </div>
  );
}

export default App;
