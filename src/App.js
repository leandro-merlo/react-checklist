import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Button } from 'reactstrap'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Insert from './components/Insert'
import './css/index.css'

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
            <Route path="/add" component={ Insert }></Route>
          </Router>
        </div>
        <Footer />
      </main>
    );
  }
}