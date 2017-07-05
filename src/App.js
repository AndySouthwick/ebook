import React, { Component } from 'react';
import './App.css';
import Landing from './Landing'
import ThankYou from './ThankYou'
import {Switch, Route, } from 'react-router-dom'

class App extends Component {
  render() {

    return (
        <div>
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/thanks" component={ThankYou}/>
          </Switch>
        </div>

    );
  }
}

export default App;
