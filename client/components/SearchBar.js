import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Search for: {this.state.term}</h1>
        <input
          className="form-control"
          placeholder="Search"
          type="text"
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;