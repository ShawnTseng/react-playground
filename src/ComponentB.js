import React, { Component } from 'react';

class ComponentB extends Component {
    render() {
        const { open, toggleOpen } = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>Toggle B</button>
                {open &&　<div>Component B</div>}
            </div>
        );
    }
}

export default ComponentB;