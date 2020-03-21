import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

class App extends React.Component {
  constructor() {
    super()
    // this.socket = new io("http://localhost", {port:8080})
  }
  componentDidMount() {
    var socket = io('http://localhost:8080');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  }
  render() {
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
        <div>
          <textarea />
        </div>
      </header>
    </div>
  );
  }
}

export default App;
