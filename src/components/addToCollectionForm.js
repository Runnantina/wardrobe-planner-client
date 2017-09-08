import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'


export default class AddToCollectionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      collectionSearchInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  handleClick = (e) => {
    // when user clicks Save Name, should just mean it's holding the selected collection name
    // this.props.createCollectionItems(this.state.collectionSearchInput)
  }

  // handleClick = (e, object) => {
  //   // when user clicks save name, should just mean it's holding the selected collection name
  //   // this.props.createCollectionItems(this.state.collectionSearchInput)
  //   this.setState({
  //     [object.name]: object.value
  //   })
  //   debugger
  //   console.log(this.state.collectionSearchInput);
  // }

  collections = () => {
    const collections = this.props.existingCollections.sort((a, b) => a.name.localeCompare(b.name))
    return collections.map(collection => {
      const x = {key: `${collection.id}`, value: `${collection.id}`, text: `${collection.name}`}
      return x
    })
  }


  render(){
    return(
      <div className="collection-input-form">
        <h2 className='collection-form-title' align="center">
          My Collections
        </h2><br></br>
      <Form widths='equal'>
            <Form.Group >
              <Form.Dropdown search selection
                id='searchCollection'
                value={this.state.collectionSearchInput}
                placeholder='find your collections!'
                name = 'collectionSearchInput'
                options={this.collections()}
                onChange={this.handleChange}
              />
              <Form.Button basic color='black' compact size='tiny'
                onClick={this.handleClick}
                content='Search'
                floated ='left'
                />
              </Form.Group>

            <Form.Group>
              <div className='solo-image'>
                <p>Step 2 : Select Each Item for Your Collection</p>
                {this.props.allItems.map(item =>
                  <ItemsToAdd
                    eachItem={item}
                    allCollections={this.props.allCollections}
                    createCollectionItems={this.props.createCollectionItems}
                  />)}
              </div>
            </Form.Group>
          </Form>

      </div>
    )
  }


}

// be able to CREATE collection names and calender
