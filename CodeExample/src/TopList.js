import React, { Component } from 'react';


import './TopList.css';

class TopList extends Component {
  render() {
    const { tops } = this.props;
    return (
      <div className="topList">
        <h1>TOPS</h1>
        {
          tops ?
          tops.map(top => {
            return (
              <ul>
                <a key={top.data.id} href="#" onClick={this.props.selectTop} id={top.data.id}>
                  <li id={top.data.id}>
                    <img className="top-image" id={top.data.id} src={top.data.thumbnail} />
                    <div className="top-text"><label id={top.data.id} className="top-title">{top.data.title}</label></div>
                  </li>
                </a>
              </ul>
            )
          })
          : null
        }
      </div>
    );
  }
}

export default TopList;
