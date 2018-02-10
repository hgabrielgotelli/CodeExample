import React, { Component } from 'react';

import './TopDetail.css';

class TopDetail extends Component {
  returnEntryDate = (created) => {
    const date = new Date(created);
    const today = new Date();
    var hours = Math.abs(today - date) / 36e5;
    return Math.trunc(hours);
  };

  render() {
    const { top } = this.props;
    return (
      <div className="topDetail">
        <h1>Top Detail</h1>
        {
          top ?
            <div>
              <p><label><b>Title: </b></label>{top.data.title}</p>
              <p><label><b>Author: </b></label>{top.data.author}</p>
              <p><label><b>Number of Comments: </b></label>{top.data.num_comments}</p>
              <p><label><b>Entry Date: </b></label>{this.returnEntryDate(top.data.created)} hours ago</p>
              <p><img src={top.data.thumbnail} /></p>
            </div>
          : null
        }
      </div>
    );
  }
}

export default TopDetail;
