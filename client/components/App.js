import React, { Component } from 'react'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
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
    YTSearch({key: API_KEY, term: 'dwarf rabbit'}, (videos) => {
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
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;