import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BasicList from '../BasicList/BasicList';
import NewCatForm from '../NewCatForm/NewCatForm';
import NewDogForm from '../NewDogForm/NewDogForm';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Redux Introduction</h1>
                </header>

                <NewCatForm />
                <NewDogForm />

                <BasicList list={this.props.store.dogReducer} heading="Dog List" />
                <BasicList list={this.props.store.catReducer} heading="Cat List" />
            </div>
        );
    }
}

// currying
export default connect(mapStoreToProps)(App);
