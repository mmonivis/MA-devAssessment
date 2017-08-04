import React, { Component } from 'react';
import Masthead from './Masthead';
import Intro from './Intro';
import KeyComponents from './KeyComponents';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Masthead />
        <Intro />
        <KeyComponents />
        <Footer />
      </div>
    );
  }
}

export default App;
