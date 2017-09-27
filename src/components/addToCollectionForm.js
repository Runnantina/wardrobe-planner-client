import React, { Component } from 'react'
import { Form, Button, Rail, Sticky, Header, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
    console.log("selected!");
    this.setState({[name]: value})
  }


  collections = () => {
    const collections = this.props.allCollections.sort((a, b) => a.name.localeCompare(b.name))
    return collections.map(collection => {
      const x = {key: `${collection.id}`, value: `${collection.id}`, text: `${collection.name}`}
      return x
    })
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render(){
    const popup = (this.state.visible ? <Popup value={this.state.value} /> : null)
    const { contextRef } = this.state
    return(
      <div className="collection-input-form">
        <h3 className='collection-form-title'>
          Add to Existing Collections
        </h3><br></br>
          <Form widths='equal' onSubmit={this.handleClick}>
            <Form.Group >
              <Form.Dropdown search selection
                id='searchCollection'
                placeholder='select collection'
                name = 'collectionID'
                options={this.collections()}
                onChange={this.handleChange}
              />
            </Form.Group>
              {popup}
              <br></br>
              <Button floated='right' size='tiny' color='purple' type='submit' className="btn event_button" >
                <div key={0} onClick={() => this.popup('Got it!')}>Select</div>
              </Button>
              <br></br>
              <Grid columns={3}>
              <Grid.Column width='1'></Grid.Column>
              <Grid.Column width='14'>
                    <h4 className='step-2-add'>Step 2 : Select Each Item for Your Collection</h4>
                      <div className='new-collection-selection-field' ref={this.handleContextRef}>
                        <div className='solo-image'>
                          {this.props.allItems.map(item =>
                            <ItemsToAdd
                              eachItem={item}
                              allCollections={this.props.allCollections}
                              createCollectionItems={this.props.createCollectionItems}
                              newlyCreatedCollectionID={this.state.collectionID}
                            />)}
                        </div>
                        <Rail>
                          <div className='sticky-box'>
                            <Sticky context={contextRef}>
                              <Header as='h5' className='sticky-box-title'>#whenyouredone:</Header>
                                <div className='sticky-box-content'>
                                  <Button
                                    className='save-collection-button'
                                    baic size='tiny'
                                    color='red'
                                    as={Link}
                                    to={`/closet/my_collections`}
                                    >
                                    <Button.Content><Icon name='wizard'/>Save Collection</Button.Content>
                                  </Button>
                                </div>
                            </Sticky>
                          </div>
                        </Rail>
                      </div>
                  </Grid.Column>
                </Grid>
            </Form>
        </div>
    )
  }
}
