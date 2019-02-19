import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div className="col s4">
                <h4><b>Result:</b></h4>
                <p>Ставка: { this.props.rate }%</p>
                <p>Срок: { this.props.period } мес</p>
                <p>Коеф: { this.props.rate / 100 / 12 } </p>
                <p>ПСКВ: { (this.props.sum * ( (this.props.rate / 100 / 12) * Math.pow((1 + this.props.rate / 100 / 12), this.props.period)))/((Math.pow((1 + this.props.rate / 100 / 12), this.props.period) - 1) * this.props.sum ) }</p>
                <p>Еж_плат: { this.props.sum / this.props.period }</p>
                <p>Переплата: {( this.props.sum + 5 * ( this.props.sum / this.props.period )) - this.props.sum }</p>
                <p>Валюта: { this.props.currency }</p>
                <p>Период: { this.props.period }</p>
            </div>

        );
    }
}
export default Result;

