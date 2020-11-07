import logo from './logo.svg';
import './App.css';

const number = 12345;
let flag = true;

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
        <p style = {{color: 'red'}}>
          Вывод значения переменной 'number': {number}
        </p>
        <p style = {{color: 'red'}}>
          Вывод числа: {54321}
        </p>
        <p style = {{color: 'red'}}>
          Вывод результата арифметической операции 'number' + 54321 = {number + 54321}
        </p>
        <p style = {{color: 'red'}}>
          Вывод результата логической операции: {flag && 'flag is true'}
        </p>
        <p style = {{color: 'red'}}>
          Использования тернарного условия 'number' > 0: {number > 0 ? 'true' : 'false'}
        </p>
        <p style = {{color: 'red'}}>
          Вывод undefined, null, false и true: {null} {false} {true} {undefined}
        </p>
      </header>
    </div>
  );
}

export default App;
