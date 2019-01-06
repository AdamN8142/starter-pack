import React, { Component } from 'react';


class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <p>{this.props.question}</p>
            {
                this.props.answers.map((answer) => {
                    return (<button>{answer}</button>)
                })
            }
        
          </div>   
        )
    }
}

export default Card;