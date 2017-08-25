import React, { Component } from 'react'
import Collection from './collection'


export default class CollectionList extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
        <ul>
          {!this.props.oneCollection.items ? <div></div> :
            this.props.oneCollection.items.map( item => (
              <Collection eachItem={item}
                eachImage={item.image}
                collection={this.props.oneCollection}
                deleteItem={this.props.deleteCollectionItem}
              />
            ))
          }
        </ul>
      </div>
    )
  }

}
