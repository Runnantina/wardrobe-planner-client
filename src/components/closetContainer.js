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

  getItemTags(tag_id){
    Adaptors.ItemTags(tag_id)
    .then(tags => this.setState({}))
  }

  filterTags(){
    const perTag = this.state.tags.map( tag => tag.keyword )

    return perTag
  }

  filterItems(){
    const perImage = this.state.items.map( item => item.image )
    return perImage
  }




  render(){
    return(
      <div>
        <SearchBar handleChange={this.handleChange}/>
      // why are you passing down item image?
        <ItemsList searchItemImage={this.state.items} itemImage={this.filterItems()}/>
        <TagList tags={this.filterTags()} searchTag={this.state.searchTag}/>

      </div>
    )
  }
}
