export const GET_RATE_DATA_FROM_CALCULATOR = 'GET_RATE_DATA_FROM_CALCULATOR';
export const GET_SUM_DATA_FROM_CALCULATOR = 'GET_SUM_DATA_FROM_CALCULATOR';
export const GET_CURRENCY_DATA_FROM_CALCULATOR = 'GET_CURRENCY_DATA_FROM_CALCULATOR';
export const GET_PERIOD_DATA_FROM_CALCULATOR = 'GET_PERIOD_DATA_FROM_CALCULATOR';

export const setRate = rateData =>({
    type: GET_RATE_DATA_FROM_CALCULATOR,
    payload: rateData
});
export const setSumData = sumData =>({
    type: GET_SUM_DATA_FROM_CALCULATOR,
    payload: sumData
});
export const setCurrencyData = currencyData =>({
    type: GET_CURRENCY_DATA_FROM_CALCULATOR,
    payload: currencyData
});
export const setPeriodData = periodData =>({
    type: GET_PERIOD_DATA_FROM_CALCULATOR,
    payload: periodData
});

export const getStorageData = () => JSON.parse(window.localStorage.getItem('savedData'));
export const setStorageData = data => window.localStorage.setItem('savedData', JSON.stringify(data));