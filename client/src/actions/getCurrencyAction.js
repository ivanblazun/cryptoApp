import {
  GET_CURRENCY,
  CURRENCY_ERROR,
  ADD_CURRENCY,
  SELL_CURRENCY,
  BUY_CURRENCY,
  FILTER_CURRENCY
} from "./types";

import axios from "axios";

export const getCurrencys = () => async dispatch => {

  try {

    const res = await axios.get(`/api/wallet`)
    const data = await res.data

    dispatch({
      type: GET_CURRENCY,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: CURRENCY_ERROR,
      payload: err.response.data
    })
  }
}

export const addCurrency = (curr) => async dispatch => {

  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
  }
  try {
    axios.post('/api/wallet', curr, { config })

    dispatch({
      type: ADD_CURRENCY,
      payload: curr
    })
  } catch (err) {
    dispatch({
      type: CURRENCY_ERROR,
      payload: err.response.data
    })
  }
};

export const sellCurrency = (id) => async dispatch => {
  await axios.delete(`/api/wallet/${id}`)

  try {
    dispatch({
      type: SELL_CURRENCY,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: CURRENCY_ERROR,
      payload: err.response.data
    })
  }
}

export const buyCurrency = (newCurrVal) => async dispatch => {

  const res = await axios.put(`/api/wallet/${newCurrVal.id}`, newCurrVal)

  try {
    dispatch({
      type: BUY_CURRENCY,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: CURRENCY_ERROR,
      payload: err.response.data
    })
  }
}

export const filterCurrency = (text) => async dispatch => {
  try {
    dispatch({
      type: FILTER_CURRENCY,
      payload: text
    })
  } catch (err) {
    dispatch({
      type: CURRENCY_ERROR,
      payload: err.response.data
    })
  }
}

