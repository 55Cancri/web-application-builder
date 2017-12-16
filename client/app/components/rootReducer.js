import { combineReducers } from 'redux'

import user from '../scenes/Sign/userReducer'

/*
reducer is function that takes state and returns new state.
*/

export default combineReducers({
  user
})