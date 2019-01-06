import React, { Component } from 'react';


class CardContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        category: this.props.grabCategory
        }
    }



    render() {
        return(
            <div>
                {/* <Card cardInfo={this.props.category}/> */}
            </div>
        )
    }
}

export default CardContainer;