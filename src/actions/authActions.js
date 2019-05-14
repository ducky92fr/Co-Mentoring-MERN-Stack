import {getErrors} from  './errorActions'
import {signUpSucces} from './postSignUp'
import {SET_CURRENT_USER} from './types'
import axios from "axios";
import setAuthToken from '../utils/setHeaders'
import jwt_decode from 'jwt-decode'
import {resetCreated} from './postSignUp'
// Register 
export const registerUser = userData=> dispatch => {
  axios
  .post("/api/users/signup", userData)
  .then( res => {
    console.log(res.data)
    return dispatch(signUpSucces(res))})
  .catch(err => {
    console.log(err.response)
    return dispatch(getErrors(err))}
    );
}

//Login - Token

export const loginUser = (userData,history) => dispatch => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
      //localStorage
      const {token} = res.data
      localStorage.setItem("jwtToken",token)
      //set token to header for auth each request
      setAuthToken(token)
      //Decode token
      const decoded = jwt_decode(token)
      // Current user
      dispatch(setCurrentUser(decoded))
      dispatch(resetCreated())
      history.replace("/user")})
      .catch(err => {
        console.log(err.response.data.errors) 
       return dispatch(getErrors(err))
      })
    }



    //Set Logged in user

    export const setCurrentUser = decoded => {
      return {
        type:SET_CURRENT_USER,
        payload:decoded
      }
    }


    //logout
    export const logoutUser = () => dispatch => {
      localStorage.removeItem('jwtToken')
      setAuthToken(false);
      dispatch(setCurrentUser({}))
    }


