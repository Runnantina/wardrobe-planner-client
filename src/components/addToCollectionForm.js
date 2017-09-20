import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'


export default class AddToCollectionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      collectionID: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
    console.log(name, value);
  }

  handleClick = (e, { name, value }) => {
    // when user clicks Save Name, should just mean it's holding the selected collection name
    // this.props.createCollectionItems(this.state.collectionSearchInput)
    this.setState({[name]: value})
  }

  // handleClick = (e, object) => {
  //   // when user clicks save name, should just mean it's holding the selected collection name
  //   // this.props.createCollectionItems(this.state.collectionSearchInput)
  //   this.setState({
  //     [object.name]: object.value
  //   })
  //   debugger
  //   console.log(this.state.collectionSearchInput);
  // }

  collections = () => {
    const collections = this.props.allCollections.sort((a, b) => a.name.localeCompare(b.name))
    return collections.map(collection => {
      const x = {key: `${collection.id}`, value: `${collection.id}`, text: `${collection.name}`}
      return x
    })
  }


  render(){
    return(
      <div className="collection-input-form">
        <h3 className='collection-form-title'>
          Add to Existing Collections
        </h3><br></br>
        <Form widths='equal'>
            <Form.Group >
              <Form.Dropdown search selection
                id='searchCollection'
                value={this.state.collectionSearchInput}
                placeholder='select collection'
                name = 'collectionID'
                options={this.collections()}
                onChange={this.handleChange}
              />
              <Form.Button color='black' compact size='tiny'
                onClick={this.handleClick}
                content='Select'
                floated ='left'
                />
            </Form.Group>

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
