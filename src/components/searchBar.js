import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTag: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({[name]: value})

  handleClick = () => {
    this.props.onSubmit(this.state.searchTag)
  }


  tags = () => (
    this.props.tags.map(tag => {
      const x = {key: `${tag.id}`, value: `${tag.keyword}`, text: `${tag.keyword}`}
      return x
    })
  )

    render(){
      return (
        <Form>
        <Form.Group>
        <Form.Dropdown search selection
        value={this.state.searchTag}
        placeholder='select tags'
        name = 'searchTag'
        options={this.tags()}
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
