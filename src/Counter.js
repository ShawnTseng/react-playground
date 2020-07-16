import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
    // static defaultProps = { initCount: 0 }

    constructor(props) {
        super(props);
        this.state = ({
            count: props.initCount
        })
    }

    addCount = () => {
        this.setState(state => ({
            count: state.count + 1,
        }));
        this.setState(state => ({
            count: state.count + 1,
        }));
        this.setState(state => ({
            count: state.count + 1,
        }), () => {
            // Callback function, make sure we get correct value.
            console.log(this.state.count);
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

Counter.defaultProps = {
    initCount: 0
}

Counter.propTypes = {
    initCount: PropTypes.number
}

export default Counter;