import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
    <div className="App">
      <nav className='nav-bar'>
        <div className='logo'>
          <a href='#'><img width={"80px"} src={logo} className="App-logo" alt="logo" /> </a>
          <h3>ReactFacts</h3>
       </div>
        <ul className='ul-list'>
          <li>Home</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
