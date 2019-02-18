import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';



class Calculator extends Component {
    constructor( props ) {
        super ( props );
        this.sumChangeHandler = this.sumChangeHandler.bind(this);
        this.currChangeHandler = this.currChangeHandler.bind(this);
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
    }

    sumChangeHandler( event ) {
        /*console.log('Summ is: ' + event.target.value);*/
        this.props.setSumData(event.target.value)
    }

    currChangeHandler( event ) {
        /*console.log('Curr is: ' + event.target.value);*/
        this.props.setCurrencyData(event.target.value)
    }

    timeChangeHandler( event ) {
        /*console.log('Now is: ' + event.target.value);*/
        this.props.setPeriodData(event.target.value)
    }

    render() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        return (
            <div className="card" style={cardStyle}>
                <h6 className=""><b>Расчет по кредиту:</b></h6>
                <form action="#">
                    <div className="row">
                        <label>Сумма</label>
                        <h3>{this.props.sum}</h3>
                        <p className="range-field col s12">
                            <input
                                type="range"
                                name="sum"
                                value={this.props.sum}
                                min="1000"
                                step={newStep}
                                max="1000000"
                                onChange={this.sumChangeHandler}/>
                        </p>
                        <div className="input-field col s12 m6">
                            <select
                                required
                                name="currency"
                                value={this.props.currency}
                                onChange={this.currChangeHandler}>
                                <option value="uah">Гривны</option>
                                <option value="usd">Доллары</option>
                                <option value="eur">Евро</option>
                            </select>
                            <label>Валюта</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <select
                                required
                                name="period"
                                value={this.props.period}
                                onChange={this.timeChangeHandler}>
                                <option value="7">7 дней</option>
                                <option value="30">1 мес</option>
                                <option value="60">2 мес</option>
                                <option value="90">3 мес</option>
                                <option value="180">6 мес</option>
                            </select>
                            <label>Срок</label>
                        </div>
                        <button className="col s12 btn yellow darken-4" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const newStep = 1000;
const cardStyle = {
    padding: '10px 20px'
};

export default Calculator;

