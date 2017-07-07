import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react'

import '../index.css';

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      tag: ""
    }
    this.handleChangeItem = this.handleChangeItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitImage = this.handleSubmitImage.bind(this)
    this.handleSubmitTag = this.handleSubmitTag.bind(this)
    this.handleSubmitAll = this.handleSubmitAll.bind(this)

  }

  handleChangeItem(e){
    this.setState({
      url: e.target.value,
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitImage(e){
    e.preventDefault()
    debugger

    this.props.onSubmitItem(this.state.url)
  }


  handleSubmitTag(e){
    e.preventDefault()
    this.setState({
      tag: e.target.value
    })
    this.props.onSubmitTag(this.state.tag)
  }

  handleSubmitAll(e){
    e.preventDefault()
    this.props.onSubmitTag(e.target.url.value, e.target.tag.value)
    this.props.onSubmitTag(e.target.url.id, e.target.tag.id)
  }

  tags = () => (
    this.props.tags.map(tag => {
      const x = {key: `${tag.id}`, value: `${tag.keyword}`, text: `${tag.keyword}`}
      return x
    })
  )

  render(){
    return(
      <div>
        <form className="normal_text" onSubmit={this.handleSubmitAll}>
          <div className="form-group">
            <label for="Images" className="form_labels">Add A Piece To Your Wardrobe</label><br></br>
            <input type='text' className="form-control" placeholder="image url" name="url" value={this.state.url} onChange={this.handleChange}/>
            <input type='text' className="form-control" placeholder="tag it here" name="tag" value={this.state.tag} onChange={this.handleChange}/>

            <br></br>
            <button type='submit' className="btn event_button" >add</button>
          </div>
          <Form>
          </Form>
        </form>

      </div>
    )
  }
}

// new form, add image, add tag: will be placeholders
// then, final submit button for persisting both to ItemTag
// figure out how to take in 2 objects for handle submit

export default NewItemForm

// <div className="form-group">
// <label for="tag" className="form_labels">Add Tag </label><br></br>
// <input type='text' className="form-control" placeholder="" name="tag" value={this.state.tag} onChange={this.handleChangeTag}/>
// </div>
// <div className="form-group">
// <button type='submit' className="btn event_button" onClick={this.handleSubmitTag} >add tag</button>
// </div>
