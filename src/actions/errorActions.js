import {GET_ERRORS, RESET_ERRROS} from './types'

// Register 
export const getErrors = (err) => {
  return {
    type:GET_ERRORS,
    payload:err.response.data.errors
  }
}

export const resetError = () => {
  return {
    type:RESET_ERRROS,
    payload:{}
  }
}