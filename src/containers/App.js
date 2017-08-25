import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../App.css'
import LogInForm from '../components/logInForm'
import Main from '../components/main'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route path='/login' component={LogInForm} />
        <Route path='/closet' component={Main} />
      </div>
    );
  }
}

export default App;
