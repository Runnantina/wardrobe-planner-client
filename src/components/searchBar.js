import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTags: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({[name]: value})

  handleClick = () => {
    this.props.onSubmit(this.state.searchTags)
  }

  tags = () => {
    const tags = this.props.tags.sort((a, b) => a.keyword.localeCompare(b.keyword))
    return tags.map(tag => {
      const x = {key: `${tag.id}`, value: `${tag.keyword}`, text: `${tag.keyword}`}
      return x
    })
    }


    render(){
      return (
        <Form className='search-form'>
          <h2 className='search-form-title'>Search Your Closet</h2>
          <Form.Group widths="equal">
            <Form.Dropdown search selection multiple
            value={this.state.searchTags}
            placeholder='search through tags'
            name = 'searchTags'
            options={this.tags()}
            onChange={this.handleChange}
            />
            <Form.Button compact size='small' basic color='black'
              onClick={this.handleClick}
              content='Search'
            />
          </Form.Group>
        </Form>

    )}
}
