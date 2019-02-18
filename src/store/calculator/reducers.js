import {
    GET_CURRENCY_DATA_FROM_CALCULATOR,
    GET_PERIOD_DATA_SUM_FROM_CALCULATOR,
    GET_SUM_DATA_FROM_CALCULATOR
} from "./actions";

const defaultState = {
    sum: 1000,
    currency: 'uah',
    period: 7
};

export const calculatorReducer = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
        case  GET_SUM_DATA_FROM_CALCULATOR:
            return {
                ...state,
                sum: action.payload
            };
        case  GET_CURRENCY_DATA_FROM_CALCULATOR:
            return {
                ...state,
                currency: action.payload
            };
        case  GET_PERIOD_DATA_SUM_FROM_CALCULATOR:
            return {
                ...state,
                period: action.payload
            };
    }
    return state;
};
