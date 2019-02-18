import React, { Component } from 'react'

import Rate from './Rate';

import 'materialize-css/dist/css/materialize.min.css';

class Table extends Component {
    render() {
        return (
            <table className='highlight centered'>
                <thead>
                <tr>
                    <th>Размер ставки</th>
                    <th>Валюта</th>
                    <th>Сума от, до</th>
                    <th>Срок от, до</th>
                </tr>
                </thead>
                <tbody>
                <Rate credits={this.props.credits} />
                </tbody>
            </table>
        );
    }
}

export default Table;

