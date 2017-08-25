import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

export default class Collection extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  handleClick =(e, object) => { //or "object"'s shorthand: {value}
  debugger;
    this.props.deleteItem(object.value.item_id, object.value.collection_id)
    // this.props.deleteCollectionItem(object.value.item_id, object.value.collection_id)
  }

  render(){
    return(
      <div className="solo-image" >
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width='6'></Grid.Column>
            <Grid.Column width='4'>
              <section className="photo" >
                <img src={this.props.eachImage} className='closet-item' alt={`item-${this.props.eachImage}`}/>
                <div className='polaroid'>
                  <Button
                    className='delete-button'
                    animated basic color='red'
                    compact size='tiny'
                    onClick={this.handleClick}
                    value={{
                      item_id: this.props.eachItem.id,
                      collection_id: this.props.collection.id
                    }}
                    >
                    <Button.Content visible type='click' >Delete Item</Button.Content>
                    <Button.Content hidden>
                      <Icon name='trash' />
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
