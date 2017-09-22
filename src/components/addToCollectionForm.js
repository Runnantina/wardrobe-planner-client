import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'

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

export default class AddToCollectionForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      value: '',
      collectionID: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.popup = this.popup.bind(this)
  }

  popup(value) {
  this.setState({
    visible: true,
    value: value
    })
  }


  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
    console.log(name, value);
  }

  handleClick = (e, { name, value }) => {
    this.setState({[name]: value})
  }


  collections = () => {
    const collections = this.props.allCollections.sort((a, b) => a.name.localeCompare(b.name))
    return collections.map(collection => {
      const x = {key: `${collection.id}`, value: `${collection.id}`, text: `${collection.name}`}
      return x
    })
  }


  render(){
    const popup = (this.state.visible ? <Popup value={this.state.value} /> : null)
    return(
      <div className="collection-input-form">
        <h3 className='collection-form-title'>
          Add to Existing Collections
        </h3><br></br>
      <Form widths='equal' onSubmit={this.handleClick}>
            <Form.Group >
              <Form.Dropdown search selection
                id='searchCollection'
                value={this.state.collectionSearchInput}
                placeholder='select collection'
                name = 'collectionID'
                options={this.collections()}
                onChange={this.handleChange}
              />
            </Form.Group>
            {popup}
            <Button floated='right' size='tiny' color='purple' type='submit' className="btn event_button" >
              <div key={0} onClick={() => this.popup('Got it!')}>Select</div>
            </Button>
            <Form.Group>
              <br></br>
              <div className='solo-image'>
                <p className='step-2-add'>Step 2 : Select Each Item for Your Collection</p>
                {this.props.allItems.map(item =>
                  <ItemsToAdd
                    eachItem={item}
                    allCollections={this.props.allCollections}
                    createCollectionItems={this.props.createCollectionItems}
                    newlyCreatedCollectionID={this.state.collectionID}
                  />)}
              </div>
            </Form.Group>
        </Form>

      </div>
    )
  }


}
