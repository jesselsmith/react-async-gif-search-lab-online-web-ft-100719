import React, { Component } from 'react'

export default class GifListContainer extends Component {
  generateListItem(image) {
    return <li><img src={image} alt="" /></li>
  }
  generateList() {
    this.props.images.map(generateListItem)
  }

  render() {
    return (
      <ul>
        {this.generateList}
      </ul>
    )
  }
}