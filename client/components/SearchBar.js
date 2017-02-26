import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(e) {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchTermUpdate(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder=" Search"
          type="text"
          value={this.state.term}
          onChange={this.handleSearchTermChange} />
      </div>
    );
  }
}

export default SearchBar;