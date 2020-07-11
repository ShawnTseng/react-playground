import React, { Component } from 'react';
import Message from './Message'

class Header extends Component {
    render() {
        return <div>
            {this.props.title}
            <Message />
        </div>
    }
}

export default Header;