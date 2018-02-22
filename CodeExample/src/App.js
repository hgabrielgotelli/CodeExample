import React, { Component } from 'react';

import { getTops } from './api/dataAccess';
import TopList from "./components/TopList/TopList";
import TopDetail from "./components/TopDetail/TopDetail";
import TopFavorites from "./components/TopFavorites/TopFavorites";
import './App.css';

class App extends Component {
  state = {
    tops: [],
    favoritesItems: [],
    selectedTop: null,
  };

  componentDidMount() {
    this.queryTops();
    let favorites = localStorage.getItem('favorites');
    let favoritesItems = (favorites) ? favorites.split(',') : [];
    this.setState({ favoritesItems: favoritesItems });
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

  addToFavorites = (e) => {
    const selectedId = e.target.id;
    let favorites = localStorage.getItem('favorites');
    let favoritesItems = (favorites) ? favorites.split(',') : [];

    const favorite = favoritesItems.find(item => {
      return item === selectedId;
    });

    if (!favorite) {
      favoritesItems.push(selectedId);
    }

    localStorage.setItem('favorites', favoritesItems);
    this.setState({ ...this.state, favoritesItems: favoritesItems });
  }

  dismissTop = (e) => {
    const selectedId = e.target.id;
    const tops = this.state.tops.filter(top => {
      return top.data.id !== selectedId;
    });

    let favorites = localStorage.getItem('favorites');
    let favoritesItems = (favorites) ? favorites.split(',') : [];
    
    const newFavoritesItems = favoritesItems.filter(item => {
      return item !== selectedId;
    });

    localStorage.setItem('favorites', newFavoritesItems);
    this.setState({ tops, selectedTop: null, favoritesItems: newFavoritesItems });
  };

  dismissAll = (e) => {
    this.setState({ tops: [], selectedTop: null, favoritesItems: [] });
  };

  queryTops = async () => {
    const parameters = {
      limit: 50,
    };

    const tops = await getTops(parameters);
    this.setState({ tops: tops.data.children });
  };

  render() {
    return (
      this.state.tops && this.state.tops.length > 0 ?
      <div className="App">
        <TopFavorites tops={this.state.tops} selectTop={this.selectTop} favorites={this.state.favoritesItems} />
        <TopList tops={this.state.tops} selectTop={this.selectTop} dismissAll={this.dismissAll} />
        <TopDetail top={this.state.selectedTop} dismissTop={this.dismissTop} addToFavorites={this.addToFavorites} />
      </div>
      : null
    );
  }
}

export default App;
