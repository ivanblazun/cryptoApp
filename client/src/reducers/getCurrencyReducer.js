import {
  GET_CURRENCY,
  CURRENCY_ERROR,
  ADD_CURRENCY,
  SELL_CURRENCY,
  BUY_CURRENCY
} from "../actions/types";
import uuid from "uuid"

const initialState = {
  currencys: [
  ],
  error: null,
  filtered: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        currencys: action.payload
      }
    case ADD_CURRENCY:
      return {
        ...state,
        currencys: [...state.currencys, action.payload]
      }
    case SELL_CURRENCY:
      return {
        ...state,
        currencys: [...state.currencys.filter((c) => c._id !== action.payload)]
      }
    case BUY_CURRENCY:

      return {
        ...state,
        currencys: [...state.currencys.map((c) => c._id === action.payload._id ?
          c = action.payload : c)]
      }
    case CURRENCY_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}