import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BasicItem from '../BasicItem/BasicItem';

class BasicList extends Component {
    render() {
        const listOfElements = this.props.list.map((item, index) => {
            return <BasicItem key={index} item={item} index={index} />
        });

        return (
            <div>
                <h2>{this.props.heading}</h2>
                <ul>
                    {/* RENDER LIST OF ELEMENTS */}
                    {listOfElements}
                </ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(BasicList);
