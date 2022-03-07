import { GET_COINS, COINS_ERROR, ADD_COIN } from "./types";
import axios from "axios";

export const getCoins = () => async dispatch => {
  try {
    const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cdogecoin%2Cstellar%2Cmonero%2Ctether%2Cbinancecoin&vs_currencies=eur")
    const data = await res.data

    const all = Object.entries(data)

    dispatch({
      type: GET_COINS,
      payload: all
    })
  } catch (err) {
    dispatch({
      type: COINS_ERROR,
      payload: err.response.data
    })
  }
}

export const addCoin = (addedCoin) => async dispatch => {
  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${addedCoin}&vs_currencies=eur`)
    const data = await res.data

    const all = Object.entries(data)

    console.log(all);

    dispatch({
      type: ADD_COIN,
      payload: all
    })
  } catch (err) {
    dispatch({
      type: COINS_ERROR,
      payload: err.response.data
    })
  }
}