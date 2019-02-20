import React from "react";

const SelectItem = props => (
    <select
        required={props.required}
        name={props.name}
        value={props.period}
        onChange={props.changeHandler}
    >
        {props.options && props.options.map(option =>
                <option value={option.value}>{option.text}</option>
        )}
    </select>
);

export default SelectItem;