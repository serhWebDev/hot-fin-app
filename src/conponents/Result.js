import React, { Component } from 'react';

class Result extends Component {
    render() {

        let totalSumma = this.props.sum;
        let Rate = this.props.rate;
        let Period = this.props.period;
        let Coefficient = ( Rate / 100 / 12 );
        let payoutAmount = totalSumma * Coefficient * Math.pow(( 1 + Coefficient ), Period )/(Math.pow(( 1 + Coefficient ), Period ) - 1 ) * Period;
        let monthlyPayment = (payoutAmount / Period).toFixed(2);
        let overpayment = (payoutAmount - totalSumma).toFixed(2);
        let CurrencyValue = this.props.currency; /*'₴'*/
        if ( this.props.currency === 'дол' ) {
            let CurrencyValue = this.props.currency; /*'$'*/
        } else {
            let CurrencyValue = this.props.currency; /*'₴'*/
        };

        return (
            <div className="row">
                <div className="col s12 m4 l4 input-field">
                    <label htmlFor="prefix1">Ставка по кредиту:</label>
                    <br/>
                    <h5 id="prefix1"><b>{ Rate }%</b></h5>
                </div>
                <div className="col s12 m4 l4 input-field">
                    <label htmlFor="prefix2">Ежимесячный платеж: </label>
                    <br/>
                    <h5 id="prefix2"><b>{ monthlyPayment }</b></h5>
                </div>
                <div className="col s12 m4 l4 input-field">
                    <label htmlFor="prefix3">Общая переплата:</label>
                    <br/>
                    <h4 id="prefix3"><b>{ overpayment } { CurrencyValue }.</b></h4>
                </div>
            </div>

        );
    }
}

export default Result;

