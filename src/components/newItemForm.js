import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import '../App.css'
import '../index.css';

class Popup extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { value } = this.props
    return (
      <div className="popup">
        <p>{value}</p>
      </div>
      )
    }
  }


class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      tags: [],
      visible: false,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitAll = this.handleSubmitAll.bind(this)
  }

  popup(value) {
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
      <div className="upload-form">
        <Form onSubmit={this.handleSubmitAll}>
        <label  className="form_labels">
          <h3 className='upload-title'>Add To Your Wardrobe</h3>
        </label>
        <br></br>
          <Form.Group widths='equal'>
          <Form.Input
            label="Image"
            type='text'
            className="form-control"
            placeholder="paste image url here"
            id="url"
            value={this.state.url}
            onChange={this.handleChange}/>
          <Form.Input
            label="Tag Words Here (no #)"
            type='text'
            className="form-control"
            placeholder="tag words here ( i.e. 'black' or 'long sleeve black blouse' )"
            id="tags"
            value={this.state.tags}
            onChange={this.handleChange}/>
          </Form.Group>
            {popup}
            <Button floated='right' size='tiny' color='purple' type='submit' className="btn event_button" >
              <div key={0} onClick={() => this.popup('Item Added!')}>Upload</div>
            </Button>
        </Form>
      </div>
    )
  }
}

export default NewItemForm
