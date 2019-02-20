import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SelectItem from "./SelectItem";

class Calculator extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }

    render() {
        return (
            <div className="col s12 m12 l12" style={cardStyle}>
                <h6 className=""><b>Расчет по кредиту:</b></h6>
                <form action="#">
                    <div className="row">
                        <div className="input-field">
                            <label htmlFor="prefix">Сумма</label>
                            <br/>
                            <h3>{this.props.sum}</h3>
                        </div>
                        <p  id="prefix" className="range-field col s12">
                            <input
                                type="range"
                                name="sum"
                                value={this.props.sum}
                                min="1000"
                                step={newStep}
                                max="1000000"
                                onChange={event => this.props.setSumData(event.target.value)}/>
                        </p>
                        <div className="input-field col s12 m6">
                            <SelectItem
                                required={true}
                                name="currency"
                                value={this.props.currency}
                                changeHandler={event => this.props.setCurrencyData(event.target.value)}
                                options={[
                                    {value: 'грн', text: "Гривны"},
                                    {value: 'дол', text: "Доллары"},
                                ]}
                            />
                            <label>Валюта</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <SelectItem
                                required={true}
                                name="period"
                                value={this.props.period}
                                changeHandler={event => this.props.setPeriodData(event.target.value)}
                                options={[
                                    {value: 1, text: "1 мес"},
                                    {value: 2, text: "2 мес"},
                                    {value: 3, text: "3 мес"},
                                    {value: 6, text: "6 мес"},
                                    {value: 9, text: "9 мес"},
                                    {value: 12, text: "12 мес"},
                                    {value: 15, text: "15 мес"},
                                    {value: 18, text: "18 мес"},
                                ]}
                            />
                            <label>Срок</label>
                        </div>
                        <Link to="/result">
                            <button className="col s12 btn yellow darken-4" type="submit" name="action">Вычислить</button>
                        </Link>
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