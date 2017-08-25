import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import '../App.css'

export default class Item extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  handleClick =(e, object) => { //or "object"'s shorthand: {value}
    this.props.deleteItemTag(object.value)
  }

  render(){
    return(
      <div className="solo-image" >
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width='6'></Grid.Column>
            <Grid.Column width='4'>
              <section className="photo" >
                <img src={this.props.eachItem.image} className='closet-item' alt={`item-${this.props.eachItem.id}`}/>
                <div className='polaroid'>
                  <Button
                    className='delete-button'
                    animated basic color='red'
                    compact size='tiny'
                    onClick={this.handleClick}
                    value={this.props.eachItem.id}
                    >
                    <Button.Content visible type='click' >Delete Item</Button.Content>
                    <Button.Content hidden>
                      <Icon name='trash'/>
                    </Button.Content>
                  </Button>
                </div>
              </section>
            </Grid.Column>
            <Grid.Column width='6'></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      )
    }
}
