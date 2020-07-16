import React, { Component, createRef } from 'react';

class Input extends Component {
    myInput = createRef();

    componentDidMount() {
        console.log(this.myInput);
        this.myInput.current.focus();
    }

    render() {
        return (
            <div>
                <h3>Enter you name</h3>
                <input type="text" ref={this.myInput} />
            </div>
        );
    }
}

export default Input;