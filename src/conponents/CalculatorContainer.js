import React, { Component } from 'react';
import {connect} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setRate, setSumData, setCurrencyData, setPeriodData } from '../store/calculator/actions';

import Calculator from './Calculator';
import Table from "./Table";
import Result from './Result';


class CalculatorContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="card">
                        <Calculator
                            setRate = {this.props.setRate}
                            setSumData = {this.props.setSumData}
                            setCurrencyData = {this.props.setCurrencyData}
                            setPeriodData = {this.props.setPeriodData}
                            rate = {this.props.rate}
                            sum = {this.props.sum}
                            currency = {this.props.currency}
                            period = {this.props.period}
                        />
                        <Route exact path="/"
                               render={props => (
                                   <React.Fragment>
                                       <Table
                                           credits={this.props.credits}
                                       />
                                   </React.Fragment>
                               )} />
                        <Route exact path="/result"
                               render={props => (
                                   <React.Fragment>
                                       <Result
                                           rate = {this.props.rate}
                                           sum = {this.props.sum}
                                           currency = {this.props.currency}
                                           period = {this.props.period}
                                       />
                                   </React.Fragment>
                               )}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateProps = state => {
    return {
        rate: state.calculator.rate,
        sum: state.calculator.sum,
        currency: state.calculator.currency,
        period: state.calculator.period
    };
};

const mapDispatchProps = {
    setRate,
    setSumData,
    setCurrencyData,
    setPeriodData
};

export default connect(mapStateProps, mapDispatchProps)(CalculatorContainer);

