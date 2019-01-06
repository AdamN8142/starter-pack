import React, { Component } from 'react';
import './styles/_main.scss';
import Nav from './Nav.js';
import CardContainer from './CardContainer.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      quizData: [],
      selectedCat: []
    }
  }

  grabCategory = (event) => {
    let category = event.target.name
    let chosenCategory = this.state.quizData.filter(obj => {
      return obj.category === category
    })
    this.setState(
      {selectedCat: chosenCategory}
    )
  }


  componentDidMount(){
    fetch("http://memoize-datasets.herokuapp.com/api/v1/adamData")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quizData: data.adamData
        })
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="app-page">
        <h1 className="page-header">Mod-1 Starter Pack</h1>
        <Nav grabCategory= {this.grabCategory} />
        <CardContainer selectedCategory= {this.state.selectedCat} />
      </div>
    )
  }
}

export default App;
