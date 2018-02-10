import React, { Component } from 'react';

import getTops from "./api/dataAccess";
import './App.css';

class App extends Component {

  componentDidMount = () => {
    const result = getTops();
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          TEST
        </p>
      </div>
    );
  }
}

export default App;
