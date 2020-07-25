import React, { Component } from 'react';

class ComponentA extends Component {
    render() {
        const { open, toggleOpen } = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>Toggle A</button>
                {open &&　<div>Component A</div>}
            </div>
        );
    }
}

export default ComponentA;