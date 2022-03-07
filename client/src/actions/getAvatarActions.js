import {
  GET_AVATAR,
  UPLOAD_AVATAR,
  REMOVE_AVATAR,
  AVATAR_ERROR
} from './types'

import axios from 'axios'

// get avatar
export const getAvatar = () => async dispatch => {

  const data = 'img.string'

  try {
    dispatch({
      type: GET_AVATAR,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: AVATAR_ERROR,
      payload: err.response.data
    })
  }
}

// upload avatar
export const uploadAvatar = () => async dispatch => {

  const data = 'img.string'

  try {
    dispatch({
      type: UPLOAD_AVATAR,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: AVATAR_ERROR,
      payload: err.response.data
    })
  }
}

// remove avatar
export const removeAvatar = (id) => async dispatch => {
  try {
    dispatch({
      type: REMOVE_AVATAR,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: AVATAR_ERROR,
      payload: err.response.data
    })
  }
}