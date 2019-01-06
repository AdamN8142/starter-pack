import React, { Component } from 'react';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleClick = (event) => {
        this.props.grabCategory(event)
    }

    render() {
        return (
            <div className="nav-buttons">
                <button className="nav-button" name ="JavaScript" onClick={this.handleClick}>JavaScript</button>
                <button className="nav-button" name ="Git Commands" onClick={this.handleClick}>Git Commands</button>
                <button className="nav-button" name ="HTML" onClick={this.handleClick}>HTML</button>
                <button className="nav-button" name = "CSS" onClick={this.handleClick}>CSS</button>
                <button className="nav-button" name = "Around The Basement" onClick={this.handleClick}>Around The Basement</button>
                <button className="nav-button" name = "Favorites" onClick={this.handleClick}>Favorites</button>
            </div>
        )
    }
}
// 'favorites' button will need to be in a different place
// It will display the questions the user has "Starred" that they either got wrong or really liked 

//!!OR Should this be a separate componenet 





export default Nav;