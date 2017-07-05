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
      searchTag: '',
      tagItems: [],
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    this.getItems()
    this.getTags()
  }

  onSubmit(searchTag){
    const tag = this.state.tags.filter( tag => tag.keyword === searchTag)[0]

    this.getItemTags(tag.id)

  }

  getItems() {
    Adaptors.Items()
    .then(items => this.setState({items}))
  }

  getTags(){
    Adaptors.Tags()
    .then(tags => this.setState({tags}))
  }

  getItemTags(tag_id){
    Adaptors.ItemsByTag(tag_id)
    .then(tagItems => this.setState({tagItems}))
  }

  render(){
    return(
      <div>
        <SearchBar tags={this.state.tags} onSubmit={this.onSubmit}/>
        <ItemsList tagItems={this.state.tagItems} />

      </div>
    )
  }
}
