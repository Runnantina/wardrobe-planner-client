import React, { Component } from 'react'
import { Image, Button, Grid, Icon } from 'semantic-ui-react'

export default class Collection extends Component {
  constructor(props){
    super(props)

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


// <div>
//   <ul>
//     <Image src={this.props.eachImage} size='small' centered/>
//   </ul>
// </div>
