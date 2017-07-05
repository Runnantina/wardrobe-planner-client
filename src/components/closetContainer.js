import React, { Component } from 'react';
import { Adaptors } from '../adaptors/index'
import SearchBar from './searchBar'
import TagList from './tagList'
import ItemsList from './itemsList'
import NewItemForm from './newItemForm'


export default class ClosetContainer extends Component{
  constructor(){
    super()
    this.state = {
      tags: [],
      items: [],
      searchTag: '',
      newItem: '',
      tagItems: [],
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    this.getItems()
    this.getTags()
  }

  create(item){
    Adaptors.createItem(item)
    .then(item => this.setState((previousState) => {
        return {
          items: [...previousState.items, item]
        }
      })
    )
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
        <NewItemForm onSubmit={this.create} />
      </div>
    )
  }
}
