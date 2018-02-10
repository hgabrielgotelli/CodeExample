import React, { Component } from 'react';


import './TopList.css';

class TopList extends Component {
  state = {
    initial: 0,
  };

  prev = () => {
    let initial = this.state.initial;
    if (initial !== 0) {
      initial = initial - 10;
      this.setState({ initial });
    }
  };

  next = () => {
    let initial = this.state.initial;
    if (initial !== 40) {
      initial = initial + 10;
      this.setState({ initial });
    }
  };

  render() {
    const { tops } = this.props;
    return (
      <div className="topList">
        <h1>TOPS</h1>
        <a href="#" onClick={this.prev}> Prev </a>
        <label>{this.state.initial} to {this.state.initial + 10} from 50</label>
        <a href="#" onClick={this.next}> Next </a><br/><br/>
        <input type="button" onClick={this.props.dismissAll} value="Dismiss All"/>
        {
          tops ?
          tops.slice(this.state.initial, this.state.initial + 10).map(top => {
            return (
              <ul>
                <a key={top.data.id} href="#" onClick={this.props.selectTop} id={top.data.id}>
                  <li id={top.data.id}>
                    <img className="top-image" id={top.data.id} src={top.data.thumbnail} />
                    <div id={top.data.id} className="top-text">
                      <label id={top.data.id} className="top-title">
                        {top.data.title} {top.data.read ? ' (Read)' : ' (Unread)'}
                      </label>
                    </div>
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
