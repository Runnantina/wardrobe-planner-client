import React, { Component } from 'react'
import { Form, Modal, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class CollectionSearch extends Component {
  constructor(props){
    super(props)

    this.state = {
      collectionSearch: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  handleClick = () => {
    this.props.onSubmitSelectCollection(this.state.collectionSearch)
  }

  collections = () => {
    const collections = this.props.collections.sort((a, b) => a.name.localeCompare(b.name))
    return collections.map(collection => {
      const x = {key: `${collection.id}`, value: `${collection.id}`, text: `${collection.name}`}
      return x
    })
  }

  componentWillUnmount = () => {
   this.props.onSubmitSelectCollection('')
  }

    render(){
      return (
        <Form className="collection-search">
          <h3 className='collection-form-title'>
            My Collections
          </h3><br></br>
          <Form.Group widths='equal'>
            <Form.Dropdown search selection
              value={this.state.collectionSearch}
              placeholder='select collections'
              name = 'collectionSearch'
              options={this.collections()}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Button color='black' compact size='small'
              onClick={this.handleClick}
              content='Search'
              floated ='left'
              />
              <Modal
                trigger={<Button onClick={this.handleOpen} basic color='purple' compact size='mini' >Make A Collection</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Modal.Header></Modal.Header>
                  <Modal.Content>
                    <p>Which would you like to do?</p>
                  </Modal.Content>
                <Modal.Actions>
                  <Button
                    compact
                    size='small'
                    basic color='teal'
                    as={Link}
                    to='/closet/new_collection'
                    onClick={this.handleClose}>
                    <Icon name='checkmark'/>
                    Create New Collection
                  </Button>
                  <Button
                    compact
                    size='small'
                    basic color='purple'
                    as={Link}
                    to='/closet/add_to_collection'
                    onClick={this.handleClose}>
                    <Icon name='plus'/>
                    Add to Existing Collection
                  </Button>
                </Modal.Actions>
              </Modal>
            </Form.Group>
        </Form>

    )}
}
