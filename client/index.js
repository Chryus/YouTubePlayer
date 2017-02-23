import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = process.env.YOUTUBE_KEY;

YTSearch({key: API_KEY, term: 'bunnies'}, function(data) {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));