import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react'

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
        <Form className="upload-form" onSubmit={this.handleSubmitAll}>
        <label for="Images" className="form_labels"><Header as='h4'>Add A Piece To Your Wardrobe</Header></label>
        <br></br>
          <Form.Group widths='equal'>
          <Form.Input label="Image" type='text' className="form-control" placeholder="image url" id="url" value={this.state.url} onChange={this.handleChange}/>
          <Form.Input label="Tag Your Image" type='text' className="form-control" placeholder="tag words in here" id="tags" value={this.state.tags} onChange={this.handleChange}/>
          </Form.Group>
            {popup}
            <Button floated='right' size='tiny' color='black' type='submit' className="btn event_button" >
              <div key={0} onClick={() => this.popup('Item Added!')}>Upload</div>
            </Button>
        </Form>
      </div>
    )
  }
}

export default NewItemForm
