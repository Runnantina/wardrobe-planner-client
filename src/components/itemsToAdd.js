import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import '../App.css'

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

export default class ItemsToAdd extends Component {
  constructor(props){
    super(props)
    this.state ={
      visible: false,
      value: ''
    }
    this.popup = this.popup.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  popup(value) {
  this.setState({
    visible: true,
    value: value
    })
  }

  handleClick =(e, object) => { //or "object"'s shorthand: {value}

    console.log(this.props.newlyCreatedCollectionID, object.value);
    this.props.createCollectionItems(this.props.newlyCreatedCollectionID, object.value)
  }

  render(){
    const popup = (this.state.visible ? <Popup value={this.state.value} /> : null)
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
                    className='add-to-collection-button'
                    animated basic color='red'
                    compact size='tiny'
                    onClick={this.handleClick}
                    value={this.props.eachItem.id}
                    >
                    <div className='font-inside-add-button' key={0} onClick={() => this.popup('Got it!')}>Add To Collection</div>
                  </Button>
                  {popup}
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
