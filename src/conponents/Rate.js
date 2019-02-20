import React, { Component } from 'react';

class Rate extends Component {
    render() {
        return this.props.credits.map(( el, id) => {
            return (
                <tr key={el.id}>
                    <td>{el.cRete}%</td>
                    <td>{el.currency}</td>
                    <td>{el.sumFrom} - {el.sumTo}</td>
                    <td>{el.periodFrom} - {el.periodTo}</td>
                </tr>
            );
        });
    }
}

export default Rate;