import {
    GET_CURRENCY_DATA_FROM_CALCULATOR,
    GET_PERIOD_DATA_SUM_FROM_CALCULATOR,
    GET_SUM_DATA_FROM_CALCULATOR,
    getStorageData,
    setStorageData
} from "./actions";

const defaultState = {
    rate: 2.5,
    sum: 1000,
    currency: 'грн',
    period: 1
};

export const calculatorReducer = (state = getStorageData() || defaultState, action) => {
    switch (action.type) {
        case  GET_SUM_DATA_FROM_CALCULATOR:
            state = {
                ...state,
                sum: action.payload
            };
            setStorageData(state);
            return state;
        case  GET_CURRENCY_DATA_FROM_CALCULATOR:
            state = {
                ...state,
                currency: action.payload
            };
            setStorageData(state);
            return state;
        case  GET_PERIOD_DATA_SUM_FROM_CALCULATOR:
            state = {
                ...state,
                period: action.payload
            };
            setStorageData(state);
            return state;
        default:
            return state;
    }
};