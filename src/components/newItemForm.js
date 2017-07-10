import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react'

import '../index.css';

class Popup extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { value } = this.props
    return (
      <div class="popup">
        <p>{value}</p>
      </div>
      )
    }
  }


class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      tags: [],
      visible: false,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitAll = this.handleSubmitAll.bind(this)
  }

  popup(value) {
  console.log('fired ok');
  this.setState({
    visible: true,
    value: value
    })
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
    const popup = (this.state.visible ? <Popup value={this.state.value} /> : null)
    return(
      <div>
        <Form className="normal_text" onSubmit={this.handleSubmitAll}>
        <label for="Images" className="form_labels">Add A Piece To Your Wardrobe</label>
        <br></br>
          <Form.Group widths='equal'>
          <Form.Input label="image" type='text' className="form-control" placeholder="image url" id="url" value={this.state.url} onChange={this.handleChange}/>
          <Form.Input label="#" type='text' className="form-control" placeholder="tag words in here" id="tags" value={this.state.tags} onChange={this.handleChange}/>
          </Form.Group>
            {popup}
            <Button type='submit' className="btn event_button" >
            <li key={0} onClick={() => this.popup('Item Added!')}>add</li>
            </Button>
        </Form>
      </div>
    )
  }
}

export default NewItemForm
