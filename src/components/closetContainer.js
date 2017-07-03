import React, { Component } from 'react';
import { Adaptors } from '../adaptors/index'
import SearchBar from './searchBar'
import TagList from './tagList'
import ItemsList from './itemsList'



export default class ClosetContainer extends Component{
  constructor(){
    super()
    this.state = {
      tags: [],
      items: [],
      searchTag: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getItems()
    this.getTags()
    if(this.state.tags.length > 1){
      console.log(this.state.tags)
    }
  }

  handleChange(event){
    this.setState({
      searchTag: event.target.value
    })

  }

  getItems() {
    Adaptors.Items()
    .then(items => this.setState({items}))
  }

  getTags(){
    Adaptors.Tags()
    .then(tags => this.setState({tags}))
  }

  getItemTags(tag_word){
    Adaptors.ItemTags(tag_word.id)
    .then(tags => this.setState({tags}))
  }

  filterTags(){
    const perTag = this.state.tags.map( tag => tag.keyword )

    return perTag
  }

  filterItems(){
    return this.state.items.map( item => item.tags.map(tag => tag))


  }

  render(){
    return(
      <div>
        <SearchBar handleChange={this.handleChange} />
        <ItemsList searchItemImage={this.state.tags} searchTag={this.state.searchTag} filterItems={this.filterItems()}/>
        <TagList tags={this.state.tags} searchTag={this.state.searchTag} items={this.state.items}/>
      </div>
    )
  }
}
