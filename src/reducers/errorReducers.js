import {GET_ERRORS,RESET_ERRROS} from '../actions/types'
const initialState ={}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case GET_ERRORS:
    return action.payload
    case RESET_ERRROS:
    return action.payload
    default:
    return state
  }
}



export default  reducer

