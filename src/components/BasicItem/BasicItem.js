import React, { Component } from 'react';

class BasicItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item}</td>
                <td>Something</td>
            </tr>
        );
    }
}

export default BasicItem;
