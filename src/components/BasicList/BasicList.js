import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BasicItem from '../BasicItem/BasicItem';

class BasicList extends Component {
    render() {
        let listOfElements = this.props.list.map((item, index) => {
            return <BasicItem key={index} item={item} index={index} />
        });

        if (listOfElements.length === 0) {
            listOfElements.push(<BasicItem key={0} item="No animals available at this time." index={0} />);
        }

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
