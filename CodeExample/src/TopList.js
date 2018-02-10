import React, { Component } from 'react';

import { getTops } from './api/dataAccess';

class TopList extends Component {
  state = {
    tops: [],
  };

  componentDidMount() {
    this.queryTops();
  }

  queryTops = async () => {
    const parameters = {
      limit: 50,
    };

    const tops = await getTops(parameters);
    this.setState({ tops });
    console.warn(tops);
  };

  render() {
    return (
      <div className="container">
        <h1>TOPS</h1>
      </div>
    );
  }
}

export default TopList;
