import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      tag: ""
    }
    this.handleChangeItem = this.handleChangeItem.bind(this)
    this.handleChangeTag = this.handleChangeTag.bind(this)
    this.handleSubmitImage = this.handleSubmitImage.bind(this)
    this.handleSubmitTag = this.handleSubmitTag.bind(this)

  }

  handleChangeItem(e){
    this.setState({
      url: e.target.value,
    })
  }

  handleChangeTag(e){
    this.setState({
      tag: e.target.value
    })
  }

  handleSubmitImage(e){
    e.preventDefault()
    this.setState({
      url: e.target.value
    })
    this.props.onSubmitItem(this.state.url)
  }

  handleSubmitTag(e){
    e.preventDefault()
    this.setState({
      tag: e.target.value
    })
    this.props.onSubmitTag(this.state.tag)
  }

  render(){
    return(
      <div>
        <form className="normal_text">
        <div className="form-group">
          <label for="Images" className="form_labels">Upload Image </label><br></br>
          <input type='text' className="form-control" placeholder="paste in image url" name="url" value={this.state.url} onChange={this.handleChangeItem}/>
        </div>
        <div className="form-group">
        <button type='submit' className="btn event_button" onClick={this.handleSubmitImage} >add image</button>
        </div>
        <div className="form-group">
          <label for="tag" className="form_labels">Add Tag </label><br></br>
          <input type='text' className="form-control" placeholder="tag it!" name="tag" value={this.state.tag} onChange={this.handleChangeTag}/>
        </div>
        <div className="form-group">
        <button type='submit' className="btn event_button" onClick={this.handleSubmitTag} >add tag</button>
        </div>
        </form>
      </div>
    )

  }

}

export default NewItemForm
