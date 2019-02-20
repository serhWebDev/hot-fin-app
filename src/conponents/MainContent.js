import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import CalculatorContainer from "./CalculatorContainer";

class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <CalculatorContainer credits={this.props.credits} />
            </div>
        );
    }
}

export default MainContent;

