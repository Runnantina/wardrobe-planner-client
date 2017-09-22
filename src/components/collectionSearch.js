import React, { Component } from 'react'
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

  componentWillUnmount = () => {
   this.props.onSubmitSelectCollection('')
  }

    render(){
      return (
        <div className="collection-search">
          <h3 className='collection-form-title'>
            My Collections
          </h3><br></br>
          <Form widths='equal'>
          <Form.Group>
            <Form.Dropdown search selection
              value={this.state.collectionSearch}
              placeholder='select collections'
              name = 'collectionSearch'
              options={this.collections()}
              onChange={this.handleChange}
            />
            <Form.Button color='black' compact size='small'
                  onClick={this.handleClick}
                  content='Search'
                  floated ='left'
            />
          </Form.Group>
          </Form>
        </div>

    )}
}
