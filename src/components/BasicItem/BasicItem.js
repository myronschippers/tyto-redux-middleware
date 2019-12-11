import React, { Component } from 'react';

class BasicItem extends Component {
    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}

export default BasicItem;
