import {
  GET_PROFILE,
  ADD_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  PROFILE_ERROR
} from '../actions/types'

const initialState = {
  profile: {
    // _id: 1,
    // firstName: 'lovro',
    // surName: 'Blazun',
    // mobilePhone: 11112222,
    // adress: 'a.s',
    // city: 'Zagreb',
    // state: 'Hrvatska',
    // date: '2022-02-11T21:38:41.061Z'
  },
  error: null,
  gotProfile: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:

      if (action.payload === []) {
        return {
          ...state,
          profile: action.payload
        }
      }

    case ADD_PROFILE:
      if (state.gotProfile === false) {
        return {
          ...state,
          profile: action.payload,
          gotProfile: true
        }
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state
  }
}