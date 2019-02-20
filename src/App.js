import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';

import Header from './conponents/Header';
import MainContent from "./conponents/MainContent";

import data from "./data";

import rootReducer from './store/reducers';

const store = createStore(rootReducer);


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            credits: []
        };
    }

    componentWillMount() {
        this.setState({credits:data.credits});
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <MainContent
                            credits={this.state.credits.items}
                        />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

