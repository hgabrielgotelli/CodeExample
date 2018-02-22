import React, { Component } from 'react';

import './TopFavorites.css';

class TopFavorites extends Component {
  state = {
    favorites: [],
  };

  componentDidMount() {
    this.loadFavorites();
  }

  componentWillReceiveProps(nextProps) {
    this.loadFavorites(nextProps);
  }

  loadFavorites = (nextProps) => {
    let favorites = (nextProps && nextProps.favorites.length !== this.props.favorites.length) ?
      nextProps.favorites : this.props.favorites;

    const tops = this.props.tops;
    let favoritesItems = [];

    favorites.map(favorite => {
      const selectedTop = tops.find(top => {
        return top.data.id == favorite;
      });

      if (selectedTop) {
        favoritesItems.push(selectedTop);
      }
    });

    this.setState({ favorites: favoritesItems });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div className="topFavorites">
        <h1>Favorites Tops</h1>
        {
          favorites ?
          favorites.map(top => {
            return (
              <ul key={top.data.id}>
                <a key={top.data.id} href="#" onClick={this.props.selectTop} id={top.data.id}>
                  <li key={top.data.id} id={top.data.id}>
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

export default TopFavorites;
