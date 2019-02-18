import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";

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
            credits: []/*,
            calculatorData: {
                sum: 10000,
                currency: 'uah',
                period: 30
            }*/
        };
    }

    componentWillMount() {
        this.setState({credits:data.credits});
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <MainContent
                        credits={this.state.credits.items}
                        /*calculatorData={this.state.calculatorData}*/
                    />
                </div>
            </Provider>
        );
    }
}

export default App;

