import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import Greets from './components/Greets';

// function App() {
//   const list = ['Patty','Rolley', 'Bobby'];
//   return (
const list = ['Patty', 'Rolley', 'Bobby'];
const App: React.FC = () => (
  <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
    <ul>
      {list.map((name) => (
        <li>
          Hello,
          {name}!
        </li>
      ))}
    </ul>
    <Greets name="Patty" times={4}>
      {/* React.createElement() の第 3 引数children、暗黙のprops */}
      <span role="img" aria-label="rabbit">
        🐰
      </span>
    </Greets>
  </>
);
// }

export default App;
