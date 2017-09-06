import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

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
          Create New Collection
        </h2><br></br>

          <Form widths='equal'>
            <Form.Group >
              <Form.Dropdown search selection
                label='Add to Existing Collection'
                value={this.state.collectionSearch}
                placeholder='select collections'
                name = 'collectionSearch'
                options={this.collections()}
                onChange={this.handleChange}
              />
              <Form.Input label='Choose Item for Collection' placeholder='(should incorporate Item searchbar menu)'/>
                <Form.Button basic color='red' compact size='tiny'
                    content='Create'
                />
            </Form.Group>


            <Form.Group widths={2}>
            </Form.Group>
          </Form>

      </div>
    )
  }


}

// be able to put items in existing collections
// be able to CREATE collection names and calender
