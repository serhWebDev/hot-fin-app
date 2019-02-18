import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

let newStep = 1000;

class Calculator extends Component {

    sumChangeHandler(suma) {
        console.log('Summ is: ' + suma);
    }

    currChangeHandler(curr) {
        console.log('Curr is: ' + curr);
    }

    timeChangeHandler(time) {
        console.log('Now is: ' + time);
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
                        <p className="range-field col s12">
                            <label>Сумма</label>
                            <h3>{this.state.calculatorData.sum}</h3>
                            <input
                                type="range"
                                id="test5"
                                min="1000"
                                step={newStep}
                                max="1000000"
                                onChange={(event) => this.sumChangeHandler(event.target.value)}
                            />
                        </p>
                        <div className="input-field col s12 m6">
                            <select
                                required
                                name="currency"
                                onChange={(event) => this.currChangeHandler(event.target.value)}
                            >
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
                                onChange={(event) => this.timeChangeHandler(event.target.value)}
                            >
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

const cardStyle = {
    padding: '10px 20px'
};

export default Calculator;

