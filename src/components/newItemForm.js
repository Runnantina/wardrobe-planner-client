import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react'

import '../index.css';

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      tags: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitAll = this.handleSubmitAll.bind(this)

  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmitAll(e){
    e.preventDefault()
    console.log(e.target.tags.value);
    this.props.onSubmitTag(e.target.url.value, e.target.tags.value)
    this.setState({
      url: "",
      tags: ""
    })
  }

  render(){
    return(
      <div>
        <Form className="normal_text" onSubmit={this.handleSubmitAll}>
        <label for="Images" className="form_labels">Add A Piece To Your Wardrobe</label>
        <br></br>
          <Form.Group widths='equal' >
          <Form.Input label="image" type='text' className="form-control" placeholder="image url" id="url" value={this.state.url} onChange={this.handleChange}/>
          <Form.Input label="tag" type='text' className="form-control" placeholder="tag it here" id="tags" value={this.state.tags} onChange={this.handleChange}/>
          </Form.Group>
            <Button type='submit' className="btn event_button" >add</Button>
        </Form>
      </div>
    )
  }
}

export default NewItemForm
