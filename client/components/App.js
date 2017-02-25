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
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: 'dwarf rabbit'}, (videos) => {
      this.setState({
        isLoading: false,
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;