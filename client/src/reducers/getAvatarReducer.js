import {
  GET_AVATAR,
  UPLOAD_AVATAR,
  REMOVE_AVATAR
} from '../actions/types'

const initialState = {
  avatar: null,
  gotAvarat: false,
  // error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }

  }
}