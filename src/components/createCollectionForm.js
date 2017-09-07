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
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmitCollectionName = (e) => {
    e.preventDefault()
    console.log(this.state.collectionNameInput);
    this.props.createNewCollection(this.state.collectionNameInput)
    this.setState({
      collectionNameInput: "",
    })
  }

  render(){
    return(
      <div className="collection-input-form">
          <h2 className='collection-form-title' align="center">
            Create New Collection
          </h2><br></br>
          <h5>Step 1:</h5>
          <Form widths='equal' >
            <Form.Group >
              <Form.Input
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
            <Form.Group>
              <div className='solo-image'>
                <p>Step 2 : Select Each Item for Your Collection</p>
                {this.props.allItems.map(item =>
                  <ItemsToAdd
                    eachItem={item}
                    allCollections={this.props.allCollections}
                    createCollectionItems={this.props.createCollectionItems}/>)}
              </div>
            </Form.Group>
          </Form>
      </div>
    )
  }
}
