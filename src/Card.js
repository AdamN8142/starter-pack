import React, { Component } from 'react';


class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div className="individual-question">
            <p>{this.props.question}</p>
            {
                this.props.answers.map((answer) => {
                    return (<button className="answer-buttons">{answer}</button>)
                })
            }
        
          </div>   
        )
    }
}

export default Card;