import {combineReducers} from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers'
import postSignUpReducer from './postSignupReducers'
import profileReducers from './profileReducers'

export default combineReducers({
  auth:authReducer,
  errors:errorReducer,
  postSignUp:postSignUpReducer,
  postCreatedProfile:profileReducers
})