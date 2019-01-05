import React, { Component } from 'react';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <button>JavaScript</button>
                <button>Git Commands</button>
                <button>HTML</button>
                <button>CSS</button>
                <button>Around The Basement</button>
            </div>
        )
    }
}




export default Nav;