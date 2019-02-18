import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import Calculator from "./Calculator";
import Table from "./Table";

class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <Calculator
                    calculatorData={this.props.calculatorData}
                />
                <Table
                    credits={this.props.credits}
                />
            </div>
        );
    }
}

export default MainContent;

