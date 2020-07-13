import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
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