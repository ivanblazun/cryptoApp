import { GET_COINS, COINS_ERROR, ADD_COIN } from "../actions/types";

const initialState = {
  coins: [],
  selected: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coins: action.payload
      }
    case ADD_COIN:
      return {
        ...state,
        // coins: [...state.coins, action.payload]
        coins: state.coins.concat(action.payload)
      }
    case COINS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}