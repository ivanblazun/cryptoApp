import {
  GET_PROFILE,
  ADD_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  PROFILE_ERROR
} from './types'

import axios from 'axios'

export const getProfile = () => async dispatch => {
  try {
    const res = await axios.get(`/api/profile`)
    const data = await res.data

    dispatch({
      type: GET_PROFILE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data
    })
  }
};

export const createProfile = (createdProfile) => async dispatch => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
  }

  try {
    const res = await axios.post(`/api/profile`, createdProfile, { config })
    const data = await res.data
    dispatch({
      type: ADD_PROFILE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data
    })
  }
};


export const updateProfile = (updatedProfile) => async dispatch => {
  try {
    // const res = await axios.get(`/api/wallet`)
    // const data = await res.data
    dispatch({
      type: UPDATE_PROFILE,
      payload: updatedProfile
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data
    })
  }
};

const deleteProfile = () => {

};