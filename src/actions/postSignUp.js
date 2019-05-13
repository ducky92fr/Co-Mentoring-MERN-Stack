import {SIGNUP,RESET_CREATED} from './types'


  export const signUpSucces = (res) => {
    return {
      type:SIGNUP,
      payload: res.data
    }
  }

  //reset created
  export const resetCreated = () => {
    return {
      type:RESET_CREATED,
      payload:{}
    }
  }