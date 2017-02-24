import React, { Component } from 'react'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = process.env.YOUTUBE_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videos: []
    }
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: 'bunnies'}, (videos) => {
      this.setState({
        isLoading: false,
        videos: videos
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;