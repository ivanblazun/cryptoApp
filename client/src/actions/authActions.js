import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./types";

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('/api/auth')

    dispatch({
      type: USER_LOADED,
      payload: res.data,

    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Register user
export const registerUser = (user) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`/api/users`, user, config)
    const data = await res.data

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    })
    dispatch(loadUser())

  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    })
  }
}

// Login user
export const loginUser = (user) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`/api/auth`, user, config)
    const data = await res.data

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
    dispatch(loadUser())

  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    })
  }
}

// Logout
export const logout = () => async dispatch =>
  dispatch({
    type: LOGOUT
  })

// Clear errors
export const clearErrors = () => { console.log('clearerrors') }