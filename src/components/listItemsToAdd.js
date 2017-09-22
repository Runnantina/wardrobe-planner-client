import React, { Component } from 'react'
import _ from 'lodash'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'
import ItemsToAdd from './itemsToAdd'


export default class listItemsToAdd extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCollectionName: this.props.collectionNameInput

    }
  }

  handleContextRef = contextRef => this.setState({ contextRef })



  render() {
    const { contextRef } = this.state
    return(
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>

            <Segment>
              <Rail position='left'>
              {_.times(10, i =>
                  <div className='solo-image' key={i}>
                    <p className='step-2-add'>Select Items for Your Collection</p>
                    {this.props.allItems.map(item =>
                      <ItemsToAdd
                        eachItem={item}
                        newlyCreatedCollectionID={this.props.newlyCreatedCollectionID}
                        allCollections={this.props.allCollections}
                        createNewCollection={this.props.createNewCollection}
                        createCollectionItems={this.props.createCollectionItems}
                      />
                    )}
                  </div> )}
              </Rail>

              <Rail position='right'>
                <Sticky context={contextRef}>
                  <Header as='h3'>Stuck Content</Header>

                  <div> Hello World </div>

                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>

    )
  }

}

// {this.state.message ?  <p className="no-item"> No items match your search!</p> : this.props.allCollections.map(item => <Item eachItem={item} deleteItemTag={this.props.deleteItemTag}/>)}
