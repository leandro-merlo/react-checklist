import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Button } from 'reactstrap'
import Home from './HomeComponent'
import Home123 from './Home123Component'

export default class App extends Component {
  constructor(props) {
    super(props);
  } 

  render(){
    return(
      <Router>
        <Route path="/" exact component={ Home }></Route>
        <Route path="/123" component={ Home123 }></Route>
      </Router>
    );
  }
}