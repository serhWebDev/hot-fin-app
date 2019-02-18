import React, { Component } from 'react';
import Calculator from './Calculator';
import {connect} from "react-redux";

import { setSumData, setCurrencyData, setPeriodData } from '../store/calculator/actions';

class CalculatorContainer extends Component {
    render() {
        return (
            <Calculator
                setSumData = {this.props.setSumData}
                setCurrencyData = {this.props.setCurrencyData}
                setPeriodData = {this.props.setPeriodData}
                sum = {this.props.sum}
                currency = {this.props.currency}
                period = {this.props.period}
            />
        );
    }
}

const mapStateProps = state => {
    return {
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

