import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import CalculatorContainer from "./CalculatorContainer";
import Table from "./Table";

class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <CalculatorContainer />
                <Table
                    credits={this.props.credits}
                />
            </div>
        );
    }
}

export default MainContent;

