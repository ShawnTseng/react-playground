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

Counter.defaultProps = {
    initCount: 0
}

Counter.propTypes = {
    initCount: PropTypes.number
}

export default Counter;