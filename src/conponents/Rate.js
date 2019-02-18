import React, { Component } from 'react';

class Rate extends Component {
    render() {
        return this.props.credits.map((el,id)=>{
            console.table(el);
            return (
                <tr>
                    <td>{el.uah}%</td>
                    <td>UAH</td>
                    <td>{el.sumFrom} - {el.sumTo}</td>
                    <td>0 - {el.period}</td>
                </tr>
            );
        });
    }
}

export default Rate;