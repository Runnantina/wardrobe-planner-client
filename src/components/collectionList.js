import React, { Component } from 'react'
import Item from './item'
import { Label } from 'semantic-ui-react'
import Collection from './collection'
import CollectionSearch from './collectionSearch'



export default class CollectionList extends Component {
  constructor(props){
    super(props)
    this.state ={
    }
  }

  render(){

    return(
      <div>
      <ul>
      {!this.props.oneCollection ? <div></div> : this.props.oneCollection.map(item => <Collection eachImage={item.image}/>)}
      </ul>
      </div>
    )
  }

}
