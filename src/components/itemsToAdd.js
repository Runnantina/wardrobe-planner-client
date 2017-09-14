import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import ListItemsToAdd from './listItemsToAdd'
import '../App.css'

export default class ItemsToAdd extends Component {
  constructor(props){
    super(props)
    this.state ={
      // collectionObject: this.props.selectedCollectionObject
      // waiting to make existingCollectionObject from addToCollectionForm
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick =(e, object) => { //or "object"'s shorthand: {value}
    let collection = this.props.allCollections
    let currentCollectionID = collection[collection.length-1].id
    this.props.createCollectionItems(currentCollectionID, object.value)
    this.setState({
    })
  }

  // handleClick =(e, object) => {
  //   const collectionObject = this.props.allCollections.filter(collection => collection.name === this.props.collectionNameInput)
  //   console.log(collectionObject); // should be THE collection MATCHING the {selected collection by user}
  //   debugger
  //   const currentCollectionID = collectionObject.id
  //   console.log(currentCollectionID, object.value);
  //   this.props.createCollectionItems(currentCollectionID, object.value)
  // }

  render(){
    return(
      <div className="solo-image" >
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width='6'></Grid.Column>
            <Grid.Column width='4'>
              <section className="photo" >
                <img src={this.props.eachItem.image} className='closet-item' alt={`item-${this.props.eachItem.id}`}/>
                <div className='polaroid'>
                  <Button
                    className='delete-button'
                    animated basic color='red'
                    compact size='tiny'
                    onClick={this.handleClick}
                    value={this.props.eachItem.id}
                    >
                    <Button.Content visible type='click' >Add To Collection</Button.Content>
                    <Button.Content hidden>
                      <Icon name='check'/>
                    </Button.Content>
                  </Button>
                </div>
              </section>
            </Grid.Column>
            <Grid.Column width='6'></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      )
    }
}

// NOTES: this is what i working without this component being dynamic for both 'createCollectionForm' component
// handleClick =(e, object) => { //or "object"'s shorthand: {value}
//   let collection = this.state.collection
//   let currentCollectionID = collection[collection.length-1].id
//   this.props.createCollectionItems(currentCollectionID, object.value)
//   this.setState({
//   })
// }
