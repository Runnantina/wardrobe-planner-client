import React, { Component } from 'react'
import { Adaptors } from '../adaptors/index'
import SearchBar from './searchBar'
import ItemsList from './itemsList'
import NewItemForm from './newItemForm'
import CollectionSearch from './collectionSearch'
import CollectionList from './collectionList'
import { Route } from 'react-router-dom'


export default class ClosetContainer extends Component{
  constructor(){
    super()
    this.state = {
      tags: [],
      items: [],
      searchTags: '',
      itemTags: [],
      collections: [],
      oneCollection: [],
      collectionItems:[]
    }
    this.onSubmitTagSearch = this.onSubmitTagSearch.bind(this)
    this.onSubmitSelectCollection = this.onSubmitSelectCollection.bind(this)
    this.createTag = this.createTag.bind(this)
    this.deleteItemTag = this.deleteItemTag.bind(this)
    this.getCollections = this.getCollections.bind(this)
    this.showCollection = this.showCollection.bind(this)
  }

  componentDidMount(){
    this.getItems()
    this.getTags()
    this.getCollections()
  }

  getItems() {
    Adaptors.Items()
    .then(items => this.setState({items}))
  }

  getTags(){
    Adaptors.Tags()
    .then(tags => this.setState({tags}))
  }

  getItemTags(searchTags){
    Adaptors.ItemsByTag(searchTags)
    .then(itemTags => this.setState({itemTags}))
  }

  getCollections(){
    Adaptors.Collections()
    .then(collections => this.setState({collections}))
  }

  showCollection(collectionSearch){
    Adaptors.showCollection(collectionSearch)
      .then(oneCollection => this.setState({oneCollection}))
    // by searching for collections, we push in the entire collection objects to then display out their items
  }

  createTag(item_url, tags_arr){
    Adaptors.createTag(item_url, tags_arr)
  } //creates both tag.keyword and item.image

  createItemTag(item_id, tag_id){
    Adaptors.createItemTag(item_id, tag_id)
  }

  onSubmitTagSearch(searchTags){
    this.getItemTags(searchTags)
  }

  onSubmitSelectCollection(one_collection){
    this.showCollection(one_collection)
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
        <SearchBar tags={this.state.tags} onSubmit={this.onSubmitTagSearch}/>
        <ItemsList itemTags={this.state.itemTags} deleteItemTag={this.deleteItemTag}/>
        <div className = "container">
          <Route path = '/upload' render= {() => <NewItemForm tags={this.state.tags} getTags={this.getTags} onSubmitTag={this.createTag} onSubmitIDs={this.createItemTag}/>}/>
          <Route path = '/my_collections' render= {() =>(
            <div>
              <CollectionSearch collections={this.state.collections} onSubmitSelectCollection={this.onSubmitSelectCollection}/>
              <CollectionList oneCollection={this.state.oneCollection}/>
            </div>
          )} />
        </div>
      </div>
    )
  }
}


// <Route exact path = '/my_collections' render= {() =>}/>
