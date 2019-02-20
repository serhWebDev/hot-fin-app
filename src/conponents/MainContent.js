import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import CalculatorContainer from "./CalculatorContainer";

const MainContent = props => (
    <div className="container">
        <CalculatorContainer credits={props.credits} />
    </div>
);

export default MainContent;

