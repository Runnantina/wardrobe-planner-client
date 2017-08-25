import React, { Component } from 'react'
import Collection from './collection'


export default class CollectionList extends Component {
  constructor(props){
    super(props)
    this.state ={
      itemsInOneCollection: this.props.oneCollection
    }
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem = (item_id, collection_id) => {
    this.props.deleteCollectionItem(item_id, collection_id)
    let newItemsInOneCollection = this.props.oneCollection.items.filter( item => item.id !== item_id )
    this.setState({
      itemsInOneCollection: newItemsInOneCollection
    })
  }

  // componentWillReceiveProps = (nextProps) => {
  //   if (this.props.oneCollection !== nextProps.oneCollection) {
  //     // console.log(nextProps.oneCollection.items);
  //     this.setState({
  //       itemsInOneCollection: nextProps.oneCollection
  //     })
  //   }
  // }

  render(){
    console.log(this.state.itemsInOneCollection);
    return(
      <div>
        <ul>
          {!this.props.oneCollection.items ? null :
            this.props.oneCollection.items.map( item => (
              <Collection eachItem={item}
                eachImage={item.image}
                collection={this.props.oneCollection}
                deleteItem={this.deleteItem}
              />
            ))
          }
        </ul>
      </div>
    )
  }

}

// item.collections[0].collection_items_id
// collectionItemID={item.collections[0].collection_items_id}
