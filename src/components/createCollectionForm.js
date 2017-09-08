import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
// import ListItemsToAdd from './listItemsToAdd'
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

  componentWillReceiveProps(nextProps){
    // const selectedCollectionName = nextProps.filter(props => props.name === this.state.collectionNameInput)
    // console.log(selectedCollectionName);
    console.log(nextProps);
    if (nextProps !== this.props ){
    this.setState({
      allCollections: nextProps.allCollections,
      collectionNameInput: nextProps.collectionNameInput
     })
    }
    // const selectedCollectionName = nextProps.allCollections.filter(props=> props.name === this.state.collectionNameInput).name
    // var selectedCollectionObject= this.state.allCollections.filter(collection => collection.name === selectedCollectionName)
  }

//


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
                    createNewCollection={this.props.createNewCollection}
                    createCollectionItems={this.props.createCollectionItems}
                    collectionNameInput={this.state.collectionNameInput}
                    selectedCollectionObject={this.state.selectedCollectionObject}
                  />
                )}
              </div>
            </Form.Group>
          </Form>
      </div>
    )
  }
}
