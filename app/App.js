/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import io from 'socket.io-client'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Components = {
  Text,
  View,
  Button,
}

class Renderer extends React.Component {
  render() {
    const { component, props, children } = this.props
    const Component = Components[component]
    if (!Component) {
      return null
    }
    return React.createElement(
          Component,
          props,
          Array.isArray(children) ?
          children.map(child => <Renderer {...child} />) : children
        )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {jsx: ''}
  }

  componentDidMount() {
    this.socket = io('http://localhost:8080');
    this.socket.on("connect", () => {
      this.socket.on('hello', () => {
        console.log("hello!")
      })
      console.log('connected')
      this.socket.on("jsx", data => {
        console.log('on jsx', data)
        this.setState({jsx: data.jsx, hasError: false, error: undefined })
      })
    })
  }
  render() {
    const { jsx, } = this.state
    return (
      <View style={styles.body}>
        <Text>Received Text: "{this.state.text}"</Text>
        <Text>Dynamic renderer:</Text>
        <View style={{ flex: 1, borderWidth: 3, borderColor: "red" }}>
          <Renderer {...jsx} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
