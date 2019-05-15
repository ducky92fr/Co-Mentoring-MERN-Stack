import {getErrors} from  './errorActions'
import {PROFILE_CREATED,ISHASPROFILE,REMOVE_MESSAGE_PROFILE,GET_PROFILE,RESET_STATE_PROFILE} from './types'
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
  if(res.status === 201){
    return dispatch(getProfile(res))
  }else {
    return null
  }
 }) 
 .catch(err => {
   console.log(err.response)
  console.log("HELLO BABY")}
  );
}



export const getProfile = (res) => { 
    return {
      type:GET_PROFILE,
      payload:res.data
    }
  }

export const resetProfileState =()=> {
  return {
    type: RESET_STATE_PROFILE
  }
}