import React, { Component } from 'react';

import './TopDetail.css';

class TopDetail extends Component {
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
            </div>
          : null
        }
      </div>
    );
  }
}

export default TopDetail;
