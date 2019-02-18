import {
    GET_CURRENCY_DATA_FROM_CALCULATOR,
    GET_PERIOD_DATA_SUM_FROM_CALCULATOR,
    GET_SUM_DATA_FROM_CALCULATOR
} from "./actions";

let lastSumData = JSON.parse(localStorage.getItem('sumData'));
let lastCurrencyData = JSON.parse(localStorage.getItem('currencyData'));
let lastPeriodData = JSON.parse(localStorage.getItem('periodData'));

const defaultState = {
    sum: 1000,
    currency: 'uah',
    period: 7
};

let localStorageDefaultState = {
    sum: lastSumData,
    currency: lastCurrencyData,
    period: lastPeriodData
};

if ( localStorageDefaultState.sum === null ) {
    console.log(defaultState.sum);
    localStorage.setItem('sumData', defaultState.sum);
    console.log(JSON.parse(localStorage.getItem('sumData')));
}
if ( localStorageDefaultState.currency === null ) {
    console.log(defaultState.currency);
    localStorage.setItem('currencyData', defaultState.currency);
    console.log(JSON.parse(localStorage.getItem('currencyData')));
}
if ( localStorageDefaultState.period === null ) {
    console.log(defaultState.period);
    localStorage.setItem('periodData', defaultState.period);
    console.log(JSON.parse(localStorage.getItem('periodData')));
}

console.log(lastSumData);
console.log(lastCurrencyData);
console.log(lastPeriodData);
console.log(localStorageDefaultState);

export const calculatorReducer = (state = localStorageDefaultState, action) => {
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
