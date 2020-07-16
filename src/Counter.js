import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            count: props.initCount
        })
    }

    addCount = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.addCount}>+1</button>
            </div>
        );
    }
}

export default Counter;