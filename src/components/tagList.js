import React, { Component } from 'react'
import Tag from './tag'

class TagList extends Component {


  tags = () => {
    debugger  
    this.props.tags.sort((a, b) => a.keyword.localeCompare(b.keyword))
  }

  render () {

    return (
      <ul>
        {this.tags().map( tag =>  <Tag id={tag.id} key={tag.id} eachTag={tag.keyword}/>) }
      </ul>
    )
  }


}

export default TagList
