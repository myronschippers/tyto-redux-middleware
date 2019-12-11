import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class NewDogForm extends Component {
    state = {
        dog: '',
    }

    addDog = (event) => {
        this.props.dispatch({
            type: 'ADD_DOG',
            payload: this.state.dog
        })
    }

    changeAnimalField = (event, animal) => {
        this.setState({
            [animal]: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <input
                    className="field"
                    placeholder="Dog's Name"
                    type="text"
                    onChange={(event) => this.changeAnimalField(event, 'dog')}
                    value={this.state.dog}
                />
                <button className="btn" onClick={this.addDog}>Add Dog</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(NewDogForm);
