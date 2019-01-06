import React, { Componenet } from 'react';


class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <p>{props.question}</p>
            <button>{props.category.possibleAnswer}</button>
            <button>{props.category.possibleAnswer}</button>
            <button>{props.category.possibleAnswer}</button>
          </div>   
        )
    }
}

export default Card;