import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'


export default class AddToCollectionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      collectionSearch: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  handleClick = () => {
    this.props.onSubmitSelectCollection(this.state.collectionSearch)
  }

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
                value={this.state.collectionSearch}
                placeholder='find your collections!'
                name = 'collectionSearch'
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
                {this.props.allItems.map(item => <ItemsToAdd eachItem={item} allCollections={this.props.allCollections} createCollectionItems={this.props.createCollectionItems}/>)}
              </div>
            </Form.Group>
          </Form>

      </div>
    )
  }


}

// be able to put items in existing collections
// be able to CREATE collection names and calender
