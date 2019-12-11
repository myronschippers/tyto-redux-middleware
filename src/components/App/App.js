import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './App.css';

// CONTENT COMPONENTS
import BasicList from '../BasicList/BasicList';
import NewCatForm from '../NewCatForm/NewCatForm';
import NewDogForm from '../NewDogForm/NewDogForm';

class App extends Component {
    render() {
        return (
            <div>
                <header className="appBar">
                    <h1>Redux Introduction</h1>
                </header>

                <div className="container">
                    <div className="blocks">
                        <div>
                            <NewCatForm />
                        </div>
                        <div>
                            <NewDogForm />
                        </div>
                    </div>

                    <BasicList list={this.props.store.dogReducer} heading="Dog List" />
                    <BasicList list={this.props.store.catReducer} heading="Cat List" />
                </div>
            </div>
        );
    }
}

// currying
export default connect(mapStoreToProps)(App);
