import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import Header from './conponents/Header';
import MainContent from "./conponents/MainContent";

import data from "./data";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            credits: [],
            calculatorData: {
                sum: 10000,
                currency: 'uah',
                period: 30
            }
        };
    }

    componentWillMount() {
        this.setState({credits:data.credits});
    }

    render() {
        return (
            <div>
                <Header />
                <MainContent
                    credits={this.state.credits.items}
                    calculatorData={this.state.calculatorData}
                />
            </div>
        );
    }
}

export default App;

