import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: ""
    }

  }

  handleChange = (e, { name, value }) => this.setState({[name]: value })

  render(){
    return(
      <Form onSubmit={this.props.onSubmit}>
      <br></br>
      <label><strong>Add New Pieces</strong></label>
      <Form.Input
          placeholder = "paste image url here"
          onChange={this.handleChange}
          name = "url"
          value={this.setState.url}
          type='text'
          />


      <Form.Field>
        <input placeholder='add tags here' type='text'/>
      </Form.Field>
      <Form.Button type='submit'>add new item to wardrobe</Form.Button>
    </Form>
    )
  }
}

export default NewItemForm
