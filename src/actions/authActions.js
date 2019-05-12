import {getErrors} from  './errorActions'
import axios from "axios";

// Register 
export const registerUser = (userData,history)=> dispatch => {
  axios
  .post("/api/users/signup", userData)
  .then( res => {
    console.log(res.data)
    console.log(history)
    return  history.push("/")})
  .catch(err => {
    console.log(err.response)
    return dispatch(getErrors(err))}
    );

}