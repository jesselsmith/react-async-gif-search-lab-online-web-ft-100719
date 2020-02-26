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

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSearchQuery(this.state.searchQuery)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.searchQuery} onChange={this.handleSearchChange} />
        <input type="submit" value="Search" />
      </form>
    )
  }

}