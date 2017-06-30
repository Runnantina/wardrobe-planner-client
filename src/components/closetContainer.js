import React, { Component } from 'react';
import { Adaptors } from '../adaptors/index'
import SearchBar from './searchBar'
import TagList from './tagList'


export default class ClosetContainer extends Component{
  constructor(){
    super()
    this.state = {
      tags: [],
      items: [],
      searchTag: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.getItems = this.getItems.bind(this)
    this.getTags = this.getTags.bind(this)
  }

  componentDidMount(){
    this.getItems()
    this.getTags()
  }

  getItems() {
    Adaptors.Items()
    .then(items => this.setState({items}))
  }

  getTags(){
    Adaptors.Tags()
    .then(tags => this.setState({tags}))
  }

  handleChange(event){
    this.setState({
      searchTag: event.target.value
    })
  }


  render(){
    return(
      <div>
        <SearchBar handleChange={this.handleChange}/>
        <TagList tags={this.state.tags} searchTag={this.state.searchTag}/>

      </div>
    )
  }
}
