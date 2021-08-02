import React from 'react';
import './App.css'

import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { ImageListHeader } from './components/ImageListHeader';

const API_KEY = 'GVEAVJj0gjW5ISzi16saPbMwztBYkRTgqGPaLwMEHGI';

class App extends React.Component {
  state = { images: [], term: '' };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos?page=5&per_page=30', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    })

    this.setState({ images: response.data.results, term: term })

  }

  render() {
    return (
      <div className="App">
        <div className="container py-5">

          <SearchBar userSubmit={this.onSearchSubmit} />
          <ImageListHeader size={this.state.images.length} term={this.state.term} />
          <ImageList images={this.state.images} term = {this.state.term} />
        </div>
      </div>
    );
  }
}

export default App;
