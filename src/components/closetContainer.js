import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
      itemTags: [],
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.createTag = this.createTag.bind(this)
    this.deleteItemTag = this.deleteItemTag.bind(this)
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

  getItemTags(tag_id){
    Adaptors.ItemsByTag(tag_id)
    .then(itemTags => this.setState({itemTags}))
  }

  showItemsError(item_id){
    console.log(item_id);
    Adaptors.showItemsError(item_id)
  }

  createTag(item_url, tags_arr){
    Adaptors.createTag(item_url, tags_arr)
  } //creates both tag.keyword and item.image

  createItemTag(item_id, tag_id){
    Adaptors.createItemTag(item_id, tag_id)

  }

  onSubmit(searchTag){
    const tag = this.state.tags.filter( tag => tag.keyword === searchTag )[0]
    this.getItemTags(tag.id)
  }

  deleteItemTag(item_id){
    console.log(item_id);
    Adaptors.destroyItem(item_id)
      .then( () => {
        this.setState( previousState => {
          return {
            items: previousState.items.filter( item => item.id !== item_id )
          }
        })
      })
  }



  render(){
    return(
      <div>
        <SearchBar tags={this.state.tags} onSubmit={this.onSubmit}/>
        <ItemsList itemTags={this.state.itemTags} deleteItemTag={this.deleteItemTag} showItemsError={this.showItemsError}/>
        <NewItemForm tags={this.state.tags} getTags={this.getTags} onSubmitTag={this.createTag} onSubmitIDs={this.createItemTag} />
      </div>
    )
  }
}
