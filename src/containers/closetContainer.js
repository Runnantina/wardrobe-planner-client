import React, { Component } from 'react'
import { Adaptors } from '../adaptors/index'
import SearchBar from '../components/searchBar'
import ItemsList from '../components/itemsList'
import NewItemForm from '../components/newItemForm'
import CollectionSearch from '../components/collectionSearch'
import CollectionList from '../components/collectionList'
import LogInForm from '../components/logInForm'
import CreateCollectionForm from '../components/createCollectionForm'
import AddToCollectionForm from '../components/addToCollectionForm'
import ListItemsToAdd from '../components/listItemsToAdd'

import { Route } from 'react-router-dom'
import '../App.css'

export default class ClosetContainer extends Component{
  constructor(){
    super()
    this.state = {
      tags: [],
      items: [],
      searchTags: '',
      itemTags: [],
      collections: [],
      newlyCreatedCollectionID: [],
      oneCollection: []
    }

    this.onSubmitTagSearch = this.onSubmitTagSearch.bind(this)
    this.onSubmitSelectCollection = this.onSubmitSelectCollection.bind(this)
    this.createTag = this.createTag.bind(this)
    this.deleteItemTag = this.deleteItemTag.bind(this)
    this.deleteCollectionItem = this.deleteCollectionItem.bind(this)
    this.getCollections = this.getCollections.bind(this)
    this.showCollection = this.showCollection.bind(this)
    this.getItems = this.getItems.bind(this)
    this.createNewCollection = this.createNewCollection.bind(this)
    this.createCollectionItems = this.createCollectionItems.bind(this)
  }

  componentDidMount() {
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
  }


  createTag(item_url, tags_arr){
    Adaptors.createTag(item_url, tags_arr)
  } //creates both tag.keyword and item.image

  createItemTag(item_id, tag_id){
    Adaptors.createItemTag(item_id, tag_id)
  }

  createCollectionItems(collection_id, item_id){
    console.log(collection_id, item_id);
    Adaptors.createCollectionItems(collection_id, item_id)
  }

  createNewCollection(collection_name_input){
    Adaptors.createNewCollection(collection_name_input)
    .then((object) => {
      this.setState( previousState => {
        return {
          collections: [...previousState.collections, object],
          newlyCreatedCollectionID: object.id
        }
      })
    })
  }

  onSubmitTagSearch(searchTags){
    this.getItemTags(searchTags)
  }

  onSubmitSelectCollection(one_collection){
    this.showCollection(one_collection)
  }

  deleteItemTag(item_id){
    Adaptors.destroyItem(item_id)
      .then( () => {
        this.setState( previousState => {
          return {
            items: previousState.items.filter( item => item.id !== item_id ),
            itemTags: previousState.itemTags.filter( item => item.id !== item_id )
          }
        })
      })
  }

  deleteCollectionItem(item_id, collection_id){
    Adaptors.destroyCollectionItem(item_id, collection_id)
      this.setState( previousState => {
        return {
          oneCollection: { items: previousState.oneCollection.items.filter( item => item.id !== item_id ) }
        }
      })
  }


  render(){
    return(
      <div>
        <div className = "container">

          <Route path = '/closet/upload' render= {() =>
              <NewItemForm
                tags={this.state.tags}
                getTags={this.getTags}
                onSubmitTag={this.createTag}
                onSubmitIDs={this.createItemTag}/>}/>

          <Route path = '/closet/new_collection' render= {() => (
              <CreateCollectionForm
              allItems={this.state.items}
              allCollections={this.state.collections}
              createNewCollection={this.createNewCollection}
              createCollectionItems={this.createCollectionItems}
              newlyCreatedCollectionID={this.state.newlyCreatedCollectionID}
              tags={this.state.tags}
              onSubmit={this.onSubmitTagSearch}
              />
          )}/>

          <Route path = '/closet/list_items_to_add' render= {() => (
                <ListItemsToAdd
                allItems={this.state.items}
                allCollections={this.state.collections}
                createNewCollection={this.createNewCollection}
                newlyCreatedCollectionID={this.state.newlyCreatedCollectionID}
                showCollection={this.showCollection}
                oneCollection={this.state.oneCollection}
                createCollectionItems={this.createCollectionItems}/>)}/>

          <Route path = '/closet/add_to_collection' render= {() =>
              <AddToCollectionForm
              allItems={this.state.items}
              allCollections={this.state.collections}
              createCollectionItems={this.createCollectionItems}
              onSubmitSelectCollection={this.onSubmitSelectCollection}/>}/>

          <Route path = '/closet/my_collections' render= {() =>(
            <div>
              <CollectionSearch
                collections={this.state.collections}
                onSubmitSelectCollection={this.onSubmitSelectCollection}/>
              <CollectionList
                oneCollection={this.state.oneCollection}
                deleteCollectionItem={this.deleteCollectionItem}/>
            </div>
          )} />
        </div>
        <SearchBar
          tags={this.state.tags}
          onSubmit={this.onSubmitTagSearch}/>
        <ItemsList
          itemTags={this.state.itemTags}
          items={this.state.items}
          deleteItemTag={this.deleteItemTag}/>
      </div>
    )
  }
}
