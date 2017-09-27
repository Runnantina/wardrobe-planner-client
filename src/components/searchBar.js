import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Icon, Modal } from 'semantic-ui-react'


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

  componentWillUnmount = () => {
   console.log('i unmounted');
  }

    render(){
      return (
        <Form className='search-form'>
          <h3 className='search-form-title'>search through #tags</h3>
          <Form.Group widths='equal'>
            <Form.Dropdown search selection multiple
            value={this.state.searchTags}
            placeholder='search through tags'
            name = 'searchTags'
            options={this.tags()}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
          <Form.Button compact size='small' color='purple'
            onClick={this.handleClick}
            content='Search'
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
