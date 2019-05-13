import {combineReducers} from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers'
import postSignUpReducer from './postSignupReducers'

export default combineReducers({
  auth:authReducer,
  errors:errorReducer,
  postSignUp:postSignUpReducer
})