import React from 'react';

import Rate from './Rate';

import 'materialize-css/dist/css/materialize.min.css';

const Table = props => (
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
        <Rate credits={props.credits} />
        </tbody>
    </table>
);

export default Table;

