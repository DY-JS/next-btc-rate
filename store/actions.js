export const SET_RATES = 'SET_RATES';
export const SET_SELECTED_RATE = 'SET_SELECTED_RATE';

export function setAllRates(rates) {
  return {
    type: SET_RATES,
    rates,
  };
}

export function setSelectedRate(code) {
  return {
    type: SET_SELECTED_RATE,
    code,
  };
}
