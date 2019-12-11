import React, { Component } from 'react';

class NewCatForm extends Component {
    state = {
        cat: '',
    }

    addCat = (event) => {
        this.props.dispatch({
            type: 'ADD_CAT',
            payload: this.state.cat
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
                    placeholder="Cat's Name"
                    type="text"
                    onChange={(event) => this.changeAnimalField(event, 'cat')}
                    value={this.props.cat}
                />
                <button onClick={this.addCat}>Add Cat</button>
            </div>
        );
    }
}

export default NewCatForm;
