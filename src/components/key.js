import React, { Component } from 'react';

// This is a class component of a calculator key
class Key extends Component {
    render() {
        return (
            <button onClick={() => this.props.handleClick(this.props.value)}>
            {this.props.value}
          </button>
        );
    }
}

export default Key;