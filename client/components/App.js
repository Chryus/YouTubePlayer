import React, { Component } from 'react'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = process.env.YOUTUBE_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videos: [],
      selectedVideo: null,
      searchTerm: "polish house rabbit"
    }
  }

  componentDidMount() {
    this.youtubeSearch();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.searchTerm !== this.state.searchTerm) { return this.youtubeSearch(); }
  }

  youtubeSearch() {
    YTSearch({key: API_KEY, term: this.state.searchTerm}, (videos) => {
      this.setState({
        isLoading: false,
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((searchTerm) => { this.setState({searchTerm}) }, 300);
    return (
      <div>
        <SearchBar 
          onSearchTermUpdate={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;