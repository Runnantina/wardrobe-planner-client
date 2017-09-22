import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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

export default class CreateCollectionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedCollectionObject: [],
      collectionNameInput: "",
      collection: [],
      item: [],
      message: false,
      visible: false,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitCollectionName = this.handleSubmitCollectionName.bind(this)
    this.popup = this.popup.bind(this)
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

  handleSubmitCollectionName = (e) => {
    this.props.createNewCollection(this.state.collectionNameInput)
  }


  render(){
    const popup = (this.state.visible ? <Popup value={this.state.value} /> : null)
    return(
      <div className="collection-input-form" >
          <h3 className='collection-form-title' align="center">
            Create New Collection
          </h3><br></br>
            <h5 className='step-1'>
              Step 1:
            </h5>
              <Form onSubmit={this.handleSubmitCollectionName}>
                <Form.Group widths='equal'>
                  <Form.Field control={Input}
                    placeholder='Name Your New Collection'
                    id='collectionNameInput'
                    value={this.state.collectionNameInput}
                    onChange={this.handleChange} />
                </Form.Group>
                  {popup}
                  <br></br>
                  <Button floated='left' size='tiny' color='purple' type='submit' className="btn event_button" >
                    <div key={0} onClick={() => this.popup('Got It!')}>Save Name</div>
                  </Button>
                      <br></br>
                      <br></br>
                        <h5 className='step-1'>Step 2:</h5>
                    <Button
                    size='tiny'
                    color='purple'
                    as={Link}
                    to='/closet/list_items_to_add'
                    content='proceed to select items'
                    />
              </Form>
      </div>
    )
  }
}

// <div className='solo-image'>
//   <h5 className='step-2'>Step 2 : Filter through closet then select each item</h5>
//   {this.props.allItems.map(item =>
//     <ItemsToAdd
//       eachItem={item}
//       allCollections={this.props.allCollections}
//       createNewCollection={this.props.createNewCollection}
//       createCollectionItems={this.props.createCollectionItems}
//       collectionNameInput={this.state.collectionNameInput}
//       selectedCollectionObject={this.state.selectedCollectionObject}
//       />
//   )}
// </div>
