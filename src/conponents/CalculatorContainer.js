import React, { Component } from 'react';
import {connect} from "react-redux";

import Calculator from './Calculator';
import Result from './Result';

import { setSumData, setCurrencyData, setPeriodData } from '../store/calculator/actions';

class CalculatorContainer extends Component {
    render() {
        return (
            <div className="row card valign-wrapper">
                <Calculator
                    setSumData = {this.props.setSumData}
                    setCurrencyData = {this.props.setCurrencyData}
                    setPeriodData = {this.props.setPeriodData}
                    sum = {this.props.sum}
                    currency = {this.props.currency}
                    period = {this.props.period}
                />
                <Result
                    rate = {this.props.rate}
                    sum = {this.props.sum}
                    currency = {this.props.currency}
                    period = {this.props.period}
                />
            </div>

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
    setSumData,
    setCurrencyData,
    setPeriodData
};

export default connect(mapStateProps, mapDispatchProps)(CalculatorContainer);

