import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Button } from 'reactstrap'
import Home from './HomeComponent'
import Home123 from './Home123Component'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  constructor(props) {
    super(props);
  } 

  render(){
    return(
      <main>
        <Header />
        <div className="container">
          <Router>
            <Route path="/" exact component={ Home }></Route>
            <Route path="/123" component={ Home123 }></Route>
          </Router>
        </div>
        <Footer />
      </main>
    );
  }
}