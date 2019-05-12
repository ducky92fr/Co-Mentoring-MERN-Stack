import {getErrors} from  './errorActions'
import axios from "axios";

// Register 
export const registerUser = userData => dispatch => {
  axios
  .post("/api/users/signup", userData)
  .then( res => console.log(res.data))
  .catch(err => {
    return dispatch(getErrors(err))}
    );

}