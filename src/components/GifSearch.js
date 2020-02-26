import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    searchQuery: ''
  }

  handleSearchChange = e => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.handleSearch(this.state.searchQuery)
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.searchQuery} onChange={this.handleSearchChange} />
        <input type="submit" value="Search" onSubmit={this.handleSubmit} />
      </form>
    )
  }

}