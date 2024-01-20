import logo from './logo.svg';
import qrcode from './image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <header className="box">
        <img src={qrcode} className="logo" alt="logo" />
        <p>
          Improve your front-end skills by building projects
        </p>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
      </header>
    </div>
  );
}

export default App;
