import React, { Component } from 'react'
import ItemsToAdd from './itemsToAdd'

// this method should render out this.props.allCollections
// this should be the list of ALL Items
// be RESPONSIBLE in rendering the itemsToAdd

export default class listItemsToAdd extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCollectionName: this.props.collectionNameInput // state does NOT need to change

    }
  }

  handleSubmitCollectionItem = (e) => {
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps.allCollections);

    // const currentCollection = nextProps.allCollections[nextProps.allCollections.length-1]
    // if (this.props.allCollections !== nextProps.allCollections) {
    //   currentCollection.name ===  ?
    // }

  }

  render() {
    console.log(this.props.allCollections);
    return(
      <div className='solo-image'>
        <p>Step 2 : Select Each Item for Your Collection</p>
        {this.props.allItems.map(item =>
          <ItemsToAdd
            eachItem={item}
            allCollections={this.props.allCollections}
            createNewCollection={this.props.createNewCollection}
            createCollectionItems={this.props.createCollectionItems}
          />
        )}
      </div>
    )
  }

}

// {this.state.message ?  <p className="no-item"> No items match your search!</p> : this.props.allCollections.map(item => <Item eachItem={item} deleteItemTag={this.props.deleteItemTag}/>)}
