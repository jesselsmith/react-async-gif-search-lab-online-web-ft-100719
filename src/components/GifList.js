import React, { Component } from 'react'

export default class GifListContainer extends Component {
  generateListItem = (image) => {
    return <li><img src={image} alt="" /></li>
  }
  generateList = () => {
    return this.props.images.map(this.generateListItem)
  }

  render() {
    return (
      <ul>
        {this.generateList()}
      </ul>
    )
  }
}