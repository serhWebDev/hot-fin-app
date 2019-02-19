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
        let CurrencyValue = `₴`;
        if ( this.props.currency === 'uah' ) {
            let CurrencyValue = `₴`;
        } else {
            let CurrencyValue = `$`;
        }

        return (
            <div className="col s12 m4 l6" style={styleResult}>
                <div className="row">
                    <div className="col s12 m6 input-field">
                        <label htmlFor="icon_prefix1">Ставка по кредиту:</label>
                        <br/>
                        <h5 id="icon_prefix1"><b>{ Rate }%</b></h5>
                    </div>
                    <div className="col s12 m6 input-field">
                        <label htmlFor="icon_prefix2">Ежимесячный платеж: </label>
                        <br/>
                        <h5 id="icon_prefix2"><b>{ monthlyPayment }</b></h5>
                    </div>
                    <div className="col s12 m12 input-field">
                        <label htmlFor="icon_prefix3">Переплата:</label>
                        <br/>
                        <h5 id="icon_prefix3"><b>{ overpayment } { CurrencyValue }</b></h5>
                    </div>
                </div>
            </div>

        );
    }
}

const styleResult = {
    border: '3px solid blue',
    borderRadius: '10px'
};

export default Result;

