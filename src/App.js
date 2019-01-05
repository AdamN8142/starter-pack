import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';

class App extends Component {
  constructor(){
    super();
    this.state ={
      quizData: [],
    }
  }


  componenetDidMount(){
    fetch("http://memoize-datasets.herokuapp.com/api/v1/adamData")
      .then(data => data.json())
      .then(results => {
        this.setState({
          quizData: results.adamData
        })
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <Nav />
    )
  }
}

export default App;
