import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react'
import '../App.css'
import { Link } from 'react-router-dom'



class LogInForm extends Component {
  constructor(){
    super()

  }

  render(){
    return(
      <div className='login-form-div'>
        <Form className='login-form'>
          <Form.Field>
            <h1 className="sign-in-title">My Wardrobe</h1>
            <Form.Input label='Username' type='text' />
            <Form.Input label='Password' type='password' />
          </Form.Field>
            <Button basic color='teal' size='mini' type='submit' as={Link} to='/closet'>Log In</Button>
              <Modal trigger={<Button basic color='pink' size='mini' >Sign Up!</Button>}>
              <Modal.Header>New User</Modal.Header>
                <Modal.Content>
                  <Form widths='equal'>
                    <Form.Input label='Username' type='text' />
                    <Form.Input label='Password' type='password' />
                    <Form.Input label='Confirm Password' type='password' />
                    <Button basic color='teal' size='tiny' type='submit' as={Link} to='/closet'>Submit</Button>
                  </Form>
                </Modal.Content>
              </Modal>
        </Form>
      </div>
    )

  }

}

export default LogInForm
