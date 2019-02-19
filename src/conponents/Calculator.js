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
        this.props.setSumData(event.target.value);
    }

    currChangeHandler( event ) {
        this.props.setCurrencyData(event.target.value);
    }

    timeChangeHandler( event ) {
        this.props.setPeriodData(event.target.value);
    }

    render() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        return (
            <div className="col s8" style={cardStyle}>
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
                                <option value="1">1 мес</option>
                                <option value="2">2 мес</option>
                                <option value="3">3 мес</option>
                                <option value="6">6 мес</option>
                                <option value="9">9 мес</option>
                                <option value="12">12 мес</option>
                                <option value="15">15 мес</option>
                                <option value="18">18 мес</option>
                            </select>
                            <label>Срок</label>
                        </div>
                        <button className="col s12 btn yellow darken-4" type="submit" name="action">Вычислить</button>
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