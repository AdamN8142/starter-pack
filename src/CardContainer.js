import React, { Component } from 'react';
import Card from './Card'


class CardContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        
        }
    }

    render() {
        return(
            <div>
               {this.props.selectedCategory.map((question)=> {
                   return (
                       <Card 
                          question = {question.question}
                          answers = {question.answers}
                       />
                   )
               })}
            </div>
        )
    }
}

export default CardContainer;