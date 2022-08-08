import { SET_RATES, SET_SELECTED_RATE } from '../actions';

const initialState = {
  allRates: [],
  selectedRate: {},
};

const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATES:
      return {
        ...state,
        allRates: action.rates,
      };
    case SET_SELECTED_RATE:
      return {
        ...state,
        selectedRate: state.allRates.find((rate) => rate.code === action.code),
      };
    default:
      return state;
  }
};

export default rateReducer;
