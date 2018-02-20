import React, { Component } from 'react';

import { getTops } from './api/dataAccess';
import TopList from "./components/TopList/TopList";
import TopDetail from "./components/TopDetail/TopDetail";
import './App.css';

class App extends Component {
  state = {
    tops: [],
    selectedTop: null,
  };

  componentDidMount() {
    this.queryTops();
  }

  selectTop = (e) => {
    const selectedId = e.target.id;
    const selectedTop = this.state.tops.find(top => {
      return top.data.id === selectedId;
    });

    if (selectedTop) {
      selectedTop.data.read = true;
      this.setState({ selectedTop });
    }
  };

  dismissTop = (e) => {
    const selectedId = e.target.id;
    const tops = this.state.tops.filter(top => {
      return top.data.id !== selectedId;
    });
    this.setState({ tops, selectedTop: null });
  };

  dismissAll = (e) => {
    this.setState({ tops: [], selectedTop: null });
  };

  queryTops = async () => {
    const parameters = {
      limit: 50,
    };

    const tops = await getTops(parameters);
    this.setState({ tops: tops.data.children });
    console.warn(this.state.tops);
  };

  render() {
    return (
      <div className="App">
        <TopList tops={this.state.tops} selectTop={this.selectTop} dismissAll={this.dismissAll} />
        <TopDetail top={this.state.selectedTop} dismissTop={this.dismissTop} />
      </div>
    );
  }
}

export default App;
