import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "Search" };
  }

  render() {
    return (
      <div>
        <h1>{this.state.term}</h1>
        <input
          className="form-control"
          type="text"
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;