import React, { Component } from 'react';

class Message extends Component {
    state = {
        text: 'Hello'
    }

    sayHi = () => {
        this.setState({ text: 'Hi' })
    }

    render() {
        return (
            <div>
                {this.state.text}
                <button onClick={this.sayHi}>Say Hi</button>
                <br />
                {this.props.children}
            </div>
        );
    }
}

export default Message;