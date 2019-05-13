import {SIGNUP,RESET_CREATED} from '../actions/types'
import isEmpty from '../validation/isEmp'

const initialState ={
  created:false
}
const reducer = (state = initialState,action) => {
  switch(action.type){
    case SIGNUP:
    return {
      ...state,
      created: !isEmpty(action.payload)
    }
    case RESET_CREATED:
    return {
      ...state,
      created:false
    }
    default:
    return state
  }
}




export default  reducer