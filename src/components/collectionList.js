import React, { Component } from 'react'
import Collection from './collection'


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
