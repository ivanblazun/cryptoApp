import {
  GET_FIAT,
  FIAT_ERROR,
  BUY_FIAT,
  UPDATE_FIAT,
  DELETE_FIAT
} from "./types";

import axios from "axios";

export const getFiat = () => async dispatch => {

  try {
    const res = await axios.get(`/api/fiat`)
    const data = await res.data

    dispatch({
      type: GET_FIAT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FIAT_ERROR,
      payload: err.response.data
    })
  }
}

export const buyFiat = (newFiatVal) => async dispatch => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
  }


  const res = await axios.post('/api/fiat/', newFiatVal, { config })
  const data = res.data
  try {

    dispatch({
      type: BUY_FIAT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FIAT_ERROR,
      payload: err.response.data
    })
  }
}

export const updateFiat = (updFiatVal) => async dispatch => {
  const token = localStorage.getItem('token');

  const res = await axios.put(`/api/fiat/${updFiatVal.id}`, updFiatVal)
  const data = await res.data
  try {

    dispatch({
      type: UPDATE_FIAT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FIAT_ERROR,
      payload: err.response.data
    })
  }
}

export const deleteFiat = (id) => async dispatch => {
  await axios.delete(`/api/fiat/${id}`)
  try {
    dispatch({
      type: DELETE_FIAT,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: FIAT_ERROR,
      payload: err.response.data
    })
  }
}


