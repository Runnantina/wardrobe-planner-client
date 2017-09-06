import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom'
import { Form, Button, Header, Icon, Modal } from 'semantic-ui-react'


export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTags: [],
      modalOpen: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  handleChange = (e, { name, value }) => this.setState({[name]: value})

  handleClick = () => {
    this.props.onSubmit(this.state.searchTags)
  }

  tags = () => {
    const tags = this.props.tags.sort((a, b) => a.keyword.localeCompare(b.keyword))
    return tags.map(tag => {
      const x = {key: `${tag.id}`, value: `${tag.keyword}`, text: `${tag.keyword}`}
      return x
    })
  }


    render(){
      return (
        <Form className='search-form'>
          <h2 className='search-form-title'>Search Your Closet</h2>
          <Form.Group widths="equal">
            <Form.Dropdown search selection multiple
            value={this.state.searchTags}
            placeholder='search through tags'
            name = 'searchTags'
            options={this.tags()}
            onChange={this.handleChange}
            />
            <Form.Button compact size='small' basic color='black'
              onClick={this.handleClick}
              content='Search'
            />
          </Form.Group>
        <Form floated='right'>
        </Form>

        <Modal
          trigger={<Button onClick={this.handleOpen} basic color='pink' size='mini' >Make Collection</Button>}
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
                basic color='pink'
                as={Link}
                to='/closet/add_to_collection'
                onClick={this.handleClose}>
                <Icon name='plus'/>
                Add to Existing Collection
              </Button>
            </Modal.Actions>
        </Modal>
        </Form>

    )}
}
