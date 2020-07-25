import React, { Component } from 'react';

const withOpen = (WrappedComponent) => {
    return class extends Component {
        state = {
            isShow: true,
        }

        toggle = () => {
            this.setState({
                isShow: !this.state.isShow,
            })
        }
        
        render(h) {
            return <WrappedComponent open={this.state.isShow} toggleOpen={this.toggle} {...this.props} />
        }
    }
}

export default withOpen;