import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Rail, Sticky, Button, Icon } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'


export default class listItemsToAdd extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleShowSavedCollection = this.handleShowSavedCollection.bind(this)
  }

  handleShowSavedCollection = () => {
    this.props.showCollection(this.props.newlyCreatedCollectionID)
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return(
      <Grid columns={3}>
      <Grid.Column width='1'></Grid.Column>
        <Grid.Column width='14'>
          <h4 className='step-2-add'>Select Items for New Collection</h4>
            <div className='new-collection-selection-field' ref={this.handleContextRef}>
              <div className='solo-image'>
                {this.props.allItems.map(item =>
                  <ItemsToAdd
                    eachItem={item}
                    newlyCreatedCollectionID={this.props.newlyCreatedCollectionID}
                    allCollections={this.props.allCollections}
                    createNewCollection={this.props.createNewCollection}
                    createCollectionItems={this.props.createCollectionItems}
                  />
                )}
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
    )
  }

}
