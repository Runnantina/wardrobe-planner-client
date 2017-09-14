import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import ItemsToAdd from './itemsToAdd'

export default class CreateCollectionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedCollectionObject: [],
      collectionNameInput: "",
      collection: [],
      item: [],
      message: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitCollectionName = this.handleSubmitCollectionName.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmitCollectionName = (e) => {
    this.props.createNewCollection(this.state.collectionNameInput)
  }


  render(){
    return(
      <div className="collection-input-form" >
          <h3 className='collection-form-title' align="center">
            Create New Collection
          </h3><br></br>
        <h5 className='step-1'>Step 1:</h5>
          <Form widths='equal' >
            <Form.Group >
              <Form.Input
                placeholder='Name Your New Collection'
                id='collectionNameInput'
                value={this.state.collectionNameInput}
                onChange={this.handleChange} />
                <Form.Button
                  size='tiny'
                  color="black"
                  content="Save Name"
                  onClick={this.handleSubmitCollectionName}
                />
            </Form.Group>
            <div className='solo-image'>
              <h5 className='step-2'>Step 2 : Select Each Item for Your Collection</h5>
              {this.props.allItems.map(item =>
                <ItemsToAdd
                  eachItem={item}
                  allCollections={this.props.allCollections}
                  createNewCollection={this.props.createNewCollection}
                  createCollectionItems={this.props.createCollectionItems}
                  collectionNameInput={this.state.collectionNameInput}
                  selectedCollectionObject={this.state.selectedCollectionObject}
                  />
              )}
            </div>
            <Form.Group>
            </Form.Group>
          </Form>
      </div>
    )
  }
}
