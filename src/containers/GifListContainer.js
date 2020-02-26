import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const BASE_URL = 'https://api.giphy.com/v1/gifs/search?q='
const URL_AFFIX = '&api_key=TtsQiR4K4wTSRTElyR3eCuIfY1Xtl2OT&rating=g'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }
  handleSearch(searchQuery) {
    fetch(BASE_URL + searchQuery + URL_AFFIX)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifs: json.images.map(image => image.original.url).first(3)
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch handleSearchQuery={this.handleSearch} />
        <GifList images={this.state.gifs} />
      </div>
    )
  }
}