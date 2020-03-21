import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import * as yaml from 'js-yaml'

class App extends React.Component {
  constructor() {
    super()
    this.state = { isValidYaml: false }
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
  handleChange = (event) => {
    const text = event.target.value;
    try {
      const json = yaml.safeLoad(text)
      this.setState({isValidYaml: true})
      this.socket.emit("jsx", { jsx: json })
    } catch (error) {
      this.setState({isValidYaml: false})
    }
  }
  render() {
    const { isValidYaml } = this.state
    return (
      <div className="App">
        <header className="App-header">
          Yaml is {isValidYaml? "valid" : "invalid"}
          <br />
          <div>
            <textarea cols={80} rows={50} onChange={this.handleChange}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
