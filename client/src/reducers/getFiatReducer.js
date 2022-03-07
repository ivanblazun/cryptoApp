import {
  GET_FIAT,
  FIAT_ERROR,
  BUY_FIAT,
  UPDATE_FIAT,
  DELETE_FIAT
} from "../actions/types";


const initialState = {
  fiat: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FIAT:
      return {
        ...state,
        fiat: action.payload
      }
    case BUY_FIAT:
      return {
        ...state,
        fiat: [...state.fiat.map((f) => f.id === action.payload.id ? f = action.payload : f)]
      }
    case UPDATE_FIAT:
      return {
        ...state,
        fiat: [...state.fiat.map((f) => f._id === action.payload._id ? f = action.payload : f)]
      }
    case DELETE_FIAT:
      return {
        ...state,
        fiat: [...state.fiat.filter((f) => f.id === action.payload)]
      }
    default:
      return state;
  }
}