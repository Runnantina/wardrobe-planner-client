import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'


export default class CreateCollectionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      collectionNameInput: "",
      collection: [],
      item: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitCollectionName = this.handleSubmitCollectionName.bind(this)
    this.handleSubmitItemToCollection = this.handleSubmitItemToCollection.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmitCollectionName = (e) => {
    e.preventDefault()
    // submit for Collection.create() by grabbing collection_name
    this.props.createNewCollection(this.state.collectionNameInput)
    this.setState({
      collectionNameInput: ""
    })
  }

  handleSubmitItemToCollection = (e) => {
    e.preventDefault()
    // adds each individual item to Collection
    // CollectionItem.find_or_create_by(collection_id, item_id)
    // collection_id: 
    // item_id:
    // this.props.createCollectionItems(this.state.)
  }


  render(){
    return(
      <div className="collection-input-form">
        <h2 className='collection-form-title' align="center">
          Create New Collection
        </h2><br></br>
          <Form widths='equal' >
            <Form.Group >
              <Form.Input
              label='Step 1 :'
              placeholder='Name Your New Collection'
              id='collectionNameInput'
              value={this.state.collectionNameInput}
              onChange={this.handleChange} />
              <Form.Button
                basic button="black"
                content="Save Name"
                onClick={this.handleSubmitCollectionName}
              />
            </Form.Group>
          </Form>

        <div className='solo-image'>
        <p>Step 2 : Select Each Item for Your Collection</p>
          {this.props.allItems.map(item => <ItemsToAdd eachItem={item} submitEachItem={this.handleSubmitItemToCollection}/>)}
        </div>
      </div>
    )
  }


}

// be able to put items in existing collections
// be able to CREATE collection names and calender
