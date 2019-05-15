import {getErrors} from  './errorActions'
import {PROFILE_CREATED,ISHASPROFILE,REMOVE_MESSAGE_PROFILE,GET_PROFILE} from './types'
import axios from "axios";


  export const submitProfile  = userData=> dispatch => {
    console.log(userData)
    axios
    .post("/api/profiles/submit", userData)
    .then( res => {
      const isHasProfile = true
      localStorage.setItem("isHasProfile",isHasProfile)
      return dispatch(profileCreated(res))
    })
    .catch(err => {
      console.log(err.response)
      return dispatch(getErrors(err))}
      );
  }

  export const profileCreated = (res) => {
    return {
      type:PROFILE_CREATED,
      payload:res.data
    }
  }

  export const hasProfile =(res)=> {
    return {
      type:ISHASPROFILE,
      payload:res
    }
  }

  export const removeMessageCreated = () => {
    return {
      type:REMOVE_MESSAGE_PROFILE
    }
  }


export const fetchCurrentUser = () => dispatch => {
 axios
 .get("/api/profiles/getprofile")
 .then(res => {
  return dispatch(getProfile(res))
 })
 .catch(err => {
  console.log(err.response)}
  );
}



export const getProfile = (res) => { 
    return {
      type:GET_PROFILE,
      payload:res.data
    }
  }