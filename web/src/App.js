import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.socket = io('http://localhost:8080');
    this.socket.on('connect', () => {
      console.log('connected')
      this.socket.on('hello', () => {
        console.log("hello!")
      })
    })
  }
  handleChange = (text) => {
    // console.log('text', text)
    this.socket.emit("lol", { text: text.target.value })
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
          <textarea onChange={this.handleChange}/>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
