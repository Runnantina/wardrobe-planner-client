import React, { Component } from 'react'
import ItemsList from './itemsList'
import { Form } from 'semantic-ui-react'


export default class CollectionSearch extends Component {
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
    const collections = this.props.collections.sort((a, b) => a.name.localeCompare(b.name))
    return collections.map(collection => {
      const x = {key: `${collection.id}`, value: `${collection.id}`, text: `${collection.name}`}
      return x
    })
    }

    render(){
      return (
        <Form className="collection-search">
        <Form.Group>
          <Form.Dropdown search selection
            value={this.state.collectionSearch}
            placeholder='select collections'
            name = 'collectionSearch'
            options={this.collections()}
            onChange={this.handleChange}
          />

          <Form.Button
            onClick={this.handleClick}
            content='Search'
          />
        </Form.Group>
        </Form>

    )}
}